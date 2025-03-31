import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems)

  return (
    <header className="bg-background p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo e Título */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-12 h-12">
            <Image
              src="/images/logo.png"
              alt="Mago"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primary-yellow text-2xl font-bold">TEMPLO</span>
            <span className="text-primary-cyan text-xl font-bold">DOS MAGOS</span>
          </div>
        </Link>

        {/* Barra de Pesquisa */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos mágicos..."
              className="w-full px-4 py-2 rounded-lg bg-secondary-purple/20 text-white placeholder-gray-400 border border-primary-purple focus:outline-none focus:ring-2 focus:ring-primary-cyan"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Ícones */}
        <div className="flex items-center space-x-6">
          {/* Ícone de Usuário */}
          <button className="text-primary-cyan hover:text-secondary-cyan transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          {/* Ícone de Carrinho */}
          <Link href="/carrinho" className="relative text-primary-cyan hover:text-secondary-cyan transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className={`
              absolute -top-2 -right-2 
              bg-primary-yellow text-background 
              text-xs font-bold rounded-full 
              w-5 h-5 flex items-center justify-center
              ${totalItems > 0 ? 'animate-bounce' : ''}
            `}>
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
} 