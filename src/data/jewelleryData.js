export const GOLD_RATES = {
  '22K': {
    karat: '22K',
    hallmark: '916',
    label: '22K · 916',
    ratePerGram: 7240,
    weightGrams: 62.4,
    makingPercent: 12,
    gstPercent: 3,
    goldValue: 451776,
    makingCharges: 54213,
    gstAmount: 15180,
    totalPrice: 521169
  },
  '18K': {
    karat: '18K',
    hallmark: '750',
    label: '18K · 750',
    ratePerGram: 5930,
    weightGrams: 60.8,
    makingPercent: 12,
    gstPercent: 3,
    goldValue: 360544,
    makingCharges: 43265,
    gstAmount: 12115,
    totalPrice: 415924,
    displayTotal: '4,35,924'
  }
};

export const COLLECTIONS_DATA = [
  {
    id: 'bridal',
    number: '01 / 04',
    title: 'Bridal',
    subtitle: 'Kundan, polki and jadau sets for the wedding day',
    displayWord: 'BRIDAL',
    wordColor: '#7D2927',
    bgColor: '#F5EDE6',
    tabBg: '#EFE0D9',
    ctaText: 'Shop bridal',
    featuredItem: {
      id: 'bridal-set-01',
      name: 'Rani Jadau Bridal Set',
      purity: '22K · 916',
      weight: '84.6 g',
      price: 785000
    }
  },
  {
    id: 'temple',
    number: '02 / 04',
    title: 'Temple',
    subtitle: 'Kasu malas and coin haars in antique 22K',
    displayWord: 'TEMPLE',
    wordColor: '#7B5B2A',
    bgColor: '#F2E5CE',
    tabBg: '#EAD29B',
    ctaText: 'Shop temple',
    featuredItem: {
      id: 'temple-set-02',
      name: 'Lakshmi Kasu Mala',
      purity: '22K · 916',
      weight: '52.0 g',
      price: 412000
    }
  },
  {
    id: 'daily',
    number: '03 / 04',
    title: 'Daily wear',
    subtitle: 'Light pieces under 10 g for every day',
    displayWord: 'DAILY WEAR',
    wordColor: '#686256',
    bgColor: '#F3EFE6',
    tabBg: '#EAE9DC',
    ctaText: 'Shop daily wear',
    featuredItem: {
      id: 'daily-set-03',
      name: 'Aभा Everyday Ensemble',
      purity: '22K · 916',
      weight: '6.8 g',
      price: 54200
    }
  },
  {
    id: 'gifting',
    number: '04 / 04',
    title: 'Gifting',
    subtitle: 'Rose gold and small treasures, gift-boxed',
    displayWord: 'GIFTING',
    wordColor: '#5B4454',
    bgColor: '#F4ECEB',
    tabBg: '#E6DFEA',
    ctaText: 'Shop gifting',
    featuredItem: {
      id: 'gifting-set-04',
      name: 'Hriday Rose Gold Bracelet',
      purity: '18K · 750',
      weight: '5.4 g',
      price: 42000
    }
  }
];

export const CLOCK_PIECES = [
  {
    hour: 12,
    timeLabel: '12:00 · NOON',
    name: 'Surya pendant',
    purity: '22K',
    weight: '4.2 g',
    price: 32400,
    priceFormatted: '₹32,400',
    type: 'pendant-coin',
    angle: 0
  },
  {
    hour: 1,
    timeLabel: '01:00 · AFTERNOON',
    name: 'Bindu studs',
    purity: '22K',
    weight: '1.8 g',
    price: 14200,
    priceFormatted: '₹14,200',
    type: 'studs-gold',
    angle: 30
  },
  {
    hour: 2,
    timeLabel: '02:00 · AFTERNOON',
    name: 'Tara hoops',
    purity: '22K',
    weight: '3.1 g',
    price: 24100,
    priceFormatted: '₹24,100',
    type: 'hoops-small',
    angle: 60
  },
  {
    hour: 3,
    timeLabel: '03:00 · AFTERNOON',
    name: 'Nitya band',
    purity: '22K',
    weight: '2.4 g',
    price: 18600,
    priceFormatted: '₹18,600',
    type: 'ring-band',
    angle: 90
  },
  {
    hour: 4,
    timeLabel: '04:00 · EVENING TEA',
    name: 'Abha drop chain',
    purity: '22K',
    weight: '4.8 g',
    price: 36900,
    priceFormatted: '₹36,900',
    type: 'chain-drop',
    angle: 120
  },
  {
    hour: 5,
    timeLabel: '05:00 · SUNDOWN',
    name: 'Rajwadi kada',
    purity: '22K',
    weight: '8.4 g',
    price: 64500,
    priceFormatted: '₹64,500',
    type: 'bangle-oval',
    angle: 150
  },
  {
    hour: 6,
    timeLabel: '06:00 · DUSK',
    name: 'Padma ring',
    purity: '22K',
    weight: '3.6 g',
    price: 27800,
    priceFormatted: '₹27,800',
    type: 'ring-floral',
    angle: 180
  },
  {
    hour: 7,
    timeLabel: '07:00 · EVENING',
    name: 'Ghungroo bracelet',
    purity: '22K',
    weight: '5.2 g',
    price: 40100,
    priceFormatted: '₹40,100',
    type: 'bracelet-charm',
    angle: 210
  },
  {
    hour: 8,
    timeLabel: '08:00 · DINNER',
    name: 'Moti drops',
    purity: '22K',
    weight: '2.9 g',
    price: 22500,
    priceFormatted: '₹22,500',
    type: 'earrings-drop',
    angle: 240
  },
  {
    hour: 9,
    timeLabel: '09:00 · SOIREE',
    name: 'Manik ring',
    purity: '22K',
    weight: '4.1 g',
    price: 31800,
    priceFormatted: '₹31,800',
    type: 'ring-ruby',
    angle: 270
  },
  {
    hour: 10,
    timeLabel: '10:00 · LATE DINNER',
    name: 'Sutra bracelet',
    purity: '22K',
    weight: '3.8 g',
    price: 29400,
    priceFormatted: '₹29,400',
    type: 'bracelet-chain',
    angle: 300
  },
  {
    hour: 11,
    timeLabel: '11:00 · NIGHT',
    name: 'Nazar chain',
    purity: '22K',
    weight: '6.5 g',
    price: 49800,
    priceFormatted: '₹49,800',
    type: 'chain-beaded',
    angle: 330
  }
];

export const HALLMARK_PILLARS = [
  {
    title: 'Hallmarked',
    subtitle: 'Every piece BIS 916 or 750'
  },
  {
    title: 'Certified',
    subtitle: 'Weight and stone certificate'
  },
  {
    title: 'Lifetime exchange',
    subtitle: 'Full gold value, any store'
  },
  {
    title: 'Itemised price',
    subtitle: 'Gold, making and GST shown'
  }
];

export const CRAFT_STEPS = [
  {
    num: '01',
    title: 'Sketch',
    subtitle: 'A pencil drawing at true scale',
    type: 'sketch'
  },
  {
    num: '02',
    title: 'Wax',
    subtitle: 'Carved, then cast in lost wax',
    type: 'wax'
  },
  {
    num: '03',
    title: 'Cast',
    subtitle: '22K poured at 1,064 °C',
    type: 'cast'
  },
  {
    num: '04',
    title: 'Set',
    subtitle: 'Kundan & polki set by hand',
    type: 'set'
  },
  {
    num: '05',
    title: 'Polish',
    subtitle: 'Buffed and BIS hallmarked',
    type: 'polish'
  }
];

export const FESTIVE_CARDS = [
  {
    id: 'festive-1',
    title: 'Lakshmi\ncoins & bars',
    priceLabel: 'From ₹8,000',
    price: 8000,
    purity: '24K · 999',
    weight: '1.0 g',
    type: 'coins',
    rotate: -14,
    translateY: 36
  },
  {
    id: 'festive-2',
    title: 'Rani bridal set',
    priceLabel: '₹7,85,000',
    price: 785000,
    purity: '22K · 916',
    weight: '84.6 g',
    type: 'bridal',
    rotate: -7,
    translateY: 14
  },
  {
    id: 'festive-3',
    title: 'Kovil temple set',
    priceLabel: '₹4,12,000',
    price: 412000,
    purity: '22K · 916',
    weight: '52.0 g',
    type: 'temple',
    rotate: 0,
    translateY: 0
  },
  {
    id: 'festive-4',
    title: 'Kadi bangles,\nset of six',
    priceLabel: '₹3,95,000',
    price: 395000,
    purity: '22K · 916',
    weight: '48.0 g',
    type: 'bangles',
    rotate: 7,
    translateY: 14
  },
  {
    id: 'festive-5',
    title: 'Gift box:\npendant & studs',
    priceLabel: '₹42,000',
    price: 42000,
    purity: '18K · 750',
    weight: '5.4 g',
    type: 'giftbox',
    rotate: 14,
    translateY: 36
  }
];

export const TESTIMONIALS = [
  {
    quote: '“The Mayuri Haar caught every light at the pheras.”',
    author: 'ANANYA S. · JAIPUR'
  },
  {
    quote: '“Exchanged my mother’s set at full value, no haggling.”',
    author: 'MEERA R. · MUMBAI'
  },
  {
    quote: '“Heavier in hand than we expected. True 916.”',
    author: 'KAVITA & ROHAN · DELHI'
  }
];

export const STORES = [
  { city: 'Jaipur', address: 'MI Road, Panch Batti', hours: '11:00 AM – 8:30 PM' },
  { city: 'New Delhi', address: 'Ambawatta One, Mehrauli', hours: '11:00 AM – 8:30 PM' },
  { city: 'Mumbai', address: 'Ropewalk Lane, Kala Ghoda', hours: '11:00 AM – 8:30 PM' },
  { city: 'Bengaluru', address: '100 Feet Road, Indiranagar', hours: '11:00 AM – 8:30 PM' }
];

