export interface MenuItem {
  id: string
  name: string
  category: MenuCategory
  description: string
  price: number
  badge?: string
  dietary?: 'veg' | 'vegan' | 'chef-choice'
  image: string
  tastingNotes?: string[]
  brewMethod?: string
  roastLevel?: string
  prepTime?: string
}

export type MenuCategory =
  | 'South Indian Tiffins'
  | 'Filter Kaapi & Coffee'
  | 'Cold Brews & Coolers'
  | 'Quick Bites & Savories'
  | 'Desserts & Sweet Treats'

export interface GalleryItem {
  id: string
  title: string
  category: 'Interiors' | 'Coffee' | 'Food' | 'Ambience' | 'Details'
  image: string
  aspect: 'square' | 'wide' | 'tall'
  caption: string
}

export interface ReviewItem {
  id: string
  author: string
  role: string
  rating: number
  comment: string
  date: string
}

export interface HighlightItem {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  icon: string
}

export interface CafeConfig {
  brand: {
    name: string
    wordmark: string
    tagline: string
    eyebrow: string
    headline: string
    heroSupporting: string
    primaryCta: string
    secondaryCta: string
  }
  contact: {
    addressLine1: string
    addressLine2: string
    cityStateZip: string
    landmark: string
    phoneDisplay: string
    phoneCall: string
    whatsappNumber: string
    whatsappLink: string
    email: string
    instagramHandle: string
    instagramUrl: string
    googleMapsUrl: string
    googleMapsEmbedUrl: string
  }
  timings: {
    weekdays: string
    weekends: string
    kitchenCloses: string
  }
  media: {
    heroVideoUrl: string
    heroVideoFallbackUrl: string
    heroPoster: string
    storyImage1: string
    storyImage2: string
    storyImage3: string
  }
  highlights: HighlightItem[]
  menuCategories: MenuCategory[]
  menuItems: MenuItem[]
  gallery: GalleryItem[]
  reviews: ReviewItem[]
}

export const CAFE_CONFIG: CafeConfig = {
  brand: {
    name: 'Compylo Café',
    wordmark: 'COMPYLO CAFÉ',
    tagline: 'Authentic South Indian Tiffins & Specialty Kaapi',
    eyebrow: 'HERITAGE TIFFINS · ARTISANAL FILTER KAAPI',
    headline: 'Good Coffee. Great Company.',
    heroSupporting: 'Your corner for authentic brass dabara filter kaapi, golden crisp ghee roast dosas, pillow-soft idlis, and moments worth slowing down for.',
    primaryCta: 'EXPLORE TIFFINS & KAAPI',
    secondaryCta: 'DISCOVER OUR STORY',
  },
  contact: {
    addressLine1: 'Plot 42, Sunrise Boulevard, Sector 5',
    addressLine2: 'Opposite Central Promenade Garden',
    cityStateZip: 'Compylo — 302020',
    landmark: 'Near Boulevard Fountain',
    phoneDisplay: '+91 98765 43210',
    phoneCall: 'tel:+919876543210',
    whatsappNumber: '+91 98765 43210',
    whatsappLink: 'https://wa.me/919876543210?text=Hi%20Compylo%20Café!%20I%20would%20like%20to%20reserve%20a%20table.',
    email: 'hello@compylo.com',
    instagramHandle: '@compylo',
    instagramUrl: 'https://instagram.com/compylo',
    googleMapsUrl: 'https://maps.google.com/?q=Compylo+Cafe',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.6789!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin',
  },
  timings: {
    weekdays: 'Monday – Friday: 7:30 AM – 10:30 PM',
    weekends: 'Saturday – Sunday: 7:00 AM – 11:00 PM',
    kitchenCloses: 'Kitchen takes last orders 45 mins prior to closing',
  },
  media: {
    heroVideoUrl: '/videos/hero-cafe.mp4',
    heroVideoFallbackUrl: '/videos/hero-cafe.webm',
    heroPoster: '/videos/hero-cafe-poster.jpg',
    storyImage1:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85',
    storyImage2:
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85',
    storyImage3:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85',
  },
  highlights: [
    {
      id: 'highlight-coffee',
      title: 'Degree Filter Kaapi',
      tagline: 'Slow-Dripped in Brass Dabara',
      description:
        'Single-origin shade-grown Chikmagalur coffee beans blended with chicory, slow-dripped and frothed into traditional brass dabaras for that iconic aroma.',
      image:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85',
      icon: 'Coffee',
    },
    {
      id: 'highlight-food',
      title: 'Crispy Dosas & Soft Idlis',
      tagline: 'Stone-Ground & Fermented Daily',
      description:
        'Golden A2 ghee roast dosas, pillow-soft Thatte idlis dusted with spiced gunpowder podi, and crunchy medu vadas with fresh chutneys.',
      image:
        'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=85',
      icon: 'Utensils',
    },
    {
      id: 'highlight-ambience',
      title: 'Your Everyday Sanctuary',
      tagline: 'Warm Teak, Amber Pendants & Good Vibes',
      description:
        'A soothing blend of traditional South Indian hospitality and contemporary café aesthetics. Relax with a book or catch up with friends.',
      image:
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=85',
      icon: 'Armchair',
    },
    {
      id: 'highlight-rituals',
      title: 'Morning Fuel & Evening Chai',
      tagline: 'From First Pour to Sunset Bites',
      description:
        'Breathe in the aroma of freshly roasted beans, tempered mustard seeds, fresh curry leaves, and warm smiles that make you feel instantly at home.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85',
      icon: 'Sparkles',
    },
  ],
  menuCategories: [
    'South Indian Tiffins',
    'Filter Kaapi & Coffee',
    'Cold Brews & Coolers',
    'Quick Bites & Savories',
    'Desserts & Sweet Treats',
  ],
  menuItems: [
    // -------------------------------------------------------------
    // South Indian Tiffins (Dosas, Idlis, Vadas)
    // -------------------------------------------------------------
    {
      id: 'si-dosa-1',
      name: 'Ghee Roast Masala Dosa',
      category: 'South Indian Tiffins',
      description:
        'Paper-crisp golden crepe roasted in pure A2 desi ghee, filled with lightly spiced potato-onion masala. Served with fresh coconut chutney, spicy tomato chutney & drumstick sambar.',
      price: 185,
      badge: "Chef's Special",
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['A2 Desi Ghee Aroma', 'Ultra Crispy Crust', 'Spiced Mustard Potatoes'],
      brewMethod: 'Traditional Cast Iron Tawa',
      prepTime: '7-8 mins',
    },
    {
      id: 'si-idli-1',
      name: 'Steamed Thatte Idli with Gunpowder Podi',
      category: 'South Indian Tiffins',
      description:
        'Pillow-soft, cloud-like Karnataka style plate idlis drenched in hot clarified ghee and generously dusted with fiery roasted Malgudi gunpowder podi. Served with chilled coconut chutney.',
      price: 140,
      badge: 'House Favorite',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Pillow Soft Crumb', 'Spicy Roasted Lentil Podi', 'Melted Desi Ghee'],
      brewMethod: 'Slow Fermented & Steam Cooked',
      prepTime: '5 mins',
    },
    {
      id: 'si-vada-1',
      name: 'Crispy Medu Vada (Pair)',
      category: 'South Indian Tiffins',
      description:
        'Golden-fried spiced urad dal donuts with an irresistible crunchy outer shell and melt-in-mouth fluffy interior, studded with crushed black peppercorns, fresh ginger, and curry leaves.',
      price: 130,
      badge: 'All-Day Favorite',
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Crackling Crust', 'Black Peppercorn Crunch', 'Fresh Curry Leaves'],
      brewMethod: 'Stone Ground & Deep Golden Fried',
      prepTime: '6 mins',
    },
    {
      id: 'si-dosa-2',
      name: 'Mysore Masala Dosa',
      category: 'South Indian Tiffins',
      description:
        'Crispy golden dosa generously smeared inside with tangy-spicy Mysore red chilli garlic chutney, filled with potato mash and toasted with homemade butter.',
      price: 195,
      badge: 'Iconic Classic',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Fiery Red Garlic Chutney', 'Buttery Crisp Crepe', 'Coriander Potato Mash'],
      brewMethod: 'Cast Iron Tawa Roasted',
      prepTime: '8 mins',
    },
    {
      id: 'si-idli-2',
      name: 'Podi Tossed Button Idlis',
      category: 'South Indian Tiffins',
      description:
        'Mini bite-sized fermented rice idlis tossed in warm desi ghee with crackling mustard seeds, crunchy chana dal, fresh curry leaves, and spicy Gunpowder Podi.',
      price: 155,
      badge: 'Popular',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Warm Podi Crunch', 'Clarified Ghee Glaze', 'Aromatic Curry Leaves'],
      brewMethod: 'Steam Cooked & Wok Tossed',
      prepTime: '5-6 mins',
    },
    {
      id: 'si-dosa-3',
      name: 'Onion Rava Masala Dosa',
      category: 'South Indian Tiffins',
      description:
        'Lacy, ultra-crisp semolina crepe studded with roasted cumin, green chillies, curry leaves, and finely chopped caramelized shallots with seasoned potato filling.',
      price: 190,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Lacy Net Crunch', 'Caramelized Shallots', 'Cumin & Green Chilli'],
      brewMethod: 'Poured Slow on Screaming Hot Tawa',
      prepTime: '8-9 mins',
    },

    // -------------------------------------------------------------
    // Traditional Filter Kaapi & Coffee
    // -------------------------------------------------------------
    {
      id: 'c1',
      name: 'Kumbakonam Degree Filter Kaapi',
      category: 'Filter Kaapi & Coffee',
      description:
        'Traditional 80:20 Arabica & chicory blend slow-dripped through brass filters, aerated high into boiling full-cream milk, served in an authentic brass Dabara set.',
      price: 95,
      badge: 'Heritage Signature',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Deep Caramel Chicory', 'Velvety Froth', 'Roasted Dark Cocoa'],
      brewMethod: 'Traditional Brass Dabara Aeration',
      roastLevel: 'Dark Heritage Roast',
      prepTime: '3-4 mins',
    },
    {
      id: 'c2',
      name: 'Mysore Nugget Extra Bold (Single Origin)',
      category: 'Filter Kaapi & Coffee',
      description:
        'Premium shade-grown Mysore Nugget AA beans from Chikmagalur hills, medium-roasted and frothed with silky textured steamed milk.',
      price: 160,
      badge: 'Barista Choice',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Spiced Cardamom', 'Toasted Hazelnut', 'Silky Creaminess'],
      brewMethod: 'Aeropress / Precision Espresso',
      roastLevel: 'Medium-Dark',
      prepTime: '4-5 mins',
    },
    {
      id: 'c3',
      name: 'Signature Spanish Cortado',
      category: 'Filter Kaapi & Coffee',
      description:
        'Equal parts bold double ristretto espresso and silky textured condensed whole milk in a warm glass.',
      price: 195,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Dark Cacao', 'Roasted Hazelnut', 'Silky Condensed Milk'],
      brewMethod: 'Double Ristretto + Silky Milk',
      roastLevel: 'Medium-Dark',
      prepTime: '4 mins',
    },
    {
      id: 'c4',
      name: 'Classic Americano / Black Kaapi',
      category: 'Filter Kaapi & Coffee',
      description:
        'Bold pure Chikmagalur filter decoction or double espresso pulled long over hot mountain mineral water, deep crema and bold chocolate notes.',
      price: 130,
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Bittersweet Cocoa', 'Walnut', 'Smoky Oak'],
      brewMethod: 'Long Pulled Shot + Hot Mineral Water',
      roastLevel: 'Dark Roast',
      prepTime: '3 mins',
    },

    // -------------------------------------------------------------
    // Cold Brews & Coolers
    // -------------------------------------------------------------
    {
      id: 'cc1',
      name: 'Madurai Jil Jil Jigarthanda',
      category: 'Cold Brews & Coolers',
      description:
        'Madurai’s iconic royal cooler with natural almond gum (badam pisin), nannari herbal root syrup, condensed chilled milk, and a scoop of rich creamy ice cream.',
      price: 185,
      badge: 'Legendary Cooler',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Nannari Herbal Sweetness', 'Rich Condensed Milk', 'Jelly Texture'],
      brewMethod: 'Hand Assembled & Chilled',
      prepTime: '4 mins',
    },
    {
      id: 'cc2',
      name: 'Cold Filter Kaapi Frappé',
      category: 'Cold Brews & Coolers',
      description:
        'Double-strength Kumbakonam filter coffee decoction blended with chilled creamy milk, organic brown sugar, and crushed crystal ice with velvety froth.',
      price: 175,
      badge: 'Summer Best Seller',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Frosty Kaapi Froth', 'Caramelized Jaggery Touch', 'Roasted Chicory'],
      brewMethod: 'Blended Decoction + Crystal Ice',
      roastLevel: 'Dark Heritage Roast',
      prepTime: '4-5 mins',
    },
    {
      id: 'cc3',
      name: 'Panakam Botanical Shakerato',
      category: 'Cold Brews & Coolers',
      description:
        'Traditional South Indian refresher brewed with organic jaggery, crushed dry ginger (sukku), green cardamom, fresh lime, and sweet basil seeds over crystal ice.',
      price: 145,
      badge: 'Refreshing & Herbal',
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Zesty Lime', 'Spicy Dry Ginger', 'Jaggery Sweetness'],
      brewMethod: 'Cold Infused & Hand Shaken',
      prepTime: '3-4 mins',
    },
    {
      id: 'cc4',
      name: 'Nitro Cascara Cold Brew',
      category: 'Cold Brews & Coolers',
      description:
        '18-hour slow-steeped arabica cold brew infused with nitrogen for a velvety stout-like texture and sweet floral notes.',
      price: 210,
      dietary: 'vegan',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Dark Cherry', 'Cascara Berry', 'Velvety Stout Crema'],
      brewMethod: '18-Hour Slow Steep + Nitrogen Tap',
      prepTime: 'Instant Draft Pour',
    },

    // -------------------------------------------------------------
    // Quick Bites & Savories
    // -------------------------------------------------------------
    {
      id: 'qb1',
      name: 'Ghee Podi Bun Maska',
      category: 'Quick Bites & Savories',
      description:
        'Warm pillowy bakery bun toasted with golden desi ghee, generously slathered with homemade butter and sprinkled with spicy Gunpowder Podi.',
      price: 125,
      badge: 'Perfect with Kaapi',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Fluffy Warm Bun', 'Creamy Maska', 'Crunchy Spicy Podi'],
      prepTime: '5 mins',
    },
    {
      id: 'qb2',
      name: 'Malabar Paneer Parotta Roll',
      category: 'Quick Bites & Savories',
      description:
        'Flaky layered Kerala Malabar parotta wrapped around roasted cottage cheese tossed in shallot masala, coconut slivers, and fresh mint chutney.',
      price: 230,
      badge: 'Chef Special',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Flaky Crispy Parotta', 'Smoky Malabar Spices', 'Tender Paneer'],
      prepTime: '8 mins',
    },
    {
      id: 'qb3',
      name: 'Truffle Mushroom Melt Panini',
      category: 'Quick Bites & Savories',
      description:
        'Charred sourdough loaded with sautéed portobello, thyme, truffle oil, and molten gouda cheese.',
      price: 295,
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Wild Mushroom', 'Truffle Aroma', 'Molten Gouda'],
      prepTime: '8 mins',
    },

    // -------------------------------------------------------------
    // Desserts & Sweet Treats
    // -------------------------------------------------------------
    {
      id: 'd1',
      name: 'Melt-in-Mouth Mysore Pak',
      category: 'Desserts & Sweet Treats',
      description:
        'Traditional Karnataka royal delicacy made from fine roasted gram flour, generous pure desi ghee, and a fragrant pinch of cardamom. Melts instantly on the tongue.',
      price: 135,
      badge: 'Royal Favorite',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Pure Desi Ghee Melt', 'Roasted Besan Aroma', 'Velvety Sweetness'],
      prepTime: 'Immediate',
    },
    {
      id: 'd2',
      name: 'Saffron Pineapple Kesari Bath',
      category: 'Desserts & Sweet Treats',
      description:
        'Warm roasted semolina halwa infused with fresh pineapple chunks, saffron strands, golden fried cashews, and plump raisins soaked in desi ghee.',
      price: 145,
      badge: 'Traditional Classic',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Tangy Pineapple Bits', 'Saffron Fragrance', 'Crunchy Ghee Cashews'],
      prepTime: 'Immediate',
    },
    {
      id: 'd3',
      name: 'Filter Kaapi Tiramisu',
      category: 'Desserts & Sweet Treats',
      description:
        'Savoiardi ladyfingers soaked in dark Kumbakonam filter coffee decoction and jaggery essence, layered with whipped mascarpone cream and dusted with Valrhona cocoa.',
      price: 265,
      badge: 'Signature Fusion',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Deep Filter Kaapi Bitterness', 'Velvety Mascarpone', 'Valrhona Cocoa'],
      prepTime: 'Immediate',
    },
    {
      id: 'd4',
      name: 'Caramelized Basque Burnt Cheesecake',
      category: 'Desserts & Sweet Treats',
      description:
        'Ultra-creamy custard center with deep caramelized crust, served with fresh berry compote.',
      price: 275,
      badge: 'Best Seller',
      dietary: 'veg',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
      tastingNotes: ['Burned Sugar Crust', 'Creamy Custard', 'Berry Compote'],
      prepTime: 'Immediate',
    },
  ],
  gallery: [
    {
      id: 'g1',
      title: 'Crisp Ghee Roast Dosa & Chutneys',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85',
      aspect: 'wide',
      caption: 'Golden, paper-crisp dosa roasted in pure desi ghee, paired with freshly ground coconut and tomato chutneys.',
    },
    {
      id: 'g2',
      title: 'Traditional Brass Dabara Kaapi Pour',
      category: 'Coffee',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85',
      aspect: 'tall',
      caption: 'Poured from heights into brass dabaras to create that signature velvety, aromatic frothy head.',
    },
    {
      id: 'g3',
      title: 'Warm Pendant Canopy',
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
      aspect: 'wide',
      caption: 'Handcrafted woven pendant lighting casting a soft golden glow over natural teak and oak tables.',
    },
    {
      id: 'g4',
      title: 'Steamed Soft Thatte Idlis',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85',
      aspect: 'square',
      caption: 'Cloud-soft steamed plate idlis dusted with spiced Malgudi gunpowder podi and pure ghee.',
    },
    {
      id: 'g5',
      title: 'Crispy Golden Medu Vada',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85',
      aspect: 'square',
      caption: 'Crackling crunch on the outside, feather-soft inside with fresh curry leaves and black pepper.',
    },
    {
      id: 'g6',
      title: 'Evening Café Courtyard',
      category: 'Interiors',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85',
      aspect: 'wide',
      caption: 'Warm ambient lighting, comfortable booth seating, and soft conversations as dusk settles at Compylo.',
    },
    {
      id: 'g7',
      title: 'The Sunlit Reading Nook',
      category: 'Ambience',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85',
      aspect: 'tall',
      caption: 'A serene corner bathed in afternoon sunlight with quiet acoustics and comfortable seating.',
    },
    {
      id: 'g8',
      title: 'Warm Wood & Woven Textures',
      category: 'Details',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85',
      aspect: 'square',
      caption: 'Natural timber, earthy ceramics, and tactile details thoughtfully chosen to make you pause.',
    },
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'Kavitha Sundaram',
      role: 'Bangalore Native & Regular',
      rating: 5,
      comment:
        'Finding authentic Kumbakonam degree filter coffee served in traditional brass dabaras outside South India is rare, but Compylo has perfected it! The froth, aroma, and that crisp Ghee Roast Dosa with podi took me right back home.',
      date: 'Visited last week',
    },
    {
      id: 'rev-2',
      author: 'Rohan Mehra',
      role: 'Coffee & Food Enthusiast',
      rating: 5,
      comment:
        'The Steamed Thatte Idli drenched in ghee and gunpowder podi is unbelievable — melt-in-mouth soft! Paired with their Cold Filter Kaapi Frappé, it is easily the coolest South Indian café experience in town.',
      date: 'Visited 2 weeks ago',
    },
    {
      id: 'rev-3',
      author: 'Priya & Arvind',
      role: 'Weekend Breakfast Lovers',
      rating: 5,
      comment:
        'Our weekend morning ritual now. Crispy Mysore Masala Dosa, hot Medu Vadas, and steaming Dabara Kaapi in cozy wooden booths. The staff are so warm and welcoming!',
      date: 'Visited this month',
    },
  ],
}
