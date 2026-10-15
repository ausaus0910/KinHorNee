/* =========================================================
   data.js  |  KinHorNee (กินหอนี้)
   Owner: Partner A  (Feature 3: data as an array of objects)

   All the menu data lives in this file. app.js reads these
   arrays and draws the page, so there is no menu HTML anywhere else.

   DEMO DATA: every shop, dish and price below is made up.
   Replace it with the real menus you collect.
   ========================================================= */

// ---------- Reusable add-ons (toppings) ----------
// A dish lists the add-ons it allows, e.g. addOns: [EGG, EXTRA_RICE]
const EGG_6          = { name: "ไข่ดาว (Fried egg)", price: 6 };
const BOILED_EGG     = { name: "ไข่ต้ม (Boiled egg)", price: 8 };
const EXTRA_RICE     = { name: "ข้าวเพิ่ม (Extra rice)", price: 5 };
const EXTRA_MEAT     = { name: "เนื้อสัตว์เพิ่ม (Extra meat)", price: 15 };
const EXTRA_NOODLE   = { name: "เส้นเพิ่ม (Extra noodles)", price: 5 };
const MEATBALLS      = { name: "ลูกชิ้นเพิ่ม (Extra meatballs)", price: 10 };
const LARGE_5        = { name: "พิเศษ (Large size)", price: 5 };
const LARGE_10       = { name: "พิเศษ (Large size)", price: 10 };
const PEARLS         = { name: "ไข่มุก (Pearls)", price: 10 };
const WHIP           = { name: "วิปครีม (Whipped cream)", price: 10 };
const EXTRA_SHOT     = { name: "เพิ่มช็อตกาแฟ (Extra espresso)", price: 10 };
const STICKY_RICE_5  = { name: "ข้าวเหนียว (Sticky rice)", price: 10 };
const STICKY_RICE_10 = { name: "ข้าวเหนียว (Sticky rice)", price: 10 };
const PEANUTS        = { name: "ถั่วลิสง (Peanuts)", price: 5 };

// ---------- Dorms ----------
// To add Dorm 5 or 6: copy one object, then add shops with dormId "d5" / "d6".
const dorms = [
  { id: "d3", name: "Dorm 3", img: "images/Dorm3/dorm3-pic.jpg", alt: "Dorm 3 building" },
  { id: "d4", name: "Dorm 4", img: "images/Dorm4/dorm4-pic.jpg", alt: "Dorm 4 building" }
];

// ---------- Shops ----------
// category = what the shop sells (used by the filter chips)
// checked  = the date we last checked the prices
const shops = [
  // Dorm 3 
  { id: "s301", dormId: "d3", name: "ข้าวมันไก่ยินดี", nameEn: "Yin Dee Chicken Rice", 
    category: "Cooked to Order",
    img: "images/Dorm3/s301.jpg", alt: "",
    menuImg: "images/Dorm3/s301.jpg", menuAlt: "", checked: "2026-10-10" },

  { id: "s302", dormId: "d3", name: "ก๋วยเตี๋ยวต้มยำ หอชาย3", nameEn: "Tom Yum Noodles Dorm3", 
    category: "Noodles",
    img: "images/Dorm3/s302.jpg", alt: "",
    menuImg: "images/Dorm3/s302.jpg", menuAlt: "", checked: "2026-10-09" },
    
  { id: "s303", dormId: "d3", name: "ร้านส้มตำ & ของทอด", nameEn: "Papaya Salad & Fried Food", 
    category: "Salad & Fried",
    img: "images/Dorm3/s303.jpg", alt: "",
    menuImg: "images/Dorm3/s303.jpg", menuAlt: "", checked: "2026-10-11" },

  { id: "s304", dormId: "d3", name: "จุดจำหน่ายเครื่องดื่ม หอชาย3", nameEn: "Drinks Center", 
    category: "Drinks",
    img: "images/Dorm3/s304.jpg", alt: "",
    menuImg: "images/Dorm3/s304.jpg", menuAlt: "", checked: "2026-10-11" },

  // Dorm 4 
  { id: "s401", dormId: "d4", name: "ร้านเก้าแต้ม", nameEn: "9P Cooked to Order", 
    category: "Cooked to Order",
    img: "images/Dorm4/s401.jpg", alt: "",
    menuImg: "images/Dorm4/s401.jpg", menuAlt: "", checked: "2026-10-10" },

  { id: "s402", dormId: "d4", name: "ก๋วยเตี๋ยวนายต้น", nameEn: "Mr.Ton Noodles", 
    category: "Noodles",
    img: "images/Dorm4/s402.jpg", alt: "",
    menuImg: "images/Dorm4/s402.jpg", menuAlt: "", checked: "2026-10-10" },

  { id: "s403", dormId: "d4", name: "สตางค์ไก่แซ่บ", nameEn: "Stang Zap Chicken", 
    category: "Fried Food",
    img: "images/Dorm4/s403.jpg", alt: "",
    menuImg: "images/Dorm4/s403.jpg", menuAlt: "", checked: "2026-10-10" },

  { id: "s404", dormId: "d4", name: "ปังเย็น", nameEn: "Pan Yen", 
    category: "Drinks & Desserts",
    img: "images/Dorm4/s404.jpg", alt: "",
    menuImg: "images/Dorm4/s404.jpg", menuAlt: "", checked: "2026-10-10" },
];

// ---------- Dish categories ----------
// Order here = order of the sections inside the shop modal.
const dishCategories = ["Rice", "Noodles", "Fried & Grilled", "Soups", "Salads", "Snacks", "Drinks", "Desserts", "Other"];

// ---------- Dishes (one object per dish) ----------
// id is a text like "m1" and must be unique. shopId says which shop sells it.
const dishes = [
  // s301 Yin Dee Chicken Rice
  { id: "m1", shopId: "s301", category: "Rice",
    name: "ข้าวมันไก่", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m2", shopId: "s301", category: "Rice",
    name: "ข้าวไก่ทอด", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m3", shopId: "s301", category: "Rice",
    name: "ข้าวหมูแดง", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m4", shopId: "s301", category: "Rice",
    name: "ข้าวหมูทอด", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m5", shopId: "s301", category: "Rice",
    name: "ข้าวไก่ย่าง", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m6", shopId: "s301", category: "Rice",
    name: "ข้าวคอหมูย่าง", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m7", shopId: "s301", category: "Rice",
    name: "ข้าวขาหมู", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  //  s302 Tom Yum Noodles Dorm3
  { id: "m8", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งต้มยำหมู", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m9", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งต้มยำทะเล", nameEn: "",
    price: 40, addOns: [LARGE_5] },

  { id: "m10", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งซีอิ๊วหมู", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m12", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งซีอิ๊วทะเล", nameEn: "",
    price: 40, addOns: [LARGE_5] },

  { id: "m13", shopId: "s302", category: "Noodles",
    name: "เย็นตาโฟ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m14", shopId: "s302", category: "Noodles",
    name: "เย็นตาโฟต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m15", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m16", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูน้ำตก", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m17", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูต้มยำน้ำตก", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m18", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวต้มยำทะเล", nameEn: "",
    price: 40, addOns: [LARGE_5] },

  { id: "m19", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวปลาน้ำใส/ต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m20", shopId: "s302", category: "Noodles",
    name: "บะหมี่เกี๊ยวน้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m21", shopId: "s302", category: "Noodles",
    name: "เกี๊ยวน้ำ น้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m22", shopId: "s302", category: "Noodles",
    name: "สุกี้หมูน้ำ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m23", shopId: "s302", category: "Noodles",
    name: "สุกี้ทะเล", nameEn: "",
    price: 40, addOns: [LARGE_5] },

  { id: "m24", shopId: "s302", category: "Noodles",
    name: "เกาเหลาหมู น้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE_5] },

  { id: "m25", shopId: "s302", category: "Noodles",
    name: "เกาเหลาทะเล น้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 40, addOns: [LARGE_5] },

];
