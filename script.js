const BLINKIT_ITEMS = [
  {
    id: 'amul_milk',
    name: 'Amul Taaza Toned Milk',
    unit: '500 ml pouch',
    price: 28,
    emoji: '🥛',
    category: 'groceries',
    ecoGroup: 'dairy_pouch',
    hasSwap: false
  },
  {
    id: 'disposable_plates',
    name: 'Plastic Party Plates (20 pcs)',
    unit: '20 pcs · Single-use',
    price: 75,
    emoji: '🍽️',
    category: 'household',
    ecoGroup: 'tableware',
    hasSwap: true,
    swap: {
      title: 'Areca Palm Leaf Plates (20 pcs)',
      shortLabel: 'Swap: Areca Leaf ₹110',
      unit: '20 pcs · 100% Compostable',
      price: 110,
      diffText: '₹35 more',
      gpReward: 50,
      longTermSaving: 680,
      plasticSaved: 20,
      reason: 'Sturdy natural leaf plates that compost in 45 days.'
    }
  },
  {
    id: 'lays_chips',
    name: "Lay's Magic Masala Chips",
    unit: '50 g pouch',
    price: 20,
    emoji: '🥔',
    category: 'snacks',
    ecoGroup: 'snacks_ready',
    hasSwap: false
  },
  {
    id: 'paper_towels',
    name: 'Kitchen Paper Towel (2 Rolls)',
    unit: '120 pulls',
    price: 99,
    emoji: '🧻',
    category: 'household',
    ecoGroup: 'home_refill',
    hasSwap: true,
    swap: {
      title: 'Washable Bamboo Cloths (4 pcs)',
      shortLabel: 'Swap: Bamboo Cloths ₹149',
      unit: '4 cloths · 100+ washes',
      price: 149,
      diffText: '₹50 more',
      gpReward: 55,
      longTermSaving: 1100,
      plasticSaved: 6,
      reason: 'Replaces 24 paper rolls; machine washable.'
    }
  },
  {
    id: 'dishwash_bottle',
    name: 'Vim Dishwash Gel Bottle',
    unit: '500 ml bottle',
    price: 115,
    emoji: '🧴',
    category: 'household',
    ecoGroup: 'home_refill',
    hasSwap: true,
    swap: {
      title: 'Vim Concentrated Refill Pouch',
      shortLabel: 'Swap: 1L Refill ₹105',
      unit: '1 Litre (2× qty)',
      price: 105,
      diffText: '₹10 LESS',
      gpReward: 40,
      longTermSaving: 140,
      plasticSaved: 2,
      reason: 'Double quantity for ₹10 less using your home bottle.'
    }
  },
  {
    id: 'bread_white',
    name: 'Harvest Gold Sandwich Bread',
    unit: '400 g pack',
    price: 45,
    emoji: '🍞',
    category: 'groceries',
    ecoGroup: 'dairy_pouch',
    hasSwap: false
  },
  {
    id: 'plastic_toothbrush',
    name: 'Colgate ZigZag Toothbrush',
    unit: '1 pc · Plastic handle',
    price: 45,
    emoji: '🪥',
    category: 'personal',
    ecoGroup: 'personal_care',
    hasSwap: true,
    swap: {
      title: 'Bamboo Charcoal Brush (2 pcs)',
      shortLabel: 'Swap: Bamboo 2-Pack ₹80',
      unit: '2 pcs · Biodegradable',
      price: 80,
      diffText: '₹35 more',
      gpReward: 35,
      longTermSaving: 120,
      plasticSaved: 2,
      reason: '2 brushes with compostable bamboo handles.'
    }
  },
  {
    id: 'aa_batteries',
    name: 'Eveready AA Batteries (4 pcs)',
    unit: '4 pcs · Use & throw',
    price: 120,
    emoji: '🔋',
    category: 'household',
    ecoGroup: 'home_refill',
    hasSwap: true,
    swap: {
      title: 'USB-C Rechargeable AA (2 pcs)',
      shortLabel: 'Swap: USB-C AA ₹180',
      unit: '2 pcs · 500 charges',
      price: 180,
      diffText: '₹60 more',
      gpReward: 65,
      longTermSaving: 1400,
      plasticSaved: 4,
      reason: 'Charges with any phone cable 500 times.'
    }
  },
  {
    id: 'coca_cola',
    name: 'Coca-Cola Soft Drink Can',
    unit: '300 ml aluminum can',
    price: 40,
    emoji: '🥫',
    category: 'snacks',
    ecoGroup: 'snacks_ready',
    hasSwap: false
  },
  {
    id: 'plastic_straws',
    name: 'Flexible Plastic Straws (50 pcs)',
    unit: '50 pcs pack',
    price: 60,
    emoji: '🥤',
    category: 'household',
    ecoGroup: 'tableware',
    hasSwap: true,
    swap: {
      title: 'Steel Straws + Brush (4 pcs)',
      shortLabel: 'Swap: Steel Straws ₹110',
      unit: '4 steel straws + brush',
      price: 110,
      diffText: '₹50 more',
      gpReward: 45,
      longTermSaving: 540,
      plasticSaved: 50,
      reason: 'Washable food-grade steel straws that last forever.'
    }
  },
  {
    id: 'handwash_pump',
    name: 'Dettol Handwash Pump',
    unit: '200 ml pump bottle',
    price: 99,
    emoji: '🧼',
    category: 'personal',
    ecoGroup: 'home_refill',
    hasSwap: true,
    swap: {
      title: 'Dettol 750ml Value Refill',
      shortLabel: 'Swap: 750ml Refill ₹120',
      unit: '750 ml (3.7× qty)',
      price: 120,
      diffText: '₹21 more',
      gpReward: 45,
      longTermSaving: 240,
      plasticSaved: 3,
      reason: 'Almost 4 bottles of liquid for just ₹21 extra.'
    }
  },
  {
    id: 'maggi_noodles',
    name: 'Maggi Masala Noodles (4 Pack)',
    unit: '280 g pack',
    price: 56,
    emoji: '🍜',
    category: 'groceries',
    ecoGroup: 'snacks_ready',
    hasSwap: false
  },
  {
    id: 'garbage_bags',
    name: 'Plastic Garbage Bags (30 pcs)',
    unit: '30 bags · Medium',
    price: 90,
    emoji: '🗑️',
    category: 'household',
    ecoGroup: 'home_refill',
    hasSwap: true,
    swap: {
      title: 'Cornstarch Bio-Bags (30 pcs)',
      shortLabel: 'Swap: Bio-Bags ₹130',
      unit: '30 bags · Compostable',
      price: 130,
      diffText: '₹40 more',
      gpReward: 50,
      longTermSaving: 100,
      plasticSaved: 30,
      reason: 'Breaks down naturally in soil within 6 months.'
    }
  }
];

const REWARDS_CATALOG = [
  {
    id: 'cashback_20',
    title: '₹20 Instant Bill Discount',
    sub: 'Applies directly to your current cart bill',
    cost: 200,
    type: 'discount',
    value: 20
  },
  {
    id: 'mesh_bags',
    title: 'Free Reusable Cotton Veggie Bag',
    sub: 'Added to your current Blinkit order for ₹0',
    cost: 250,
    type: 'free_item',
    itemName: '🎁 Free Cotton Veggie Bag'
  }
];

const INITIAL_APP_STATE = {
  ecoAltEnabled: true,
  activeView: 'viewHome',
  searchQuery: '',
  selectedCategory: 'all',
  cart: {
    amul_milk: { qty: 1, swapped: false },
    disposable_plates: { qty: 1, swapped: false }
  },
  choiceOptions: {
    skipMoistureLiner: true,
    returnEmptyMilkPouches: false,
    skipSnackTissuesCutlery: true,
    returnEmptyBottlesCells: false
  },
  packagingType: 'minimal',
  greenPoints: 280,
  appliedRewardDiscount: 0,
  freeRewardItem: null,
  history: [
    { text: 'Swapped to Vim 1L Refill Pouch', pts: '+40 GP' },
    { text: 'Skipped outer bag & plastic liner', pts: '+35 GP' },
    { text: 'Returned clean milk pouches', pts: '+20 GP' }
  ]
};

let appState = readPersistedState();

function readPersistedState() {
  try {
    const data = localStorage.getItem('ecoalt_blinkit_state_v3');
    if (data) {
      const parsed = JSON.parse(data);
      return Object.assign({}, INITIAL_APP_STATE, parsed, {
        choiceOptions: Object.assign({}, INITIAL_APP_STATE.choiceOptions, parsed.choiceOptions || {})
      });
    }
  } catch (err) {
    return JSON.parse(JSON.stringify(INITIAL_APP_STATE));
  }
  return JSON.parse(JSON.stringify(INITIAL_APP_STATE));
}

function persistState() {
  try {
    localStorage.setItem('ecoalt_blinkit_state_v3', JSON.stringify(appState));
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
  }, 1050);
}

function displayToast(msg) {
  const t = document.getElementById('appToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    t.classList.add('hidden');
  }, 2100);
}

function getRelevantCartChoices() {
  const cartIds = Object.keys(appState.cart).filter((id) => appState.cart[id] && appState.cart[id].qty > 0);
  const groups = new Set();
  const namesByGroup = {
    dairy_pouch: [],
    snacks_ready: [],
    tableware: [],
    home_refill: [],
    personal_care: []
  };

  cartIds.forEach((id) => {
    const it = getItem(id);
    if (!it) return;
    groups.add(it.ecoGroup);
    if (namesByGroup[it.ecoGroup]) {
      namesByGroup[it.ecoGroup].push(it.name.split(' ')[0]);
    }
  });

  const choices = [];

  if (groups.has('dairy_pouch')) {
    const sample = namesByGroup.dairy_pouch.slice(0, 2).join(' & ');
    choices.push({
      key: 'skipMoistureLiner',
      title: `Skip extra plastic pouch liner for ${sample}`,
      sub: 'Sealed pack needs no inner poly-bag · Skips 1 plastic liner (+15 GP)',
      gp: 15,
      plastic: 1
    });
    choices.push({
      key: 'returnEmptyMilkPouches',
      title: 'Hand back rinsed empty milk/bread pouches to rider',
      sub: 'Sent directly for LDPE pellet recycling (+20 GP)',
      gp: 20,
      plastic: 2
    });
  }

  if (groups.has('snacks_ready') || groups.has('tableware')) {
    const sample = [...namesByGroup.snacks_ready, ...namesByGroup.tableware].slice(0, 2).join(' & ');
    choices.push({
      key: 'skipSnackTissuesCutlery',
      title: `Skip disposable cutlery & paper napkins for ${sample}`,
      sub: 'Eating at home · Skips 2 single-use items (+15 GP)',
      gp: 15,
      plastic: 2
    });
  }

  if (groups.has('home_refill') || groups.has('personal_care')) {
    const sample = [...namesByGroup.home_refill, ...namesByGroup.personal_care].slice(0, 2).join(' & ');
    choices.push({
      key: 'returnEmptyBottlesCells',
      title: `Return old empty container/cells for ${sample}`,
      sub: 'Rider collects empty bottle or used batteries (+25 GP)',
      gp: 25,
      plastic: 1
    });
  }

  return choices;
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

  if (appState.ecoAltEnabled && itemsCount > 0) {
    const relevantChoices = getRelevantCartChoices();
    relevantChoices.forEach((ch) => {
      if (appState.choiceOptions[ch.key]) {
        totalOrderGp += ch.gp;
        plasticItemsSkipped += ch.plastic;
      }
    });

    if (appState.packagingType === 'minimal') {
      totalOrderGp += 20;
      plasticItemsSkipped += 1;
    }
  }

  const pkgDiscount = appState.ecoAltEnabled && appState.packagingType === 'minimal' && itemsCount > 0 ? 5 : 0;
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

function renderEcoAltModeBar() {
  const bar = document.getElementById('ecoAltModeBar');
  const toggle = document.getElementById('ecoAltModeToggle');
  const title = document.getElementById('ecoModeTitle');
  const sub = document.getElementById('ecoModeSub');

  toggle.checked = appState.ecoAltEnabled;
  if (appState.ecoAltEnabled) {
    bar.classList.remove('mode-off');
    title.textContent = 'EcoAlt ON';
    sub.textContent = 'Showing 1-tap durable swaps & Green Points';
  } else {
    bar.classList.add('mode-off');
    title.textContent = 'EcoAlt OFF';
    sub.textContent = 'Standard Blinkit view (turn ON for smart swaps)';
  }
}

function renderCatalog() {
  renderEcoAltModeBar();

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
      <div class="blinkit-tile ${isSwapped ? 'swapped-tile' : ''}">
        <div class="tile-image-box">
          <span>${it.emoji}</span>
          <span class="tile-eta-badge">⏱ 8 MINS</span>
          ${appState.ecoAltEnabled && it.hasSwap ? `<span class="tile-gp-corner">+${it.swap.gpReward} GP</span>` : ''}
        </div>

        <div class="tile-body">
          <div class="tile-title">${currentName}</div>
          <div class="tile-unit">${currentUnit}</div>

          <div class="tile-price-row">
            <span class="tile-price">₹${currentPrice}</span>
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
          appState.ecoAltEnabled && it.hasSwap && !isSwapped
            ? `
          <div class="tile-swap-strip">
            <div class="tile-swap-caption">${it.swap.reason}</div>
            <button type="button" class="tile-swap-btn" data-swap-id="${it.id}">
              <span>⚡ ${it.swap.shortLabel}</span>
              <span>→</span>
            </button>
          </div>
        `
            : ''
        }

        ${
          isSwapped
            ? `<div class="tile-swapped-badge">✓ EcoAlt Swapped (+${it.swap.gpReward} GP)</div>`
            : ''
        }
      </div>
    `;
  });

  grid.innerHTML = html || '<div style="grid-column:span 2;padding:20px;text-align:center;color:#64748b;font-size:12px;">No matching items found.</div>';
}

function renderCheckoutView() {
  const metrics = computeCheckoutMetrics();
  const listEl = document.getElementById('cartItemsList');
  const nudgeZone = document.getElementById('checkoutNudgeZone');
  const ecoCard = document.getElementById('checkoutEcoCard');
  const dynamicChoicesEl = document.getElementById('dynamicCartChoicesList');

  const cartIds = Object.keys(appState.cart).filter((id) => appState.cart[id] && appState.cart[id].qty > 0);

  if (cartIds.length === 0) {
    listEl.innerHTML = '<div style="padding:16px;text-align:center;color:#64748b;font-size:12px;">Your cart is empty. Add items from the Store!</div>';
    nudgeZone.innerHTML = '';
    ecoCard.classList.add('hidden');
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
          <div class="stepper" style="margin-right:6px;">
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

    if (appState.ecoAltEnabled) {
      ecoCard.classList.remove('hidden');

      let nudgeHtml = '';
      cartIds.forEach((id) => {
        const it = getItem(id);
        const entry = appState.cart[id];
        if (it && it.hasSwap && !entry.swapped) {
          nudgeHtml += `
            <div class="inline-swap-nudge">
              <div class="nudge-top-meta">
                <span class="nudge-tag">BETTER CHOICE SWAP</span>
                <span class="nudge-points-bonus">+${it.swap.gpReward} GP</span>
              </div>
              <div class="nudge-body-copy">
                Switch <strong>${it.name}</strong> to <strong>${it.swap.title}</strong> (${it.swap.diffText}). ${it.swap.reason}
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

      const relevantChoices = getRelevantCartChoices();
      dynamicChoicesEl.innerHTML = relevantChoices
        .map(
          (ch) => `
          <label class="checkbox-row">
            <input type="checkbox" data-choice-key="${ch.key}" ${appState.choiceOptions[ch.key] ? 'checked' : ''}>
            <span class="custom-check">✓</span>
            <span class="checkbox-text">
              <strong>${ch.title}</strong>
              <small>${ch.sub}</small>
            </span>
          </label>
        `
        )
        .join('');
    } else {
      nudgeZone.innerHTML = '';
      ecoCard.classList.add('hidden');
    }
  }

  const pkgMinBtn = document.getElementById('pkgMinimalBtn');
  const pkgStdBtn = document.getElementById('pkgStandardBtn');
  const pkgBadge = document.getElementById('pkgPerkBadge');
  if (appState.packagingType === 'minimal') {
    pkgMinBtn.classList.add('active');
    pkgStdBtn.classList.remove('active');
    pkgBadge.textContent = '₹5 off & +20 GP';
  } else {
    pkgStdBtn.classList.add('active');
    pkgMinBtn.classList.remove('active');
    pkgBadge.textContent = 'Switch to Minimal for ₹5 off';
  }

  document.getElementById('checkoutEcoGains').textContent = `+${metrics.totalOrderGp} GP`;
  document.getElementById('skippedBanner').textContent = `You skipped ${metrics.plasticItemsSkipped} unnecessary plastic items for these products`;

  const billCard = document.getElementById('billDetailsCard');
  billCard.innerHTML = `
    <div class="bill-line">
      <span>Items Subtotal</span>
      <span>₹${metrics.subtotal}</span>
    </div>
    <div class="bill-line">
      <span>Delivery (8 Mins)</span>
      <span style="color:#0c831f;font-weight:700;">FREE</span>
    </div>
    ${metrics.pkgDiscount > 0 ? `<div class="bill-line discount"><span>No Outer Bag Credit</span><span>−₹${metrics.pkgDiscount}</span></div>` : ''}
    ${appState.appliedRewardDiscount > 0 ? `<div class="bill-line discount"><span>Green Points Cashback</span><span>−₹${appState.appliedRewardDiscount}</span></div>` : ''}
    <div class="bill-line total">
      <span>To Pay</span>
      <span>₹${metrics.finalPayable}</span>
    </div>
  `;

  document.getElementById('placeOrderText').textContent = `Place Order · ₹${metrics.finalPayable}`;
  document.getElementById('placeOrderGp').textContent = appState.ecoAltEnabled ? `+${metrics.totalOrderGp} GP` : 'Standard';
}

function renderPointsView() {
  document.getElementById('pointsHeroVal').textContent = appState.greenPoints;
  document.getElementById('pointsWorthBadge').textContent = `Worth ₹${Math.floor(appState.greenPoints / 10)}`;

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
          Use ${rw.cost} GP
        </button>
      </div>
    `;
  });
  listEl.innerHTML = rwHtml;

  const actEl = document.getElementById('activityList');
  actEl.innerHTML = appState.history
    .slice(0, 4)
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
  document.getElementById('ecoAltModeToggle').addEventListener('change', (e) => {
    appState.ecoAltEnabled = e.target.checked;
    displayToast(appState.ecoAltEnabled ? 'EcoAlt Mode ON: Smart swaps active' : 'EcoAlt Mode OFF: Standard store');
    renderAll();
  });

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
      displayToast('Added to cart');
      renderAll();
      return;
    }

    const swapBtn = e.target.closest('.tile-swap-btn');
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
        displayToast(`Swapped! +${it.swap.gpReward} Green Points`);
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

  document.getElementById('dynamicCartChoicesList').addEventListener('change', (e) => {
    const input = e.target.closest('input[data-choice-key]');
    if (!input) return;
    const key = input.getAttribute('data-choice-key');
    appState.choiceOptions[key] = input.checked;
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
    displayToast(`${reward.title} applied to Cart!`);
  });

  document.getElementById('placeOrderBtn').addEventListener('click', () => {
    const metrics = computeCheckoutMetrics();
    if (metrics.itemsCount === 0) {
      displayToast('Add items to cart first');
      return;
    }

    appState.greenPoints += metrics.totalOrderGp;
    appState.appliedRewardDiscount = 0;
    appState.freeRewardItem = null;

    appState.history.unshift({
      text: `Order placed: Skipped ${metrics.plasticItemsSkipped} plastics`,
      pts: `+${metrics.totalOrderGp} GP`
    });

    const summaryBox = document.getElementById('modalEcoSummary');
    summaryBox.innerHTML = `
      <div><strong>🌍 Plastic Items Skipped:</strong> ${metrics.plasticItemsSkipped} items</div>
      <div><strong>🌱 Green Points Earned:</strong> +${metrics.totalOrderGp} GP (New Balance: ${appState.greenPoints} GP)</div>
      <div><strong>💰 Customer Savings:</strong> ₹${metrics.longTermSavings + metrics.pkgDiscount} saved</div>
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
    localStorage.removeItem('ecoalt_blinkit_state_v3');
    appState = JSON.parse(JSON.stringify(INITIAL_APP_STATE));
    renderAll();
    triggerFigmaSplash();
    displayToast('EcoAlt demo refreshed');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  bindAppEvents();
  renderAll();
  triggerFigmaSplash();
});
