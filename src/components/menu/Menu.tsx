import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, Leaf, Info, Eye } from 'lucide-react'
import { CAFE_CONFIG, type MenuItem, type MenuCategory } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { BrewMatchmaker } from './BrewMatchmaker'
import { MenuItemModal } from './MenuItemModal'

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('South Indian Tiffins')
  const [selectedModalItem, setSelectedModalItem] = useState<MenuItem | null>(null)
  const [highlightedItemId, setHighlightedItemId] = useState<string | null>(null)

  const filteredItems = CAFE_CONFIG.menuItems.filter(
    (item) => item.category === activeCategory
  )

  const handleHighlightItem = (itemId: string, category: MenuCategory) => {
    setActiveCategory(category)
    setHighlightedItemId(itemId)

    // Smooth scroll to card after tab animation
    setTimeout(() => {
      const el = document.getElementById(`item-${itemId}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 150)

    // Clear highlight after 4.5 seconds
    setTimeout(() => {
      setHighlightedItemId((prev) => (prev === itemId ? null : prev))
    }, 4500)
  }

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#F7F0E5] text-[#35271F] relative">
      <Container size="lg">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#806B5B]/25 bg-[#FFFDF8] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C78B45] mb-4 shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E6B629]" />
            <span>Our Offerings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#221813] leading-tight"
          >
            Thoughtfully Brewed &amp;{' '}
            <span className="italic font-normal text-[#C78B45]">Handcrafted</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#5C4A3E] leading-relaxed"
          >
            From piping hot brass dabara filter kaapi and crispy golden ghee roast dosas to cloud-soft Thatte idlis and artisanal treats, every plate is prepared fresh to order.
          </motion.p>
        </div>

        {/* Interactive "Find Your Perfect Brew" Coffee Matchmaker */}
        <BrewMatchmaker
          onHighlightItem={handleHighlightItem}
          onOpenModal={(item) => setSelectedModalItem(item)}
        />

        {/* Category Filter Pills Container */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-1.5 rounded-2xl bg-[#FFFDF8] border border-[#806B5B]/15 shadow-sm max-w-4xl">
            {CAFE_CONFIG.menuCategories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer min-h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629] ${
                    isActive
                      ? 'text-[#221813] font-bold shadow-xs'
                      : 'text-[#5C4A3E] hover:text-[#221813] hover:bg-[#F7F0E5]/70'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMenuTab"
                      className="absolute inset-0 bg-[#E6B629] rounded-xl shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {category}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Animated Filtered Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isHighlighted = highlightedItemId === item.id

              return (
                <motion.article
                  layout
                  id={`item-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedModalItem(item)}
                  className={`group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#FFFDF8] border p-5 transition-all duration-300 cursor-pointer ${
                    isHighlighted
                      ? 'border-[#E6B629] ring-4 ring-[#E6B629]/40 shadow-2xl scale-[1.02]'
                      : 'border-[#806B5B]/15 shadow-xs hover:shadow-xl hover:border-[#C78B45]/40'
                  }`}
                >
                  <div>
                    {/* Photo Container */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl mb-4 bg-[#F7F0E5]">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Signature Badge */}
                      {item.badge && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="mustard" className="shadow-xs font-bold text-[10px]">
                            {item.badge}
                          </Badge>
                        </div>
                      )}

                      {/* Dietary indicator */}
                      {item.dietary && (
                        <div
                          className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFFDF8]/95 text-emerald-800 shadow-xs text-[11px] font-semibold"
                          title={item.dietary === 'vegan' ? 'Vegan' : 'Vegetarian'}
                        >
                          <Leaf className="h-3 w-3 fill-current text-emerald-600" aria-hidden="true" />
                          <span className="capitalize">{item.dietary}</span>
                        </div>
                      )}

                      {/* Quick Detail View Overlay on Hover */}
                      <div className="absolute inset-0 bg-[#241912]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFDF8] px-3.5 py-1 text-xs font-bold text-[#221813] shadow-lg">
                          <Eye className="h-3.5 w-3.5 text-[#C78B45]" />
                          <span>View Details</span>
                        </span>
                      </div>
                    </div>

                    {/* Title & Price Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-lg font-bold text-[#221813] group-hover:text-[#C78B45] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <div className="font-serif font-bold text-lg text-[#221813] bg-[#FAF5EE] px-2.5 py-0.5 rounded-lg border border-[#806B5B]/10 shrink-0">
                        ₹{item.price}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tasting notes chips if available */}
                    {item.tastingNotes && item.tastingNotes.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tastingNotes.slice(0, 2).map((note) => (
                          <span
                            key={note}
                            className="rounded bg-[#F7F0E5] px-2 py-0.5 text-[10px] font-semibold text-[#806B5B]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Card Footer */}
                  <div className="mt-5 pt-3 border-t border-[#806B5B]/10 flex items-center justify-between text-xs text-[#5C4A3E]">
                    <span className="uppercase tracking-wider font-semibold text-[11px] text-[#C78B45]">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#C78B45] font-semibold group-hover:text-[#221813] transition-colors">
                      <span>Details &amp; Order</span>
                      <span>→</span>
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Informational Guidance Box */}
        <div className="mt-14 max-w-2xl mx-auto rounded-2xl bg-[#FFFDF8] border border-[#806B5B]/20 p-5 shadow-xs flex items-start sm:items-center gap-3.5 text-xs text-[#5C4A3E]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E6B629]/20 text-[#221813] shrink-0">
            <Info className="h-4 w-4 text-[#C78B45]" />
          </div>
          <p className="leading-relaxed">
            All prices are in Indian Rupees (₹) inclusive of applicable taxes. Customizations such
            as barista oat milk, almond milk, extra espresso shots, and sugar-free syrups are gladly
            accommodated by our team.
          </p>
        </div>
      </Container>

      {/* Item Detail Modal */}
      <MenuItemModal
        item={selectedModalItem}
        onClose={() => setSelectedModalItem(null)}
      />
    </section>
  )
}
