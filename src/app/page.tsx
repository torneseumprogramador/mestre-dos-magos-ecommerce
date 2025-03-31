'use client'

import Sidebar from '@/components/Sidebar'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

// Dados mockados para exemplo
const featuredProducts = [
  {
    id: '1',
    name: 'Carta Mágica Rara',
    price: 20.00,
    imageUrl: '/images/products/carta-magica.jpg',
    description: 'Uma carta mágica poderosa com efeitos únicos.'
  },
  {
    id: '2',
    name: 'Kit de Cartas',
    price: 45.00,
    imageUrl: '/images/products/kit-cartas.jpg',
    description: 'Kit completo com cartas especiais para iniciantes.'
  },
  {
    id: '3',
    name: 'Jogo de Tabuleiro',
    price: 150.00,
    imageUrl: '/images/products/tabuleiro.jpg',
    description: 'Jogo de tabuleiro mágico com peças especiais.'
  },
  {
    id: '4',
    name: 'Pacote de Cartas',
    price: 30.00,
    imageUrl: '/images/products/pacote-cartas.jpg',
    description: 'Pacote com cartas aleatórias e chance de itens raros.'
  },
]

export default function Home() {
  const totalItems = useCartStore((state) => state.totalItems)

  return (
    <div className="flex gap-8">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1">
        {/* Banner Principal */}
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden shadow-magic">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-blue opacity-75" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
            <div>
              <h1 className="text-4xl font-bold text-primary-yellow mb-4">
                Bem-vindo ao Templo dos Magos
              </h1>
              <p className="text-xl text-white">
                Descubra o poder das cartas mágicas e jogos místicos
              </p>
            </div>
          </div>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>

        {/* Botão Ver Carrinho (fixo na parte inferior) */}
        {totalItems > 0 && (
          <div className="fixed bottom-8 right-8">
            <Link
              href="/carrinho"
              className="
                px-6 py-3 rounded-full
                bg-primary-yellow text-background
                font-bold text-lg
                shadow-neon hover:shadow-magic
                transform transition-all duration-300
                hover:scale-105 active:scale-95
                flex items-center gap-2
              "
            >
              Ver Carrinho
              <span className="bg-background text-primary-yellow rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {totalItems}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 