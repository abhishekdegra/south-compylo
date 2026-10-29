import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react'
import { Coffee, Compass, Sparkles, Flame, Clock } from 'lucide-react'
import { CAFE_CONFIG } from '@/config/cafeConfig'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isDesktopPointer, setIsDesktopPointer] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: fine) and (hover: hover)').matches
      : false
  )

  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Cursor Parallax Motion Values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth Springs for Parallax (prevent sudden snaps)
  const springConfig = { damping: 28, stiffness: 120 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Subtle Parallax Layer Transforms
  const bgTranslateX = useTransform(smoothMouseX, [-1, 1], [10, -10])
  const textTranslateX = useTransform(smoothMouseX, [-1, 1], [-5, 5])
  const textTranslateY = useTransform(smoothMouseY, [-1, 1], [-4, 4])
  const panelTranslateY = useTransform(smoothMouseY, [-1, 1], [-3, 3])

  // Scroll-linked Natural Transition to Next Section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15])
  const heroContentScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.96])
  const heroBackgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])

  // Subscribe to pointer media query changes
  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (hover: hover)')
    const handler = (e: MediaQueryListEvent) => setIsDesktopPointer(e.matches)
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  // Handle pointer move for desktop parallax
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!isDesktopPointer) return
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return

    // Normalized coordinates from -1 to 1
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1

    mouseX.set(x)
    mouseY.set(y)
  }

  const handlePointerLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Staggered Entrance Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#241912] select-none"
      aria-label="Compylo Café Cinematic Hero"
    >
      {/* =========================================================================
          BACKGROUND CINEMATIC SCENE
          - Local, verified 1080p MP4 & WebM stream
          - Matching instant poster frame (zero layout shift or blank frame)
          - Parallax movement & ambient lighting layers
      ========================================================================= */}
      <motion.div
        style={{
          y: heroBackgroundY,
          x: isDesktopPointer ? bgTranslateX : 0,
        }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none scale-105 will-change-transform"
      >
        {/* Poster Image: Displays immediately without waiting for video buffer */}
        <img
          src={CAFE_CONFIG.media.heroPoster}
          alt="Artisanal espresso coffee brewing at Compylo Café"
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100 animate-ken-burns'
          }`}
        />

        {/* Cinematic Video Player: Plays muted, loop, inline */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              setVideoError(true)
              setVideoLoaded(false)
            }}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={CAFE_CONFIG.media.heroVideoUrl} type="video/mp4" />
            <source src={CAFE_CONFIG.media.heroVideoFallbackUrl} type="video/webm" />
          </video>
        )}

        {/* Atmospheric Light Layer 1: Warm Top Pendant Flare */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(230,182,41,0.24)_0%,rgba(199,139,69,0.10)_40%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Atmospheric Light Layer 2: Espresso Shadow Vignette */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,25,18,0.25)_0%,rgba(36,25,18,0.85)_100%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Atmospheric Light Layer 3: Gradient Blend to Next Section */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#241912] via-[#241912]/60 to-[#241912]/35 pointer-events-none"
          aria-hidden="true"
        />

        {/* Fine Cinematic Film Grain Texture */}
        <div className="absolute inset-0 hero-grain pointer-events-none" aria-hidden="true" />
      </motion.div>

      {/* =========================================================================
          HERO MAIN CONTENT
          - Responsive, perfectly budgetized vertical flex layout (no cutoff)
          - Deliberate two-line headline composition with clamp()
          - Interactive CTAs
      ========================================================================= */}
      <motion.div
        style={{
          opacity: heroContentOpacity,
          scale: heroContentScale,
          x: isDesktopPointer ? textTranslateX : 0,
          y: isDesktopPointer ? textTranslateY : 0,
        }}
        className="relative z-10 w-full flex-1 flex flex-col justify-center pt-28 pb-8 sm:pt-32 sm:pb-10"
      >
        <Container size="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center flex flex-col items-center"
          >
            {/* 1. Eyebrow Capsule */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E6B629]/45 bg-[#241912]/80 px-4 py-1.5 backdrop-blur-md shadow-lg">
                <Sparkles className="h-3.5 w-3.5 text-[#E6B629]" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#E6B629]">
                  {CAFE_CONFIG.brand.eyebrow}
                </span>
              </div>
            </motion.div>

            {/* 2. Small Brand Sub-Detail */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 text-xs font-medium tracking-[0.32em] uppercase text-[#E3B47E] mb-3 sm:mb-4"
            >
              <span className="h-px w-5 sm:w-7 bg-[#C78B45]/50" />
              <span>COMPYLO CAFÉ · SOUTH INDIAN TIFFINS &amp; FILTER KAAPI</span>
              <span className="h-px w-5 sm:w-7 bg-[#C78B45]/50" />
            </motion.div>

            {/* 3. Deliberate Two-Line Headline (Guaranteed No Awkward Wrap) */}
            <motion.div variants={itemVariants} className="w-full max-w-3xl">
              <h1 className="font-serif tracking-tight text-[#FFF7E9] flex flex-col items-center text-center">
                {/* Line 1: Pure White Serif */}
                <span className="block font-bold text-[clamp(2.5rem,6.8vw,5.6rem)] leading-[1.04] tracking-tight drop-shadow-md">
                  Good Coffee.
                </span>
                {/* Line 2: Signature Mustard Gold Italic Serif */}
                <span className="block font-serif italic font-normal text-[#E6B629] text-[clamp(2.75rem,7.6vw,6.4rem)] leading-[1.04] tracking-tight -mt-1 sm:-mt-2 drop-shadow-lg">
                  Great Company.
                </span>
              </h1>
            </motion.div>

            {/* 4. Fine Editorial Divider */}
            <motion.div
              variants={itemVariants}
              className="my-4 sm:my-5 flex items-center justify-center gap-3 w-40"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E6B629]/80" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#E6B629]" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E6B629]/80" />
            </motion.div>

            {/* 5. Supporting Editorial Copy */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm sm:text-base md:text-lg text-[#FFF7E9]/85 font-normal leading-relaxed tracking-wide px-4"
            >
              {CAFE_CONFIG.brand.heroSupporting}
            </motion.p>

            {/* 6. Interactive Dual Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4"
            >
              {/* Primary CTA: Explore Menu */}
              <a href="#menu" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Coffee className="h-4 w-4" />}
                  className="w-full sm:w-auto min-h-[50px] font-bold tracking-wider shadow-xl hover:shadow-[#E6B629]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {CAFE_CONFIG.brand.primaryCta}
                </Button>
              </a>

              {/* Secondary CTA: Discover Café */}
              <a href="#story" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Compass className="h-4 w-4 text-[#E6B629]" />}
                  className="w-full sm:w-auto min-h-[50px] border-[#FFF7E9]/35 text-[#FFF7E9] hover:bg-[#FFF7E9]/10 hover:border-[#E6B629] hover:text-[#E6B629] font-medium transition-all"
                >
                  {CAFE_CONFIG.brand.secondaryCta}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      {/* =========================================================================
          PREMIUM FLOATING INFO PANEL (Bottom Viewport Anchored, Zero Clipping)
          - Translucent espresso surface with warm border
          - Factual, confirmed café qualities
          - Responsive: clean horizontal capsule on desktop, compact stack on mobile
      ========================================================================= */}
      <motion.div
        style={{
          y: isDesktopPointer ? panelTranslateY : 0,
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
        className="relative z-20 w-full pb-6 sm:pb-8 pt-2"
      >
        <Container size="lg">
          <div className="mx-auto max-w-4xl rounded-2xl bg-[#241912]/80 backdrop-blur-md border border-[#C78B45]/30 p-3 sm:p-4 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#C78B45]/20">
              {/* Feature 1 */}
              <div className="flex items-center justify-center sm:justify-start gap-3 px-3 py-1.5 sm:py-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] border border-[#E6B629]/25">
                  <Coffee className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFF7E9]">
                    Degree Filter Kaapi
                  </h4>
                  <p className="text-[11px] text-[#E3B47E] font-medium">Brass Dabara Slow-Drip</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center justify-center sm:justify-start gap-3 px-3 py-1.5 sm:py-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] border border-[#E6B629]/25">
                  <Flame className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFF7E9]">
                    Crisp Dosas &amp; Soft Idlis
                  </h4>
                  <p className="text-[11px] text-[#E3B47E] font-medium">Cast-Iron Tawa &amp; Pure Desi Ghee</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center justify-center sm:justify-start gap-3 px-3 py-1.5 sm:py-0">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6B629]/15 text-[#E6B629] border border-[#E6B629]/25">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFF7E9]">
                    Your Favorite Hangout
                  </h4>
                  <p className="text-[11px] text-[#E3B47E] font-medium">Warm Teak &amp; Ambient Light</p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Animated Scroll Indicator */}
          <div className="mt-3 flex justify-center">
            <a
              href="#story"
              aria-label="Scroll down to Our Story"
              className="inline-flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.24em] font-medium text-[#FFF7E9]/60 hover:text-[#E6B629] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6B629] rounded p-1"
            >
              <span>Scroll to explore</span>
              <div className="h-5 w-[1.5px] bg-[#C78B45]/30 overflow-hidden rounded-full">
                <div className="h-full w-full bg-[#E6B629] animate-scroll-line" />
              </div>
            </a>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
