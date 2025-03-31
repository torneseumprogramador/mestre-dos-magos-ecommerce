import Image from 'next/image'
import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'

interface ProductCardProps {
  id: string
  name: string
  price: number
  imageUrl: string
  description: string
}

export default function ProductCard({ id, name, price, imageUrl, description }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem({ id, name, price, imageUrl, description })
    
    // Feedback visual
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative bg-background/80 rounded-lg overflow-hidden
        transform transition-all duration-300
        ${isHovered ? 'scale-105 shadow-magic' : 'shadow-lg'}
      `}>
        {/* Efeito de brilho */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-primary-cyan/20
          ${isHovered ? 'animate-glow' : ''}
        `} />

        {/* Imagem do Produto */}
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Informações do Produto */}
        <div className="p-4">
          <h3 className="text-primary-yellow text-lg font-bold mb-2">{name}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-primary-cyan font-bold text-xl">
              R$ {price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`
                px-4 py-2 rounded-lg
                ${isAdding ? 'bg-secondary-yellow' : 'bg-primary-yellow hover:bg-secondary-yellow'}
                text-background font-bold
                transform transition-all duration-200
                hover:scale-105 hover:shadow-neon
                active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {isAdding ? 'Adicionado!' : 'Adicionar'}
            </button>
          </div>
        </div>

        {/* Efeito de estrelas */}
        {isHovered && (
          <>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-yellow rounded-full animate-ping" />
            <div className="absolute top-2 -left-1 w-2 h-2 bg-primary-cyan rounded-full animate-ping delay-100" />
            <div className="absolute -bottom-1 right-2 w-2 h-2 bg-primary-purple rounded-full animate-ping delay-200" />
          </>
        )}
      </div>
    </div>
  )
} 