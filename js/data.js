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
const EGG          = { name: "ไข่ดาว (Fried egg)",               price: 10 };
const BOILED_EGG   = { name: "ไข่ต้ม (Boiled egg)",              price: 8 };
const EXTRA_RICE   = { name: "ข้าวเพิ่ม (Extra rice)",           price: 5 };
const EXTRA_MEAT   = { name: "เนื้อสัตว์เพิ่ม (Extra meat)",     price: 15 };
const EXTRA_NOODLE = { name: "เส้นเพิ่ม (Extra noodles)",        price: 5 };
const MEATBALLS    = { name: "ลูกชิ้นเพิ่ม (Extra meatballs)",   price: 10 };
const LARGE        = { name: "พิเศษ (Large size)",               price: 5 };
const PEARLS       = { name: "ไข่มุก (Pearls)",                  price: 10 };
const WHIP         = { name: "วิปครีม (Whipped cream)",          price: 10 };
const EXTRA_SHOT   = { name: "เพิ่มช็อตกาแฟ (Extra espresso)",   price: 10 };
const STICKY_RICE  = { name: "ข้าวเหนียว (Sticky rice)",         price: 10 };
const PEANUTS      = { name: "ถั่วลิสง (Peanuts)",               price: 5 };

// Add-ons of the real Dorm 4 shops (taken from their menu boards)
const SPECIAL_5      = { name: "พิเศษ (Special size)",                       price: 5 };
const SPECIAL_10     = { name: "พิเศษ (Special size)",                       price: 10 };
const EXTRA_BONELESS = { name: "ไก่ไร้กระดูกเพิ่ม (Extra boneless chicken)",  price: 15 };
const EXTRA_WING     = { name: "ปีกบนเพิ่ม (Extra upper wing)",               price: 10 };
const FRAPPE         = { name: "ปั่น (Frappe)",                              price: 5 };
const SMOOTHIE       = { name: "ปั่น (Smoothie)",                            price: 5 };
const WITH_MILK      = { name: "ใส่นม (With milk)",                          price: 5 };
const WITH_YOGURT    = { name: "ใส่โยเกิร์ต (With yogurt)",                  price: 10 };
const WITH_YOGURT_5  = { name: "ใส่โยเกิร์ต (With yogurt)",                  price: 5 };
const TOP_PEARL      = { name: "ไข่มุก (Pearls)",                            price: 5 };
const TOP_COCOA      = { name: "โกโก้ครั้นช์ (Cocoa crunch)",                price: 5 };
const TOP_PIPO       = { name: "ปิโป้ (Pipo jelly)",                         price: 5 };
const TOP_MALLOW     = { name: "มาร์ชเมลโลว์ (Marshmallow)",                 price: 5 };
const TOP_CORNFLAKE  = { name: "คอนเฟลก (Cornflakes)",                       price: 5 };
const TOP_CHOCCHIP   = { name: "ช็อกโกแลตชิป (Chocolate chips)",             price: 15 };
const TOP_WHIP       = { name: "วิปครีม (Whipped cream)",                    price: 15 };
const PANG_TOPPINGS  = [TOP_PEARL, TOP_COCOA, TOP_PIPO, TOP_MALLOW, TOP_CORNFLAKE, TOP_CHOCCHIP, TOP_WHIP];

// ---------- Dorms ----------
// To add Dorm 5 or 6: copy one object, then add shops with dormId "d5" / "d6".
const dorms = [
  { id: "d3", name: "Dorm 3", img: "images/Dorm3/dorm3-pic.jpg", alt: "Dorm 3 building with its canteen on the ground floor" },
  { id: "d4", name: "Dorm 4", img: "images/Dorm4/dorm4-pic.jpg", alt: "Dorm 4 building and the covered canteen next to it" }
];

// ---------- Shops ----------
// category = what the shop sells (used by the filter chips)
// checked  = the date we last checked the prices
const shops = [
  // >>> PASTE YOUR TWO DORM 3 SHOP OBJECTS HERE (s301 and s302), then keep the rest below <<<

  // Dorm 3 
  { id: "s301", dormId: "d3", name: "ร้านข้าวมันไก่ยินดี", nameEn: "Yin Dee Chicken Rice", category: "Snacks",   
    img: "images/Dorm3/s301.jpg", alt: "",
    menuImg: "images/Dorm3/s301.jpg", menuAlt: "", checked: "16 Oct 2026" },
  
  { id: "s302", dormId: "d3", name: "ก๋วยเตี๋ยวต้มยำ หอชาย 3", nameEn: "Fried Snacks & Som Tam", category: "Noodles",   
    img: "images/Dorm3/s302.jpg", alt: "",
    menuImg: "images/Dorm3/s302.jpg", menuAlt: "", checked: "16 Oct 2026" },
  
  { id: "s303", dormId: "d3", name: "ร้านของทอดและส้มตำ", nameEn: "Fried Snacks & Som Tam", category: "Snacks",   
    img: "images/Dorm3/s303.jpg", alt: "",
    menuImg: "images/Dorm3/s303.jpg", menuAlt: "", checked: "16 Oct 2026" },
  
  { id: "s304", dormId: "d3", name: "จุดจำหน่ายเครื่องดื่ม", nameEn: "Drinks Point", category: "Drinks",
    img: "images/Dorm3/s304.jpg", alt: "",
    menuImg: "images/Dorm3/s304.jpg", menuAlt: "", checked: "16 Oct 2026" },

  // Dorm 4 
  { id: "s401", dormId: "d4", name: "ร้านเก๊าแต้ม", nameEn: "Kao Taem Cooked to Order", category: "Cooked to Order",
    img: "images/Dorm4/s401.jpg", alt: "",
    menuImg: "images/Dorm4/s401.jpg", menuAlt: "", checked: "16 Oct 2026" },
  
  { id: "s402", dormId: "d4", name: "ก๋วยเตี๋ยวนายต้น", nameEn: "Nai Ton Noodles", category: "Noodles",
    img: "images/Dorm4/s402.jpg", alt: "",
    menuImg: "images/Dorm4/s402.jpg", menuAlt: "", checked: "16 Oct 2026" },
  
  { id: "s403", dormId: "d4", name: "สตางค์ไก่แซ่บ", nameEn: "Satang Gai Saep (Branch 1)", category: "Fried Chicken",
    img: "images/Dorm4/s403.jpg", alt: "",
    menuImg: "images/Dorm4/s403.jpg", menuAlt: "", checked: "16 Oct 2026" },
  
  { id: "s404", dormId: "d4", name: "ปังเย็น", nameEn: "Pang Yen Drinks", category: "Drinks",
    img: "images/Dorm4/s404.jpg", alt: "",
    menuImg: "images/Dorm4/s404.jpg", menuAlt: "", checked: "16 Oct 2026" }
];

// ---------- Dish categories ----------
// Order here = order of the sections inside the shop modal.
const dishCategories = ["Rice", "Stir-fries", "Noodles", "Fried & Grilled", "Soups", "Salads", "Snacks", "Drinks",
  "Milk Drinks", "Tea & Cocoa", "Fruit Drinks", "Yogurt Smoothies", "Soda", "Pang Yen", "Desserts", "Other"];

// ---------- Dishes (one object per dish) ----------
// id is a text like "m1" and must be unique. shopId says which shop sells it.
const dishes = [
  // >>> PASTE YOUR DISHES m1 TO m25 HERE (shops s301 and s302), then keep the rest below <<<

  // s303 Fried Snacks & Som Tam (Dorm 3), read from the photo of the board
  // Prices with a range on the board (for example 45-50) use the lower price, and the range is written in nameEn.
    
  { id: "m1", shopId: "s301", category: "Rice",
    name: "ข้าวมันไก่", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m2", shopId: "s301", category: "Rice",
    name: "ข้าวไก่ทอด", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m3", shopId: "s301", category: "Rice",
    name: "ข้าวหมูแดง", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m4", shopId: "s301", category: "Rice",
    name: "ข้าวหมูทอด", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m5", shopId: "s301", category: "Rice",
    name: "ข้าวไก่ย่าง", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m6", shopId: "s301", category: "Rice",
    name: "ข้าวคอหมูย่าง", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m7", shopId: "s301", category: "Rice",
    name: "ข้าวขาหมู", nameEn: "",
    price: 35, addOns: [LARGE] },

  //  s302 Tom Yum Noodles Dorm3
  { id: "m8", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งต้มยำหมู", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m9", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งต้มยำทะเล", nameEn: "",
    price: 40, addOns: [LARGE] },

  { id: "m10", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งซีอิ๊วหมู", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m12", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวแห้งซีอิ๊วทะเล", nameEn: "",
    price: 40, addOns: [LARGE] },

  { id: "m13", shopId: "s302", category: "Noodles",
    name: "เย็นตาโฟ", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m14", shopId: "s302", category: "Noodles",
    name: "เย็นตาโฟต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m15", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m16", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูน้ำตก", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m17", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูต้มยำน้ำตก", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m18", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวต้มยำทะเล", nameEn: "",
    price: 40, addOns: [LARGE] },

  { id: "m19", shopId: "s302", category: "Noodles",
    name: "ก๋วยเตี๋ยวปลาน้ำใส/ต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m20", shopId: "s302", category: "Noodles",
    name: "บะหมี่เกี๊ยวน้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m21", shopId: "s302", category: "Noodles",
    name: "เกี๊ยวน้ำ น้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 35, addOns: [] },

  { id: "m22", shopId: "s302", category: "Noodles",
    name: "สุกี้หมูน้ำ", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m23", shopId: "s302", category: "Noodles",
    name: "สุกี้ทะเล", nameEn: "",
    price: 40, addOns: [LARGE] },

  { id: "m24", shopId: "s302", category: "Noodles",
    name: "เกาเหลาหมู น้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 35, addOns: [LARGE] },

  { id: "m25", shopId: "s302", category: "Noodles",
    name: "เกาเหลาทะเล น้ำใส/น้ำตก/ต้มยำ", nameEn: "",
    price: 40, addOns: [LARGE] },
  

  { id: "m27", shopId: "s303", category: "Snacks",
    name: "ไก่คาราเกะ", nameEn: "Chicken karaage",
    price: 25, addOns: [] },
    

  { id: "m28", shopId: "s303", category: "Snacks",
    name: "ไก่ป๊อป", nameEn: "Popcorn chicken",
    price: 25, addOns: [] },

  { id: "m29", shopId: "s303", category: "Snacks",
    name: "เอ็นไก่ทอด", nameEn: "Fried chicken tendon",
    price: 20, addOns: [] },

  { id: "m30", shopId: "s303", category: "Snacks",
    name: "ลูกชิ้นนึ่ง", nameEn: "Steamed meatballs",
    price: 20, addOns: [] },

  { id: "m31", shopId: "s303", category: "Snacks",
    name: "ลูกชิ้นทอด", nameEn: "Fried meatballs (5 to 10 baht each)",
    price: 5, addOns: [] },

  { id: "m32", shopId: "s303", category: "Snacks",
    name: "ขนมจีบนึ่ง", nameEn: "Steamed shumai",
    price: 30, addOns: [] },

  { id: "m33", shopId: "s303", category: "Snacks",
    name: "ขนมจีบทอด", nameEn: "Fried shumai",
    price: 35, addOns: [] },

  { id: "m34", shopId: "s303", category: "Snacks",
    name: "เฟรนช์ฟรายส์ เกลือ", nameEn: "French fries, salt",
    price: 25, addOns: [] },

  { id: "m35", shopId: "s303", category: "Snacks",
    name: "เฟรนช์ฟรายส์ ชีส", nameEn: "French fries, cheese",
    price: 30, addOns: [] },

  { id: "m36", shopId: "s303", category: "Snacks",
    name: "ข้าวโพดคลุกเนย", nameEn: "Buttered corn",
    price: 25, addOns: [] },

  { id: "m37", shopId: "s303", category: "Salads",
    name: "ตำทะเล", nameEn: "Seafood papaya salad (45 to 50 baht)",
    price: 45, addOns: [] },

  { id: "m38", shopId: "s303", category: "Salads",
    name: "ตำหอยดอง", nameEn: "Papaya salad with pickled cockles",
    price: 40, addOns: [] },

  { id: "m39", shopId: "s303", category: "Salads",
    name: "ตำป่า", nameEn: "Jungle-style papaya salad",
    price: 40, addOns: [] },

  { id: "m40", shopId: "s303", category: "Salads",
    name: "ตำหมูยอ", nameEn: "Papaya salad with pork sausage",
    price: 40, addOns: [] },

  { id: "m41", shopId: "s303", category: "Salads",
    name: "ตำข้าวโพด", nameEn: "Papaya salad with corn",
    price: 40, addOns: [] },

  { id: "m42", shopId: "s303", category: "Salads",
    name: "ตำปูปลาร้า", nameEn: "Papaya salad with salted crab and fermented fish",
    price: 35, addOns: [] },

  { id: "m43", shopId: "s303", category: "Salads",
    name: "ตำแตง", nameEn: "Cucumber salad",
    price: 35, addOns: [] },

  { id: "m44", shopId: "s303", category: "Salads",
    name: "ตำแหนม", nameEn: "Papaya salad with fermented pork (35 to 40 baht)",
    price: 35, addOns: [] },

  { id: "m45", shopId: "s303", category: "Salads",
    name: "ตำเส้นเล็กปูปลาร้า", nameEn: "Thin rice noodle papaya salad with salted crab",
    price: 35, addOns: [] },

  { id: "m46", shopId: "s303", category: "Salads",
    name: "ตำขนมจีน", nameEn: "Papaya salad with rice vermicelli",
    price: 35, addOns: [] },

  { id: "m47", shopId: "s303", category: "Salads",
    name: "ตำซั่ว", nameEn: "Tam sua (Lao-style papaya salad)",
    price: 35, addOns: [] },

  { id: "m48", shopId: "s303", category: "Salads",
    name: "ยำลูกชิ้น", nameEn: "Meatball salad (35 to 40 baht)",
    price: 35, addOns: [] },

  { id: "m49", shopId: "s303", category: "Salads",
    name: "ยำหมูยอ", nameEn: "Pork sausage salad (35 to 40 baht)",
    price: 35, addOns: [] },

  { id: "m50", shopId: "s303", category: "Noodles",
    name: "ขนมจีนน้ำเงี้ยว", nameEn: "Rice vermicelli in northern tomato and pork curry",
    price: 35, addOns: [] },

  { id: "m51", shopId: "s303", category: "Fried & Grilled",
    name: "หมูปิ้ง", nameEn: "Grilled pork skewer (5 to 10 baht each)",
    price: 5, addOns: [] },

  { id: "m52", shopId: "s303", category: "Rice",
    name: "ข้าวเหนียว", nameEn: "Sticky rice (5 to 10 baht)",
    price: 5, addOns: [] },

  { id: "m53", shopId: "s303", category: "Fried & Grilled",
    name: "ตับปิ้ง", nameEn: "Grilled liver skewer",
    price: 10, addOns: [] },

  // s304 Drinks Point (Dorm 3)
  // ESTIMATED PRICES: the sign lists the drink names but shows no prices. Confirm every price at the shop.

  { id: "m54", shopId: "s304", category: "Soda",
    name: "โคคา-โคล่า", nameEn: "Coca-Cola",
    price: 15, addOns: [] },

  { id: "m55", shopId: "s304", category: "Soda",
    name: "สไปรท์", nameEn: "Sprite",
    price: 15, addOns: [] },

  { id: "m56", shopId: "s304", category: "Soda",
    name: "แฟนต้า", nameEn: "Fanta",
    price: 15, addOns: [] },

  { id: "m57", shopId: "s304", category: "Drinks",
    name: "น้ำดื่มน้ำทิพย์", nameEn: "Namthip drinking water",
    price: 10, addOns: [] },

  { id: "m58", shopId: "s304", category: "Tea & Cocoa",
    name: "โกโก้โอรีโอ้ปั่น", nameEn: "Cocoa Oreo frappe",
    price: 40, addOns: [] },

  { id: "m59", shopId: "s304", category: "Tea & Cocoa",
    name: "ไมโลปั่น", nameEn: "Milo frappe",
    price: 35, addOns: [] },

  { id: "m60", shopId: "s304", category: "Tea & Cocoa",
    name: "โอวัลตินปั่น", nameEn: "Ovaltine frappe",
    price: 35, addOns: [] },

  { id: "m61", shopId: "s304", category: "Tea & Cocoa",
    name: "ชาเนสทีปั่น", nameEn: "Nestea frappe",
    price: 35, addOns: [] },

  { id: "m62", shopId: "s304", category: "Milk Drinks",
    name: "ไวท์มอลต์คาราเมลปั่น", nameEn: "White malt caramel frappe",
    price: 40, addOns: [] },

  { id: "m63", shopId: "s304", category: "Milk Drinks",
    name: "ไวท์มอลต์นมสดปั่น", nameEn: "White malt fresh milk frappe",
    price: 35, addOns: [] },

  { id: "m64", shopId: "s304", category: "Milk Drinks",
    name: "เผือกปั่น", nameEn: "Taro frappe",
    price: 35, addOns: [] },

  { id: "m65", shopId: "s304", category: "Fruit Drinks",
    name: "กล้วยหอมนมสดปั่น", nameEn: "Banana fresh milk frappe",
    price: 40, addOns: [] },

  { id: "m66", shopId: "s304", category: "Fruit Drinks",
    name: "แคนตาลูปปั่น", nameEn: "Cantaloupe frappe",
    price: 35, addOns: [] },

  // s401 Kao Taem Cooked to Order (Dorm 4, real menu read from the photo of the board)

  { id: "m67", shopId: "s401", category: "Noodles",
    name: "ผัดซีอิ๊ว หมูหมัก/หมูสับ", nameEn: "Soy sauce stir-fried noodles, marinated or minced pork",
    price: 35, addOns: [] },

  { id: "m68", shopId: "s401", category: "Noodles",
    name: "ผัดซีอิ๊ว ไก่/ไก่กรอบ", nameEn: "Soy sauce stir-fried noodles, chicken or crispy chicken",
    price: 35, addOns: [] },

  { id: "m69", shopId: "s401", category: "Noodles",
    name: "ผัดซีอิ๊ว หมูกรอบ/สามชั้น", nameEn: "Soy sauce stir-fried noodles, crispy pork or pork belly",
    price: 40, addOns: [] },

  { id: "m70", shopId: "s401", category: "Noodles",
    name: "ผัดซีอิ๊วทะเลรวม", nameEn: "Soy sauce stir-fried noodles, mixed seafood",
    price: 45, addOns: [] },

  { id: "m71", shopId: "s401", category: "Noodles",
    name: "สปาเก็ตตี้ผัดซอส หมูหมัก/หมูสับ", nameEn: "Spaghetti in sauce, marinated or minced pork",
    price: 40, addOns: [] },

  { id: "m72", shopId: "s401", category: "Noodles",
    name: "สปาเก็ตตี้ผัดซอส ไก่/ไก่กรอบ", nameEn: "Spaghetti in sauce, chicken or crispy chicken",
    price: 40, addOns: [] },

  { id: "m73", shopId: "s401", category: "Noodles",
    name: "สปาเก็ตตี้ผัดซอส หมูกรอบ/สามชั้น", nameEn: "Spaghetti in sauce, crispy pork or pork belly",
    price: 45, addOns: [] },

  { id: "m74", shopId: "s401", category: "Noodles",
    name: "สปาเก็ตตี้ขี้เมา หมู/ไก่", nameEn: "Drunken spaghetti, pork or chicken",
    price: 40, addOns: [] },

  { id: "m75", shopId: "s401", category: "Noodles",
    name: "สปาเก็ตตี้เขียวหวาน หมู/ไก่", nameEn: "Green curry spaghetti, pork or chicken",
    price: 40, addOns: [] },

  { id: "m76", shopId: "s401", category: "Noodles",
    name: "ผัดไทย หมู/ไก่", nameEn: "Pad Thai, pork or chicken",
    price: 35, addOns: [] },

  { id: "m77", shopId: "s401", category: "Noodles",
    name: "ผัดไทย หมูกรอบ/ไก่กรอบ", nameEn: "Pad Thai, crispy pork or crispy chicken",
    price: 40, addOns: [] },

  { id: "m78", shopId: "s401", category: "Noodles",
    name: "มาม่าผัดไข่ หมู/ไก่", nameEn: "Stir-fried instant noodles with egg, pork or chicken",
    price: 35, addOns: [] },

  { id: "m79", shopId: "s401", category: "Noodles",
    name: "มาม่าผัดไข่ หมูกรอบ/ไก่กรอบ", nameEn: "Stir-fried instant noodles with egg, crispy pork or chicken",
    price: 40, addOns: [] },

  { id: "m80", shopId: "s401", category: "Noodles",
    name: "มาม่าผัดขี้เมา หมู/ไก่", nameEn: "Drunken instant noodles, pork or chicken",
    price: 35, addOns: [] },

  { id: "m81", shopId: "s401", category: "Noodles",
    name: "มาม่าผัดขี้เมา หมูกรอบ/ไก่กรอบ", nameEn: "Drunken instant noodles, crispy pork or chicken",
    price: 40, addOns: [] },

  { id: "m82", shopId: "s401", category: "Noodles",
    name: "มาม่าผัดต้มยำ หมู/ไก่", nameEn: "Tom yum instant noodles, pork or chicken",
    price: 35, addOns: [] },

  { id: "m83", shopId: "s401", category: "Noodles",
    name: "มาม่าผัดต้มยำ หมูกรอบ/ไก่กรอบ", nameEn: "Tom yum instant noodles, crispy pork or chicken",
    price: 40, addOns: [] },

  { id: "m84", shopId: "s401", category: "Noodles",
    name: "มาม่าผัดกะเพรา หมู/ไก่", nameEn: "Basil stir-fried instant noodles, pork or chicken",
    price: 35, addOns: [] },

  { id: "m85", shopId: "s401", category: "Noodles",
    name: "ราดหน้า หมู/ไก่", nameEn: "Gravy noodles, pork or chicken",
    price: 40, addOns: [] },

  { id: "m86", shopId: "s401", category: "Noodles",
    name: "สุกี้แห้ง/น้ำ หมู/ไก่", nameEn: "Suki, dry or soup, pork or chicken",
    price: 40, addOns: [] },

  { id: "m87", shopId: "s401", category: "Noodles",
    name: "ก๋วยเตี๋ยวคั่ว ไก่/หมู", nameEn: "Dry-fried noodles, chicken or pork",
    price: 35, addOns: [] },

  { id: "m88", shopId: "s401", category: "Noodles",
    name: "สปาเก็ตตี้ผัดกะเพรา", nameEn: "Basil stir-fried spaghetti",
    price: 40, addOns: [] },

  { id: "m89", shopId: "s401", category: "Salads",
    name: "ยำวุ้นเส้นหมูสับ", nameEn: "Glass noodle salad, minced pork",
    price: 35, addOns: [] },

  { id: "m90", shopId: "s401", category: "Salads",
    name: "ยำวุ้นเส้นหมูสับ หมูยอ", nameEn: "Glass noodle salad, minced pork and pork sausage",
    price: 40, addOns: [] },

  { id: "m91", shopId: "s401", category: "Salads",
    name: "ยำวุ้นเส้นหมูสับ ไส้กรอก", nameEn: "Glass noodle salad, minced pork and sausage",
    price: 40, addOns: [] },

  { id: "m92", shopId: "s401", category: "Salads",
    name: "ยำรวมมิตร", nameEn: "Mixed yum salad",
    price: 40, addOns: [] },

  { id: "m93", shopId: "s401", category: "Salads",
    name: "ยำหมูกรอบ", nameEn: "Crispy pork salad",
    price: 40, addOns: [] },

  { id: "m94", shopId: "s401", category: "Salads",
    name: "ยำมาม่าหมูสับ ไส้กรอก", nameEn: "Instant noodle salad, minced pork and sausage",
    price: 40, addOns: [] },

  { id: "m95", shopId: "s401", category: "Salads",
    name: "ยำปลาหมึก", nameEn: "Squid salad",
    price: 40, addOns: [] },

  { id: "m96", shopId: "s401", category: "Salads",
    name: "ยำทะเลรวม", nameEn: "Mixed seafood salad",
    price: 45, addOns: [] },

  { id: "m97", shopId: "s401", category: "Salads",
    name: "ยำเห็ดรวม", nameEn: "Mixed mushroom salad",
    price: 40, addOns: [] },

  { id: "m98", shopId: "s401", category: "Salads",
    name: "ยำปลากระป๋อง", nameEn: "Canned fish salad",
    price: 40, addOns: [] },

  { id: "m99", shopId: "s401", category: "Salads",
    name: "ยำเส้นเล็ก", nameEn: "Thin rice noodle salad",
    price: 40, addOns: [] },

  { id: "m100", shopId: "s401", category: "Stir-fries",
    name: "ผัดพริกเกลือ หมูหมัก/หมูสับ", nameEn: "Chili-salt stir-fry, marinated or minced pork",
    price: 35, addOns: [] },

  { id: "m101", shopId: "s401", category: "Stir-fries",
    name: "ผัดพริกเกลือ ไก่/ไก่กรอบ", nameEn: "Chili-salt stir-fry, chicken or crispy chicken",
    price: 35, addOns: [] },

  { id: "m102", shopId: "s401", category: "Stir-fries",
    name: "ผัดพริกเกลือ ปลาสด/ปลาทอด", nameEn: "Chili-salt stir-fry, fresh or fried fish",
    price: 35, addOns: [] },

  { id: "m103", shopId: "s401", category: "Stir-fries",
    name: "พริกเกลือเต้าหู้", nameEn: "Chili-salt tofu",
    price: 35, addOns: [] },

  { id: "m104", shopId: "s401", category: "Stir-fries",
    name: "ผัดพริกเกลือเต้าหู้ หมู/ไก่", nameEn: "Chili-salt tofu stir-fry, pork or chicken",
    price: 40, addOns: [] },

  { id: "m105", shopId: "s401", category: "Stir-fries",
    name: "ผัดพริกเกลือ หมูสามชั้น/หมูกรอบ", nameEn: "Chili-salt stir-fry, pork belly or crispy pork",
    price: 40, addOns: [] },

  { id: "m106", shopId: "s401", category: "Stir-fries",
    name: "ผัดพริกเกลือทะเล", nameEn: "Chili-salt seafood stir-fry",
    price: 40, addOns: [] },

  { id: "m107", shopId: "s401", category: "Stir-fries",
    name: "กะเพรา หมูสับ/หมูหมัก", nameEn: "Basil stir-fry, minced or marinated pork",
    price: 35, addOns: [] },

  { id: "m108", shopId: "s401", category: "Stir-fries",
    name: "กะเพรา ไก่/ไก่กรอบ", nameEn: "Basil stir-fry, chicken or crispy chicken",
    price: 35, addOns: [] },

  { id: "m109", shopId: "s401", category: "Stir-fries",
    name: "กะเพรา ปลา/ปลาทอด", nameEn: "Basil stir-fry, fish or fried fish",
    price: 35, addOns: [] },

  { id: "m110", shopId: "s401", category: "Stir-fries",
    name: "กะเพราวุ้นเส้น หมูสับ/หมูหมัก/ไก่", nameEn: "Basil stir-fry with glass noodles, pork or chicken",
    price: 35, addOns: [] },

  { id: "m111", shopId: "s401", category: "Stir-fries",
    name: "กะเพราวุ้นเส้น หมูกรอบ/ไก่กรอบ", nameEn: "Basil stir-fry with glass noodles, crispy pork or chicken",
    price: 40, addOns: [] },

  { id: "m112", shopId: "s401", category: "Stir-fries",
    name: "กะเพรา หมูกรอบ/หมูสามชั้น", nameEn: "Basil stir-fry, crispy pork or pork belly",
    price: 40, addOns: [] },

  { id: "m113", shopId: "s401", category: "Stir-fries",
    name: "กะเพรา กุ้ง/ปลาหมึก/หอยแมลงภู่", nameEn: "Basil stir-fry, shrimp, squid or mussels",
    price: 40, addOns: [] },

  { id: "m114", shopId: "s401", category: "Stir-fries",
    name: "กะเพราเห็ด หมูสับ/หมูหมัก/ไก่", nameEn: "Basil stir-fry with mushrooms, pork or chicken",
    price: 40, addOns: [] },

  { id: "m115", shopId: "s401", category: "Stir-fries",
    name: "กะเพราเต้าหู้ หมูสับ/หมูหมัก/ไก่", nameEn: "Basil stir-fry with tofu, pork or chicken",
    price: 40, addOns: [] },

  { id: "m116", shopId: "s401", category: "Stir-fries",
    name: "กะเพราไข่เยี่ยวม้าล้วน", nameEn: "Basil stir-fry with century egg only",
    price: 40, addOns: [] },

  { id: "m117", shopId: "s401", category: "Stir-fries",
    name: "กะเพราไข่เยี่ยวม้าหมูสับ", nameEn: "Basil stir-fry with century egg and minced pork",
    price: 40, addOns: [] },

  { id: "m118", shopId: "s401", category: "Stir-fries",
    name: "กะเพราเต้าหู้ หมูกรอบ/ไก่กรอบ", nameEn: "Basil stir-fry with tofu, crispy pork or crispy chicken",
    price: 45, addOns: [] },

  { id: "m119", shopId: "s401", category: "Stir-fries",
    name: "กะเพราทะเลรวม", nameEn: "Basil stir-fry, mixed seafood (shrimp, squid, mussels, fish)",
    price: 45, addOns: [] },

  { id: "m120", shopId: "s401", category: "Soups",
    name: "ต้มแซ่บ หมู/ไก่", nameEn: "Spicy herbal soup, pork or chicken",
    price: 35, addOns: [] },

  { id: "m121", shopId: "s401", category: "Soups",
    name: "ต้มแซ่บทะเลรวม", nameEn: "Spicy herbal soup, mixed seafood",
    price: 45, addOns: [] },

  { id: "m122", shopId: "s401", category: "Soups",
    name: "ต้มยำ หมู/ไก่", nameEn: "Tom yum soup, pork or chicken",
    price: 35, addOns: [] },

  { id: "m123", shopId: "s401", category: "Soups",
    name: "ต้มยำทะเลรวม", nameEn: "Tom yum soup, mixed seafood",
    price: 45, addOns: [] },

  { id: "m124", shopId: "s401", category: "Soups",
    name: "ต้มจืดเต้าหู้หมูสับ", nameEn: "Clear soup, tofu and minced pork",
    price: 35, addOns: [] },

  { id: "m125", shopId: "s401", category: "Soups",
    name: "ต้มจืดเต้าหู้ต้มยำสาหร่าย", nameEn: "Tofu and seaweed tom yum soup",
    price: 40, addOns: [] },

  { id: "m126", shopId: "s401", category: "Soups",
    name: "ต้มยำปลากระป๋อง", nameEn: "Tom yum soup with canned fish",
    price: 35, addOns: [] },

  { id: "m127", shopId: "s401", category: "Rice",
    name: "ข้าวไข่เจียว", nameEn: "Omelette on rice",
    price: 30, addOns: [] },

  { id: "m128", shopId: "s401", category: "Rice",
    name: "ข้าวไข่เจียวทรงเครื่อง", nameEn: "Loaded omelette on rice",
    price: 35, addOns: [] },

  { id: "m129", shopId: "s401", category: "Rice",
    name: "ข้าวไข่เจียว หมูสับ/ไส้กรอก/ปูอัด", nameEn: "Omelette on rice with minced pork, sausage or crab stick",
    price: 35, addOns: [] },

  { id: "m130", shopId: "s401", category: "Rice",
    name: "ข้าวไข่ข้นแฮม+เบค่อน", nameEn: "Creamy egg with ham and bacon on rice",
    price: 35, addOns: [] },

  { id: "m131", shopId: "s401", category: "Rice",
    name: "ข้าวไข่ข้นแฮม+เบค่อน ชีส", nameEn: "Creamy egg with ham, bacon and cheese on rice",
    price: 40, addOns: [] },

  { id: "m132", shopId: "s401", category: "Rice",
    name: "ข้าวไข่ข้นหมูกรอบ", nameEn: "Creamy egg with crispy pork on rice",
    price: 40, addOns: [] },

  { id: "m133", shopId: "s401", category: "Rice",
    name: "ข้าวไข่เจียวดาวทรงเครื่อง", nameEn: "Loaded fried egg on rice",
    price: 35, addOns: [] },

  { id: "m134", shopId: "s401", category: "Rice",
    name: "ข้าวผัดโบราณ หมู/ไก่", nameEn: "Old-style fried rice, pork or chicken",
    price: 35, addOns: [] },

  { id: "m135", shopId: "s401", category: "Rice",
    name: "ข้าวผัดไข่ หมู/ไก่", nameEn: "Egg fried rice, pork or chicken",
    price: 35, addOns: [] },

  { id: "m136", shopId: "s401", category: "Rice",
    name: "ข้าวผัดแฮมเบค่อน", nameEn: "Ham and bacon fried rice",
    price: 35, addOns: [] },

  { id: "m137", shopId: "s401", category: "Rice",
    name: "ข้าวผัดไส้กรอก/หมูยอ", nameEn: "Sausage or pork sausage fried rice",
    price: 35, addOns: [] },

  { id: "m138", shopId: "s401", category: "Rice",
    name: "ข้าวผัดกุนเชียง", nameEn: "Chinese sausage fried rice",
    price: 35, addOns: [] },

  { id: "m139", shopId: "s401", category: "Rice",
    name: "ข้าวผัดต้มยำ", nameEn: "Tom yum fried rice",
    price: 35, addOns: [] },

  { id: "m140", shopId: "s401", category: "Rice",
    name: "ข้าวผัดแหนม", nameEn: "Fermented pork sausage fried rice",
    price: 35, addOns: [] },

  { id: "m141", shopId: "s401", category: "Rice",
    name: "ข้าวผัดปลากระป๋อง", nameEn: "Canned fish fried rice",
    price: 35, addOns: [] },

  { id: "m142", shopId: "s401", category: "Rice",
    name: "ข้าวผัดไก่แซ่บ", nameEn: "Spicy chicken fried rice",
    price: 35, addOns: [] },

  { id: "m143", shopId: "s401", category: "Rice",
    name: "ข้าวผัดน้ำพริกเผา", nameEn: "Chili paste fried rice",
    price: 35, addOns: [] },

  { id: "m144", shopId: "s401", category: "Rice",
    name: "ข้าวผัดหมาล่า", nameEn: "Mala fried rice",
    price: 35, addOns: [] },

  { id: "m145", shopId: "s401", category: "Rice",
    name: "ข้าวผัดอเมริกัน", nameEn: "American fried rice",
    price: 40, addOns: [] },

  { id: "m146", shopId: "s401", category: "Rice",
    name: "ข้าวผัดกุ้ง", nameEn: "Shrimp fried rice",
    price: 40, addOns: [] },

  { id: "m147", shopId: "s401", category: "Rice",
    name: "ข้าวผัดทะเลรวม", nameEn: "Mixed seafood fried rice",
    price: 45, addOns: [] },

  // s402 Nai Ton Noodles (Dorm 4, real menu read from the photo of the board)

  { id: "m148", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูน้ำใส", nameEn: "Pork noodles, clear soup",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m149", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูน้ำตก", nameEn: "Pork noodles, nam tok (pork blood broth)",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m150", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวไก่ตุ๋น", nameEn: "Stewed chicken noodles",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m151", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูต้มยำ", nameEn: "Pork tom yum noodles",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m152", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวเย็นตาโฟ", nameEn: "Yen ta fo noodles (pink seafood soup)",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m153", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูน้ำตกต้มยำ", nameEn: "Pork nam tok tom yum noodles",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m154", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวเย็นตาโฟต้มยำ", nameEn: "Tom yum yen ta fo noodles",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m155", shopId: "s402", category: "Noodles",
    name: "บะหมี่เกี๊ยวหมูแดง", nameEn: "Egg noodles with wontons and BBQ pork",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m156", shopId: "s402", category: "Noodles",
    name: "หมี่กรอบต้มยำ", nameEn: "Tom yum crispy noodles",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m157", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวหมูกรอบ", nameEn: "Crispy pork noodles",
    price: 40, addOns: [SPECIAL_10] },

  { id: "m158", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวเนื้อตุ๋น", nameEn: "Stewed beef noodles",
    price: 40, addOns: [SPECIAL_10] },

  { id: "m159", shopId: "s402", category: "Noodles",
    name: "ก๋วยเตี๋ยวลูกชิ้นปลา", nameEn: "Fish ball noodles",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m160", shopId: "s402", category: "Soups",
    name: "เกาเหลา", nameEn: "Noodle-less soup (kao lao)",
    price: 35, addOns: [SPECIAL_10] },

  { id: "m161", shopId: "s402", category: "Soups",
    name: "เกี๊ยวน้ำ", nameEn: "Wonton soup",
    price: 35, addOns: [SPECIAL_10] },

  // s403 Satang Gai Saep (Dorm 4, real menu read from the photo of the board)

  { id: "m162", shopId: "s403", category: "Rice",
    name: "ข้าวป๋าไก่แซ่บ", nameEn: "Spicy chicken rice (house style)",
    price: 35, addOns: [SPECIAL_5, EXTRA_BONELESS, EXTRA_WING] },

  { id: "m163", shopId: "s403", category: "Rice",
    name: "ข้าวไก่กรอบ ราดซอสกระเทียม", nameEn: "Crispy chicken rice, garlic sauce",
    price: 35, addOns: [SPECIAL_5, EXTRA_BONELESS, EXTRA_WING] },

  { id: "m164", shopId: "s403", category: "Rice",
    name: "ข้าวไก่กรอบผงชีส", nameEn: "Crispy chicken rice, cheese powder",
    price: 35, addOns: [SPECIAL_5, EXTRA_BONELESS, EXTRA_WING] },

  { id: "m165", shopId: "s403", category: "Rice",
    name: "ข้าวไก่กรอบ ราดซอสหัวหอม", nameEn: "Crispy chicken rice, onion sauce",
    price: 35, addOns: [SPECIAL_5, EXTRA_BONELESS, EXTRA_WING] },

  { id: "m166", shopId: "s403", category: "Rice",
    name: "ข้าวไก่กรอบ ราดซอสเกาหลี", nameEn: "Crispy chicken rice, Korean sauce",
    price: 35, addOns: [SPECIAL_5, EXTRA_BONELESS, EXTRA_WING] },

  { id: "m167", shopId: "s403", category: "Rice",
    name: "ข้าวไก่กรอบ ราดซอสบาร์บีคิว", nameEn: "Crispy chicken rice, BBQ sauce",
    price: 35, addOns: [SPECIAL_5, EXTRA_BONELESS, EXTRA_WING] },

  { id: "m168", shopId: "s403", category: "Rice",
    name: "ข้าวไก่กรอบ คลุกวิงแซ่บ", nameEn: "Crispy chicken rice, spicy wing powder",
    price: 35, addOns: [SPECIAL_5, EXTRA_BONELESS, EXTRA_WING] },

  { id: "m169", shopId: "s403", category: "Fried & Grilled",
    name: "ไก่ไร้กระดูก (1 ชิ้น)", nameEn: "Boneless chicken, per piece",
    price: 15, addOns: [] },

  { id: "m170", shopId: "s403", category: "Fried & Grilled",
    name: "ปีกบนราดซอส (1 ชิ้น)", nameEn: "Upper wing with sauce, per piece",
    price: 10, addOns: [] },

  // s404 Pang Yen Drinks (Dorm 4, real menu read from the photo of the board)

  { id: "m171", shopId: "s404", category: "Milk Drinks",
    name: "นมสด", nameEn: "Fresh milk",
    price: 25, addOns: [FRAPPE] },

  { id: "m172", shopId: "s404", category: "Milk Drinks",
    name: "นมคาราเมล", nameEn: "Caramel milk",
    price: 30, addOns: [FRAPPE] },

  { id: "m173", shopId: "s404", category: "Milk Drinks",
    name: "นมน้ำผึ้ง", nameEn: "Honey milk",
    price: 30, addOns: [FRAPPE] },

  { id: "m174", shopId: "s404", category: "Milk Drinks",
    name: "นมชมพู", nameEn: "Pink milk",
    price: 25, addOns: [FRAPPE] },

  { id: "m175", shopId: "s404", category: "Milk Drinks",
    name: "นมไวท์มอลต์", nameEn: "White malt milk",
    price: 30, addOns: [FRAPPE] },

  { id: "m176", shopId: "s404", category: "Milk Drinks",
    name: "นมเผือก", nameEn: "Taro milk",
    price: 25, addOns: [FRAPPE] },

  { id: "m177", shopId: "s404", category: "Milk Drinks",
    name: "นมสดบราวน์ชูการ์", nameEn: "Brown sugar milk",
    price: 30, addOns: [FRAPPE] },

  { id: "m178", shopId: "s404", category: "Milk Drinks",
    name: "นมสดโอริโอ้ปั่น", nameEn: "Oreo milk frappe",
    price: 35, addOns: [] },

  { id: "m179", shopId: "s404", category: "Milk Drinks",
    name: "นมสดปิโป้ปั่น", nameEn: "Milk with pipo jelly frappe",
    price: 35, addOns: [] },

  { id: "m180", shopId: "s404", category: "Milk Drinks",
    name: "ยาคูลท์ปิโป้", nameEn: "Yakult with pipo jelly",
    price: 35, addOns: [] },

  { id: "m181", shopId: "s404", category: "Milk Drinks",
    name: "เอ็มร้อยปั่นปิโป้", nameEn: "M-150 with pipo jelly frappe",
    price: 35, addOns: [] },

  { id: "m182", shopId: "s404", category: "Milk Drinks",
    name: "นมหมี", nameEn: "Bear Brand milk",
    price: 35, addOns: [FRAPPE] },

  { id: "m183", shopId: "s404", category: "Milk Drinks",
    name: "นมหมีโกโก้ลาวา", nameEn: "Bear Brand cocoa lava",
    price: 50, addOns: [FRAPPE] },

  { id: "m184", shopId: "s404", category: "Milk Drinks",
    name: "นมหมีโอริโอ้ปั่น", nameEn: "Bear Brand Oreo frappe",
    price: 45, addOns: [] },

  { id: "m185", shopId: "s404", category: "Milk Drinks",
    name: "นมหมีปิโป้ปั่น", nameEn: "Bear Brand milk with pipo jelly frappe",
    price: 45, addOns: [] },

  { id: "m186", shopId: "s404", category: "Tea & Cocoa",
    name: "ชาไทย", nameEn: "Thai milk tea",
    price: 35, addOns: [FRAPPE] },

  { id: "m187", shopId: "s404", category: "Tea & Cocoa",
    name: "ชาเขียว", nameEn: "Green tea",
    price: 40, addOns: [FRAPPE] },

  { id: "m188", shopId: "s404", category: "Tea & Cocoa",
    name: "ชามะนาว", nameEn: "Lemon tea",
    price: 40, addOns: [FRAPPE] },

  { id: "m189", shopId: "s404", category: "Tea & Cocoa",
    name: "ชาดำ", nameEn: "Black tea",
    price: 35, addOns: [FRAPPE] },

  { id: "m190", shopId: "s404", category: "Tea & Cocoa",
    name: "ชาส้ม", nameEn: "Orange tea",
    price: 35, addOns: [FRAPPE] },

  { id: "m191", shopId: "s404", category: "Tea & Cocoa",
    name: "ชาเงาะ", nameEn: "Rambutan tea",
    price: 35, addOns: [FRAPPE] },

  { id: "m192", shopId: "s404", category: "Tea & Cocoa",
    name: "ชาผลไม้รวม", nameEn: "Mixed fruit tea",
    price: 35, addOns: [FRAPPE] },

  { id: "m193", shopId: "s404", category: "Tea & Cocoa",
    name: "ชามะลิ", nameEn: "Jasmine tea",
    price: 30, addOns: [FRAPPE] },

  { id: "m194", shopId: "s404", category: "Tea & Cocoa",
    name: "ชาองุ่น", nameEn: "Grape tea",
    price: 35, addOns: [FRAPPE] },

  { id: "m195", shopId: "s404", category: "Tea & Cocoa",
    name: "โกโก้", nameEn: "Cocoa",
    price: 35, addOns: [FRAPPE] },

  { id: "m196", shopId: "s404", category: "Tea & Cocoa",
    name: "โอวัลติน", nameEn: "Ovaltine",
    price: 30, addOns: [FRAPPE] },

  { id: "m197", shopId: "s404", category: "Tea & Cocoa",
    name: "ไมโล", nameEn: "Milo",
    price: 30, addOns: [FRAPPE] },

  { id: "m198", shopId: "s404", category: "Tea & Cocoa",
    name: "โคตรโก้", nameEn: "Super cocoa",
    price: 40, addOns: [FRAPPE] },

  { id: "m199", shopId: "s404", category: "Fruit Drinks",
    name: "ส้มเย็น", nameEn: "Orange, cold",
    price: 30, addOns: [] },

  { id: "m200", shopId: "s404", category: "Fruit Drinks",
    name: "สับปะรดเย็น", nameEn: "Pineapple, cold",
    price: 30, addOns: [] },

  { id: "m201", shopId: "s404", category: "Fruit Drinks",
    name: "มะพร้าวน้ำหอมเย็น", nameEn: "Young coconut, cold",
    price: 30, addOns: [] },

  { id: "m202", shopId: "s404", category: "Fruit Drinks",
    name: "อะโวคาโดเย็น", nameEn: "Avocado, cold",
    price: 35, addOns: [] },

  { id: "m203", shopId: "s404", category: "Fruit Drinks",
    name: "เสาวรสเย็น", nameEn: "Passion fruit, cold",
    price: 30, addOns: [] },

  { id: "m204", shopId: "s404", category: "Fruit Drinks",
    name: "มะนาวเย็น", nameEn: "Lemon, cold",
    price: 30, addOns: [] },

  { id: "m205", shopId: "s404", category: "Fruit Drinks",
    name: "น้ำผึ้งมะนาวเย็น", nameEn: "Honey lemon, cold",
    price: 35, addOns: [] },

  { id: "m206", shopId: "s404", category: "Fruit Drinks",
    name: "กล้วยหอมปั่น", nameEn: "Banana frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m207", shopId: "s404", category: "Fruit Drinks",
    name: "แตงโมปั่น", nameEn: "Watermelon frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m208", shopId: "s404", category: "Fruit Drinks",
    name: "มะพร้าวน้ำหอมปั่น", nameEn: "Young coconut frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT_5] },

  { id: "m209", shopId: "s404", category: "Fruit Drinks",
    name: "ส้มปั่น", nameEn: "Orange frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m210", shopId: "s404", category: "Fruit Drinks",
    name: "สับปะรดปั่น", nameEn: "Pineapple frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m211", shopId: "s404", category: "Fruit Drinks",
    name: "อะโวคาโดปั่น", nameEn: "Avocado frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m212", shopId: "s404", category: "Fruit Drinks",
    name: "อะโวคาโดน้ำผึ้งปั่น", nameEn: "Honey avocado frappe",
    price: 40, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m213", shopId: "s404", category: "Fruit Drinks",
    name: "อะโวคาโดมะพร้าวปั่น", nameEn: "Avocado coconut frappe",
    price: 40, addOns: [WITH_MILK, WITH_YOGURT_5] },

  { id: "m214", shopId: "s404", category: "Fruit Drinks",
    name: "เสาวรสปั่น", nameEn: "Passion fruit frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m215", shopId: "s404", category: "Fruit Drinks",
    name: "มะม่วงปั่น", nameEn: "Mango frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m216", shopId: "s404", category: "Fruit Drinks",
    name: "มะนาวปั่น", nameEn: "Lemon frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m217", shopId: "s404", category: "Fruit Drinks",
    name: "น้ำผึ้งมะนาวปั่น", nameEn: "Honey lemon frappe",
    price: 40, addOns: [] },

  { id: "m218", shopId: "s404", category: "Fruit Drinks",
    name: "สตรอว์เบอร์รีปั่น", nameEn: "Strawberry frappe",
    price: 35, addOns: [WITH_MILK, WITH_YOGURT] },

  { id: "m219", shopId: "s404", category: "Soda",
    name: "แดงโซดา", nameEn: "Red soda",
    price: 20, addOns: [] },

  { id: "m220", shopId: "s404", category: "Soda",
    name: "เขียวโซดา", nameEn: "Green soda",
    price: 20, addOns: [] },

  { id: "m221", shopId: "s404", category: "Soda",
    name: "สตรอว์เบอร์รี่โซดา", nameEn: "Strawberry soda",
    price: 20, addOns: [] },

  { id: "m222", shopId: "s404", category: "Soda",
    name: "บลูเบอร์รี่โซดา", nameEn: "Blueberry soda",
    price: 20, addOns: [] },

  { id: "m223", shopId: "s404", category: "Soda",
    name: "บลูฮาวายโซดา", nameEn: "Blue Hawaii soda",
    price: 20, addOns: [] },

  { id: "m224", shopId: "s404", category: "Soda",
    name: "แอปเปิ้ลโซดา", nameEn: "Apple soda",
    price: 20, addOns: [] },

  { id: "m225", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่น", nameEn: "Yogurt smoothie",
    price: 30, addOns: [] },

  { id: "m226", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นสตรอว์เบอร์รี่", nameEn: "Strawberry yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m227", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นบลูเบอร์รี่", nameEn: "Blueberry yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m228", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นอะโวคาโด", nameEn: "Avocado yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m229", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นกล้วยหอม", nameEn: "Banana yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m230", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นมะม่วง", nameEn: "Mango yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m231", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นเสาวรส", nameEn: "Passion fruit yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m232", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นปิโป้", nameEn: "Pipo jelly yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m233", shopId: "s404", category: "Yogurt Smoothies",
    name: "โยเกิร์ตปั่นเฉาก๊วย", nameEn: "Grass jelly yogurt smoothie",
    price: 35, addOns: [] },

  { id: "m234", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นนมชมพู", nameEn: "Pang Yen pink milk",
    price: 40, addOns: PANG_TOPPINGS },

  { id: "m235", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นโกโก้", nameEn: "Pang Yen cocoa",
    price: 50, addOns: PANG_TOPPINGS },

  { id: "m236", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นนมสดสตรอเบอรี่", nameEn: "Pang Yen fresh milk with strawberry sauce",
    price: 50, addOns: PANG_TOPPINGS },

  { id: "m237", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นกาแฟ", nameEn: "Pang Yen coffee",
    price: 40, addOns: PANG_TOPPINGS },

  { id: "m238", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นเผือกนมสด", nameEn: "Pang Yen taro with fresh milk",
    price: 40, addOns: PANG_TOPPINGS },

  { id: "m239", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นนมสด", nameEn: "Pang Yen fresh milk",
    price: 40, addOns: PANG_TOPPINGS },

  { id: "m240", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นโอวัลติน/ไมโล", nameEn: "Pang Yen Ovaltine or Milo",
    price: 45, addOns: PANG_TOPPINGS },

  { id: "m241", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นชาไทย", nameEn: "Pang Yen Thai tea",
    price: 40, addOns: PANG_TOPPINGS },

  { id: "m242", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นชาเขียว", nameEn: "Pang Yen green tea",
    price: 40, addOns: PANG_TOPPINGS },

  { id: "m243", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นนมสดคาราเมล", nameEn: "Pang Yen fresh milk caramel",
    price: 50, addOns: PANG_TOPPINGS },

  { id: "m244", shopId: "s404", category: "Pang Yen",
    name: "ปังเย็นชาไต้หวัน", nameEn: "Pang Yen Taiwan tea",
    price: 40, addOns: PANG_TOPPINGS },

  { id: "m245", shopId: "s404", category: "Desserts",
    name: "น้ำแข็งใสไม่ใส่เครื่อง", nameEn: "Plain shaved ice",
    price: 25, addOns: [] },

  { id: "m246", shopId: "s404", category: "Desserts",
    name: "น้ำแข็งใสใส่เครื่อง 3 อย่าง", nameEn: "Shaved ice with 3 toppings",
    price: 35, addOns: [] },

  { id: "m247", shopId: "s404", category: "Desserts",
    name: "ลอดช่องเย็น", nameEn: "Lod chong, cold",
    price: 30, addOns: [SMOOTHIE] },

  { id: "m248", shopId: "s404", category: "Desserts",
    name: "เฉาก๊วยเย็น", nameEn: "Grass jelly, cold",
    price: 30, addOns: [SMOOTHIE] }
];