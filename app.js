// DATA
// ════════════════════════════════════════════════
const MATERIALS = [
  { name:'月光石粉末', icon:'🌙', type:'light', rarity:'common', color:'#B8C5D6', unlockLevel:1 },
  { name:'曼德拉草根', icon:'🌱', type:'nature', rarity:'common', color:'#6B8E23', unlockLevel:1 },
  { name:'魔苹果种子', icon:'🍎', type:'nature', rarity:'common', color:'#8FBC8F', unlockLevel:1 },
  { name:'霜冻薄荷', icon:'❄️', type:'frost', rarity:'common', color:'#98D8C8', unlockLevel:1 },
  { name:'独角兽尾毛', icon:'🦄', type:'light', rarity:'rare', color:'#E8F4F8', unlockLevel:2 },
  { name:'龙血草', icon:'🐉', type:'fire', rarity:'rare', color:'#8B4513', unlockLevel:2 },
  { name:'深海珍珠', icon:'🫧', type:'water', rarity:'rare', color:'#4A90A4', unlockLevel:2 },
  { name:'生命之叶', icon:'🍃', type:'nature', rarity:'rare', color:'#228B22', unlockLevel:2 },
  { name:'暗影蘑菇', icon:'🍄', type:'dark', rarity:'rare', color:'#4B0082', unlockLevel:3 },
  { name:'冰晶兰花', icon:'🧊', type:'frost', rarity:'rare', color:'#B0E0E6', unlockLevel:3 },
  { name:'极光苔藓', icon:'🌈', type:'star', rarity:'rare', color:'#9D84B7', unlockLevel:3 },
  { name:'雷霆之芯', icon:'⚡', type:'thunder', rarity:'rare', color:'#a78bfa', unlockLevel:3 },
  { name:'狂风精华', icon:'🌪️', type:'wind', rarity:'rare', color:'#7dd4fc', unlockLevel:4 },
  { name:'狮鹫羽毛', icon:'🦅', type:'divine', rarity:'epic', color:'#DAA520', unlockLevel:5 },
  { name:'星辉尘', icon:'✨', type:'star', rarity:'epic', color:'#FFD700', unlockLevel:5 },
  { name:'熔岩碎片', icon:'🌋', type:'fire', rarity:'epic', color:'#FF4500', unlockLevel:5 },
  { name:'人鱼之泪', icon:'💧', type:'water', rarity:'epic', color:'#7EC8E3', unlockLevel:5 },
  { name:'水晶泪滴', icon:'💎', type:'water', rarity:'epic', color:'#E0FFFF', unlockLevel:6 },
  { name:'森林之心', icon:'🌳', type:'nature', rarity:'epic', color:'#006400', unlockLevel:6 },
  { name:'午夜水仙', icon:'🌺', type:'dark', rarity:'epic', color:'#2C1654', unlockLevel:6 },
  { name:'幽灵之雾', icon:'🌫️', type:'dark', rarity:'epic', color:'#2F4F4F', unlockLevel:7 },
  { name:'寒冰之心', icon:'🧊', type:'frost', rarity:'epic', color:'#00BFFF', unlockLevel:7 },
  { name:'灵魂碎片', icon:'👻', type:'mystic', rarity:'epic', color:'#9370DB', unlockLevel:8 },
  { name:'凤凰羽毛', icon:'🔥', type:'fire', rarity:'legendary', color:'#FF6B35', unlockLevel:9 },
  { name:'太阳石', icon:'☀️', type:'fire', rarity:'legendary', color:'#FFD700', unlockLevel:9 },
  { name:'海神之泪', icon:'🌊', type:'water', rarity:'legendary', color:'#00BFFF', unlockLevel:10 },
  { name:'时光沙砾', icon:'⏳', type:'mystic', rarity:'legendary', color:'#C19A6B', unlockLevel:12 },
  { name:'命运之线', icon:'🕸️', type:'mystic', rarity:'legendary', color:'#800080', unlockLevel:14 },
  { name:'虚空之核', icon:'🌌', type:'mystic', rarity:'legendary', color:'#000080', unlockLevel:16 },
];

const ELEMENT_COLORS = {
  light:'#fde68a', fire:'#fb923c', water:'#38bdf8', nature:'#4ade80',
  dark:'#c084fc', frost:'#bae6fd', star:'#fbbf24', divine:'#fcd34d',
  mystic:'#f9a8d4', thunder:'#a78bfa', wind:'#7dd4fc',
};

const POTION_RECIPES = [
  { name:'月光灵药', rule:m=>m.filter(i=>i.type==='light').length>=3, color:'#D4E4F7', quality:'rare', desc:'专注如月华，思绪如流水', icon:'🌙' },
  { name:'凤凰之泪', rule:m=>m.filter(i=>i.type==='fire').length>=3, color:'#FF7F50', quality:'epic', desc:'激情似火，重生如凤凰', icon:'🔥' },
  { name:'深海秘药', rule:m=>m.filter(i=>i.type==='water').length>=3, color:'#4682B4', quality:'rare', desc:'沉静如深海，智慧如潮汐', icon:'🌊' },
  { name:'生命精华', rule:m=>m.filter(i=>i.type==='nature').length>=3, color:'#90EE90', quality:'common', desc:'生机勃勃，活力充沛', icon:'🌿' },
  { name:'暗夜挽歌', rule:m=>m.filter(i=>i.type==='dark').length>=3, color:'#483D8B', quality:'epic', desc:'拥抱黑暗，洞察真理', icon:'🌑' },
  { name:'星穹秘酿', rule:m=>m.filter(i=>i.type==='star').length>=3, color:'#B695C0', quality:'epic', desc:'仰望星空，心怀宇宙', icon:'⭐' },
  { name:'极寒冰心', rule:m=>m.filter(i=>i.type==='frost').length>=3, color:'#AFEEEE', quality:'rare', desc:'冷静思考，冰雪聪明', icon:'❄️' },
  { name:'雷击神药', rule:m=>m.filter(i=>i.type==='thunder').length>=2, color:'#a78bfa', quality:'epic', desc:'雷霆之力，贯穿万物', icon:'⚡' },
  { name:'风行丹', rule:m=>m.filter(i=>i.type==='wind').length>=2, color:'#7dd4fc', quality:'rare', desc:'御风而行，思维飞驰', icon:'🌪️' },
  { name:'光暗调和', rule:m=>m.filter(i=>i.type==='light').length>=2&&m.filter(i=>i.type==='dark').length>=2, color:'#9370DB', quality:'epic', desc:'阴阳平衡，大道至简', icon:'☯️' },
  { name:'火水既济', rule:m=>m.filter(i=>i.type==='fire').length>=2&&m.filter(i=>i.type==='water').length>=2, color:'#CD853F', quality:'rare', desc:'水火相融，刚柔并济', icon:'♨️' },
  { name:'冰火奇迹', rule:m=>m.filter(i=>i.type==='frost').length>=2&&m.filter(i=>i.type==='fire').length>=2, color:'#FF69B4', quality:'epic', desc:'极端碰撞，奇迹诞生', icon:'🌡️' },
  { name:'元素交响', rule:m=>{const t=new Set(m.map(i=>i.type));return t.size>=3;}, color:'#BA55D3', quality:'epic', desc:'元素共鸣，和谐共振', icon:'🎵' },
  { name:'时光倒流药', rule:m=>m.some(i=>i.name==='时光沙砾'), color:'#DEB887', quality:'legendary', desc:'时间都为你驻足', icon:'⏳' },
  { name:'邓布利多的智慧', rule:m=>m.filter(i=>i.rarity==='legendary'||i.rarity==='epic').length>=5, color:'#9400D3', quality:'legendary', desc:'传说配方！智慧与力量的结晶', icon:'🧙' },
  { name:'霍格沃茨荣光', rule:m=>{const n=m.map(i=>i.name);return n.includes('凤凰羽毛')&&n.includes('独角兽尾毛')&&n.includes('时光沙砾')&&n.includes('星辉尘')&&n.includes('人鱼之泪');}, color:'linear-gradient(90deg,#FF6B35,#FFD700,#7EC8E3)', quality:'legendary', desc:'五巨头配方！霍格沃茨的荣耀！', icon:'🏰' },
  { name:'万象归一', rule:m=>{const t=new Set(m.map(i=>i.type));return t.size>=5;}, color:'#8B7D6B', quality:'legendary', desc:'包容万象，超凡入圣', icon:'🌐' },
  { name:'完美融合', rule:m=>{const t=new Set(m.map(i=>i.type));return t.size>=8;}, color:'#ffffff', quality:'legendary', desc:'万物归一，完美融合', icon:'💫' },
];

const LEVEL_TITLES = ['学徒','见习炼金师','炼金师','熟练炼金师','高级炼金师','大师炼金师','宗师炼金师','传奇炼金师','神话炼金师','永恒炼金师'];
const EXP_MAP = { common:20, rare:50, epic:100, legendary:200 };

// ════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════
let state = {
  timeLeft: 25*60, totalSeconds: 25*60, isRunning: false, interval: null,
  currentPotion: { id:'', totalTime:0, materials:[], status:'brewing', startDate:'' },
  player: null,
};

// ════════════════════════════════════════════════
// PLAYER DATA
// ════════════════════════════════════════════════
function loadPlayer() {
  const raw = localStorage.getItem('arcanePlayer');
  if (raw) {
    const p = JSON.parse(raw);
    state.player = { ...p, unlockedRecipes: new Set(p.unlockedRecipes||[]) };
  } else {
    state.player = { level:1, exp:0, totalPotions:0, streak:0, lastFocusDate:null, unlockedRecipes:new Set() };
  }
  checkStreak();
}
function savePlayer() {
  localStorage.setItem('arcanePlayer', JSON.stringify({ ...state.player, unlockedRecipes:[...state.player.unlockedRecipes] }));
}
function getExpForLevel(l) { return Math.floor(100 * Math.pow(l, 1.5)); }
function getLevelTitle(l) { return LEVEL_TITLES[Math.min(l-1, LEVEL_TITLES.length-1)]; }
function checkStreak() {
  const today = new Date().toDateString();
  if (!state.player.lastFocusDate) { state.player.streak=0; return; }
  const diff = Math.floor((new Date(today)-new Date(state.player.lastFocusDate))/(864e5));
  if (diff > 1) state.player.streak = 0;
}
function addExp(amount) {
  state.player.exp += amount;
  const needed = getExpForLevel(state.player.level);
  if (state.player.exp >= needed) {
    state.player.exp -= needed;
    const oldLevel = state.player.level;
    state.player.level++;
    showLevelUp();
    savePlayer();
    setTimeout(() => {
      checkAndShowUnlockNotification();
      renderMaterials();
    }, 1500);
    return true;
  }
  savePlayer();
  return false;
}
function updateStreak() {
  const today = new Date().toDateString();
  if (!state.player.lastFocusDate) {
    state.player.streak = 1;
  } else {
    const diff = Math.floor((new Date(today)-new Date(state.player.lastFocusDate))/(864e5));
    if (diff===0) {}
    else if (diff===1) state.player.streak++;
    else state.player.streak=1;
  }
  state.player.lastFocusDate = today;
  savePlayer();
}

// ════════════════════════════════════════════════
// POTION DATA
// ════════════════════════════════════════════════
function loadCurrentPotion() {
  const raw = localStorage.getItem('arcaneCurrentPotion');
  if (raw) {
    try { state.currentPotion = JSON.parse(raw); } catch(e) { newPotion(); }
  } else { newPotion(); }
}
function newPotion() {
  state.currentPotion = { id:'p_'+Date.now(), totalTime:0, materials:[], status:'brewing', startDate:new Date().toISOString() };
  localStorage.removeItem('arcaneCurrentPotion');
}
function saveCurrentPotion() { localStorage.setItem('arcaneCurrentPotion', JSON.stringify(state.currentPotion)); }
function getCompletedPotions() { return JSON.parse(localStorage.getItem('arcaneCompletedPotions')||'[]'); }
function getPokedex() {
  const done = getCompletedPotions();
  const names = new Set(done.map(p=>p.name).filter(n=>!n.includes('神秘混合')));
  return { unlocked: names.size, total: POTION_RECIPES.length, pct: Math.round(names.size/POTION_RECIPES.length*100) };
}

// ════════════════════════════════════════════════
// TIMER
// ════════════════════════════════════════════════
function startTimer() {
  if (state.isRunning) return;
  if (state.currentPotion.materials.length === 0) { toast('⚠️','请先向坩埚中添加至少一种原料！'); return; }
  state.isRunning = true;
  updateTimerUI();
  if (typeof potionCanvas !== 'undefined') potionCanvas.setFlame(true);
  state.interval = setInterval(() => {
    state.timeLeft--;
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      state.currentPotion.totalTime += Math.round(state.totalSeconds/60);
      state.currentPotion.totalTime = Math.max(state.currentPotion.totalTime, 1);
      saveCurrentPotion();
      pauseTimer();
      toast('⏰','一轮专注完成！继续添加原料，或完成魔药吧！');
      if (typeof potionCanvas !== 'undefined') potionCanvas.setFlame(false);
    }
    updateTimerDisplay();
    updateTimerRing();
  }, 1000);
  updateControlButtons();
  updateTimerDisplay();
}
function pauseTimer() {
  if (!state.isRunning) return;
  state.isRunning = false;
  clearInterval(state.interval); state.interval = null;
  if (typeof potionCanvas !== 'undefined') potionCanvas.setFlame(false);
  updateControlButtons();
}
function resetTimer() {
  pauseTimer();
  state.timeLeft = state.totalSeconds;
  updateTimerDisplay(); updateTimerRing();
  updateControlButtons();
}
function updateTimerDisplay() {
  const m = Math.floor(state.timeLeft/60).toString().padStart(2,'0');
  const s = (state.timeLeft%60).toString().padStart(2,'0');
  document.getElementById('timerText').textContent = m+':'+s;
}
function updateTimerRing() {
  const circumference = 2*Math.PI*80;
  const progress = state.timeLeft/state.totalSeconds;
  const ring = document.getElementById('timerRing');
  ring.style.strokeDashoffset = circumference*(1-progress);
  const color = state.isRunning ? '#e8c96a' : '#6040a0';
  ring.style.stroke = color;
  // Tint ring by current mix color
  if (state.currentPotion.materials.length > 0 && state.isRunning) {
    const col = getMixColor(state.currentPotion.materials);
    ring.style.stroke = col;
  }
  if (typeof potionCanvas !== 'undefined') potionCanvas.setLiquidLevel(1-progress);
}
function updateTimerUI() { updateTimerDisplay(); updateTimerRing(); }
function updateControlButtons() {
  const mc = state.currentPotion.materials.length;
  document.getElementById('btnStart').style.display = state.isRunning ? 'none' : '';
  document.getElementById('btnPause').style.display = state.isRunning ? '' : 'none';
  const canComplete = mc>=2 && mc<=6 && !state.isRunning && state.currentPotion.totalTime>0;
  document.getElementById('btnComplete').style.display = canComplete ? '' : 'none';
}

// ════════════════════════════════════════════════
// MATERIALS
// ════════════════════════════════════════════════
function addMaterial(mat) {
  if (state.isRunning) { toast('⚠️','炼制中无法添加原料！先暂停吧。'); return; }
  if (state.currentPotion.materials.length >= 6) { toast('⚠️','坩埚已满！最多6种原料。'); return; }
  const already = state.currentPotion.materials.find(m=>m.name===mat.name);
  if (already) { toast('💬','该原料已在坩埚中。'); return; }
  state.currentPotion.materials.push(mat);
  saveCurrentPotion();
  if (typeof potionCanvas !== 'undefined') {
    const col = getMixColor(state.currentPotion.materials);
    potionCanvas.setLiquidColor(col);
    potionCanvas.addMaterialEffect(mat);
  }
  updateProgressDisplay(); updateControlButtons();
  playSound(440+Math.random()*200, 0.15, 0.2);
  toast(mat.icon, `${mat.name} 已投入坩埚！`);
}
function getMixColor(mats) {
  if (!mats || mats.length===0) return '#6040a0';
  const r=Math.round(mats.reduce((a,m)=>a+parseInt(m.color.slice(1,3)||'60',16),0)/mats.length);
  const g=Math.round(mats.reduce((a,m)=>a+parseInt(m.color.slice(3,5)||'40',16),0)/mats.length);
  const b=Math.round(mats.reduce((a,m)=>a+parseInt(m.color.slice(5,7)||'a0',16),0)/mats.length);
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}
function getElemClass(type) { return 'ec-'+type; }

function isMaterialUnlocked(mat) {
  const level = state.player ? state.player.level : 1;
  return level >= mat.unlockLevel;
}

function getNewlyUnlockedMaterials() {
  if (!state.player) return [];
  const level = state.player.level;
  return MATERIALS.filter(m => m.unlockLevel === level);
}

function checkAndShowUnlockNotification() {
  const newlyUnlocked = getNewlyUnlockedMaterials();
  if (newlyUnlocked.length > 0 && state.player) {
    const hasSeen = localStorage.getItem(`seenUnlockLv${state.player.level}`);
    if (!hasSeen) {
      const names = newlyUnlocked.map(m => `${m.icon} ${m.name}`).join('、');
      toast('✨', `新原料解锁！${names}`);
      localStorage.setItem(`seenUnlockLv${state.player.level}`, 'true');
    }
  }
}

function renderMaterials() {
  const grid = document.getElementById('materialGrid');
  const level = state.player ? state.player.level : 1;

  grid.innerHTML = MATERIALS.map((m,i)=>{
    const unlocked = isMaterialUnlocked(m);
    const lockClass = unlocked ? '' : 'locked';
    const newUnlock = unlocked && m.unlockLevel === level && !localStorage.getItem(`highlighted_${m.name}`);
    const newUnlockClass = newUnlock ? 'newly-unlocked' : '';

    if (newUnlock) {
      setTimeout(() => localStorage.setItem(`highlighted_${m.name}`, 'true'), 3000);
    }

    const rarityText = {common:'普通',rare:'稀有',epic:'史诗',legendary:'传奇'}[m.rarity];
    const typeText = {light:'光',fire:'火',water:'水',nature:'自然',dark:'暗',frost:'冰',star:'星',divine:'神圣',mystic:'神秘',thunder:'雷',wind:'风'}[m.type] || m.type;

    return `
    <div class="mat-item ${lockClass} ${newUnlockClass}" 
         data-index="${i}" 
         data-unlocked="${unlocked}"
         data-name="${m.name}"
         data-icon="${m.icon}"
         data-rarity="${rarityText}"
         data-type="${typeText}"
         data-color="${m.color}"
         data-unlock="${m.unlockLevel}">
      <div class="mat-item-icon">${m.icon}</div>
      <div class="mat-item-name">${unlocked ? m.name : '???'}</div>
    </div>
  `}).join('');
  initDragAndDrop();
  initMaterialTooltips();
}

function initMaterialTooltips() {
  const items = document.querySelectorAll('.mat-item');
  let currentTooltip = null;

  items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      if (item.classList.contains('locked')) return;

      const name = item.dataset.name;
      const icon = item.dataset.icon;
      const rarity = item.dataset.rarity;
      const type = item.dataset.type;
      const color = item.dataset.color;

      const rarityColors = {
        '普通': 'rgba(136,136,136,0.3)',
        '稀有': 'rgba(55,138,221,0.3)',
        '史诗': 'rgba(157,111,239,0.3)',
        '传奇': 'rgba(232,201,106,0.4)'
      };

      currentTooltip = document.createElement('div');
      currentTooltip.className = 'mat-tooltip';
      currentTooltip.innerHTML = `
        <div class="mat-tooltip-header">
          <span class="mat-tooltip-icon">${icon}</span>
          <span class="mat-tooltip-name">${name}</span>
        </div>
        <div class="mat-tooltip-rarity" style="background:${rarityColors[rarity]||'rgba(136,136,136,0.3)'};border:1px solid ${color};color:${color}">${rarity}</div>
        <div class="mat-tooltip-type">✧ ${type}属性</div>
        <div class="mat-tooltip-hint">拖拽到坩埚添加</div>
      `;

      const rect = item.getBoundingClientRect();
      currentTooltip.style.left = (rect.right + 12) + 'px';
      currentTooltip.style.top = rect.top + 'px';

      document.body.appendChild(currentTooltip);
    });

    item.addEventListener('mouseleave', () => {
      if (currentTooltip) {
        currentTooltip.remove();
        currentTooltip = null;
      }
    });
  });
}

// ════════════════════════════════════════════════
// DRAG AND DROP
// ════════════════════════════════════════════════
let dragState = {
  isDragging: false,
  material: null,
  ghost: null,
  startX: 0,
  startY: 0
};

function initDragAndDrop() {
  const items = document.querySelectorAll('.mat-item');
  const dropZone = document.getElementById('dropZone');
  const cauldronCanvas = document.getElementById('cauldronCanvas');

  items.forEach(item => {
    item.addEventListener('mousedown', onDragStart);
    item.addEventListener('touchstart', onTouchStart, { passive: false });
  });

  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('touchmove', onTouchMove, { passive: false });
  document.addEventListener('mouseup', onDragEnd);
  document.addEventListener('touchend', onTouchEnd);
}

function onDragStart(e) {
  if (state.isRunning) return;
  const index = parseInt(e.currentTarget.dataset.index);
  const mat = MATERIALS[index];

  if (!isMaterialUnlocked(mat)) {
    toast('🔒', `需要达到 Lv.${mat.unlockLevel} 才能使用此原料！`);
    playSound(150, 0.1, 0.1);
    return;
  }

  const rect = e.currentTarget.getBoundingClientRect();

  dragState.isDragging = true;
  dragState.material = mat;
  dragState.startX = e.clientX;
  dragState.startY = e.clientY;

  e.currentTarget.classList.add('dragging');

  createGhost(mat, e.clientX, e.clientY);
  playSound(300, 0.1, 0.1);
}

function onTouchStart(e) {
  if (state.isRunning) return;
  e.preventDefault();
  const touch = e.touches[0];
  const index = parseInt(e.currentTarget.dataset.index);
  const mat = MATERIALS[index];

  if (!isMaterialUnlocked(mat)) {
    toast('🔒', `需要达到 Lv.${mat.unlockLevel} 才能使用此原料！`);
    playSound(150, 0.1, 0.1);
    return;
  }

  dragState.isDragging = true;
  dragState.material = mat;
  dragState.startX = touch.clientX;
  dragState.startY = touch.clientY;

  e.currentTarget.classList.add('dragging');
  createGhost(mat, touch.clientX, touch.clientY);
  playSound(300, 0.1, 0.1);
}

function createGhost(mat, x, y) {
  const ghost = document.createElement('div');
  ghost.className = 'drag-ghost';
  ghost.textContent = mat.icon;
  ghost.style.left = x + 'px';
  ghost.style.top = y + 'px';
  ghost.style.setProperty('--ghost-color', mat.color || '#9d6fef');
  document.body.appendChild(ghost);
  dragState.ghost = ghost;
}

function onDragMove(e) {
  if (!dragState.isDragging) return;

  if (dragState.ghost) {
    dragState.ghost.style.left = e.clientX + 'px';
    dragState.ghost.style.top = e.clientY + 'px';
  }

  checkDropZone(e.clientX, e.clientY);
}

function onTouchMove(e) {
  if (!dragState.isDragging) return;
  e.preventDefault();

  const touch = e.touches[0];
  if (dragState.ghost) {
    dragState.ghost.style.left = touch.clientX + 'px';
    dragState.ghost.style.top = touch.clientY + 'px';
  }

  checkDropZone(touch.clientX, touch.clientY);
}

function checkDropZone(x, y) {
  const dropZone = document.getElementById('dropZone');
  const rect = dropZone.getBoundingClientRect();

  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    dropZone.classList.add('active');
  } else {
    dropZone.classList.remove('active');
  }
}

function onDragEnd(e) {
  if (!dragState.isDragging) return;

  const dropZone = document.getElementById('dropZone');
  const rect = dropZone.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    performDrop(x, y);
  } else {
    cancelDrag();
  }
}

function onTouchEnd(e) {
  if (!dragState.isDragging) return;

  const touch = e.changedTouches[0];
  const dropZone = document.getElementById('dropZone');
  const rect = dropZone.getBoundingClientRect();

  if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
      touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
    performDrop(touch.clientX, touch.clientY);
  } else {
    cancelDrag();
  }
}

function performDrop(x, y) {
  const mat = dragState.material;
  if (!mat) {
    cancelDrag();
    return;
  }

  playDropAnimation(mat, x, y);
  setTimeout(() => {
    addMaterial(mat);
  }, 300);

  cleanupDrag();
}

function playDropAnimation(mat, x, y) {
  const dropAnim = document.createElement('div');
  dropAnim.className = 'drop-animation';
  dropAnim.textContent = mat.icon;
  dropAnim.style.left = x + 'px';
  dropAnim.style.top = y + 'px';
  dropAnim.style.fontSize = '3rem';
  dropAnim.style.color = mat.color || '#9d6fef';
  document.body.appendChild(dropAnim);
  playSound(500, 0.2, 0.15);
  setTimeout(() => dropAnim.remove(), 600);
}

function cancelDrag() {
  playSound(200, 0.05, 0.1);
  cleanupDrag();
}

function cleanupDrag() {
  document.querySelectorAll('.mat-item.dragging').forEach(el => {
    el.classList.remove('dragging');
  });

  const dropZone = document.getElementById('dropZone');
  dropZone.classList.remove('active');

  if (dragState.ghost) {
    dragState.ghost.remove();
  }

  dragState.isDragging = false;
  dragState.material = null;
  dragState.ghost = null;
}

function updateProgressDisplay() {
  document.getElementById('progTime').textContent = state.currentPotion.totalTime;
  document.getElementById('progCount').textContent = state.currentPotion.materials.length;
  const slotRow = document.getElementById('slotRow');
  const addedList = document.getElementById('addedList');
  if (state.currentPotion.materials.length===0) {
    slotRow.innerHTML = '<span class="slot-empty">投入原料，开始你的炼制之旅…</span>';
    addedList.innerHTML = '<div class="added-empty">虚空等待<br>投入原料</div>';
  } else {
    slotRow.innerHTML = state.currentPotion.materials.map((m,i)=>
      `<div class="slot-tag" onclick="removeMaterial(${i})">${m.icon} ${m.name}</div>`
    ).join('');
    addedList.innerHTML = state.currentPotion.materials.map(m=>
      `<div class="added-item"><span class="added-item-icon">${m.icon}</span><span>${m.name}</span></div>`
    ).join('');
  }
}

function removeMaterial(index) {
  if (state.isRunning) {
    toast('⚠️', '炼制中无法移除原料！先暂停吧。');
    return;
  }

  const mat = state.currentPotion.materials[index];
  state.currentPotion.materials.splice(index, 1);
  saveCurrentPotion();

  if (typeof potionCanvas !== 'undefined') {
    if (state.currentPotion.materials.length > 0) {
      const col = getMixColor(state.currentPotion.materials);
      potionCanvas.setLiquidColor(col);
    } else {
      potionCanvas.setLiquidColor('#6040a0');
    }
  }

  updateProgressDisplay();
  updateControlButtons();
  playSound(300, 0.1, 0.1);
  toast(mat.icon, `${mat.name} 已从坩埚移除`);
}

// ════════════════════════════════════════════════
// CONTINUE POTION MODAL
// ════════════════════════════════════════════════
function showContinueModal() {
  const mats = state.currentPotion.materials;
  if (mats.length === 0) return false;

  const modal = document.createElement('div');
  modal.className = 'continue-modal';
  modal.id = 'continueModal';

  const materialsHtml = mats.map(m =>
    `<span class="continue-material-tag">${m.icon} ${m.name}</span>`
  ).join('');

  modal.innerHTML = `
    <div class="continue-box">
      <div class="continue-title">⚗️ 发现未完成的魔药</div>
      <div class="continue-materials">${materialsHtml}</div>
      <div class="continue-hint">已炼制 ${state.currentPotion.totalTime} 分钟 · ${mats.length} 种原料</div>
      <div class="continue-buttons">
        <button class="continue-btn continue-btn-yes" onclick="continuePotion()">继续炼制</button>
        <button class="continue-btn continue-btn-no" onclick="discardPotion()">重新开始</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  return true;
}

function continuePotion() {
  const modal = document.getElementById('continueModal');
  if (modal) modal.remove();
  toast('⚗️', '继续上次的炼制吧！');
}

function discardPotion() {
  const modal = document.getElementById('continueModal');
  if (modal) modal.remove();

  newPotion();
  if (typeof potionCanvas !== 'undefined') {
    potionCanvas.setLiquidLevel(0);
    potionCanvas.setLiquidColor('#6040a0');
  }
  updateProgressDisplay();
  updateControlButtons();
  toast('✨', '坩埚已清空，开始新的炼制！');
}

// ════════════════════════════════════════════════
// COMPLETE POTION
// ════════════════════════════════════════════════
function completePotion() {
  const mats = state.currentPotion.materials;
  if (mats.length < 2) { toast('⚠️','至少需要2种原料！'); return; }
  const recipe = POTION_RECIPES.find(r=>r.rule(mats)) || {
    name:'神秘混合药剂', color:'#9370DB', quality:'common',
    desc:'未知配方的神秘混合……也许这就是命运的安排。', icon:'🔮'
  };
  const expGain = EXP_MAP[recipe.quality]||20;

  // Save
  state.currentPotion.name = recipe.name;
  state.currentPotion.finalColor = recipe.color;
  state.currentPotion.quality = recipe.quality;
  state.currentPotion.description = recipe.desc;
  state.currentPotion.icon = recipe.icon||'🧪';
  state.currentPotion.status = 'completed';
  state.currentPotion.completedDate = new Date().toISOString();

  const done = getCompletedPotions();
  done.push(state.currentPotion);
  localStorage.setItem('arcaneCompletedPotions', JSON.stringify(done));
  localStorage.removeItem('arcaneCurrentPotion');

  state.player.totalPotions++;
  updateStreak();
  addExp(expGain);

  // Show result
  showCompletion(recipe, expGain);
  createFireworks();

  // Reset
  newPotion();
  if (typeof potionCanvas !== 'undefined') { potionCanvas.setLiquidLevel(0); potionCanvas.setLiquidColor('#6040a0'); }
  updateProgressDisplay(); updateControlButtons(); updateStatsDisplay();
  updateTimerDisplay(); updateTimerRing();
}

function showCompletion(recipe, exp) {
  const col = typeof recipe.color==='string'&&recipe.color.startsWith('#') ? recipe.color : '#9370DB';
  const orb = document.getElementById('compOrb');
  orb.style.background = `radial-gradient(circle at 35% 35%, ${col}88, ${col}22)`;
  orb.style.boxShadow = `0 0 40px ${col}66, inset 0 0 20px rgba(255,255,255,0.1)`;
  orb.textContent = recipe.icon||'🧪';
  document.getElementById('compName').textContent = recipe.name;
  document.getElementById('compDesc').textContent = recipe.desc;
  document.getElementById('compExp').textContent = `+${exp} EXP`;
  document.getElementById('compStreak').textContent = `🔥 连续 ${state.player.streak} 天`;
  const box = document.getElementById('completionBox');
  const qColors = { common:'rgba(136,136,136,0.5)', rare:'rgba(55,138,221,0.5)', epic:'rgba(157,111,239,0.5)', legendary:'rgba(232,201,106,0.6)' };
  box.style.borderColor = qColors[recipe.quality]||qColors.common;
  document.getElementById('completionOverlay').classList.add('active');
}
function closeCompletion() { document.getElementById('completionOverlay').classList.remove('active'); }

// ════════════════════════════════════════════════
// LEVEL UP
// ════════════════════════════════════════════════
function showLevelUp() {
  const el = document.createElement('div');
  el.className = 'levelup-overlay';
  el.innerHTML = `
    <div class="levelup-box">
      <span class="levelup-star">⭐</span>
      <div class="levelup-title">升 级 ！</div>
      <div class="levelup-sub">现在是 Lv.${state.player.level} — ${getLevelTitle(state.player.level)}</div>
    </div>
  `;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 2800);
}

// ════════════════════════════════════════════════
// STATS DISPLAY
// ════════════════════════════════════════════════
function updateStatsDisplay() {
  const needed = getExpForLevel(state.player.level);
  const pct = Math.round(state.player.exp/needed*100);
  const pd = getPokedex();
  document.getElementById('statLevel').textContent = state.player.level;
  document.getElementById('statTitle').textContent = getLevelTitle(state.player.level);
  document.getElementById('statExp').textContent = state.player.exp;
  document.getElementById('statExpMax').textContent = needed;
  document.getElementById('expFill').style.width = pct+'%';
  document.getElementById('statStreak').textContent = state.player.streak;
  document.getElementById('statPokedex').textContent = pd.unlocked;
  document.getElementById('statPokedexTotal').textContent = pd.total;
  document.getElementById('statTotal').textContent = state.player.totalPotions;
}

// ════════════════════════════════════════════════
// GALLERY
// ════════════════════════════════════════════════
function loadGallery() {
  const potions = getCompletedPotions().reverse();
  const grid = document.getElementById('galleryGrid');
  if (!potions.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">炼制你的第一瓶魔药，在此留下传说…</p>';
    return;
  }
  const qText = { common:'普通', rare:'稀有', epic:'史诗', legendary:'传奇' };
  grid.innerHTML = potions.map(p=>{
    const col = typeof p.finalColor==='string'&&p.finalColor.startsWith('#') ? p.finalColor : '#9370DB';
    return `
    <div class="potion-card">
      <span class="quality-badge q-${p.quality}">${qText[p.quality]||'普通'}</span>
      <div class="potion-orb" style="background:radial-gradient(circle at 35% 35%,${col}aa,${col}22);box-shadow:0 0 20px ${col}44">
        <div class="potion-orb-inner">${p.icon||'🧪'}</div>
      </div>
      <div class="potion-name">${p.name}</div>
      <div class="potion-desc">${p.description||''}</div>
      <div class="potion-meta">
        <div>⏳ 总时长：${p.totalTime||0} 分钟</div>
        <div>📅 ${new Date(p.completedDate).toLocaleDateString('zh-CN')}</div>
        <div style="margin-top:4px">${(p.materials||[]).map(m=>m.icon+' '+m.name).join('　')}</div>
      </div>
    </div>`;
  }).join('');
}

// ════════════════════════════════════════════════
// TAB
// ════════════════════════════════════════════════
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.getElementById('brew-view').style.display = tab==='brew' ? '' : 'none';
  document.getElementById('gallery-view').style.display = tab==='gallery' ? '' : 'none';
  if (tab==='gallery') loadGallery();
}

// ════════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════════
function toast(icon, msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${icon}</span>${msg}`;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 3200);
}

// ════════════════════════════════════════════════
// FIREWORKS
// ════════════════════════════════════════════════
function createFireworks() {
  const colors = ['#FFD700','#FF6B35','#7EC8E3','#9B59B6','#90EE90','#FF69B4','#e8c96a'];
  for (let i=0;i<40;i++) {
    setTimeout(()=>{
      const s = document.createElement('div');
      s.className = 'spark';
      const tx = (Math.random()-0.5)*300, ty = -(Math.random()*300+100);
      const col = colors[Math.floor(Math.random()*colors.length)];
      const size = 4+Math.random()*6;
      s.style.cssText = `left:${40+Math.random()*60}vw;top:${30+Math.random()*40}vh;width:${size}px;height:${size}px;background:${col};box-shadow:0 0 ${size*2}px ${col};--tx:${tx}px;--ty:${ty}px;--dur:${0.8+Math.random()*0.6}s`;
      document.body.appendChild(s);
      setTimeout(()=>s.remove(), 1500);
    }, i*45);
  }
}

// ════════════════════════════════════════════════
// SOUND
// ════════════════════════════════════════════════
let audioCtx;
function playSound(freq, dur=0.3, vol=0.08) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = freq; osc.type = 'sine';
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime+dur);
    osc.start(); osc.stop(audioCtx.currentTime+dur);
  } catch(e){}
}

// ════════════════════════════════════════════════
// CANVAS CAULDRON
// ════════════════════════════════════════════════
class PotionCanvas {
  constructor(container) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 320; this.canvas.height = 320;
    this.canvas.style.cssText = 'width:320px;height:320px;border-radius:12px';
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.liquidColor = '#6040a0';
    this.liquidLevel = 0;
    this.targetLevel = 0;
    this.flameActive = false;
    this.bubbles = [];
    this.sparks = [];
    this.particles = [];
    this.time = 0;
    this.materialFlash = null;
    requestAnimationFrame(()=>this.loop());
  }
  setFlame(v) { this.flameActive = v; }
  setLiquidColor(c) { this.liquidColor = c; }
  setLiquidLevel(l) { this.targetLevel = Math.max(0, Math.min(1, l)); }
  addMaterialEffect(mat) {
    this.materialFlash = { color: mat.color || '#fff', life: 30, maxLife: 30 };
    for (let i = 0; i < 12; i++) {
      this.particles.push({
        x: 160 + (Math.random() - 0.5) * 60,
        y: 180 + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 4,
        vy: -(Math.random() * 4 + 2),
        life: 0, maxLife: 30 + Math.random() * 20,
        color: mat.color || '#fff', size: 3 + Math.random() * 4
      });
    }
  }
  loop() {
    this.time++;
    this.liquidLevel += (this.targetLevel - this.liquidLevel) * 0.03;
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  // 获取锅体路径
  getCauldronPath(ctx) {
    // 以 (0,0) 为底部中心的锅体路径
    ctx.beginPath();
    ctx.moveTo(-70, 0); // 底部左
    ctx.bezierCurveTo(-110, -10, -120, -60, -110, -100); // 左侧腹部
    ctx.bezierCurveTo(-100, -140, -80, -150, -60, -150); // 左上口
    ctx.lineTo(60, -150); // 顶部平齐
    ctx.bezierCurveTo(80, -150, 100, -140, 110, -100); // 右上口
    ctx.bezierCurveTo(120, -60, 110, -10, 70, 0); // 右侧腹部
    ctx.closePath();
  }

  draw() {
    const ctx = this.ctx, w = 320, h = 320;
    ctx.clearRect(0, 0, w, h);

    // 1. 背景绘制
    const bg = ctx.createRadialGradient(160, 160, 20, 160, 180, 180);
    bg.addColorStop(0, 'rgba(15,22,50,0.95)');
    bg.addColorStop(1, 'rgba(6,10,20,0.98)');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

    // 2. 符文阵 (中心 160, 180)
    ctx.save();
    ctx.translate(160, 180);
    ctx.strokeStyle = 'rgba(232,201,106,0.08)';
    for (let r of [90, 75]) {
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.restore();

    // ─── 统一参考点：容器底部中心 (160, 270) ───
    const cx = 160, cy = 270;

    // 3. 火焰
    if (this.flameActive) {
      for (let f = 0; f < 5; f++) {
        const fx = cx + (f - 2) * 25;
        const fy = cy - 5;
        const fh = 40 + 15 * Math.sin(this.time * 0.15 + f);
        const grad = ctx.createRadialGradient(fx, fy, 2, fx, fy, fh);
        grad.addColorStop(0, 'rgba(255,255,200,0.9)');
        grad.addColorStop(0.4, 'rgba(255,160,0,0.6)');
        grad.addColorStop(1, 'rgba(255,60,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(fx, fy, fh * 0.6, 0, Math.PI * 2); ctx.fill();
      }
      if (Math.random() < 0.3) {
        this.sparks.push({ x: cx + (Math.random() - 0.5) * 80, y: cy - 10, vx: (Math.random() - 0.5) * 2, vy: -(Math.random() * 3 + 2), life: 0, maxLife: 30 });
      }
    }

    // 4. 锅腿
    const legX = [-70, 0, 70];
    ctx.fillStyle = '#1a1510';
    legX.forEach(x => {
      ctx.beginPath();
      ctx.moveTo(cx + x - 10, cy);
      ctx.lineTo(cx + x + 10, cy);
      ctx.lineTo(cx + x + 15, cy + 15);
      ctx.lineTo(cx + x - 15, cy + 15);
      ctx.fill();
    });

    // 5. 锅体与液体
    ctx.save();
    ctx.translate(cx, cy - 10); // 稍微往上提一点，不压在腿上

    // 绘制锅体阴影/底色
    ctx.save();
    this.getCauldronPath(ctx);
    const bodyGrad = ctx.createLinearGradient(-100, -150, 100, 0);
    bodyGrad.addColorStop(0, '#2a2420');
    bodyGrad.addColorStop(0.5, '#453c35');
    bodyGrad.addColorStop(1, '#251f1a');
    ctx.fillStyle = bodyGrad;
    ctx.fill();
    ctx.strokeStyle = '#15100d';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // 液体裁剪区域
    if (this.liquidLevel > 0) {
      ctx.save();
      this.getCauldronPath(ctx);
      ctx.clip();

      const fillH = this.liquidLevel * 140; // 最高填满高度
      const waveY = -fillH;
      const waveOff = Math.sin(this.time * 0.06) * 3;

      ctx.fillStyle = this.liquidColor + '99';
      ctx.beginPath();
      ctx.moveTo(-150, waveY + waveOff);
      for (let x = -150; x <= 150; x += 20) {
        ctx.lineTo(x, waveY + waveOff + 4 * Math.sin(this.time * 0.1 + x * 0.05));
      }
      ctx.lineTo(150, 50); ctx.lineTo(-150, 50);
      ctx.fill();

      // 液体表面的光泽
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fillRect(-150, waveY + waveOff, 300, 5);
      ctx.restore();
    }

    // 6. 锅沿 (Rim) - 必须在液体后面或前面，这里放在前面增加立体感
    const rimY = -150;
    const rimGrad = ctx.createLinearGradient(-100, 0, 100, 0);
    rimGrad.addColorStop(0, '#3d3530');
    rimGrad.addColorStop(0.5, '#655a50');
    rimGrad.addColorStop(1, '#3d3530');
    ctx.fillStyle = rimGrad;
    ctx.beginPath();
    ctx.ellipse(0, rimY, 95, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1a1510';
    ctx.lineWidth = 3;
    ctx.stroke();

    // 锅沿内圈
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(0, rimY, 80, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // 7. 装饰铆钉
    const rivets = [[-85, -90], [85, -90], [-95, -50], [95, -50]];
    rivets.forEach(([rx, ry]) => {
      ctx.fillStyle = '#15100d';
      ctx.beginPath(); ctx.arc(rx, ry, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#453c35';
      ctx.beginPath(); ctx.arc(rx - 1, ry - 1, 2, 0, Math.PI * 2); ctx.fill();
    });

    ctx.restore(); // 结束中心点偏移

    // 8. 冒泡与粒子 (全局坐标)
    this.bubbles = this.bubbles.filter(b => b.life < b.maxLife);
    this.bubbles.forEach(b => {
      b.y += b.vy; b.life++;
      const a = (1 - b.life / b.maxLife) * 0.6;
      ctx.strokeStyle = `rgba(255,255,255,${a})`;
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.stroke();
    });

    this.sparks = this.sparks.filter(s => s.life < s.maxLife);
    this.sparks.forEach(s => {
      s.x += s.vx; s.y += s.vy; s.vy += 0.1; s.life++;
      ctx.fillStyle = `rgba(255,200,50,${1 - s.life / s.maxLife})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, 2, 0, Math.PI * 2); ctx.fill();
    });

    this.particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.life++;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 1 - p.life / p.maxLife;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;

    // 9. 原料投入闪光
    if (this.materialFlash) {
      ctx.save();
      ctx.translate(cx, cy - 160);
      const alpha = this.materialFlash.life / this.materialFlash.maxLife;
      ctx.strokeStyle = this.materialFlash.color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.ellipse(0, 0, 105, 18, 0, 0, Math.PI * 2); ctx.stroke();
      this.materialFlash.life--;
      ctx.restore();
    }
  }
}

// ════════════════════════════════════════════════
// STARS
// ════════════════════════════════════════════════
function initStars() {
  const sf = document.getElementById('starfield');
  for(let i=0;i<160;i++){
    const s = document.createElement('div');
    s.className='star';
    const size = Math.random()<0.1 ? 2.5 : Math.random()<0.3 ? 1.5 : 1;
    const delay = Math.random()*5;
    const dur = 2+Math.random()*5;
    const minOp = 0.05+Math.random()*0.3;
    s.style.cssText=`width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${dur}s;--delay:${delay}s;--min-op:${minOp}`;
    sf.appendChild(s);
  }
}

// ════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════
function init() {
  initStars();
  loadPlayer();
  loadCurrentPotion();
  potionCanvas = new PotionCanvas(document.getElementById('cauldronCanvas'));
  if(state.currentPotion.materials.length>0) {
    const col = getMixColor(state.currentPotion.materials);
    potionCanvas.setLiquidColor(col);
    const elapsed = state.currentPotion.totalTime>0 ? Math.min(state.currentPotion.totalTime/25, 1) : 0;
    potionCanvas.setLiquidLevel(elapsed*0.7);
  }
  renderMaterials();
  updateProgressDisplay();
  updateStatsDisplay();
  updateTimerDisplay();
  updateTimerRing();
  updateControlButtons();
  document.getElementById('statPokedexTotal').textContent = POTION_RECIPES.length;
  checkAndShowUnlockNotification();
  showContinueModal();
}

init();
