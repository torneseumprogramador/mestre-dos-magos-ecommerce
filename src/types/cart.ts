export interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  description: string
  quantity?: number
}

export interface CartStore {
  items: Product[]
  totalItems: number
  totalPrice: number
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
} 