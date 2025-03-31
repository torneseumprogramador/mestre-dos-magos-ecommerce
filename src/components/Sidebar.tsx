import Link from 'next/link'

const categories = [
  { name: 'Cartas Raras', href: '/loja/cartas-raras', color: 'primary-yellow' },
  { name: 'Decks', href: '/loja/decks', color: 'primary-cyan' },
  { name: 'Boosters', href: '/loja/boosters', color: 'primary-blue' },
  { name: 'Acessórios', href: '/loja/acessorios', color: 'secondary-purple' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-background/50 p-4 rounded-lg shadow-magic">
      <h2 className="text-primary-yellow text-2xl font-bold mb-6">CATEGORIAS</h2>
      <nav className="space-y-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className={`
              block px-4 py-2 rounded-lg
              bg-${category.color}/20 hover:bg-${category.color}/30
              text-${category.color} font-semibold
              transition-all duration-200
              hover:translate-x-1 hover:shadow-neon
            `}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
} 