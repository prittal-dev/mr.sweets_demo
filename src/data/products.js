/**
 * Official Mr. Sweet Product Catalog & Commercial Price List
 * Matched with official Master Price List PDF
 * Direct Trade Contact: Mr. Prince Ghai (+91 93500 60606)
 * Address: 130, Library Road, Azad Market, Delhi - 110006
 */

export const pdfMeta = {
  effectiveDate: '01-06-2026',
  contactPerson: 'Mr. Prince Ghai',
  phone: '+91 93500 60606',
  address: '130, Library Road, Azad Market, Delhi - 110006, India',
  activeOffer: '',
  termsAndConditions: [
    'ALL RATES ARE FOR WHOLESALE TRADE.',
    'NO FURTHER DISCOUNT WILL BE GIVEN AFTER THIS PRICE LIST.',
    'ALL RATES INCLUDING OF GST.',
    'PAYMENT SYSTEM BILL TO BILL.'
  ]
};

export const showcaseProducts = [
  // =========================================================================
  // 1. CREAM WAFFER
  // =========================================================================
  {
    id: 'cw-1',
    srNo: 1,
    name: 'Jumbo Fun Waffer (4 Flavour)',
    category: 'Cream Waffer',
    categorySlug: 'cream-waffer',
    section: 'Cream Waffer',
    packing: '1X16X40 PCS',
    format: 'Jar / 40 Pcs',
    boxMrp: 200,
    unitMrp: '₹5',
    flavors: ['Chocolate', 'Mango', 'Strawberry', 'Orange'],
    image: ''
  },
  {
    id: 'cw-2',
    srNo: 2,
    name: 'Swiss Waffer (4 Flavour)',
    category: 'Cream Waffer',
    categorySlug: 'cream-waffer',
    section: 'Cream Waffer',
    packing: '1X9X60 PCS',
    format: 'Big Balti / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    flavors: ['Chocolate', 'Mango', 'Strawberry', 'Orange'],
    flavorImages: {
      'Mango': '/swiss.png',
      'Chocolate': '/swiss choclate.png',
      'Strawberry': '/swiss stawberry.png',
      'Orange': '/swiss orange.png'
    },
    image: '/swiss.png'
  },
  {
    id: 'cw-3',
    srNo: 3,
    name: 'Dairy Waffer Jar',
    category: 'Cream Waffer',
    categorySlug: 'cream-waffer',
    section: 'Cream Waffer',
    packing: '1X24X30 PCS',
    format: 'Jar / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'cw-4',
    srNo: 4,
    name: 'Oorley Waffer Jar',
    category: 'Cream Waffer',
    categorySlug: 'cream-waffer',
    section: 'Cream Waffer',
    packing: '1X24X30 PCS',
    format: 'Jar / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'cw-5',
    srNo: 5,
    name: 'Cream Waffer Jar (4 Flavour)',
    category: 'Cream Waffer',
    categorySlug: 'cream-waffer',
    section: 'Cream Waffer',
    packing: '1X24X30 PCS',
    format: 'Jar / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    flavors: ['Chocolate', 'Mango', 'Strawberry', 'Orange'],
    image: ''
  },

  // =========================================================================
  // 2. WAFFER STICKS
  // =========================================================================
  {
    id: 'ws-6',
    srNo: 6,
    name: 'Dairy Roll (Blue, Red, Dark)',
    category: 'Waffer Sticks',
    categorySlug: 'waffer-sticks',
    section: 'Waffer Sticks',
    packing: '1X32X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    rate: '72/-',
    image: '/daily-rolls-box-cutout.png'
  },
  {
    id: 'ws-7',
    srNo: 7,
    name: 'Romeo Rolls',
    category: 'Waffer Sticks',
    categorySlug: 'waffer-sticks',
    section: 'Waffer Sticks',
    packing: '1X32X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    rate: '72/-',
    image: '/chocolate wafer roll.png'
  },
  {
    id: 'ws-8',
    srNo: 8,
    name: 'Dairy Rolls (Milky)',
    category: 'Waffer Sticks',
    categorySlug: 'waffer-sticks',
    section: 'Waffer Sticks',
    packing: '1X32X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    rate: '72/-',
    image: '/dairy-rolls-blue.png'
  },
  {
    id: 'ws-9',
    srNo: 9,
    name: 'Oorly 3 Stick',
    category: 'Waffer Sticks',
    categorySlug: 'waffer-sticks',
    section: 'Waffer Sticks',
    packing: '1X24X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/orle 3 stix.png'
  },
  {
    id: 'ws-10',
    srNo: 10,
    name: 'Funstick Jar',
    category: 'Waffer Sticks',
    categorySlug: 'waffer-sticks',
    section: 'Waffer Sticks',
    packing: '1X24X33 PCS',
    format: 'Jar / 33 Pcs',
    boxMrp: 165,
    unitMrp: '₹5',
    kcPrice: 125,
    image: ''
  },
  {
    id: 'ws-11',
    srNo: 11,
    name: 'Funstick Box',
    category: 'Waffer Sticks',
    categorySlug: 'waffer-sticks',
    section: 'Waffer Sticks',
    packing: '1X24X60 PCS',
    format: 'Box / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    image: ''
  },

  // =========================================================================
  // 3. CONES
  // =========================================================================
  {
    id: 'cn-12',
    srNo: 12,
    name: 'Dairy Cone Box (Small)',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X24X30 PCS',
    format: 'Small Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/dairy-cone-box.png'
  },
  {
    id: 'cn-13',
    srNo: 13,
    name: 'Dairy Cone Box (Big)',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X12X50 PCS',
    format: 'Big Box / 50 Pcs',
    boxMrp: 250,
    unitMrp: '₹5',
    kcPrice: 190,
    image: '/dairy cone.png'
  },
  {
    id: 'cn-14',
    srNo: 14,
    name: 'Dairy Cone Jar',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X12X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    kcPrice: 240,
    image: '/dairy-cone-jar.png'
  },
  {
    id: 'cn-15',
    srNo: 15,
    name: 'Kick Cone Box (Small)',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X24X30 PCS',
    format: 'Small Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    image: '/kick.png'
  },
  {
    id: 'cn-16',
    srNo: 16,
    name: 'Kick Cone Box (Big)',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X12X50 PCS',
    format: 'Big Box / 50 Pcs',
    boxMrp: 250,
    unitMrp: '₹5',
    kcPrice: 190,
    image: '/kick.png'
  },
  {
    id: 'cn-17',
    srNo: 17,
    name: 'Kick Cone Jar',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X12X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'cn-18',
    srNo: 18,
    name: 'Romeo Cone Box (Small)',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X24X30 PCS',
    format: 'Small Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/romeo choco cone.png'
  },
  {
    id: 'cn-19',
    srNo: 19,
    name: 'Romeo Cone Box (Big)',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X12X50 PCS',
    format: 'Big Box / 50 Pcs',
    boxMrp: 250,
    unitMrp: '₹5',
    kcPrice: 190,
    image: '/romeo-cone-cutout.png'
  },
  {
    id: 'cn-20',
    srNo: 20,
    name: 'Romeo Cone Jar',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X12X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    kcPrice: 240,
    image: ''
  },
  {
    id: 'cn-21',
    srNo: 21,
    name: 'Spidy Cone Jar',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X12X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    kcPrice: 240,
    image: ''
  },
  {
    id: 'cn-22',
    srNo: 22,
    name: 'Spidy Cone Box (Small Box)',
    category: 'Cones',
    categorySlug: 'cones',
    section: 'Cones',
    packing: '1X24X30 PCS',
    format: 'Small Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: ''
  },

  // =========================================================================
  // 4. SURPRISE EGGS CATEGORIES
  // =========================================================================
  {
    id: 'se-23',
    srNo: 23,
    name: 'Mr. Joe Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X16X60 PCS',
    format: 'Jar / 60 Pcs (Light Toys 2-3 Pcs)',
    boxMrp: 300,
    unitMrp: '₹5',
    kcPrice: 235,
    image: '/mr.joe.png'
  },
  {
    id: 'se-24',
    srNo: 24,
    name: 'Mr. Joe Box',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X30X30 PCS',
    format: 'Box / 30 Pcs (Light 1-2 Pcs)',
    boxMrp: 150,
    unitMrp: '₹5',
    image: '/mr.joe_milky_choce.png'
  },
  {
    id: 'se-25',
    srNo: 25,
    name: 'Krispy Toy Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X16X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    image: '/krispy toy.png'
  },
  {
    id: 'se-26',
    srNo: 26,
    name: 'Krispy Toy Box (33 Pcs Box)',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X24X33 PCS',
    format: 'Box / 33 Pcs (1-2 Pcs Light)',
    boxMrp: 165,
    unitMrp: '₹5',
    image: '/krispy toy box.jpeg'
  },
  {
    id: 'se-27',
    srNo: 27,
    name: 'Junior Joe Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X16X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    image: '/junglor joe.png'
  },
  {
    id: 'se-28',
    srNo: 28,
    name: 'Super Heroes Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X16X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    kcPrice: 220,
    image: '/super heros box.png'
  },
  {
    id: 'se-29',
    srNo: 29,
    name: 'Super Heroes Box',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X24X33 PCS',
    format: 'Box / 33 Pcs (Light 1-2 Pcs)',
    boxMrp: 165,
    unitMrp: '₹5',
    image: '/super_heroes.png'
  },
  {
    id: 'se-30',
    srNo: 30,
    name: 'Double Enjoy Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X16X60 PCS',
    format: 'Jar / 60 Pcs',
    boxMrp: 450,
    unitMrp: '₹15',
    kcPrice: 240,
    image: ''
  },
  {
    id: 'se-32',
    srNo: 32,
    name: 'Kids Toy 25/- Pcs Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X12X15 PCS',
    format: 'PET Jar / 15 Pcs',
    boxMrp: 375,
    unitMrp: '₹25',
    image: ''
  },
  {
    id: 'se-33',
    srNo: 33,
    name: 'Kids Toy PVC Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X12X15 PCS',
    format: 'PVC Jar / 15 Pcs',
    boxMrp: 375,
    unitMrp: '₹25',
    image: ''
  },
  {
    id: 'se-34',
    srNo: 34,
    name: 'Mr. Joe PVC Jar',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X9X60 PCS',
    format: 'PVC Jar / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'se-35',
    srNo: 35,
    name: 'Junior Joe Plastic Container',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X12X60 PCS',
    format: 'Bucket / 60 Pcs (Without Light)',
    boxMrp: 300,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'se-36',
    srNo: 36,
    name: 'Krispy Toy Plastic Container',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X12X60 PCS',
    format: 'Bucket / 60 Pcs',
    boxMrp: 300,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'se-37',
    srNo: 37,
    name: 'Double Egg Plastic Container',
    category: 'Surprise Eggs',
    categorySlug: 'surprise-eggs',
    section: 'Surprise Eggs',
    packing: '1X12X60 PCS',
    format: 'Bucket / 60 Pcs (2-3 Pcs Light)',
    boxMrp: 450,
    unitMrp: '₹15',
    image: ''
  },

  // =========================================================================
  // 5. CHOCOLATE COATED WAFFER
  // =========================================================================
  {
    id: 'cw-38',
    srNo: 38,
    name: 'Snak Break Box',
    category: 'Chocolate Coated Waffer',
    categorySlug: 'chocolate-waffer',
    section: 'Chocolate Coated Waffer',
    packing: '1X24X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/snack break.png'
  },
  {
    id: 'cw-39',
    srNo: 39,
    name: 'Kick Long Size Plastic Container',
    category: 'Chocolate Coated Waffer',
    categorySlug: 'chocolate-waffer',
    section: 'Chocolate Coated Waffer',
    packing: '1X18X40 PCS',
    format: 'Tiffin Container / 40 Pcs',
    boxMrp: 200,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'cw-40',
    srNo: 40,
    name: 'Oorley Long Size Plastic Container',
    category: 'Chocolate Coated Waffer',
    categorySlug: 'chocolate-waffer',
    section: 'Chocolate Coated Waffer',
    packing: '1X18X40 PCS',
    format: 'Tiffin Container / 40 Pcs',
    boxMrp: 200,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'cw-41',
    srNo: 41,
    name: 'Snikar Long Size Plastic Container',
    category: 'Chocolate Coated Waffer',
    categorySlug: 'chocolate-waffer',
    section: 'Chocolate Coated Waffer',
    packing: '1X18X40 PCS',
    format: 'Tiffin Container / 40 Pcs',
    boxMrp: 200,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'cw-42',
    srNo: 42,
    name: 'Snackley Long Size Plastic Container',
    category: 'Chocolate Coated Waffer',
    categorySlug: 'chocolate-waffer',
    section: 'Chocolate Coated Waffer',
    packing: '1X18X40 PCS',
    format: 'Tiffin Container / 40 Pcs',
    boxMrp: 200,
    unitMrp: '₹5',
    image: ''
  },
  {
    id: 'cw-43',
    srNo: 43,
    name: 'Too Much Long Size Plastic Container',
    category: 'Chocolate Coated Waffer',
    categorySlug: 'chocolate-waffer',
    section: 'Chocolate Coated Waffer',
    packing: '1X18X40 PCS',
    format: 'Tiffin Container / 40 Pcs',
    boxMrp: 200,
    unitMrp: '₹5',
    image: ''
  },

  // =========================================================================
  // 6. CARAMEL COATED WAFFERS
  // =========================================================================
  {
    id: 'ccw-44',
    srNo: 44,
    name: 'Nuty Max 10/-',
    category: 'Caramel Coated Waffers',
    categorySlug: 'caramel-waffers',
    section: 'Caramel Coated Waffers',
    packing: '1X18X24 PCS',
    format: 'Box / 24 Pcs',
    boxMrp: 240,
    unitMrp: '₹10',
    kcPrice: 190,
    image: '/nuty max.png'
  },
  {
    id: 'ccw-45',
    srNo: 45,
    name: 'Nuty Max 5/- Box',
    category: 'Caramel Coated Waffers',
    categorySlug: 'caramel-waffers',
    section: 'Caramel Coated Waffers',
    packing: '1X24X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/nutymax-cutout.png'
  },
  {
    id: 'ccw-46',
    srNo: 46,
    name: 'Brawo 5/- Box',
    category: 'Caramel Coated Waffers',
    categorySlug: 'caramel-waffers',
    section: 'Caramel Coated Waffers',
    packing: '1X24X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/brawo-box-cutout.png'
  },
  {
    id: 'ccw-47',
    srNo: 47,
    name: 'Nuty Max Plastic Container',
    category: 'Caramel Coated Waffers',
    categorySlug: 'caramel-waffers',
    section: 'Caramel Coated Waffers',
    packing: '1X24X30 PCS',
    format: 'Tiffin Container / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    image: '/nuty max box .png'
  },
  {
    id: 'ccw-48',
    srNo: 48,
    name: 'Brawo Plastic Container',
    category: 'Caramel Coated Waffers',
    categorySlug: 'caramel-waffers',
    section: 'Caramel Coated Waffers',
    packing: '1X24X30 PCS',
    format: 'Tiffin Container / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    image: '/brawo box.png'
  },

  // =========================================================================
  // 7. CHEWING GUM
  // =========================================================================
  {
    id: 'cg-49',
    srNo: 49,
    name: 'Chewing Gum 10 Pcs Blister Pack',
    category: 'Chewing Gum',
    categorySlug: 'chewing-gum',
    section: 'Chewing Gum',
    packing: '1X60X72 PCS',
    format: 'Blister Petta / 72 Pcs',
    boxMrp: 70,
    unitMrp: '₹1',
    image: '/chingum.png'
  },
  {
    id: 'cg-50',
    srNo: 50,
    name: 'Chewing Gum 25 Pcs Blister Pack',
    category: 'Chewing Gum',
    categorySlug: 'chewing-gum',
    section: 'Chewing Gum',
    packing: '1X60X72 PCS',
    format: 'Blister Petta / 72 Pcs',
    boxMrp: 70,
    unitMrp: '₹1',
    image: '/chungum square .png'
  },
  {
    id: 'cg-51',
    srNo: 51,
    name: 'Extra Cool Chewing Gum',
    category: 'Chewing Gum',
    categorySlug: 'chewing-gum',
    section: 'Chewing Gum',
    packing: '1X18X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 115,
    image: '/mint bubble gum.png'
  },

  // =========================================================================
  // 8. CANDIES / TOFFEE
  // =========================================================================
  {
    id: 'ct-52',
    srNo: 52,
    name: 'Gold Coin Jar',
    category: 'Candies / Toffee',
    categorySlug: 'candies-toffee',
    section: 'Candies / Toffee',
    packing: '1X40X150 PCS',
    format: 'Jar / 150 Pcs',
    boxMrp: 150,
    unitMrp: '₹1',
    image: ''
  },
  {
    id: 'ct-53',
    srNo: 53,
    name: 'Gold Coin Handbag Plastic Container',
    category: 'Candies / Toffee',
    categorySlug: 'candies-toffee',
    section: 'Candies / Toffee',
    packing: '1X48X150 PCS',
    format: 'Handbag Tiffin / 150 Pcs',
    boxMrp: 150,
    unitMrp: '₹1',
    image: '/gold coin.png'
  },
  {
    id: 'ct-54',
    srNo: 54,
    name: 'Star Candy Blister Pack',
    category: 'Candies / Toffee',
    categorySlug: 'candies-toffee',
    section: 'Candies / Toffee',
    packing: '1X60X57 PCS',
    format: 'Blister Petta / 57 Pcs',
    boxMrp: 60,
    unitMrp: '₹1',
    image: ''
  },
  {
    id: 'ct-55',
    srNo: 55,
    name: 'Gems 21 Shots Blister Pack',
    category: 'Candies / Toffee',
    categorySlug: 'candies-toffee',
    section: 'Candies / Toffee',
    packing: '1X48X70 PCS',
    format: 'Petta / 70 Pcs',
    boxMrp: 70,
    unitMrp: '₹1',
    image: ''
  },

  // =========================================================================
  // 9. JELLIES
  // =========================================================================
  {
    id: 'jl-56',
    srNo: 56,
    name: 'Mr. Sour Belt',
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    image: '/sour belt.png'
  },
  {
    id: 'jl-57',
    srNo: 57,
    name: 'New Crazy Lip (Tube Liquid Jelly)',
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/crazy lips.png'
  },
  {
    id: 'jl-58',
    srNo: 58,
    name: 'Dippers Gummy',
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X30 PCS',
    format: 'Jar / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    image: '/jelly injection.png'
  },
  {
    id: 'jl-59',
    srNo: 59,
    name: 'Fun Pops Jelly Pop (Teddy)',
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X30 PCS',
    format: 'Box / 30 Pcs',
    boxMrp: 150,
    unitMrp: '₹5',
    kcPrice: 120,
    image: '/fun pops.png'
  },
  {
    id: 'jl-60',
    srNo: 60,
    name: 'Ice Cream Jelly Pop',
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X24 PCS',
    format: 'Box / 24 Pcs',
    boxMrp: 120,
    unitMrp: '₹5',
    kcPrice: 95,
    image: '/ice cream jelly pops.png'
  },
  {
    id: 'jl-61',
    srNo: 61,
    name: 'Hunny Bunny Jelly Pop',
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X24 PCS',
    format: 'Box / 24 Pcs',
    boxMrp: 120,
    unitMrp: '₹5',
    kcPrice: 95,
    image: '/hunny bunny pops.png'
  },
  {
    id: 'jl-62',
    srNo: 62,
    name: 'Cartoon Jelly Pop',
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X24 PCS',
    format: 'Box / 24 Pcs',
    boxMrp: 120,
    unitMrp: '₹5',
    kcPrice: 95,
    image: ''
  },
  {
    id: 'jl-63',
    srNo: 63,
    name: "Micky Pop Jelly Pop's",
    category: 'Jellies',
    categorySlug: 'jellies',
    section: 'Jellies',
    packing: '1X24X24 PCS',
    format: 'Box / 24 Pcs',
    boxMrp: 120,
    unitMrp: '₹5',
    kcPrice: 95,
    image: ''
  }
];

export const iconicProducts = showcaseProducts;
export const hauteProducts = showcaseProducts;
export const homeFeaturedProducts = showcaseProducts.filter((p) => Boolean(p.image));
