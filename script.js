const weapons = {
    "large": [
        {"name": "1865 Carbine", "price": 70}, {"name": "1865 Carbine Aperture", "price": 74}, {"name": "1865 Carbine Silencer", "price": 80},
        {"name": "Auto-5", "price": 600}, {"name": "Berthier 1892", "price": 330}, {"name": "Berthier 1892 Deadeye", "price": 347},
        {"name": "Berthier 1892 Marksman", "price": 363}, {"name": "Berthier 1892 Riposte", "price": 340}, {"name": "Centennial", "price": 157},
        {"name": "Centennial Sniper", "price": 181}, {"name": "Centennial Trauma", "price": 167}, {"name": "Crossbow", "price": 50},
        {"name": "Crossbow Deadeye", "price": 53}, {"name": "Drilling", "price": 510}, {"name": "Frontier 73C", "price": 41},
        {"name": "Frontier 73C Marksman", "price": 45}, {"name": "Frontier 73C Silencer", "price": 47}, {"name": "Bomb Lance", "price": 199},
        {"name": "Infantry 73L", "price": 78}, {"name": "Infantry 73L Bayonet", "price": 88}, {"name": "Infantry 73L Sniper", "price": 90},
        {"name": "LeMat Carbine", "price": 115}, {"name": "LeMat Carbine Marksman", "price": 127}, {"name": "Krag", "price": 450},
        {"name": "Krag Bayonet", "price": 460}, {"name": "Krag Silencer", "price": 517}, {"name": "Krag Sniper", "price": 517},
        {"name": "Lebel 1886", "price": 397}, {"name": "Lebel 1886 Aperture", "price": 417}, {"name": "Lebel 1886 Marksman", "price": 437},
        {"name": "Lebel 1886 Talon", "price": 407}, {"name": "Mako 1895", "price": 360}, {"name": "Mako 1895 Aperture", "price": 378},
        {"name": "Mako 1895 Claw", "price": 370}, {"name": "Marathon", "price": 68}, {"name": "Marathon Swift", "price": 95},
        {"name": "Martini-Henry", "price": 122}, {"name": "Martini-Henry Deadeye", "price": 128}, {"name": "Martini-Henry Marksman", "price": 134},
        {"name": "Martini-Henry Riposte", "price": 132}, {"name": "Martini-Henry Ironside", "price": 159}, {"name": "Maynard Sniper", "price": 139},
        {"name": "Maynard Sniper Silencer", "price": 159}, {"name": "Mosin Obrez Match", "price": 345}, {"name": "Mosin Obrez Sharpeye", "price": 362},
        {"name": "Mosin-Nagant", "price": 620}, {"name": "Mosin-Nagant Avtomat", "price": 1250}, {"name": "Mosin-Nagant Bayonet", "price": 630},
        {"name": "Mosin-Nagant Sniper", "price": 713}, {"name": "Nitro Express", "price": 1015}, {"name": "Officer Carbine", "price": 183},
        {"name": "Officer Carbine Deadeye", "price": 192}, {"name": "Ranger 73", "price": 75}, {"name": "Ranger 73 Aperture", "price": 79},
        {"name": "Ranger 73 Swift", "price": 128}, {"name": "Ranger 73 Talon", "price": 85}, {"name": "Rival 78", "price": 150},
        {"name": "Rival 78 Trauma", "price": 160}, {"name": "Romero 77", "price": 66}, {"name": "Romero 77 Alamo", "price": 98},
        {"name": "Romero 77 Talon", "price": 76}, {"name": "Slate", "price": 333}, {"name": "Slate Riposte", "price": 343},
        {"name": "Sparks", "price": 130}, {"name": "Sparks Silencer", "price": 149}, {"name": "Sparks Sniper", "price": 150},
        {"name": "Specter 1882", "price": 188}, {"name": "Specter 1882 Bayonet", "price": 198}, {"name": "Springfield 1866", "price": 38},
        {"name": "Springfield 1866 Bayonet", "price": 48}, {"name": "Springfield 1866 Marksman", "price": 42}, {"name": "Terminus", "price": 238},
        {"name": "Vetterli 71", "price": 105}, {"name": "Vetterli 71 Bayonet", "price": 115}, {"name": "Vetterli 71 Cyclone", "price": 280},
        {"name": "Vetterli 71 Deadeye", "price": 110}, {"name": "Vetterli 71 Marksman", "price": 116}, {"name": "Vetterli 71 Silencer", "price": 120}
    ],
    "medium": [
        {"name": "Auto-4 Shorty", "price": 300}, {"name": "Bomb Launcher", "price": 110}, {"name": "Bornheim No. 3 Match", "price": 180},
        {"name": "Centennial Pointman", "price": 114}, {"name": "Centennial Shorty", "price": 103}, {"name": "Centennial Shorty Silencer", "price": 118},
        {"name": "Chu Ko Nu", "price": 75}, {"name": "Dolch 96 Precision", "price": 730}, {"name": "Drilling Hatchet", "price": 340},
        {"name": "Drilling Shorty", "price": 330}, {"name": "Haymaker", "price": 279}, {"name": "Hunting Bow", "price": 57},
        {"name": "Mosin Obrez", "price": 290}, {"name": "Mosin Obrez Extended", "price": 350}, {"name": "Mosin Obrez Mace", "price": 300},
        {"name": "Nagant M1895 Deadeye", "price": 30}, {"name": "Nagant M1895 Precision", "price": 29}, {"name": "Rival 78 Mace", "price": 135},
        {"name": "Rival 78 Shorty", "price": 125}, {"name": "Romero 77 Hatchet", "price": 56}, {"name": "Romero 77 Shorty", "price": 46},
        {"name": "Scottfield Precision", "price": 85}, {"name": "Specter 1882 Shorty", "price": 164}, {"name": "Springfield 1866 Bullseye", "price": 35},
        {"name": "Springfield 1866 Shorty", "price": 33}, {"name": "Springfield 1866 Striker", "price": 43}, {"name": "Terminus Shorty", "price": 218},
        {"name": "Uppercut Deadeye", "price": 337}, {"name": "Uppercut Precision", "price": 321}, {"name": "Vandal 73C", "price": 35},
        {"name": "Vandal 73C Bullseye", "price": 37}, {"name": "Vandal 73C Striker", "price": 45}
    ],
    "small": [
        {"name": "Bornheim No. 3", "price": 146}, {"name": "Bornheim No. 3 Extended", "price": 203}, {"name": "Bornheim No. 3 Silencer", "price": 167},
        {"name": "Conversion", "price": 55 }, {"name": "Conversion Chain", "price": 84}, {"name": "Dolch 96", "price": 690},
        {"name": "Dolch 96 Bullseye", "price": 725}, {"name": "Dolch 96 Claw", "price": 700}, {"name": "LeMat", "price": 83},
        {"name": "Hand Crossbow", "price": 30}, {"name": "Nagant M1895", "price": 24}, {"name": "Nagant M1895", "price": 27},
        {"name": "New Army", "price": 90}, {"name": "New Army Swift", "price": 108}, {"name": "Officer", "price": 96},
        {"name": "Officer Brawler", "price": 106}, {"name": "Pax", "price": 80}, {"name": "Pax Claw", "price": 90},
        {"name": "Pax Trueshot", "price": 141}, {"name": "Sparks Pistol", "price": 155}, {"name": "Sparks Pistol Silencer", "price": 178},
        {"name": "Scottfield", "price": 77}, {"name": "Scottfield Brawler", "price": 87}, {"name": "Scottfield Spitfire", "price": 108},
        {"name": "Scottfield Swift", "price": 95}, {"name": "Uppercut", "price": 310}
    ]
};

function showNotification(message) {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function syncFilters() {
    const hasQM = document.getElementById('quartermaster').checked;
    const qmLabel = document.getElementById('qm-label');
    const qmCheck = document.getElementById('f-LM');
    if (hasQM) { 
        qmLabel.classList.add('qm-active'); 
    } else { 
        qmLabel.classList.remove('qm-active'); 
        qmCheck.checked = false; 
    }
}

function draw(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function render(w, isRolling = false) {
    const fileName = w.name.replace(/ /g, '_') + '.webp';
    return `
        <div class="card ${isRolling ? 'is-rolling' : 'card-reveal card-shake'}">
            <div class="img-frame"><img src="assets/${fileName}" onerror="this.src='https://via.placeholder.com/250x120/111/333?text=BRAK+PLIKU'"></div>
            <div class="w-name">${w.name}</div>
            <div class="w-price">${w.price}<img src="dollars.png" class="hunt-buck"></div>
        </div>
    `;
}

function getWeaponSet(type) {
    if (type === "L+S") return [draw(weapons.large), draw(weapons.small)];
    if (type === "S+S") return [draw(weapons.medium), draw(weapons.medium)];
    if (type === "S+M") return [draw(weapons.medium), draw(weapons.small)];
    if (type === "M+M") return [draw(weapons.small), draw(weapons.small)];
    if (type === "L+M") return [draw(weapons.large), draw(weapons.medium)];
    return [draw(weapons.small), draw(weapons.small)];
}

function generateLoadout() {
    const btn = document.getElementById('roll-btn');
    const display = document.getElementById('display');
    const costDisplay = document.getElementById('cost');
    
    const pool = [];
    if (document.getElementById('f-LS').checked) pool.push("L+S");
    if (document.getElementById('f-SS').checked) pool.push("S+S");
    if (document.getElementById('f-SM').checked) pool.push("S+M");
    if (document.getElementById('f-MM').checked) pool.push("M+M");
    if (document.getElementById('f-LM').checked) pool.push("L+M");

    if (pool.length === 0) { 
        showNotification("Wybierz przynajmniej jedną kombinację!"); 
        return; 
    }

    btn.disabled = true;
    let rollsCount = 0;
    const maxRolls = 15;
    
    const interval = setInterval(() => {
        const randomType = pool[Math.floor(Math.random() * pool.length)];
        const [w1, w2] = getWeaponSet(randomType);

        display.innerHTML = render(w1, true) + render(w2, true);
        costDisplay.style.opacity = "0.3";
        costDisplay.innerHTML = `${w1.price + w2.price}<img src="dollars.png" class="hunt-buck">`;

        rollsCount++;
        if (rollsCount >= maxRolls) {
            clearInterval(interval);
            
            const finalType = pool[Math.floor(Math.random() * pool.length)];
            const [fw1, fw2] = getWeaponSet(finalType);
            
            display.innerHTML = render(fw1) + render(fw2);
            costDisplay.style.opacity = "1";
            costDisplay.innerHTML = `${fw1.price + fw2.price}<img src="dollars.png" class="hunt-buck">`;
            btn.disabled = false;
        }
    }, 80);
}

window.onload = function() {
    syncFilters();
    const list = document.getElementById('debug-list');
    
    const l = weapons.large.map(w => ({...w, weight: 1}));
    const m = weapons.medium.map(w => ({...w, weight: 2}));
    const s = weapons.small.map(w => ({...w, weight: 3}));
    const all = [...l, ...m, ...s];

    all.sort((a, b) => {
        if (a.weight !== b.weight) return a.weight - b.weight;
        return a.name.localeCompare(b.name);
    });
    
    list.innerHTML = all.map(w => {
        const file = w.name.replace(/ /g, '_') + '.webp';
        return `
            <tr>
                <td>${w.name}</td>
                <td style="color: #c5a059; font-family: 'Special Elite'; font-size: 1rem;">
                    ${w.price} <img src="dollars.png" style="height: 12px; vertical-align: middle;">
                </td>
                <td><code>${file}</code></td>
                <td><img src="assets/${file}" style="height:30px" onerror="this.style.display='none'"></td>
            </tr>`;
    }).join('');
};