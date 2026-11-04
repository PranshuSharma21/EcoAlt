const BLINKIT_ITEMS = [
  {
    id: 'amul_milk',
    name: 'Amul Taaza Homogenised Toned Milk',
    unit: '500 ml pouch',
    price: 28,
    emoji: '🥛',
    category: 'groceries',
    hasSwap: false,
    neutralNote: 'Recyclable food-grade LDPE pouch uses 70% less transport fuel than glass.'
  },
  {
    id: 'lays_chips',
    name: "Lay's India's Magic Masala Potato Chips",
    unit: '50 g pouch',
    price: 20,
    emoji: '🥔',
    category: 'snacks',
    hasSwap: false,
    neutralNote: 'Local Delhi dark store inventory dispatched within 8 minutes.'
  },
  {
    id: 'disposable_plates',
    name: 'Plastic Party Plates (Pack of 20)',
    unit: 'Single-use throwaway plastic',
    price: 75,
    emoji: '🍽️',
    category: 'household',
    hasSwap: true,
    swap: {
      title: 'Reusable Areca Palm Leaf Plates (Set of 20)',
      unit: '100% compostable fallen-leaf tableware',
      price: 110,
      diffText: 'just ₹35 more',
      gpReward: 50,
      longTermSaving: 680,
      plasticSaved: 20,
      reason: '100% chemical-free fallen leaves, microwave safe, and decomposes in your home garden in 45 days.'
    }
  },
  {
    id: 'paper_towels',
    name: 'Classic Kitchen Towel Paper Roll (2 Rolls)',
    unit: '120 disposable sheets',
    price: 99,
    emoji: '🧻',
    category: 'household',
    hasSwap: true,
    swap: {
      title: 'Washable Bamboo Terry Kitchen Towels (Pack of 4)',
      unit: 'Washable 100+ times · Replaces 24 rolls',
      price: 149,
      diffText: 'just ₹50 more',
      gpReward: 55,
      longTermSaving: 1100,
      plasticSaved: 6,
      reason: 'Lasts 100+ washes in Delhi water. Eliminates constant paper roll repeat buys.'
    }
  },
  {
    id: 'dishwash_bottle',
    name: 'Vim Dishwash Liquid Lemon Bottle',
    unit: '500 ml rigid plastic bottle',
    price: 115,
    emoji: '🧴',
    category: 'household',
    hasSwap: true,
    swap: {
      title: 'Vim Dishwash Concentrated Refill Pouch',
      unit: '1 Litre pouch (2× volume · 80% less plastic)',
      price: 105,
      diffText: '₹10 LESS right now',
      gpReward: 40,
      longTermSaving: 140,
      plasticSaved: 2,
      reason: 'Double the liquid for ₹10 less. Reuse your existing bottle at home.'
    }
  },
  {
    id: 'plastic_straws',
    name: 'Striped Flexible Plastic Straws (Pack of 50)',
    unit: 'Single-use colored polypropylene',
    price: 60,
    emoji: '🥤',
    category: 'household',
    hasSwap: true,
    swap: {
      title: 'Stainless Steel Straws Set (4 Straws + Cleaner)',
      unit: 'Lifetime food-grade steel · Travel pouch',
      price: 110,
      diffText: 'just ₹50 more',
      gpReward: 45,
      longTermSaving: 540,
      plasticSaved: 50,
      reason: 'Zero microplastics. Clean once and use forever.'
    }
  },
  {
    id: 'plastic_toothbrush',
    name: 'Colgate ZigZag Manual Toothbrush',
    unit: 'Virgin plastic handle',
    price: 45,
    emoji: '🪥',
    category: 'personal',
    hasSwap: true,
    swap: {
      title: 'Organic Bamboo Charcoal Toothbrush (Pack of 2)',
      unit: 'Biodegradable bamboo · BPA-free bristles',
      price: 80,
      diffText: 'just ₹35 more',
      gpReward: 35,
      longTermSaving: 120,
      plasticSaved: 2,
      reason: 'Pesticide-free bamboo handle degrades naturally in soil instead of lingering for 400 years.'
    }
  },
  {
    id: 'aa_batteries',
    name: 'Everyday AA Alkaline Batteries (4 Pcs)',
    unit: 'Single-use disposable cells',
    price: 120,
    emoji: '🔋',
    category: 'household',
    hasSwap: true,
    swap: {
      title: 'USB-C Rechargeable Lithium AA Cells (2 Pcs)',
      unit: '500 recharge cycles via phone cord',
      price: 180,
      diffText: 'just ₹60 more',
      gpReward: 65,
      longTermSaving: 1400,
      plasticSaved: 4,
      reason: 'Plugs straight into any mobile charger. Eliminates recurring battery disposal.'
    }
  },
  {
    id: 'coca_cola',
    name: 'Coca-Cola Soft Drink Can',
    unit: '300 ml aluminum can',
    price: 40,
    emoji: '🥫',
    category: 'snacks',
    hasSwap: false,
    neutralNote: 'Infinitely recyclable aluminum with highest recycling efficiency in Delhi.'
  },
  {
    id: 'bread_white',
    name: 'Harvest Gold White Sandwich Bread',
    unit: '400 g pack',
    price: 45,
    emoji: '🍞',
    category: 'groceries',
    hasSwap: false,
    neutralNote: 'Fresh daily batch from local bakery partner.'
  },
  {
    id: 'handwash_pump',
    name: 'Dettol Liquid Handwash Pump Bottle',
    unit: '200 ml dispenser bottle',
    price: 99,
    emoji: '🧼',
    category: 'personal',
    hasSwap: true,
    swap: {
      title: 'Dettol Handwash Value Refill Pouch',
      unit: '750 ml refill pouch (3.7× quantity)',
      price: 120,
      diffText: 'just ₹21 more for 3.7× volume',
      gpReward: 45,
      longTermSaving: 240,
      plasticSaved: 3,
      reason: 'Pay only ₹21 more and get almost 4 bottles worth of handwash.'
    }
  },
  {
    id: 'maggi_noodles',
    name: 'Maggi 2-Minute Instant Noodles (Pack of 4)',
    unit: '280 g pouch',
    price: 56,
    emoji: '🍜',
    category: 'groceries',
    hasSwap: false,
    neutralNote: 'Quick meal staple; choose Minimal Packaging at checkout to skip extra bags.'
  },
  {
    id: 'garbage_bags',
    name: 'Black Virgin Plastic Garbage Bags (30 Pcs)',
    unit: 'Non-biodegradable roll',
    price: 90,
    emoji: '🗑️',
    category: 'household',
    hasSwap: true,
    swap: {
      title: '100% Cornstarch Compostable Garbage Bags (30 Pcs)',
      unit: 'CPCB Certified bio-based bags',
      price: 130,
      diffText: 'just ₹40 more',
      gpReward: 50,
      longTermSaving: 0,
      plasticSaved: 30,
      reason: 'Breaks down into water and CO₂ within 180 days in municipal compost.'
    }
  }
];

const REWARDS_CATALOG = [
  {
    id: 'cashback_20',
    title: '₹20 Instant Bill Cashback',
    sub: 'Deducted directly from your next Blinkit checkout total',
    cost: 200,
    type: 'discount',
    value: 20
  },
  {
    id: 'mesh_bags',
    title: 'Free Cotton Mesh Veggie Bags (Set of 3)',
    sub: 'Added into your bag on your next order for ₹0',
    cost: 260,
    type: 'free_item',
    itemName: '🎁 Free Cotton Mesh Veggie Bags (×3)'
  },
  {
    id: 'tree_pledge',
    title: 'Plant 1 Native Tree on Delhi Ridge',
    sub: 'Verified plantation certificate via EcoAlt Greens',
    cost: 350,
    type: 'pledge'
  }
];

const INITIAL_APP_STATE = {
  activeView: 'viewHome',
  searchQuery: '',
  selectedCategory: 'all',
  cart: {
    amul_milk: { qty: 1, swapped: false },
    disposable_plates: { qty: 1, swapped: false }
  },
  cutleryIncluded: false,
  packagingType: 'minimal',
  groupDelivery: true,
  returnBags: false,
  greenPoints: 280,
  appliedRewardDiscount: 0,
  freeRewardItem: null,
  lifetimePlastic: 18,
  lifetimeMoney: 840,
  lifetimeOrders: 3,
  history: [
    { text: 'Swapped to Vim Concentrated Refill', pts: '+40 GP' },
    { text: 'Skipped cutlery on grocery order', pts: '+15 GP' },
    { text: 'Minimal packaging credit', pts: '+25 GP' }
  ]
};

let appState = readPersistedState();

function readPersistedState() {
  try {
    const data = localStorage.getItem('ecoalt_blinkit_state_v2');
    if (data) {
      return Object.assign({}, INITIAL_APP_STATE, JSON.parse(data));
    }
  } catch (err) {
    return JSON.parse(JSON.stringify(INITIAL_APP_STATE));
  }
  return JSON.parse(JSON.stringify(INITIAL_APP_STATE));
}

function persistState() {
  try {
    localStorage.setItem('ecoalt_blinkit_state_v2', JSON.stringify(appState));
  } catch (err) {}
}

function getItem(id) {
  return BLINKIT_ITEMS.find((it) => it.id === id);
}

function triggerFigmaSplash() {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;
  splash.classList.remove('fade-out');
  setTimeout(() => {
    splash.classList.add('fade-out');
  }, 1100);
}

function displayToast(msg) {
  const t = document.getElementById('appToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    t.classList.add('hidden');
  }, 2200);
}

function computeCheckoutMetrics() {
  let subtotal = 0;
  let itemsCount = 0;
  let totalOrderGp = 0;
  let plasticItemsSkipped = 0;
  let longTermSavings = 0;

  Object.keys(appState.cart).forEach((id) => {
    const item = getItem(id);
    const cartEntry = appState.cart[id];
    if (!item || !cartEntry || cartEntry.qty <= 0) return;

    itemsCount += cartEntry.qty;

    if (cartEntry.swapped && item.hasSwap) {
      subtotal += item.swap.price * cartEntry.qty;
      totalOrderGp += item.swap.gpReward * cartEntry.qty;
      plasticItemsSkipped += item.swap.plasticSaved * cartEntry.qty;
      longTermSavings += item.swap.longTermSaving * cartEntry.qty;
    } else {
      subtotal += item.price * cartEntry.qty;
    }
  });

  const cutleryPlastic = appState.cutleryIncluded ? 0 : 2;
  const cutleryGp = appState.cutleryIncluded ? 0 : 15;

  const pkgPlastic = appState.packagingType === 'minimal' ? 2 : 0;
  const pkgGp = appState.packagingType === 'minimal' ? 25 : 0;
  const pkgDiscount = appState.packagingType === 'minimal' ? 5 : 0;

  const groupGp = appState.groupDelivery ? 20 : 0;
  const bagReturnGp = appState.returnBags ? 15 : 0;

  plasticItemsSkipped += cutleryPlastic + pkgPlastic;
  totalOrderGp += cutleryGp + pkgGp + groupGp + bagReturnGp;

  const finalPayable = Math.max(0, subtotal - pkgDiscount - appState.appliedRewardDiscount);

  return {
    subtotal,
    itemsCount,
    totalOrderGp,
    plasticItemsSkipped,
    longTermSavings,
    pkgDiscount,
    finalPayable
  };
}

function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  const query = appState.searchQuery.trim().toLowerCase();

  const filtered = BLINKIT_ITEMS.filter((item) => {
    const catMatch = appState.selectedCategory === 'all' || item.category === appState.selectedCategory;
    const searchMatch = !query || item.name.toLowerCase().includes(query) || item.unit.toLowerCase().includes(query);
    return catMatch && searchMatch;
  });

  document.getElementById('catalogCount').textContent = `${filtered.length} items`;

  let html = '';
  filtered.forEach((it) => {
    const entry = appState.cart[it.id];
    const inCartQty = entry ? entry.qty : 0;
    const isSwapped = entry && entry.swapped && it.hasSwap;

    const currentName = isSwapped ? it.swap.title : it.name;
    const currentUnit = isSwapped ? it.swap.unit : it.unit;
    const currentPrice = isSwapped ? it.swap.price : it.price;

    html += `
      <div class="product-row-card">
        <div class="product-main-flex">
          <div class="product-emoji-tile">${it.emoji}</div>
          <div class="product-info-block">
            <div class="product-name-text">${currentName}</div>
            <div class="product-unit-text">${currentUnit}</div>
            <div class="product-price-line">
              <span class="price-bold">₹${currentPrice}</span>
              ${isSwapped ? '<span class="swapped-tag">✓ Swapped Alternative</span>' : ''}
            </div>
          </div>
          <div class="action-stepper-wrap">
            ${
              inCartQty > 0
                ? `
              <div class="stepper">
                <button type="button" class="stepper-btn" data-step="dec" data-id="${it.id}">−</button>
                <span class="stepper-val">${inCartQty}</span>
                <button type="button" class="stepper-btn" data-step="inc" data-id="${it.id}">+</button>
              </div>
            `
                : `
              <button type="button" class="add-btn" data-add="${it.id}">ADD</button>
            `
            }
          </div>
        </div>

        ${
          it.hasSwap && !isSwapped
            ? `
          <div class="inline-swap-nudge">
            <div class="nudge-top-meta">
              <span class="nudge-tag">ECOALT SMART SWAP</span>
              <span class="nudge-points-bonus">+${it.swap.gpReward} GP</span>
            </div>
            <div class="nudge-body-copy">
              Switch to <strong>${it.swap.title}</strong> for ${it.swap.diffText}. ${it.swap.reason}
            </div>
            <button type="button" class="one-tap-swap-button" data-swap-id="${it.id}">
              <span>1-Tap Swap to Sustainable (₹${it.swap.price})</span>
              <span>Swap →</span>
            </button>
          </div>
        `
            : ''
        }

        ${!it.hasSwap && it.neutralNote ? `<div class="neutral-note">${it.neutralNote}</div>` : ''}
      </div>
    `;
  });

  grid.innerHTML = html || '<div style="padding:20px;text-align:center;color:#64748b;font-size:12px;">No items match your search.</div>';
}

function renderCheckoutView() {
  const metrics = computeCheckoutMetrics();
  const listEl = document.getElementById('cartItemsList');
  const nudgeZone = document.getElementById('checkoutNudgeZone');

  const cartIds = Object.keys(appState.cart).filter((id) => appState.cart[id] && appState.cart[id].qty > 0);

  if (cartIds.length === 0) {
    listEl.innerHTML = '<div style="padding:16px;text-align:center;color:#64748b;font-size:12px;">Your cart is empty. Add items from the Store view!</div>';
  } else {
    let html = '';
    cartIds.forEach((id) => {
      const it = getItem(id);
      const entry = appState.cart[id];
      if (!it) return;

      const isSwapped = entry.swapped && it.hasSwap;
      const title = isSwapped ? it.swap.title : it.name;
      const unit = isSwapped ? it.swap.unit : it.unit;
      const price = isSwapped ? it.swap.price : it.price;
      const lineTotal = price * entry.qty;

      html += `
        <div class="cart-line-item">
          <div class="cart-item-desc">
            <div class="cart-item-title">${it.emoji} ${title} × ${entry.qty}</div>
            <div class="cart-item-sub">${unit}</div>
          </div>
          <div class="stepper" style="margin-right:8px;">
            <button type="button" class="stepper-btn" data-step="dec" data-id="${id}">−</button>
            <span class="stepper-val">${entry.qty}</span>
            <button type="button" class="stepper-btn" data-step="inc" data-id="${id}">+</button>
          </div>
          <div class="cart-line-price">₹${lineTotal}</div>
        </div>
      `;
    });

    if (appState.freeRewardItem) {
      html += `
        <div class="cart-line-item">
          <div class="cart-item-desc">
            <div class="cart-item-title">${appState.freeRewardItem}</div>
            <div class="cart-item-sub">Green Points Reward</div>
          </div>
          <div class="cart-line-price" style="color:#0c831f;">FREE</div>
        </div>
      `;
    }
    listEl.innerHTML = html;
  }

  let nudgeHtml = '';
  cartIds.forEach((id) => {
    const it = getItem(id);
    const entry = appState.cart[id];
    if (it && it.hasSwap && !entry.swapped) {
      nudgeHtml += `
        <div class="inline-swap-nudge">
          <div class="nudge-top-meta">
            <span class="nudge-tag">PRE-CHECKOUT ECOALT NUDGE</span>
            <span class="nudge-points-bonus">+${it.swap.gpReward} GP</span>
          </div>
          <div class="nudge-body-copy">
            Buying short-lived <strong>${it.name}</strong>? Switch to <strong>${it.swap.title}</strong> (${it.swap.diffText}) and skip ${it.swap.plasticSaved} plastics.
          </div>
          <button type="button" class="one-tap-swap-button" data-swap-id="${id}">
            <span>1-Tap Swap (₹${it.swap.price})</span>
            <span>Switch →</span>
          </button>
        </div>
      `;
    }
  });
  nudgeZone.innerHTML = nudgeHtml;

  const cutleryToggle = document.getElementById('cutleryToggle');
  const cutlerySub = document.getElementById('cutlerySub');
  cutleryToggle.checked = appState.cutleryIncluded;
  cutlerySub.textContent = appState.cutleryIncluded
    ? 'Cutlery included · Uncheck to skip plastic cutlery (+15 GP)'
    : 'Skipped by default · Saves 2 plastic items (+15 GP)';

  const pkgMinBtn = document.getElementById('pkgMinimalBtn');
  const pkgStdBtn = document.getElementById('pkgStandardBtn');
  const pkgBadge = document.getElementById('pkgPerkBadge');
  if (appState.packagingType === 'minimal') {
    pkgMinBtn.classList.add('active');
    pkgStdBtn.classList.remove('active');
    pkgBadge.textContent = '₹5 off bill & +25 GP';
  } else {
    pkgStdBtn.classList.add('active');
    pkgMinBtn.classList.remove('active');
    pkgBadge.textContent = 'Switch to Minimal for ₹5 off';
  }

  document.getElementById('groupedDeliveryToggle').checked = appState.groupDelivery;
  document.getElementById('returnBagsToggle').checked = appState.returnBags;

  document.getElementById('checkoutEcoGains').textContent = `+${metrics.totalOrderGp} GP`;
  document.getElementById('skippedBanner').textContent = `You skipped ${metrics.plasticItemsSkipped} plastic items on this order`;

  const billCard = document.getElementById('billDetailsCard');
  billCard.innerHTML = `
    <div class="bill-line">
      <span>Items Subtotal</span>
      <span>₹${metrics.subtotal}</span>
    </div>
    <div class="bill-line">
      <span>Delivery Charge (8 Mins)</span>
      <span style="color:#0c831f;font-weight:700;">FREE</span>
    </div>
    ${metrics.pkgDiscount > 0 ? `<div class="bill-line discount"><span>Minimal Packaging Rebate</span><span>−₹${metrics.pkgDiscount}</span></div>` : ''}
    ${appState.appliedRewardDiscount > 0 ? `<div class="bill-line discount"><span>Green Points Cashback</span><span>−₹${appState.appliedRewardDiscount}</span></div>` : ''}
    <div class="bill-line total">
      <span>To Pay</span>
      <span>₹${metrics.finalPayable}</span>
    </div>
  `;

  document.getElementById('placeOrderText').textContent = `Place Order · ₹${metrics.finalPayable}`;
  document.getElementById('placeOrderGp').textContent = `+${metrics.totalOrderGp} GP`;
}

function renderPointsView() {
  document.getElementById('pointsHeroVal').textContent = appState.greenPoints;

  const pct = Math.min(100, Math.round((appState.greenPoints / 500) * 100));
  document.getElementById('tierProgressFill').style.width = `${pct}%`;

  const tierPill = document.getElementById('tierPill');
  const tierLabel = document.getElementById('tierProgressLabel');
  if (appState.greenPoints >= 500) {
    tierPill.textContent = '🌳 ECO CHAMPION (2X POINTS)';
    tierLabel.textContent = 'Top tier active: Double Green Points on every alternative swap!';
  } else {
    tierPill.textContent = '🌱 ECO EXPLORER';
    tierLabel.textContent = `${500 - appState.greenPoints} GP away from Eco Champion (2× Points)`;
  }

  document.getElementById('statPlasticSkipped').textContent = appState.lifetimePlastic;
  document.getElementById('statMoneySaved').textContent = `₹${appState.lifetimeMoney}`;
  document.getElementById('statOrdersCount').textContent = appState.lifetimeOrders;

  const listEl = document.getElementById('rewardsList');
  let rwHtml = '';
  REWARDS_CATALOG.forEach((rw) => {
    const canAfford = appState.greenPoints >= rw.cost;
    rwHtml += `
      <div class="reward-card">
        <div>
          <div class="reward-title-text">${rw.title}</div>
          <div class="reward-desc-text">${rw.sub}</div>
        </div>
        <button type="button" class="reward-action-btn" data-redeem="${rw.id}" ${canAfford ? '' : 'disabled'}>
          Redeem · ${rw.cost} GP
        </button>
      </div>
    `;
  });
  listEl.innerHTML = rwHtml;

  const actEl = document.getElementById('activityList');
  actEl.innerHTML = appState.history
    .slice(0, 5)
    .map(
      (h) => `
      <div class="activity-item">
        <span>${h.text}</span>
        <span class="activity-val">${h.pts}</span>
      </div>
    `
    )
    .join('');
}

function renderChromeTelemetry() {
  const metrics = computeCheckoutMetrics();

  document.getElementById('headerPointsVal').textContent = appState.greenPoints;

  const badge = document.getElementById('navCartBadge');
  if (metrics.itemsCount > 0) {
    badge.textContent = metrics.itemsCount;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }

  const floatingBar = document.getElementById('floatingCartBar');
  const checkoutFooter = document.getElementById('checkoutFooter');

  if (appState.activeView === 'viewHome' && metrics.itemsCount > 0) {
    document.getElementById('cartBarQty').textContent = `${metrics.itemsCount} ${metrics.itemsCount === 1 ? 'item' : 'items'}`;
    document.getElementById('cartBarPrice').textContent = `₹${metrics.finalPayable}`;
    floatingBar.classList.remove('hidden');
  } else {
    floatingBar.classList.add('hidden');
  }

  if (appState.activeView === 'viewCart' && metrics.itemsCount > 0) {
    checkoutFooter.classList.remove('hidden');
  } else {
    checkoutFooter.classList.add('hidden');
  }
}

function switchView(viewId) {
  appState.activeView = viewId;
  document.querySelectorAll('.screen-view').forEach((s) => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));

  const targetScreen = document.getElementById(viewId);
  if (targetScreen) targetScreen.classList.add('active');

  const targetNav = document.querySelector(`.nav-btn[data-view="${viewId}"]`);
  if (targetNav) targetNav.classList.add('active');

  renderAll();
}

function renderAll() {
  renderCatalog();
  renderCheckoutView();
  renderPointsView();
  renderChromeTelemetry();
  persistState();
}

function bindAppEvents() {
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
    });
  });

  document.getElementById('openCartBarBtn').addEventListener('click', () => {
    switchView('viewCart');
  });

  document.getElementById('openGreenPointsBtn').addEventListener('click', () => {
    switchView('viewPoints');
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    appState.searchQuery = e.target.value;
    renderCatalog();
  });

  document.getElementById('categoryScroller').addEventListener('click', (e) => {
    const pill = e.target.closest('.cat-pill');
    if (!pill) return;
    document.querySelectorAll('.cat-pill').forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    appState.selectedCategory = pill.getAttribute('data-cat');
    renderCatalog();
  });

  document.getElementById('productsGrid').addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-btn');
    if (addBtn) {
      const id = addBtn.getAttribute('data-add');
      if (!appState.cart[id]) {
        appState.cart[id] = { qty: 1, swapped: false };
      } else {
        appState.cart[id].qty += 1;
      }
      displayToast('Added to Blinkit cart');
      renderAll();
      return;
    }

    const swapBtn = e.target.closest('.one-tap-swap-button');
    if (swapBtn) {
      const id = swapBtn.getAttribute('data-swap-id');
      const it = getItem(id);
      appState.cart[id] = {
        qty: appState.cart[id] ? appState.cart[id].qty : 1,
        swapped: true
      };
      if (it && it.hasSwap) {
        appState.history.unshift({
          text: `Swapped to ${it.swap.title}`,
          pts: `+${it.swap.gpReward} GP`
        });
        displayToast(`1-Tap Swap applied! +${it.swap.gpReward} Green Points`);
      }
      renderAll();
      return;
    }

    const stepBtn = e.target.closest('.stepper-btn');
    if (stepBtn) {
      const id = stepBtn.getAttribute('data-id');
      const step = stepBtn.getAttribute('data-step');
      if (!appState.cart[id]) return;
      if (step === 'inc') {
        appState.cart[id].qty += 1;
      } else if (step === 'dec') {
        appState.cart[id].qty -= 1;
        if (appState.cart[id].qty <= 0) {
          delete appState.cart[id];
        }
      }
      renderAll();
    }
  });

  document.getElementById('cartItemsList').addEventListener('click', (e) => {
    const stepBtn = e.target.closest('.stepper-btn');
    if (!stepBtn) return;
    const id = stepBtn.getAttribute('data-id');
    const step = stepBtn.getAttribute('data-step');
    if (!appState.cart[id]) return;
    if (step === 'inc') {
      appState.cart[id].qty += 1;
    } else if (step === 'dec') {
      appState.cart[id].qty -= 1;
      if (appState.cart[id].qty <= 0) {
        delete appState.cart[id];
      }
    }
    renderAll();
  });

  document.getElementById('checkoutNudgeZone').addEventListener('click', (e) => {
    const swapBtn = e.target.closest('.one-tap-swap-button');
    if (!swapBtn) return;
    const id = swapBtn.getAttribute('data-swap-id');
    const it = getItem(id);
    if (appState.cart[id] && it && it.hasSwap) {
      appState.cart[id].swapped = true;
      appState.history.unshift({
        text: `Swapped to ${it.swap.title}`,
        pts: `+${it.swap.gpReward} GP`
      });
      displayToast(`Swapped to ${it.swap.title}! +${it.swap.gpReward} GP`);
      renderAll();
    }
  });

  document.getElementById('cutleryToggle').addEventListener('change', (e) => {
    appState.cutleryIncluded = e.target.checked;
    renderAll();
  });

  document.getElementById('pkgMinimalBtn').addEventListener('click', () => {
    appState.packagingType = 'minimal';
    renderAll();
  });

  document.getElementById('pkgStandardBtn').addEventListener('click', () => {
    appState.packagingType = 'standard';
    renderAll();
  });

  document.getElementById('groupedDeliveryToggle').addEventListener('change', (e) => {
    appState.groupDelivery = e.target.checked;
    renderAll();
  });

  document.getElementById('returnBagsToggle').addEventListener('change', (e) => {
    appState.returnBags = e.target.checked;
    renderAll();
  });

  document.getElementById('rewardsList').addEventListener('click', (e) => {
    const btn = e.target.closest('.reward-action-btn');
    if (!btn || btn.disabled) return;
    const rewardId = btn.getAttribute('data-redeem');
    const reward = REWARDS_CATALOG.find((r) => r.id === rewardId);
    if (!reward || appState.greenPoints < reward.cost) return;

    appState.greenPoints -= reward.cost;
    if (reward.type === 'discount') {
      appState.appliedRewardDiscount += reward.value;
    } else if (reward.type === 'free_item') {
      appState.freeRewardItem = reward.itemName;
    }
    appState.history.unshift({
      text: `Redeemed: ${reward.title}`,
      pts: `−${reward.cost} GP`
    });
    switchView('viewCart');
    displayToast(`Reward redeemed: ${reward.title}!`);
  });

  document.getElementById('placeOrderBtn').addEventListener('click', () => {
    const metrics = computeCheckoutMetrics();
    if (metrics.itemsCount === 0) {
      displayToast('Cart is empty. Add items first.');
      return;
    }

    appState.greenPoints += metrics.totalOrderGp;
    appState.lifetimePlastic += metrics.plasticItemsSkipped;
    appState.lifetimeMoney += metrics.longTermSavings + metrics.pkgDiscount;
    appState.lifetimeOrders += 1;
    appState.appliedRewardDiscount = 0;
    appState.freeRewardItem = null;

    appState.history.unshift({
      text: `Order #${2410 + appState.lifetimeOrders}: Skipped ${metrics.plasticItemsSkipped} plastics`,
      pts: `+${metrics.totalOrderGp} GP`
    });

    const summaryBox = document.getElementById('modalEcoSummary');
    summaryBox.innerHTML = `
      <div><strong>🌍 Plastic Waste Prevented:</strong> ${metrics.plasticItemsSkipped} single-use items</div>
      <div><strong>🌿 Green Points Earned:</strong> +${metrics.totalOrderGp} GP (Balance: ${appState.greenPoints} GP)</div>
      <div><strong>💰 Customer Money Saved:</strong> ₹${metrics.longTermSavings + metrics.pkgDiscount} over product lifespan</div>
    `;

    document.getElementById('successModal').classList.remove('hidden');
    appState.cart = {};
    renderAll();
  });

  document.getElementById('modalDoneBtn').addEventListener('click', () => {
    document.getElementById('successModal').classList.add('hidden');
    switchView('viewHome');
  });

  document.getElementById('refreshDemoBtn').addEventListener('click', () => {
    localStorage.removeItem('ecoalt_blinkit_state_v2');
    appState = JSON.parse(JSON.stringify(INITIAL_APP_STATE));
    renderAll();
    triggerFigmaSplash();
    displayToast('EcoAlt demo reset to initial state');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  bindAppEvents();
  renderAll();
  triggerFigmaSplash();
});
