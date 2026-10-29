import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, Flame, Coffee, Snowflake, Heart, ArrowRight, RotateCcw, MessageCircle, Eye } from 'lucide-react'
import { CAFE_CONFIG, type MenuItem, type MenuCategory } from '@/config/cafeConfig'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export interface BrewMatchmakerProps {
  onHighlightItem: (itemId: string, category: MenuCategory) => void
  onOpenModal: (item: MenuItem) => void
}

type MoodOption = 'bold' | 'silky' | 'cold' | 'sweet'
type TempOption = 'hot' | 'iced'

interface MatchRule {
  mood: MoodOption
  temp: TempOption
  itemId: string
  matchReason: string
}

const matchRules: MatchRule[] = [
  {
    mood: 'bold',
    temp: 'hot',
    itemId: 'c1', // Kumbakonam Degree Filter Kaapi
    matchReason: 'Heritage Kumbakonam chicory-infused decoction frothed high into boiling milk in a brass dabara — robust, velvety and deeply aromatic.',
  },
  {
    mood: 'bold',
    temp: 'iced',
    itemId: 'cc2', // Cold Filter Kaapi Frappé
    matchReason: 'Double-strength filter coffee decoction blended with chilled milk and ice — bold, roasty and frosty.',
  },
  {
    mood: 'silky',
    temp: 'hot',
    itemId: 'c2', // Mysore Nugget Extra Bold
    matchReason: 'Premium shade-grown Mysore AA beans with velvety steamed milk — smooth, nutty with cardamom undertones.',
  },
  {
    mood: 'silky',
    temp: 'iced',
    itemId: 'cc1', // Madurai Jil Jil Jigarthanda
    matchReason: 'Madurai’s royal almond gum, nannari herbal root syrup, thick chilled milk and ice cream — ultra-creamy delight.',
  },
  {
    mood: 'cold',
    temp: 'iced',
    itemId: 'cc3', // Panakam Botanical Shakerato
    matchReason: 'Organic jaggery, dry ginger, cardamom and sweet basil seeds shaken over crystal ice — revitalizing, spicy and crisp.',
  },
  {
    mood: 'cold',
    temp: 'hot',
    itemId: 'c4', // Classic Americano / Black Kaapi
    matchReason: 'Pure Chikmagalur single-origin decoction pulled long over piping mineral water — clean, citrusy and bold.',
  },
  {
    mood: 'sweet',
    temp: 'hot',
    itemId: 'c3', // Signature Spanish Cortado
    matchReason: 'Bold double ristretto balanced with silky sweet condensed milk — rich, velvety and comforting.',
  },
  {
    mood: 'sweet',
    temp: 'iced',
    itemId: 'cc1', // Madurai Jil Jil Jigarthanda
    matchReason: 'Layered nannari root sweetness, velvety badam pisin, and luscious ice cream — the ultimate sweet cooler.',
  },
]

export function BrewMatchmaker({ onHighlightItem, onOpenModal }: BrewMatchmakerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(null)
  const [selectedTemp, setSelectedTemp] = useState<TempOption | null>(null)

  const handleSelectMood = (mood: MoodOption) => {
    setSelectedMood(mood)
    setStep(2)
  }

  const handleSelectTemp = (temp: TempOption) => {
    setSelectedTemp(temp)
    setStep(3)
  }

  const resetQuiz = () => {
    setStep(1)
    setSelectedMood(null)
    setSelectedTemp(null)
  }

  // Find matched item
  const matchedRule = matchRules.find(
    (r) => r.mood === selectedMood && r.temp === selectedTemp
  ) || matchRules[0]

  const matchedItem = CAFE_CONFIG.menuItems.find((i) => i.id === matchedRule.itemId) || CAFE_CONFIG.menuItems[0]

  const whatsappMessage = encodeURIComponent(
    `Hi Compylo Café! I took your Brew Matchmaker on the website and got matched with ${matchedItem.name} (₹${matchedItem.price}). I'd like to order it!`
  )
  const whatsappUrl = `https://wa.me/${CAFE_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  return (
    <div className="mx-auto max-w-3xl mb-12">
      {/* Collapsed Trigger Banner */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-[#C78B45]/30 bg-gradient-to-r from-[#241912] via-[#35271F] to-[#241912] p-4 sm:p-5 shadow-xl text-[#FFFDF8] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6B629] text-[#241912] shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E6B629]">
                <span>Interactive Experience</span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#FFFDF8]">
                Find Your Perfect Brew in 15 Seconds
              </h3>
              <p className="text-xs text-[#E3B47E]">
                Not sure what to order? Let our barista matchmaker pick your ideal cup.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsOpen(true)}
            icon={<ArrowRight className="h-3.5 w-3.5" />}
            className="font-bold text-xs shrink-0 w-full sm:w-auto"
          >
            Start Quiz
          </Button>
        </motion.div>
      )}

      {/* Expanded Matchmaker Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-3xl border border-[#C78B45]/35 bg-[#241912] p-6 sm:p-8 text-[#FFFDF8] shadow-2xl relative"
          >
            {/* Top Close / Reset Header */}
            <div className="flex items-center justify-between border-b border-[#C78B45]/20 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E6B629] text-[#241912]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="font-serif text-sm sm:text-base font-bold tracking-wide text-[#FFFDF8]">
                  Brew Matchmaker · {step === 3 ? 'Match Found!' : `Question ${step} of 2`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="inline-flex items-center gap-1 text-xs text-[#E3B47E] hover:text-[#E6B629] transition-colors p-1"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Start Over</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-[#35271F] p-1.5 text-xs text-[#FFFDF8]/70 hover:text-[#FFFDF8] hover:bg-[#35271F]/80 transition-colors"
                  aria-label="Close matchmaker"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* STEP 1: Flavor / Mood Profile */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFDF8]">
                    What vibe or flavor profile are you craving today?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E3B47E] mt-1">
                    Select the profile that best fits your current mood:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSelectMood('bold')}
                    className="flex items-start gap-3.5 rounded-2xl bg-[#35271F]/80 border border-[#C78B45]/25 p-4 text-left hover:border-[#E6B629] hover:bg-[#35271F] transition-all group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] group-hover:scale-105 transition-transform">
                      <Flame className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#FFFDF8] group-hover:text-[#E6B629] transition-colors">
                        Bold &amp; Intense
                      </h5>
                      <p className="text-xs text-[#E3B47E] mt-0.5">
                        Deep chicory aroma, rich brass dabara froth, dark roasted body.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectMood('silky')}
                    className="flex items-start gap-3.5 rounded-2xl bg-[#35271F]/80 border border-[#C78B45]/25 p-4 text-left hover:border-[#E6B629] hover:bg-[#35271F] transition-all group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] group-hover:scale-105 transition-transform">
                      <Coffee className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#FFFDF8] group-hover:text-[#E6B629] transition-colors">
                        Silky &amp; Balanced
                      </h5>
                      <p className="text-xs text-[#E3B47E] mt-0.5">
                        Velvety steamed milk, nutty Mysore beans, rounded smooth kaapi.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectMood('cold')}
                    className="flex items-start gap-3.5 rounded-2xl bg-[#35271F]/80 border border-[#C78B45]/25 p-4 text-left hover:border-[#E6B629] hover:bg-[#35271F] transition-all group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] group-hover:scale-105 transition-transform">
                      <Snowflake className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#FFFDF8] group-hover:text-[#E6B629] transition-colors">
                        Crisp &amp; Refreshing
                      </h5>
                      <p className="text-xs text-[#E3B47E] mt-0.5">
                        Botanical jaggery Panakam cooler or chilled shakerato over ice.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectMood('sweet')}
                    className="flex items-start gap-3.5 rounded-2xl bg-[#35271F]/80 border border-[#C78B45]/25 p-4 text-left hover:border-[#E6B629] hover:bg-[#35271F] transition-all group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] group-hover:scale-105 transition-transform">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-[#FFFDF8] group-hover:text-[#E6B629] transition-colors">
                        Sweet &amp; Indulgent
                      </h5>
                      <p className="text-xs text-[#E3B47E] mt-0.5">
                        Madurai Jigarthanda with badam pisin, sweet nannari and ice cream.
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Temperature Preference */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFDF8]">
                    How would you like it served right now?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E3B47E] mt-1">
                    Warm and comforting, or ice-cold and chilled?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSelectTemp('hot')}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#35271F]/80 border border-[#C78B45]/25 p-6 text-center hover:border-[#E6B629] hover:bg-[#35271F] transition-all group cursor-pointer"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] group-hover:scale-110 transition-transform">
                      <Flame className="h-6 w-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-base text-[#FFFDF8] group-hover:text-[#E6B629] transition-colors">
                        Hot &amp; Comforting ♨️
                      </h5>
                      <p className="text-xs text-[#E3B47E] mt-1">
                        Poured at optimal drinking temperature in warm ceramics.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectTemp('iced')}
                    className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-[#35271F]/80 border border-[#C78B45]/25 p-6 text-center hover:border-[#E6B629] hover:bg-[#35271F] transition-all group cursor-pointer"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] group-hover:scale-110 transition-transform">
                      <Snowflake className="h-6 w-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-base text-[#FFFDF8] group-hover:text-[#E6B629] transition-colors">
                        Over Ice &amp; Chilled ❄️
                      </h5>
                      <p className="text-xs text-[#E3B47E] mt-1">
                        Served over crystal-clear artisan cubes with crisp refreshing finish.
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Result Reveal */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                className="space-y-6"
              >
                {/* Match Banner Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E6B629]/40 bg-[#E6B629]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E6B629]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>98% Match For Your Mood</span>
                </div>

                {/* Match Card */}
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 rounded-2xl bg-[#35271F] border border-[#C78B45]/30 p-5 sm:p-6 shadow-xl">
                  <div className="relative h-36 w-36 sm:h-40 sm:w-40 shrink-0 overflow-hidden rounded-xl border border-[#C78B45]/20">
                    <img
                      src={matchedItem.image}
                      alt={matchedItem.name}
                      className="h-full w-full object-cover"
                    />
                    {matchedItem.badge && (
                      <div className="absolute top-2 left-2">
                        <Badge variant="mustard" className="text-[10px] py-0.5 px-2">
                          {matchedItem.badge}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="font-serif text-2xl font-bold text-[#FFFDF8]">
                        {matchedItem.name}
                      </h4>
                      <span className="font-serif text-2xl font-black text-[#E6B629]">
                        ₹{matchedItem.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#E3B47E] leading-relaxed mb-3">
                      {matchedRule.matchReason}
                    </p>

                    {/* Tasting Notes */}
                    {matchedItem.tastingNotes && (
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mb-4">
                        {matchedItem.tastingNotes.map((note) => (
                          <span
                            key={note}
                            className="rounded-md bg-[#241912] px-2.5 py-0.5 text-[11px] font-semibold text-[#E6B629] border border-[#C78B45]/20"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button
                          variant="primary"
                          size="sm"
                          icon={<MessageCircle className="h-3.5 w-3.5" />}
                          className="w-full font-bold text-xs"
                        >
                          Order on WhatsApp
                        </Button>
                      </a>

                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Eye className="h-3.5 w-3.5" />}
                        onClick={() => {
                          onHighlightItem(matchedItem.id, matchedItem.category)
                        }}
                        className="w-full sm:w-auto border-[#FFFDF8]/30 text-[#FFFDF8] hover:bg-[#FFFDF8]/10 text-xs font-semibold"
                      >
                        Highlight in Menu
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onOpenModal(matchedItem)}
                        className="w-full sm:w-auto text-[#E6B629] hover:bg-[#E6B629]/15 text-xs font-semibold"
                      >
                        View Full Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
