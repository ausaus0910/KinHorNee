
// ---------- 1. VARIABLES (what the app remembers) ----------
let currentDorm = "d3";        // id of the selected dorm
let currentCategory = "All";   // selected category chip
let searchText = "";           // what is typed in the search box (lowercase)
let currentShop = null;        // id of the shop open in the menu modal
let plan = [];                 // the dishes added to "My plan"


// ---------- 2. ELEMENTS (found once, used many times) ----------
// Page
const dormBox     = document.getElementById("dorm-picker");
const chipBox     = document.getElementById("chip-row");
const shopBox     = document.getElementById("shop-list");
const shopsTitle  = document.getElementById("shops-title");
const shopCount   = document.getElementById("shop-count");
const searchBox   = document.getElementById("search");
const planButton  = document.getElementById("plan-button");
const planButtonCount = document.getElementById("plan-count");
const planButtonTotal = document.getElementById("plan-header-total");

// Modal 1: shop menu
const shopDialog  = document.getElementById("shop-dialog");
const shopTitle   = document.getElementById("shop-title-text");
const shopSub     = document.getElementById("shop-sub");
const shopBoard   = document.getElementById("shop-board");
const shopChecked = document.getElementById("shop-checked");
const shopBody    = document.getElementById("shop-body");
const menuBox     = document.getElementById("menu-sections");
const shopPlanButton = document.getElementById("shop-plan-button");

// Modal 2: my plan
const planDialog  = document.getElementById("plan-dialog");
const planEmpty   = document.getElementById("plan-empty");
const planListBox = document.getElementById("plan-list");
const planTotalBox = document.getElementById("plan-total");
const budgetInput = document.getElementById("budget-input");
const budgetResult = document.getElementById("budget-result");

// Modal 3: add a dish
const addDialog   = document.getElementById("add-dialog");
const addForm     = document.getElementById("add-form");
const addTarget   = document.getElementById("add-target");
const nameInput     = document.getElementById("f-name");
const priceInput    = document.getElementById("f-price");
const categoryInput = document.getElementById("f-category");
const nameError     = document.getElementById("err-name");
const priceError    = document.getElementById("err-price");
const categoryError = document.getElementById("err-category");


// ---------- 3. HELPERS ----------
// Find one object by its id (find gives back the first match)
function getDorm(id) { return dorms.find(d => d.id === id); }
function getShop(id) { return shops.find(s => s.id === id); }
function getDish(id) { return dishes.find(d => d.id === id); }

// Should this shop be on screen? It must pass the category chip AND the search.
// Searching looks at the shop name and at the names of all its dishes.
function shopMatches(shop) {
  const categoryOk = currentCategory === "All" || shop.category === currentCategory;

  const shopNames = (shop.name + " " + shop.nameEn).toLowerCase();
  let dishNames = "";
  for (const dish of dishes) {
    if (dish.shopId === shop.id) {
      dishNames += " " + dish.name + " " + dish.nameEn;
    }
  }
  // includes("") is true, so an empty search lets every shop through
  const searchOk = shopNames.includes(searchText) || dishNames.toLowerCase().includes(searchText);

  return categoryOk && searchOk;
}


// ---------- 4. RENDER (draw the page from the data) ----------

// Draws the three parts of the main page: dorm cards, category chips, shop cards.
function renderPage() {
  // --- dorm cards ---
  let html = "";
  for (const dorm of dorms) {
    const shopTotal = shops.filter(s => s.dormId === dorm.id).length;
    html += `
      <li>
        <button type="button" class="dorm-card" data-action="pick-dorm" data-value="${dorm.id}" aria-pressed="${dorm.id === currentDorm}">
          <img src="${dorm.img}" alt="${dorm.alt}" width="320" height="200">
          <span class="dorm-card__name">${dorm.name}</span>
          <span class="dorm-card__meta">${shopTotal} ${shopTotal === 1 ? "shop" : "shops"}</span>
          <span class="dorm-card__badge" aria-hidden="true">Viewing</span>
        </button>
      </li>`;
  }
  dormBox.innerHTML = html;

  // --- category chips: "All" plus every category used by this dorm's shops ---
  const categories = ["All"];
  for (const shop of shops) {
    if (shop.dormId === currentDorm && !categories.includes(shop.category)) {
      categories.push(shop.category);
    }
  }
  html = "";
  for (const category of categories) {
    html += `
      <li><button type="button" class="chip" data-action="pick-category" data-value="${category}" aria-pressed="${category === currentCategory}">${category}</button></li>`;
  }
  chipBox.innerHTML = html;

  // --- shop cards: this dorm's shops that pass the filter and the search ---
  const shopsInDorm = shops.filter(s => s.dormId === currentDorm);
  const visibleShops = shopsInDorm.filter(s => shopMatches(s));

  shopsTitle.textContent = getDorm(currentDorm).name + " shops";
  shopCount.textContent = "Showing " + visibleShops.length + " of " + shopsInDorm.length;

  if (visibleShops.length === 0) {
    shopBox.innerHTML = `
      <li class="empty">No shops match.
        <button type="button" class="link-btn" data-action="clear-filters">Clear the search and filter</button>
      </li>`;
    return;   // nothing more to draw
  }

  html = "";
  for (const shop of visibleShops) {
    const prices = dishes.filter(d => d.shopId === shop.id).map(d => d.price);
    // Math.min(...prices): the three dots turn the list into separate numbers
    const range = prices.length === 0 ? "No dishes yet" : "฿" + Math.min(...prices) + "–฿" + Math.max(...prices);
    html += `
      <li>
        <button type="button" class="shop-card" data-action="open-shop" data-value="${shop.id}">
          <img src="${shop.img}" alt="${shop.alt}" width="480" height="320">
          <span class="shop-card__body">
            <span class="tag">${shop.category}</span>
            <span class="shop-card__name">${shop.name}</span>
            <span class="shop-card__en">${shop.nameEn}</span>
            <span class="shop-card__meta"><span class="price">${range}</span> <span>${prices.length} dishes</span></span>
          </span>
        </button>
      </li>`;
  }
  shopBox.innerHTML = html;
}

// Draws the dishes of the open shop, one section per dish category.
function renderMenu() {
  const shopDishes = dishes.filter(d => d.shopId === currentShop);
  let html = "";
  for (const category of dishCategories) {
    const inCategory = shopDishes.filter(d => d.category === category);
    if (inCategory.length === 0) continue;   // this shop has no dish in this category: skip it

    html += `<section class="menu-group"><h3 class="menu-group__title">${category}</h3><ul class="dish-list">`;
    for (const dish of inCategory) {
      html += dishHtml(dish);
    }
    html += `</ul></section>`;
  }
  menuBox.innerHTML = html;
}

// Returns the HTML of ONE dish row. If the dish has add-ons it also gets a Customize panel.
// <details> and <summary> open and close by themselves, so we need no JavaScript for that.
function dishHtml(dish) {
  let html = `
    <li class="dish" id="dish-${dish.id}">
      <div class="dish__top">
        <div class="dish__names">
          <span class="dish__name">${dish.name}${dish.isNew ? '<span class="tag tag--new">New</span>' : ""}</span>
          <span class="dish__en">${dish.nameEn}</span>
        </div>
        <span class="price">฿${dish.price}</span>
      </div>
      <button type="button" class="btn btn--primary btn--small" data-action="add" data-value="${dish.id}" aria-label="Add ${dish.name} to plan">+ Add</button>`;

  if (dish.addOns.length > 0) {
    html += `
      <details class="addons">
        <summary>Customize</summary>
        <div class="addons__panel">
          <fieldset>
            <legend>Add-ons for ${dish.name}</legend>`;
    for (const addOn of dish.addOns) {
      html += `
            <label class="addon">
              <input type="checkbox" data-name="${addOn.name}" data-price="${addOn.price}">
              <span>${addOn.name}</span>
              <span class="addon__price">+฿${addOn.price}</span>
            </label>`;
    }
    html += `
          </fieldset>
          <button type="button" class="btn btn--primary btn--small" data-action="add-custom" data-value="${dish.id}" data-base="${dish.price}">Add to plan for <span class="addon-total">฿${dish.price}</span></button>
        </div>
      </details>`;
  }

  return html + `</li>`;
}

// Draws "My plan": the lines, the total, the budget message, and the buttons that show the count.
function renderPlan() {
  let total = 0;
  let html = "";
  for (let i = 0; i < plan.length; i++) {
    const line = plan[i];
    total += line.price;

    let extraHtml = "";
    if (line.extras.length > 0) {
      extraHtml = `<span class="plan-line__extra">+ ${line.extras.join(", ")}</span>`;
    }
    html += `
      <li class="plan-line">
        <div class="plan-line__info">
          <span class="plan-line__name">${line.name}</span>
          ${extraHtml}
          <span class="plan-line__where">${line.shopName}, ${line.dormName}</span>
        </div>
        <span class="price">฿${line.price}</span>
        <button type="button" class="icon-btn" data-action="remove" data-value="${i}" aria-label="Remove ${line.name} from plan">&#10005;</button>
      </li>`;
  }
  planListBox.innerHTML = html;
  planEmpty.hidden = plan.length > 0;        // hide the "nothing here yet" text when there are lines
  planTotalBox.textContent = "฿" + total;

  // The count and total shown on the header button and the shop modal button
  const itemsText = plan.length + (plan.length === 1 ? " item" : " items");
  planButtonCount.textContent = plan.length;
  planButtonTotal.textContent = "฿" + total;
  planButton.setAttribute("aria-label", "Open my plan: " + itemsText + ", " + total + " baht");
  shopPlanButton.textContent = "View plan (" + itemsText + ", ฿" + total + ")";

  // Budget helper: how much is left, or how much over
  const budgetText = budgetInput.value.trim();
  budgetResult.className = "budget-result";
  if (budgetText === "") {
    budgetResult.textContent = "Type a budget to see how much is left.";
  } else if (!/^\d+$/.test(budgetText)) {
    budgetResult.textContent = "Use digits only, for example 100.";
    budgetResult.classList.add("is-bad");
  } else if (Number(budgetText) >= total) {
    budgetResult.textContent = "OK: ฿" + (Number(budgetText) - total) + " left in your budget.";
    budgetResult.classList.add("is-good");
  } else {
    budgetResult.textContent = "Over budget by ฿" + (total - Number(budgetText)) + ".";
    budgetResult.classList.add("is-bad");
  }
}

// Fills the shop modal with one shop's details, then opens it as a modal.
// showModal() also makes the Escape key close it.
function openShop(shopId) {
  currentShop = shopId;
  const shop = getShop(shopId);
  shopTitle.textContent = shop.name;
  shopSub.textContent = shop.nameEn + ", " + getDorm(shop.dormId).name + ", " + shop.category;
  shopBoard.src = shop.menuImg;
  shopBoard.alt = shop.menuAlt;
  shopChecked.textContent = "Prices checked on " + shop.checked;
  renderMenu();
  shopDialog.showModal();
  shopBody.scrollTop = 0;   // start at the top of the menu
}


// ---------- 5. EVENTS ----------

// ONE click listener for the whole page (event delegation).
// Every button says what it does in data-action, and may carry extra info in data-value.
// closest() walks up from the exact thing clicked (maybe an <img> inside a button) to the button.
document.addEventListener("click", function (e) {
  const button = e.target.closest("[data-action]");
  if (button === null) return;                 // the click was not on one of our buttons

  const action = button.dataset.action;
  const value = button.dataset.value;          // always text, or undefined if the button has none

  if (action === "pick-dorm") {
    currentDorm = value;
    currentCategory = "All";
    renderPage();
  } else if (action === "pick-category") {
    currentCategory = value;
    renderPage();
  } else if (action === "clear-filters") {
    currentCategory = "All";
    searchText = "";
    searchBox.value = "";
    renderPage();
  } else if (action === "open-shop") {
    openShop(value);
  } else if (action === "add") {
    addToPlan(getDish(value), [], 0);
  } else if (action === "add-custom") {
    const row = button.closest(".dish");
    const chosen = readAddOns(row);
    addToPlan(getDish(value), chosen.names, chosen.extra);
    // reset this dish's Customize panel
    row.querySelector("details").removeAttribute("open");
    for (const box of row.querySelectorAll("input")) {
      box.checked = false;
    }
    updateAddOnPrice(row);
  } else if (action === "remove") {
    plan.splice(Number(value), 1);             // delete 1 line at that position (Feature 5: delete)
    renderPlan();
  } else if (action === "clear-plan") {
    plan = [];
    renderPlan();
  } else if (action === "open-plan") {
    planDialog.showModal();
  } else if (action === "open-form") {
    openForm();
  } else if (action === "close") {
    button.closest("dialog").close();          // closes whichever modal the button is in
  }
});

// Put a dish in the plan. extraNames/extraPrice come from the ticked add-ons.
function addToPlan(dish, extraNames, extraPrice) {
  const shop = getShop(dish.shopId);
  plan.push({
    name: dish.name,
    shopName: shop.name,
    dormName: getDorm(shop.dormId).name,
    extras: extraNames,
    price: dish.price + extraPrice
  });
  renderPlan();
}

// Look at the ticked add-on boxes of one dish row: their names, and the sum of their prices.
function readAddOns(row) {
  const names = [];
  let extra = 0;
  for (const box of row.querySelectorAll("input:checked")) {
    names.push(box.dataset.name);
    extra += Number(box.dataset.price);
  }
  return { names: names, extra: extra };
}

// Show "Add to plan for ฿70" on the button of one dish row
function updateAddOnPrice(row) {
  const button = row.querySelector('[data-action="add-custom"]');
  const total = Number(button.dataset.base) + readAddOns(row).extra;
  row.querySelector(".addon-total").textContent = "฿" + total;
}

// Ticking or unticking an add-on updates that price
document.addEventListener("change", function (e) {
  const row = e.target.closest(".dish");
  if (row !== null && e.target.type === "checkbox") {
    updateAddOnPrice(row);
  }
});

// Typing in the search box filters the shops (Feature 5: search)
searchBox.addEventListener("input", function () {
  searchText = searchBox.value.trim().toLowerCase();
  renderPage();
});

// Typing a budget updates the message in My plan
budgetInput.addEventListener("input", function () {
  renderPlan();
});

// --- Keyboard (Feature 7) ---
// "/" jumps to the search box, unless you are typing somewhere already
document.addEventListener("keydown", function (e) {
  const tag = document.activeElement.tagName;
  const isTyping = tag === "INPUT" || tag === "SELECT";
  if (e.key === "/" && !isTyping) {
    e.preventDefault();      // do not type the "/" character
    searchBox.focus();
  }
});

// Escape inside the search box clears the search
searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    searchBox.value = "";
    searchText = "";
    renderPage();
  }
});
// Built in, no code needed: Enter/Space press any button, Enter sends the form,
// Escape closes a modal (because we opened it with showModal), Tab moves between controls.


// ---------- 6. FORM: add a new dish (Feature 4) ----------

// Write (or clear) the message under one field. Returns true when the field is fine.
function showMessage(input, errorBox, message) {
  errorBox.textContent = message;
  if (message === "") {
    input.removeAttribute("aria-invalid");
  } else {
    input.setAttribute("aria-invalid", "true");
  }
  return message === "";
}

// Open the form with empty fields and no old messages
function openForm() {
  const shop = getShop(currentShop);
  addTarget.textContent = shop.name + ", " + getDorm(shop.dormId).name;
  addForm.reset();
  showMessage(nameInput, nameError, "");
  showMessage(priceInput, priceError, "");
  showMessage(categoryInput, categoryError, "");
  addDialog.showModal();   // the name field has "autofocus", so the cursor starts there
}

addForm.addEventListener("submit", function (e) {
  e.preventDefault();      // stop the browser from reloading the page

  const name = nameInput.value.trim();
  const price = priceInput.value.trim();

  // Rules for the name
  let nameMessage = "";
  if (name.length < 2 || name.length > 40) {
    nameMessage = "The name must be 2 to 40 characters.";
  } else if (/[<>"]/.test(name)) {
    nameMessage = "Please do not use < > or \" in the name.";
  } else if (dishes.some(d => d.shopId === currentShop && d.name.toLowerCase() === name.toLowerCase())) {
    nameMessage = "This shop already has a dish with that name.";
  }

  // Rules for the price (the first test also catches an empty box)
  let priceMessage = "";
  if (!/^\d+$/.test(price)) {
    priceMessage = "Use digits only, for example 45.";
  } else if (Number(price) < 1 || Number(price) > 500) {
    priceMessage = "The price must be between 1 and 500 baht.";
  }

  // Rule for the category
  let categoryMessage = "";
  if (categoryInput.value === "") {
    categoryMessage = "Choose a category.";
  }

  // Show every message, then stop if any field is wrong
  const nameOk = showMessage(nameInput, nameError, nameMessage);
  const priceOk = showMessage(priceInput, priceError, priceMessage);
  const categoryOk = showMessage(categoryInput, categoryError, categoryMessage);
  if (!nameOk || !priceOk || !categoryOk) return;

  // All good: add a new object to the dishes array
  const newDish = {
    id: "new" + Date.now(),      // a unique id made from the current time
    shopId: currentShop,
    category: categoryInput.value,
    name: name,
    nameEn: "",
    price: Number(price),
    addOns: [],
    isNew: true
  };
  dishes.push(newDish);

  addDialog.close();
  renderMenu();       // redraw the open shop's menu
  renderPage();       // redraw the shop cards (the price range may have changed)
  document.getElementById("dish-" + newDish.id).scrollIntoView({ block: "center" });
});


// ---------- 7. START ----------
// Fill the category list of the form from dishCategories (data.js)
let categoryOptions = `<option value="" selected disabled>Choose a category</option>`;
for (const category of dishCategories) {
  categoryOptions += `<option value="${category}">${category}</option>`;
}
categoryInput.innerHTML = categoryOptions;

renderPage();   // dorm cards, chips, shop cards
renderPlan();   // "My plan" starts empty
