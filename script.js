const PRODUCTS = [
  {
    id: 'biryani',
    name: 'Veg biryani',
    unit: '1 portion (450g)',
    price: 180,
    emoji: '🍲',
    category: 'bistro',
    hasSwap: false,
    honestNote: 'Freshly prepared in reusable steel kitchen tins; pair with Minimal Packaging at checkout.'
  },
  {
    id: 'paneer_roll',
    name: 'Paneer roll',
    unit: '1 roll (220g)',
    price: 120,
    emoji: '🌯',
    category: 'bistro',
    hasSwap: false,
    honestNote: 'Wrapped in unbleached parchment paper; skip extra plastic sachets below.'
  },
  {
    id: 'plates',
    name: 'Disposable Plastic Plates (25 pcs)',
    unit: 'Single-use party pack',
    price: 90,
    emoji: '🍽️',
    category: 'swap',
    hasSwap: true,
    swapData: {
      swapName: 'Reusable Wheat-Straw Dinner Plates (Set of 4)',
      swapUnit: 'Microwave-safe · 300+ uses',
      swapPrice: 140,
      diffText: 'just ₹50 more',
      longTermSaving: 940,
      plasticSaved: 25,
      gpBonus: 60,
      reason: 'Lasts 300+ meals vs. 1 use — saves ₹940 over 3 months & prevents 25 plastic plates in landfill.'
    }
  },
  {
    id: 'towels',
    name: 'Paper Kitchen Towel Roll (2 Rolls)',
    unit: '120 disposable sheets',
    price: 110,
    emoji: '🧻',
    category: 'swap',
    hasSwap: true,
    swapData: {
      swapName: 'Washable Bamboo Kitchen Cloths (Pack of 5)',
      swapUnit: 'Machine washable · Replaces 30 rolls',
      swapPrice: 150,
      diffText: 'just ₹40 more',
      longTermSaving: 1450,
      plasticSaved: 4,
      gpBonus: 50,
      reason: 'One washable pack replaces 30+ paper towel rolls, saving ₹1,450/year.'
    }
  },
  {
    id: 'dishwash',
    name: 'Dishwash Liquid Bottle (500 ml)',
    unit: 'Rigid virgin plastic bottle',
    price: 115,
    emoji: '🧴',
    category: 'swap',
    hasSwap: true,
    swapData: {
      swapName: 'Concentrated Dishwash Refill Pouch (Makes 1L)',
      swapUnit: '2× volume · 80% less plastic',
      swapPrice: 100,
      diffText: '₹15 LESS right now',
      longTermSaving: 130,
      plasticSaved: 2,
      gpBonus: 45,
      reason: 'Immediate ₹15 discount plus double the liquid using your existing bottle at home.'
    }
  },
  {
    id: 'batteries',
    name: 'AA Alkaline Disposable Batteries (4 pcs)',
    unit: 'Single-use throwaway cells',
    price: 120,
    emoji: '🔋',
    category: 'swap',
    hasSwap: true,
    swapData: {
      swapName: 'USB-C Rechargeable AA Lithium Cells (2 pcs)',
      swapUnit: '500 recharge cycles · Cable included',
      swapPrice: 170,
      diffText: 'just ₹50 more',
      longTermSaving: 1800,
      plasticSaved: 4,
      gpBonus: 75,
      reason: 'Recharges via any phone charger 500 times — stops toxic heavy-metal e-waste.'
    }
  },
  {
    id: 'milk',
    name: 'Amul Taaza Toned Milk Pouch',
    unit: '500 ml recyclable LDPE',
    price: 28,
    emoji: '🥛',
    category: 'daily',
    hasSwap: false,
    honestNote: '✓ Honest Check: No swap pushed. Pouch uses 70% less transport energy than heavy glass bottles.'
  }
];

const REWARDS = [
  {
    id: 'rw_discount_25',
    title: '₹25 Instant Bill Cashback',
    sub: 'Applies directly to your Blinkit checkout total',
    cost: 250,
    discountValue: 25
  },
  {
    id: 'rw_mesh_bag',
    title: 'Free Cotton Mesh Veggie Bags (Set of 3)',
    sub: 'Added to your current order for ₹0',
    cost: 300,
    freeItemName: '🎁 Free Cotton Veggie Mesh Bags (×3)'
  },
  {
    id: 'rw_tree',
    title: 'Plant 1 Native Aravalli Sapling in Delhi',
    sub: 'Verified geo-tagged tree via Delhi Ridge Initiative',
    cost: 400,
    impactLog: '🌳 Planted 1 Native Sapling in Delhi Ridge'
  }
];

const defaultState = {
  viewMode: 'interactive',
  activeTab: 'checkout',
  searchQuery: '',
  categoryFilter: 'all',
  cart: {
    biryani: { qty: 1, swapped: false },
    paneer_roll: { qty: 1, swapped: false },
    plates: { qty: 1, swapped: false }
  },
  cutleryIncluded: false,
  packagingMode: 'minimal',
  combinedDelivery: true,
  bagReturn: false,
  redeemPointsActive: false,
  rewardExtraDiscount: 0,
  freeRewardItem: null,
  greenPoints: 320,
  lifetimePlasticSkipped: 24,
  lifetimeRupeesSaved: 1015,
  lifetimeOrders: 4,
  activityLog: [
    { text: 'Switched to Refill Dishwash Pouch', pts: '+45 GP' },
    { text: 'Skipped cutlery & chose Minimal Packaging', pts: '+40 GP' },
    { text: 'Returned 3 paper bags to delivery partner', pts: '+15 GP' }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem('blinkit_conscious_state_v1');
    if (saved) {
      return Object.assign({}, defaultState, JSON.parse(saved));
    }
  } catch (e) {
    return JSON.parse(JSON.stringify(defaultState));
  }
  return JSON.parse(JSON.stringify(defaultState));
}

function saveState() {
  try {
    localStorage.setItem('blinkit_conscious_state_v1', JSON.stringify(state));
  } catch (e) {}
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function calculateOrderMetrics() {
  let itemTotal = 0;
  let swapOrderGp = 0;
  let swapPlasticSaved = 0;
  let swapLongTermRupees = 0;
  let totalCartCount = 0;

  Object.keys(state.cart).forEach((id) => {
    const entry = state.cart[id];
    if (!entry || entry.qty <= 0) return;
    const product = getProductById(id);
    if (!product) return;

    totalCartCount += entry.qty;
    if (entry.swapped && product.hasSwap) {
      itemTotal += product.swapData.swapPrice * entry.qty;
      swapOrderGp += product.swapData.gpBonus * entry.qty;
      swapPlasticSaved += product.swapData.plasticSaved * entry.qty;
      swapLongTermRupees += product.swapData.longTermSaving * entry.qty;
    } else {
      itemTotal += product.price * entry.qty;
    }
  });

  const cutleryPlastic = state.cutleryIncluded ? 0 : 2;
  const cutleryGp = state.cutleryIncluded ? 0 : 15;

  const pkgPlastic = state.packagingMode === 'minimal' ? 4 : 0;
  const pkgGp = state.packagingMode === 'minimal' ? 25 : 0;
  const pkgDiscount = state.packagingMode === 'minimal' ? 5 : 0;

  const combinedGp = state.combinedDelivery ? 20 : 0;
  const bagReturnGp = state.bagReturn ? 15 : 0;

  const checkoutPlasticSkipped = cutleryPlastic + pkgPlastic + swapPlasticSaved;
  const totalOrderGp = swapOrderGp + cutleryGp + pkgGp + combinedGp + bagReturnGp;

  const pointsRedeemDiscount = state.redeemPointsActive && state.greenPoints >= 200 ? 20 : 0;
  const finalPayable = Math.max(0, itemTotal - pkgDiscount - pointsRedeemDiscount - state.rewardExtraDiscount);

  return {
    itemTotal,
    totalCartCount,
    swapOrderGp,
    swapPlasticSaved,
    swapLongTermRupees,
    cutleryPlastic,
    pkgPlastic,
    pkgDiscount,
    checkoutPlasticSkipped,
    totalOrderGp,
    pointsRedeemDiscount,
    finalPayable
  };
}

function showToast(message) {
  const toast = document.getElementById('phoneToast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2400);
}

function renderViewMode() {
  const stage = document.getElementById('workspaceStage');
  const todayCol = document.getElementById('todayPhoneColumn');
  const arrow = document.getElementById('comparisonArrow');
  const interactiveBtn = document.getElementById('modeInteractiveBtn');
  const compareBtn = document.getElementById('modeCompareBtn');
  const labelText = document.getElementById('mainPhoneLabelText');

  if (state.viewMode === 'compare') {
    stage.classList.add('compare-active');
    todayCol.classList.remove('hidden');
    arrow.classList.remove('hidden');
    compareBtn.classList.add('active');
    interactiveBtn.classList.remove('active');
    labelText.textContent = 'WITH ONE NEW FEATURE';
  } else {
    stage.classList.remove('compare-active');
    todayCol.classList.add('hidden');
    arrow.classList.add('hidden');
    interactiveBtn.classList.add('active');
    compareBtn.classList.remove('active');
    labelText.textContent = 'WITH ONE NEW FEATURE · INTERACTIVE APP';
  }
}

function renderTabs() {
  const tabs = ['checkout', 'shop', 'rewards'];
  tabs.forEach((tab) => {
    const btn = document.querySelector(`.subnav-tab[data-tab="${tab}"]`);
    const pane = document.getElementById('pane' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (btn && pane) {
      if (state.activeTab === tab) {
        btn.classList.add('active');
        pane.classList.add('active');
      } else {
        btn.classList.remove('active');
        pane.classList.remove('active');
      }
    }
  });
}

function renderCheckout() {
  const metrics = calculateOrderMetrics();
  const cartListEl = document.getElementById('checkoutCartList');
  const nudgeContainer = document.getElementById('checkoutSwapNudgeContainer');

  const cartIds = Object.keys(state.cart).filter((id) => state.cart[id] && state.cart[id].qty > 0);

  if (cartIds.length === 0) {
    cartListEl.innerHTML = '<div style="padding:14px 4px;text-align:center;color:#68766f;font-size:12.5px;">Your cart is empty. Tap <strong>Blinkit Store</strong> above or load a preset demo!</div>';
  } else {
    let html = '';
    cartIds.forEach((id) => {
      const entry = state.cart[id];
      const product = getProductById(id);
      if (!product) return;
      const isSwapped = entry.swapped && product.hasSwap;
      const displayTitle = isSwapped ? product.swapData.swapName : product.name;
      const displayMeta = isSwapped ? product.swapData.swapUnit : product.unit;
      const unitPrice = isSwapped ? product.swapData.swapPrice : product.price;
      const linePrice = unitPrice * entry.qty;

      html += `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <div class="cart-item-title">
              <span>${product.emoji} ${displayTitle} × ${entry.qty}</span>
              ${isSwapped ? '<span class="swapped-pill">✓ Eco-Swapped</span>' : ''}
            </div>
            <div class="cart-item-meta">${displayMeta}</div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button type="button" class="qty-btn" data-action="dec" data-id="${id}">−</button>
              <span class="qty-num">${entry.qty}</span>
              <button type="button" class="qty-btn" data-action="inc" data-id="${id}">+</button>
            </div>
            <div class="cart-item-price">₹${linePrice}</div>
          </div>
        </div>
      `;
    });

    if (state.freeRewardItem) {
      html += `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <div class="cart-item-title"><span>${state.freeRewardItem}</span><span class="swapped-pill">Reward</span></div>
            <div class="cart-item-meta">Redeemed with Green Points</div>
          </div>
          <div class="cart-item-price" style="color:#0c831f;">FREE</div>
        </div>
      `;
    }
    cartListEl.innerHTML = html;
  }

  let nudgeHtml = '';
  cartIds.forEach((id) => {
    const entry = state.cart[id];
    const product = getProductById(id);
    if (product && product.hasSwap && !entry.swapped) {
      const s = product.swapData;
      nudgeHtml += `
        <div class="swap-nudge-card">
          <div class="swap-nudge-header">
            <span class="swap-badge">⚡ INSTANT BETTER CHOICE SWAP</span>
            <span class="swap-gp-bonus">+${s.gpBonus} Green Points</span>
          </div>
          <div class="swap-nudge-title">
            Buying short-lived <strong>${product.name}</strong>? Switch to <strong>${s.swapName}</strong> for ${s.diffText}.
          </div>
          <div class="swap-nudge-metrics">
            <span class="swap-metric-chip">💰 Saves ₹${s.longTermSaving} long-term</span>
            <span class="swap-metric-chip">🌍 Skips ${s.plasticSaved} plastic items</span>
          </div>
          <button type="button" class="swap-one-tap-btn" data-swap-id="${id}">
            <span>1-Tap Swap to Durable Version (₹${s.swapPrice})</span>
            <span>Swap →</span>
          </button>
        </div>
      `;
    }
  });
  nudgeContainer.innerHTML = nudgeHtml;

  const cutleryToggle = document.getElementById('cutleryToggle');
  const cutlerySub = document.getElementById('cutlerySubtext');
  cutleryToggle.checked = state.cutleryIncluded;
  cutlerySub.textContent = state.cutleryIncluded
    ? 'Cutlery included · Toggle off to save 2 plastic items (+15 GP)'
    : 'Skipped by default · Saves 2 plastic items (+15 GP)';

  const pkgMinBtn = document.getElementById('pkgMinimalBtn');
  const pkgStdBtn = document.getElementById('pkgStandardBtn');
  const pkgPerkTag = document.getElementById('packagingPerkTag');
  if (state.packagingMode === 'minimal') {
    pkgMinBtn.classList.add('active');
    pkgStdBtn.classList.remove('active');
    pkgPerkTag.textContent = '+25 GP & ₹5 packaging credit';
  } else {
    pkgStdBtn.classList.add('active');
    pkgMinBtn.classList.remove('active');
    pkgPerkTag.textContent = 'Switch to Minimal for +25 GP & ₹5 off';
  }

  document.getElementById('combinedDeliveryToggle').checked = state.combinedDelivery;
  document.getElementById('bagReturnToggle').checked = state.bagReturn;

  const banner = document.getElementById('skippedPlasticBanner');
  banner.textContent = `You skipped ${metrics.checkoutPlasticSkipped} plastic items on this order · +${metrics.totalOrderGp} GP`;

  const redeemToggle = document.getElementById('redeemPointsToggle');
  const redeemSub = document.getElementById('redeemCardSub');
  redeemToggle.checked = state.redeemPointsActive && state.greenPoints >= 200;
  redeemToggle.disabled = state.greenPoints < 200;
  redeemSub.textContent = state.greenPoints >= 200
    ? `Save ₹20 instantly on this bill (Balance: ${state.greenPoints} GP)`
    : `Need 200 GP to unlock ₹20 instant discount (Balance: ${state.greenPoints} GP)`;

  const billCard = document.getElementById('billSummaryCard');
  billCard.innerHTML = `
    <div class="bill-row">
      <span>Items Subtotal</span>
      <span>₹${metrics.itemTotal}</span>
    </div>
    ${metrics.pkgDiscount > 0 ? `<div class="bill-row discount"><span>Minimal Packaging Credit</span><span>−₹${metrics.pkgDiscount}</span></div>` : ''}
    ${metrics.pointsRedeemDiscount > 0 ? `<div class="bill-row discount"><span>Green Points Discount (200 GP)</span><span>−₹${metrics.pointsRedeemDiscount}</span></div>` : ''}
    ${state.rewardExtraDiscount > 0 ? `<div class="bill-row discount"><span>Reward Voucher Applied</span><span>−₹${state.rewardExtraDiscount}</span></div>` : ''}
    <div class="bill-row total">
      <span>To Pay</span>
      <span>₹${metrics.finalPayable}</span>
    </div>
  `;
}

function renderShop() {
  const listEl = document.getElementById('productCatalogList');
  const q = state.searchQuery.trim().toLowerCase();

  const filtered = PRODUCTS.filter((p) => {
    const matchesCat = state.categoryFilter === 'all' || p.category === state.categoryFilter;
    const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.unit.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  let html = '';
  filtered.forEach((p) => {
    const cartEntry = state.cart[p.id];
    const inCartQty = cartEntry ? cartEntry.qty : 0;
    const isSwapped = cartEntry && cartEntry.swapped;

    html += `
      <div class="product-card">
        <div class="product-top-row">
          <div class="product-emoji-box">${p.emoji}</div>
          <div class="product-main-info">
            <div class="product-title">${isSwapped && p.hasSwap ? p.swapData.swapName : p.name}</div>
            <div class="product-unit">${isSwapped && p.hasSwap ? p.swapData.swapUnit : p.unit}</div>
            <div class="product-price-row">
              <span class="product-price">₹${isSwapped && p.hasSwap ? p.swapData.swapPrice : p.price}</span>
              ${isSwapped ? '<span class="swapped-pill">✓ Durable Choice</span>' : ''}
            </div>
          </div>
          <div>
            <button type="button" class="add-cart-btn ${inCartQty > 0 ? 'in-cart' : ''}" data-add-id="${p.id}">
              ${inCartQty > 0 ? `Added (${inCartQty})` : '+ ADD'}
            </button>
          </div>
        </div>
        ${
          p.hasSwap && !isSwapped
            ? `
          <div class="swap-nudge-card">
            <div class="swap-nudge-header">
              <span class="swap-badge">🌱 WIN-WIN NUDGE</span>
              <span class="swap-gp-bonus">+${p.swapData.gpBonus} GP</span>
            </div>
            <div class="swap-nudge-title">${p.swapData.reason}</div>
            <button type="button" class="swap-one-tap-btn" data-shop-swap-id="${p.id}">
              <span>Switch to ${p.swapData.swapName} (${p.swapData.diffText})</span>
              <span>1-Tap →</span>
            </button>
          </div>
        `
            : ''
        }
        ${!p.hasSwap && p.honestNote ? `<div class="honest-keep-note">${p.honestNote}</div>` : ''}
      </div>
    `;
  });

  listEl.innerHTML = html || '<div style="padding:16px;text-align:center;color:#68766f;font-size:12.5px;">No matching items found.</div>';
}

function renderRewards() {
  document.getElementById('rewardsPointsNumber').textContent = state.greenPoints;
  const pct = Math.min(100, Math.round((state.greenPoints / 500) * 100));
  document.getElementById('rewardsProgressBar').style.width = pct + '%';

  const tierBadge = document.getElementById('rewardsTierBadge');
  const progressText = document.getElementById('rewardsProgressText');
  if (state.greenPoints >= 500) {
    tierBadge.textContent = '🌳 ECO CHAMPION TIER (MAX)';
    progressText.textContent = 'You unlocked 2× Green Points multiplier on every swap!';
  } else {
    tierBadge.textContent = '🌱 ECO SAPLING TIER';
    progressText.textContent = `${500 - state.greenPoints} GP away from Eco Champion Tier`;
  }

  document.getElementById('lifetimePlasticStat').textContent = state.lifetimePlasticSkipped;
  document.getElementById('lifetimeRupeeStat').textContent = '₹' + state.lifetimeRupeesSaved.toLocaleString('en-IN');
  document.getElementById('lifetimeOrdersStat').textContent = state.lifetimeOrders;

  const catalogEl = document.getElementById('rewardsCatalogList');
  let rwHtml = '';
  REWARDS.forEach((r) => {
    const canAfford = state.greenPoints >= r.cost;
    rwHtml += `
      <div class="reward-item-card">
        <div>
          <div class="reward-item-title">${r.title}</div>
          <div class="reward-item-sub">${r.sub}</div>
        </div>
        <button type="button" class="claim-reward-btn" data-reward-id="${r.id}" ${canAfford ? '' : 'disabled'}>
          Redeem · ${r.cost} GP
        </button>
      </div>
    `;
  });
  catalogEl.innerHTML = rwHtml;

  const logEl = document.getElementById('activityLogList');
  logEl.innerHTML = state.activityLog
    .slice(0, 5)
    .map(
      (item) => `
      <div class="activity-row">
        <span>${item.text}</span>
        <span class="activity-pts">${item.pts}</span>
      </div>
    `
    )
    .join('');
}

function renderGlobalTelemetry() {
  const metrics = calculateOrderMetrics();

  document.getElementById('phoneHeaderPoints').textContent = state.greenPoints;
  document.getElementById('cartCountBadge').textContent = metrics.totalCartCount;

  document.getElementById('placeOrderBtnText').textContent = `Place order · ₹${metrics.finalPayable}`;
  document.getElementById('placeOrderGpBadge').textContent = `+${metrics.totalOrderGp} GP`;

  document.getElementById('telemetryPoints').textContent = `${state.greenPoints} GP`;
  document.getElementById('telemetryPointsValue').textContent = `Worth ₹${Math.floor(state.greenPoints / 10)} instant credit (+${metrics.totalOrderGp} GP pending)`;

  const totalLongTermSavings = state.lifetimeRupeesSaved + metrics.swapLongTermRupees;
  document.getElementById('telemetrySavings').textContent = '₹' + totalLongTermSavings.toLocaleString('en-IN');

  document.getElementById('telemetryPlastic').textContent = `${metrics.checkoutPlasticSkipped} items`;
  const co2Grams = metrics.checkoutPlasticSkipped * 38 + (state.combinedDelivery ? 140 : 0);
  document.getElementById('telemetryCo2').textContent = `${co2Grams}g CO₂e prevented on this order`;
}

function renderAll() {
  renderViewMode();
  renderTabs();
  renderCheckout();
  renderShop();
  renderRewards();
  renderGlobalTelemetry();
  saveState();
}

function updateTodayProblemCheckboxes() {
  const checks = document.querySelectorAll('.today-check');
  let count = 0;
  checks.forEach((c) => {
    if (c.checked) count += parseInt(c.getAttribute('data-plastic') || '1', 10);
  });
  const summaryEl = document.getElementById('todayWasteSummary');
  if (summaryEl) {
    summaryEl.innerHTML =
      count > 0
        ? `Silent default adds <strong>${count} single-use items</strong> you never asked for.`
        : `You manually unchecked 4 boxes—most rushed users never do.`;
  }
}

function bindEvents() {
  document.getElementById('modeInteractiveBtn').addEventListener('click', () => {
    state.viewMode = 'interactive';
    renderAll();
  });

  document.getElementById('modeCompareBtn').addEventListener('click', () => {
    state.viewMode = 'compare';
    state.activeTab = 'checkout';
    renderAll();
  });

  document.getElementById('loadMealPresetBtn').addEventListener('click', () => {
    state.cart = {
      biryani: { qty: 1, swapped: false },
      paneer_roll: { qty: 1, swapped: false }
    };
    state.cutleryIncluded = false;
    state.packagingMode = 'minimal';
    state.redeemPointsActive = false;
    state.rewardExtraDiscount = 0;
    state.activeTab = 'checkout';
    renderAll();
    showToast('Loaded ₹300 Meal Checkout from Reference Image');
  });

  document.getElementById('loadSwapPresetBtn').addEventListener('click', () => {
    state.cart = {
      biryani: { qty: 1, swapped: false },
      plates: { qty: 1, swapped: false },
      dishwash: { qty: 1, swapped: false }
    };
    state.activeTab = 'checkout';
    renderAll();
    showToast('Loaded Disposable Items to demo 1-Tap Better Choice Swaps');
  });

  document.getElementById('resetDemoBtn').addEventListener('click', () => {
    localStorage.removeItem('blinkit_conscious_state_v1');
    state = JSON.parse(JSON.stringify(defaultState));
    renderAll();
    showToast('Prototype state reset to default');
  });

  document.getElementById('headerPointsBtn').addEventListener('click', () => {
    state.activeTab = 'rewards';
    renderAll();
  });

  document.querySelectorAll('.subnav-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-tab');
      renderAll();
    });
  });

  document.getElementById('cutleryToggle').addEventListener('change', (e) => {
    state.cutleryIncluded = e.target.checked;
    renderAll();
  });

  document.getElementById('pkgMinimalBtn').addEventListener('click', () => {
    state.packagingMode = 'minimal';
    renderAll();
  });

  document.getElementById('pkgStandardBtn').addEventListener('click', () => {
    state.packagingMode = 'standard';
    renderAll();
  });

  document.getElementById('combinedDeliveryToggle').addEventListener('change', (e) => {
    state.combinedDelivery = e.target.checked;
    renderAll();
  });

  document.getElementById('bagReturnToggle').addEventListener('change', (e) => {
    state.bagReturn = e.target.checked;
    renderAll();
  });

  document.getElementById('redeemPointsToggle').addEventListener('change', (e) => {
    state.redeemPointsActive = e.target.checked;
    renderAll();
  });

  document.getElementById('checkoutCartList').addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-btn');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    const action = btn.getAttribute('data-action');
    if (!state.cart[id]) return;
    if (action === 'inc') {
      state.cart[id].qty += 1;
    } else if (action === 'dec') {
      state.cart[id].qty -= 1;
      if (state.cart[id].qty <= 0) {
        delete state.cart[id];
      }
    }
    renderAll();
  });

  document.getElementById('checkoutSwapNudgeContainer').addEventListener('click', (e) => {
    const btn = e.target.closest('.swap-one-tap-btn');
    if (!btn) return;
    const id = btn.getAttribute('data-swap-id');
    const product = getProductById(id);
    if (state.cart[id] && product && product.hasSwap) {
      state.cart[id].swapped = true;
      state.activityLog.unshift({
        text: `Swapped to ${product.swapData.swapName}`,
        pts: `+${product.swapData.gpBonus} GP`
      });
      renderAll();
      showToast(`Swapped! +${product.swapData.gpBonus} GP & saves ₹${product.swapData.longTermSaving} long-term`);
    }
  });

  document.getElementById('shopSearchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderShop();
  });

  document.getElementById('categoryChips').addEventListener('click', (e) => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    state.categoryFilter = chip.getAttribute('data-cat');
    document.querySelectorAll('.cat-chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    renderShop();
  });

  document.getElementById('productCatalogList').addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-cart-btn');
    if (addBtn) {
      const id = addBtn.getAttribute('data-add-id');
      if (!state.cart[id]) {
        state.cart[id] = { qty: 1, swapped: false };
      } else {
        state.cart[id].qty += 1;
      }
      renderAll();
      showToast('Added to Blinkit cart');
      return;
    }

    const swapBtn = e.target.closest('.swap-one-tap-btn');
    if (swapBtn) {
      const id = swapBtn.getAttribute('data-shop-swap-id');
      const product = getProductById(id);
      state.cart[id] = {
        qty: state.cart[id] ? state.cart[id].qty : 1,
        swapped: true
      };
      if (product && product.hasSwap) {
        state.activityLog.unshift({
          text: `Swapped to ${product.swapData.swapName}`,
          pts: `+${product.swapData.gpBonus} GP`
        });
        showToast(`1-Tap Swap added! +${product.swapData.gpBonus} GP`);
      }
      renderAll();
    }
  });

  document.getElementById('rewardsCatalogList').addEventListener('click', (e) => {
    const btn = e.target.closest('.claim-reward-btn');
    if (!btn || btn.disabled) return;
    const rewardId = btn.getAttribute('data-reward-id');
    const reward = REWARDS.find((r) => r.id === rewardId);
    if (!reward || state.greenPoints < reward.cost) return;

    state.greenPoints -= reward.cost;
    if (reward.discountValue) {
      state.rewardExtraDiscount += reward.discountValue;
    }
    if (reward.freeItemName) {
      state.freeRewardItem = reward.freeItemName;
    }
    state.activityLog.unshift({
      text: `Redeemed: ${reward.title}`,
      pts: `−${reward.cost} GP`
    });
    state.activeTab = 'checkout';
    renderAll();
    showToast(`Redeemed ${reward.title}! Applied to Checkout.`);
  });

  document.getElementById('mainPlaceOrderBtn').addEventListener('click', () => {
    const metrics = calculateOrderMetrics();
    if (metrics.totalCartCount === 0) {
      state.activeTab = 'shop';
      renderAll();
      showToast('Add at least 1 item to place your order');
      return;
    }

    if (metrics.pointsRedeemDiscount > 0) {
      state.greenPoints -= 200;
    }
    state.greenPoints += metrics.totalOrderGp;
    state.lifetimePlasticSkipped += metrics.checkoutPlasticSkipped;
    state.lifetimeRupeesSaved += metrics.swapLongTermRupees + metrics.pkgDiscount;
    state.lifetimeOrders += 1;
    state.redeemPointsActive = false;
    state.rewardExtraDiscount = 0;
    state.freeRewardItem = null;

    state.activityLog.unshift({
      text: `Order #${1040 + state.lifetimeOrders}: Skipped ${metrics.checkoutPlasticSkipped} plastics`,
      pts: `+${metrics.totalOrderGp} GP`
    });

    const modalImpact = document.getElementById('modalImpactDetails');
    modalImpact.innerHTML = `
      <div><strong>🌍 Plastic Items Skipped:</strong> ${metrics.checkoutPlasticSkipped} single-use items</div>
      <div><strong>🌿 Green Points Earned:</strong> +${metrics.totalOrderGp} GP (New Balance: ${state.greenPoints} GP)</div>
      <div><strong>💰 Customer Benefit:</strong> ₹${metrics.swapLongTermRupees + metrics.pkgDiscount + metrics.pointsRedeemDiscount} saved via smart choices</div>
    `;
    document.getElementById('orderModalBackdrop').classList.remove('hidden');
    renderAll();
  });

  document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('orderModalBackdrop').classList.add('hidden');
  });

  document.getElementById('todayPlaceOrderBtn').addEventListener('click', () => {
    showToast('Today Mode: 9 plastic items added with 0 Green Points earned.');
  });

  document.querySelectorAll('.today-check').forEach((chk) => {
    chk.addEventListener('change', updateTodayProblemCheckboxes);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  renderAll();
});
