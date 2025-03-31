'use client'

import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const { items, totalPrice, removeItem, updateQuantity } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-yellow mb-4">
            Seu carrinho está vazio
          </h2>
          <p className="text-gray-400 mb-8">
            Adicione alguns produtos mágicos para começar sua jornada!
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary-purple hover:bg-secondary-purple text-white font-bold rounded-lg transition-colors"
          >
            Voltar às Compras
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-yellow mb-8">Seu Carrinho Mágico</h1>

      {/* Lista de Produtos */}
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-background/50 rounded-lg p-4 flex items-center gap-4"
          >
            {/* Imagem do Produto */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Informações do Produto */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-primary-cyan">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <div className="mt-2 flex items-center gap-4">
                <span className="text-primary-yellow font-bold">
                  R$ {item.price.toFixed(2)}
                </span>
                
                {/* Controle de Quantidade */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                    disabled={(item.quantity || 1) <= 1}
                    className="w-8 h-8 rounded-full bg-primary-purple/20 text-primary-purple hover:bg-primary-purple/30 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity || 1}</span>
                  <button
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    className="w-8 h-8 rounded-full bg-primary-purple/20 text-primary-purple hover:bg-primary-purple/30"
                  >
                    +
                  </button>
                </div>

                {/* Botão Remover */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  Remover
                </button>
              </div>
            </div>

            {/* Preço Total do Item */}
            <div className="text-right">
              <span className="text-lg font-bold text-primary-yellow">
                R$ {(item.price * (item.quantity || 1)).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Resumo do Pedido */}
      <div className="bg-background/50 rounded-lg p-6">
        <h2 className="text-xl font-bold text-primary-yellow mb-4">Resumo do Pedido</h2>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-white">R$ {totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Frete</span>
            <span className="text-primary-cyan">Grátis</span>
          </div>
          <div className="border-t border-gray-700 pt-2 flex justify-between">
            <span className="font-bold text-white">Total</span>
            <span className="font-bold text-primary-yellow">R$ {totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Botão Finalizar Compra */}
        <button className="w-full py-3 bg-primary-yellow hover:bg-secondary-yellow text-background font-bold rounded-lg transition-colors">
          Finalizar Compra
        </button>
      </div>
    </div>
  )
} 