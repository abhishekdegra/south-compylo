import { motion } from 'motion/react'
import { Sparkles, HeartHandshake, Coffee, SunMedium, Quote } from 'lucide-react'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'

export function Story() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F7F0E5] text-[#35271F] relative overflow-hidden">
      {/* Subtle Warm Amber Background Flare */}
      <div className="absolute -top-32 right-10 -z-0 h-96 w-96 rounded-full bg-[#E6B629]/15 blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#806B5B]/25 bg-[#FFFDF8] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C78B45] mb-4 shadow-xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#E6B629]" />
            <span>Our Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#221813] leading-tight"
          >
            A Little Escape.{' '}
            <span className="italic font-normal text-[#C78B45]">A Lot of Good Vibes.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#5C4A3E] leading-relaxed"
          >
            We created Compylo Café as a warm sanctuary where time ticks a little slower,
            conversations flow effortlessly, and every cup is crafted with care and intention.
          </motion.p>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Asymmetrical Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8]"
            >
              <img
                src={CAFE_CONFIG.media.storyImage1}
                alt="Barista at Compylo Café preparing specialty coffee under warm ambient pendant lamps"
                loading="lazy"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221813]/70 via-[#221813]/20 to-transparent" />
              
              {/* Floating Photo Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF8]">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E6B629] text-[#221813] text-[10px] font-bold uppercase tracking-wider mb-2">
                  Daily Roasts
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                  Poured with precision, served with warmth.
                </p>
              </div>
            </motion.div>

            {/* Overlapping Secondary Photo Card */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-64 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8] bg-[#FFFDF8]"
            >
              <img
                src={CAFE_CONFIG.media.storyImage2}
                alt="Cozy wooden seating with warm natural sunlight at Compylo Café"
                loading="lazy"
                className="w-full h-36 object-cover"
              />
              <div className="p-3 bg-[#FFFDF8]">
                <p className="font-serif text-xs font-bold text-[#221813]">
                  Natural Wood &amp; Sunlight
                </p>
                <p className="text-[11px] text-[#5C4A3E] mt-0.5">Find your favorite cozy spot</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 lg:pl-6 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-base sm:text-lg text-[#35271F] leading-relaxed"
            >
              <p>
                Step inside and leave the rush behind. From the sizzle of pure desi ghee on seasoned
                cast-iron tawas and the rich, nostalgic aroma of slow-dripped Kumbakonam chicory kaapi,
                to the soft amber glow of woven lamps, every detail at <strong>Compylo Café</strong> was styled to feel like home.
              </p>
              <p className="text-[#5C4A3E] text-base">
                Whether you’re catching up over a frothy brass dabara of filter coffee, enjoying a
                crispy golden Ghee Roast Masala Dosa, or diving into soft Thatte idlis in a quiet sunlit nook,
                this is your space to slow down, savor, and belong.
              </p>
            </motion.div>

            {/* Editorial Pull Quote */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-5 rounded-xl bg-[#FFFDF8] border-l-4 border-[#E6B629] shadow-xs relative"
            >
              <Quote className="h-6 w-6 text-[#E6B629]/40 absolute top-3 right-3" />
              <p className="font-serif italic text-base text-[#221813] leading-snug">
                "Every cup we pour is an invitation to slow down, share a thought, and savor the moment."
              </p>
              <span className="block text-xs uppercase tracking-widest text-[#C78B45] font-semibold mt-2">
                — The Compylo Barista Team
              </span>
            </motion.div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#806B5B]/15 shadow-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E6B629]/20 text-[#221813]">
                  <Coffee className="h-5 w-5 text-[#C78B45]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#221813]">Heritage Kaapi &amp; Tiffins</h4>
                  <p className="text-xs text-[#5C4A3E] mt-0.5">Brass dabara kaapi &amp; pure ghee dosas</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#806B5B]/15 shadow-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E6B629]/20 text-[#221813]">
                  <SunMedium className="h-5 w-5 text-[#C78B45]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#221813]">Warm Ambience</h4>
                  <p className="text-xs text-[#5C4A3E] mt-0.5">Woven lamps &amp; natural timber</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#806B5B]/15 shadow-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E6B629]/20 text-[#221813]">
                  <HeartHandshake className="h-5 w-5 text-[#C78B45]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#221813]">Genuine Hospitality</h4>
                  <p className="text-xs text-[#5C4A3E] mt-0.5">Smiles that remember your order</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#806B5B]/15 shadow-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E6B629]/20 text-[#221813]">
                  <Sparkles className="h-5 w-5 text-[#C78B45]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#221813]">Everyday Sanctuary</h4>
                  <p className="text-xs text-[#5C4A3E] mt-0.5">Your peaceful corner in town</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
