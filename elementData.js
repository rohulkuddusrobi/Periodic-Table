const elementData = {
    elements: [
        {
            symbol: 'H',
            name: 'Hydrogen',
            atomicNumber: 1,
            shells: [1],
            position: { row: 1, col: 1 },
            category: 'nonmetal'
        },
        {
            symbol: 'He',
            name: 'Helium',
            atomicNumber: 2,
            shells: [2],
            position: { row: 1, col: 18 },
            category: 'noble-gas'
        },
        {
            symbol: 'Li',
            name: 'Lithium',
            atomicNumber: 3,
            shells: [2, 1],
            position: { row: 2, col: 1 },
            category: 'alkali-metal'
        },
        {
            symbol: 'Be',
            name: 'Beryllium',
            atomicNumber: 4,
            shells: [2, 2],
            position: { row: 2, col: 2 },
            category: 'alkaline-earth-metal'
        },
        {
            symbol: 'B',
            name: 'Boron',
            atomicNumber: 5,
            shells: [2, 3],
            position: { row: 2, col: 13 },
            category: 'metalloid'
        },
        {
            symbol: 'C',
            name: 'Carbon',
            atomicNumber: 6,
            shells: [2, 4],
            position: { row: 2, col: 14 },
            category: 'nonmetal'
        },
        {
            symbol: 'N',
            name: 'Nitrogen',
            atomicNumber: 7,
            shells: [2, 5],
            position: { row: 2, col: 15 },
            category: 'nonmetal'
        },
        {
            symbol: 'O',
            name: 'Oxygen',
            atomicNumber: 8,
            shells: [2, 6],
            position: { row: 2, col: 16 },
            category: 'nonmetal'
        },
        {
            symbol: 'F',
            name: 'Fluorine',
            atomicNumber: 9,
            shells: [2, 7],
            position: { row: 2, col: 17 },
            category: 'halogen'
        },
        {
            symbol: 'Ne',
            name: 'Neon',
            atomicNumber: 10,
            shells: [2, 8],
            position: { row: 2, col: 18 },
            category: 'noble-gas'
        },
        {
            symbol: 'Na',
            name: 'Sodium',
            atomicNumber: 11,
            position: { row: 3, col: 1 },
            category: 'alkali-metal'
        },
        {
            symbol: 'Mg',
            name: 'Magnesium',
            atomicNumber: 12,
            position: { row: 3, col: 2 },
            category: 'alkaline-earth'
        },
        {
            symbol: 'Al',
            name: 'Aluminum',
            atomicNumber: 13,
            position: { row: 3, col: 13 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Si',
            name: 'Silicon',
            atomicNumber: 14,
            position: { row: 3, col: 14 },
            category: 'metalloid'
        },
        {
            symbol: 'P',
            name: 'Phosphorus',
            atomicNumber: 15,
            position: { row: 3, col: 15 },
            category: 'nonmetal'
        },
        {
            symbol: 'S',
            name: 'Sulfur',
            atomicNumber: 16,
            position: { row: 3, col: 16 },
            category: 'nonmetal'
        },
        {
            symbol: 'Cl',
            name: 'Chlorine',
            atomicNumber: 17,
            position: { row: 3, col: 17 },
            category: 'nonmetal'
        },
        {
            symbol: 'Ar',
            name: 'Argon',
            atomicNumber: 18,
            position: { row: 3, col: 18 },
            category: 'noble-gas'
        },
        {
            symbol: 'K',
            name: 'Potassium',
            atomicNumber: 19,
            position: { row: 4, col: 1 },
            category: 'alkali-metal'
        },
        {
            symbol: 'Ca',
            name: 'Calcium',
            atomicNumber: 20,
            position: { row: 4, col: 2 },
            category: 'alkaline-earth'
        },
        {
            symbol: 'Sc',
            name: 'Scandium',
            atomicNumber: 21,
            position: { row: 4, col: 3 },
            category: 'transition-metal'
        },
        {
            symbol: 'Ti',
            name: 'Titanium',
            atomicNumber: 22,
            position: { row: 4, col: 4 },
            category: 'transition-metal'
        },
        {
            symbol: 'V',
            name: 'Vanadium',
            atomicNumber: 23,
            position: { row: 4, col: 5 },
            category: 'transition-metal'
        },
        {
            symbol: 'Cr',
            name: 'Chromium',
            atomicNumber: 24,
            position: { row: 4, col: 6 },
            category: 'transition-metal'
        },
        {
            symbol: 'Mn',
            name: 'Manganese',
            atomicNumber: 25,
            position: { row: 4, col: 7 },
            category: 'transition-metal'
        },
        {
            symbol: 'Fe',
            name: 'Iron',
            atomicNumber: 26,
            position: { row: 4, col: 8 },
            category: 'transition-metal'
        },
        {
            symbol: 'Co',
            name: 'Cobalt',
            atomicNumber: 27,
            position: { row: 4, col: 9 },
            category: 'transition-metal'
        },
        {
            symbol: 'Ni',
            name: 'Nickel',
            atomicNumber: 28,
            position: { row: 4, col: 10 },
            category: 'transition-metal'
        },
        {
            symbol: 'Cu',
            name: 'Copper',
            atomicNumber: 29,
            position: { row: 4, col: 11 },
            category: 'transition-metal'
        },
        {
            symbol: 'Zn',
            name: 'Zinc',
            atomicNumber: 30,
            position: { row: 4, col: 12 },
            category: 'transition-metal'
        },
        {
            symbol: 'Ga',
            name: 'Gallium',
            atomicNumber: 31,
            position: { row: 4, col: 13 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Ge',
            name: 'Germanium',
            atomicNumber: 32,
            position: { row: 4, col: 14 },
            category: 'metalloid'
        },
        {
            symbol: 'As',
            name: 'Arsenic',
            atomicNumber: 33,
            position: { row: 4, col: 15 },
            category: 'metalloid'
        },
        {
            symbol: 'Se',
            name: 'Selenium',
            atomicNumber: 34,
            position: { row: 4, col: 16 },
            category: 'nonmetal'
        },
        {
            symbol: 'Br',
            name: 'Bromine',
            atomicNumber: 35,
            position: { row: 4, col: 17 },
            category: 'halogen'
        },
        {
            symbol: 'Kr',
            name: 'Krypton',
            atomicNumber: 36,
            position: { row: 4, col: 18 },
            category: 'noble-gas'
        },
        {
            symbol: 'Rb',
            name: 'Rubidium',
            atomicNumber: 37,
            position: { row: 5, col: 1 },
            category: 'alkali-metal'
        },
        {
            symbol: 'Sr',
            name: 'Strontium',
            atomicNumber: 38,
            position: { row: 5, col: 2 },
            category: 'alkaline-earth'
        },
        {
            symbol: 'Y',
            name: 'Yttrium',
            atomicNumber: 39,
            position: { row: 5, col: 3 },
            category: 'transition-metal'
        },
        {
            symbol: 'Zr',
            name: 'Zirconium',
            atomicNumber: 40,
            position: { row: 5, col: 4 },
            category: 'transition-metal'
        },
        {
            symbol: 'Nb',
            name: 'Niobium',
            atomicNumber: 41,
            position: { row: 5, col: 5 },
            category: 'transition-metal'
        },
        {
            symbol: 'Mo',
            name: 'Molybdenum',
            atomicNumber: 42,
            position: { row: 5, col: 6 },
            category: 'transition-metal'
        },
        {
            symbol: 'Tc',
            name: 'Technetium',
            atomicNumber: 43,
            position: { row: 5, col: 7 },
            category: 'transition-metal'
        },
        {
            symbol: 'Ru',
            name: 'Ruthenium',
            atomicNumber: 44,
            position: { row: 5, col: 8 },
            category: 'transition-metal'
        },
        {
            symbol: 'Rh',
            name: 'Rhodium',
            atomicNumber: 45,
            position: { row: 5, col: 9 },
            category: 'transition-metal'
        },
        {
            symbol: 'Pd',
            name: 'Palladium',
            atomicNumber: 46,
            position: { row: 5, col: 10 },
            category: 'transition-metal'
        },
        {
            symbol: 'Ag',
            name: 'Silver',
            atomicNumber: 47,
            position: { row: 5, col: 11 },
            category: 'transition-metal'
        },
        {
            symbol: 'Cd',
            name: 'Cadmium',
            atomicNumber: 48,
            position: { row: 5, col: 12 },
            category: 'transition-metal'
        },
        {
            symbol: 'In',
            name: 'Indium',
            atomicNumber: 49,
            position: { row: 5, col: 13 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Sn',
            name: 'Tin',
            atomicNumber: 50,
            position: { row: 5, col: 14 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Sb',
            name: 'Antimony',
            atomicNumber: 51,
            position: { row: 5, col: 15 },
            category: 'metalloid'
        },
        {
            symbol: 'Te',
            name: 'Tellurium',
            atomicNumber: 52,
            position: { row: 5, col: 16 },
            category: 'metalloid'
        },
        {
            symbol: 'I',
            name: 'Iodine',
            atomicNumber: 53,
            position: { row: 5, col: 17 },
            category: 'halogen'
        },
        {
            symbol: 'Xe',
            name: 'Xenon',
            atomicNumber: 54,
            position: { row: 5, col: 18 },
            category: 'noble-gas'
        },
        {
            symbol: 'Cs',
            name: 'Caesium',
            atomicNumber: 55,
            position: { row: 6, col: 1 },
            category: 'alkali-metal'
        },
        {
            symbol: 'Ba',
            name: 'Barium',
            atomicNumber: 56,
            position: { row: 6, col: 2 },
            category: 'alkaline-earth'
        },
        {
            symbol: 'La',
            name: 'Lanthanum',
            atomicNumber: 57,
            position: { row: 6, col: 4 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Ce',
            name: 'Cerium',
            atomicNumber: 58,
            position: { row: 6, col: 5 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Pr',
            name: 'Praseodymium',
            atomicNumber: 59,
            position: { row: 8, col: 5 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Nd',
            name: 'Neodymium',
            atomicNumber: 60,
            position: { row: 8, col: 6 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Pm',
            name: 'Promethium',
            atomicNumber: 61,
            position: { row: 8, col: 7 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Sm',
            name: 'Samarium',
            atomicNumber: 62,
            position: { row: 8, col: 8 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Eu',
            name: 'Europium',
            atomicNumber: 63,
            position: { row: 8, col: 9 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Gd',
            name: 'Gadolinium',
            atomicNumber: 64,
            position: { row: 8, col: 10 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Tb',
            name: 'Terbium',
            atomicNumber: 65,
            position: { row: 8, col: 11 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Dy',
            name: 'Dysprosium',
            atomicNumber: 66,
            position: { row: 8, col: 12 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Ho',
            name: 'Holmium',
            atomicNumber: 67,
            position: { row: 8, col: 13 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Er',
            name: 'Erbium',
            atomicNumber: 68,
            position: { row: 8, col: 14 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Tm',
            name: 'Thulium',
            atomicNumber: 69,
            position: { row: 8, col: 15 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Yb',
            name: 'Ytterbium',
            atomicNumber: 70,
            position: { row: 8, col: 16 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Lu',
            name: 'Lutetium',
            atomicNumber: 71,
            position: { row: 8, col: 17 },
            category: 'lanthanoid'
        },
        {
            symbol: 'Hf',
            name: 'Hafnium',
            atomicNumber: 72,
            position: { row: 6, col: 4 },
            category: 'transition-metal'
        },
        {
            symbol: 'Ta',
            name: 'Tantalum',
            atomicNumber: 73,
            position: { row: 6, col: 5 },
            category: 'transition-metal'
        },
        {
            symbol: 'W',
            name: 'Tungsten',
            atomicNumber: 74,
            position: { row: 6, col: 6 },
            category: 'transition-metal'
        },
        {
            symbol: 'Re',
            name: 'Rhenium',
            atomicNumber: 75,
            position: { row: 6, col: 7 },
            category: 'transition-metal'
        },
        {
            symbol: 'Os',
            name: 'Osmium',
            atomicNumber: 76,
            position: { row: 6, col: 8 },
            category: 'transition-metal'
        },
        {
            symbol: 'Ir',
            name: 'Iridium',
            atomicNumber: 77,
            position: { row: 6, col: 9 },
            category: 'transition-metal'
        },
        {
            symbol: 'Pt',
            name: 'Platinum',
            atomicNumber: 78,
            position: { row: 6, col: 10 },
            category: 'transition-metal'
        },
        {
            symbol: 'Au',
            name: 'Gold',
            atomicNumber: 79,
            position: { row: 6, col: 11 },
            category: 'transition-metal'
        },
        {
            symbol: 'Hg',
            name: 'Mercury',
            atomicNumber: 80,
            position: { row: 6, col: 12 },
            category: 'transition-metal'
        },
        {
            symbol: 'Tl',
            name: 'Thallium',
            atomicNumber: 81,
            position: { row: 6, col: 13 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Pb',
            name: 'Lead',
            atomicNumber: 82,
            position: { row: 6, col: 14 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Bi',
            name: 'Bismuth',
            atomicNumber: 83,
            position: { row: 6, col: 15 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Po',
            name: 'Polonium',
            atomicNumber: 84,
            position: { row: 6, col: 16 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'At',
            name: 'Astatine',
            atomicNumber: 85,
            position: { row: 6, col: 17 },
            category: 'halogen'
        },
        {
            symbol: 'Rn',
            name: 'Radon',
            atomicNumber: 86,
            position: { row: 6, col: 18 },
            category: 'noble-gas'
        },
        {
            symbol: 'Fr',
            name: 'Francium',
            atomicNumber: 87,
            position: { row: 7, col: 1 },
            category: 'alkali-metal'
        },
        {
            symbol: 'Ra',
            name: 'Radium',
            atomicNumber: 88,
            position: { row: 7, col: 2 },
            category: 'alkaline-earth'
        },
        {
            symbol: 'Ac',
            name: 'Actinium',
            atomicNumber: 89,
            position: { row: 9, col: 3 },
            category: 'actinoid'
        },
        {
            symbol: 'Th',
            name: 'Thorium',
            atomicNumber: 90,
            position: { row: 9, col: 4 },
            category: 'actinoid'
        },
        {
            symbol: 'Pa',
            name: 'Protactinium',
            atomicNumber: 91,
            position: { row: 9, col: 5 },
            category: 'actinoid'
        },
        {
            symbol: 'U',
            name: 'Uranium',
            atomicNumber: 92,
            position: { row: 9, col: 6 },
            category: 'actinoid'
        },
        {
            symbol: 'Np',
            name: 'Neptunium',
            atomicNumber: 93,
            position: { row: 9, col: 7 },
            category: 'actinoid'
        },
        {
            symbol: 'Pu',
            name: 'Plutonium',
            atomicNumber: 94,
            position: { row: 9, col: 8 },
            category: 'actinoid'
        },
        {
            symbol: 'Am',
            name: 'Americium',
            atomicNumber: 95,
            position: { row: 9, col: 9 },
            category: 'actinoid'
        },
        {
            symbol: 'Cm',
            name: 'Curium',
            atomicNumber: 96,
            position: { row: 9, col: 10 },
            category: 'actinoid'
        },
        {
            symbol: 'Bk',
            name: 'Berkelium',
            atomicNumber: 97,
            position: { row: 9, col: 11 },
            category: 'actinoid'
        },
        {
            symbol: 'Cf',
            name: 'Californium',
            atomicNumber: 98,
            position: { row: 9, col: 12 },
            category: 'actinoid'
        },
        {
            symbol: 'Es',
            name: 'Einsteinium',
            atomicNumber: 99,
            position: { row: 9, col: 13 },
            category: 'actinoid'
        },
        {
            symbol: 'Fm',
            name: 'Fermium',
            atomicNumber: 100,
            position: { row: 9, col: 14 },
            category: 'actinoid'
        },
        {
            symbol: 'Md',
            name: 'Mendelevium',
            atomicNumber: 101,
            position: { row: 9, col: 15 },
            category: 'actinoid'
        },
        {
            symbol: 'No',
            name: 'Nobelium',
            atomicNumber: 102,
            position: { row: 9, col: 16 },
            category: 'actinoid'
        },
        {
            symbol: 'Lr',
            name: 'Lawrencium',
            atomicNumber: 103,
            position: { row: 9, col: 17 },
            category: 'actinoid'
        },
        {
            symbol: 'Rf',
            name: 'Rutherfordium',
            atomicNumber: 104,
            position: { row: 7, col: 4 },
            category: 'transition-metal'
        },
        {
            symbol: 'Db',
            name: 'Dubnium',
            atomicNumber: 105,
            position: { row: 7, col: 5 },
            category: 'transition-metal'
        },
        {
            symbol: 'Sg',
            name: 'Seaborgium',
            atomicNumber: 106,
            position: { row: 7, col: 6 },
            category: 'transition-metal'
        },
        {
            symbol: 'Bh',
            name: 'Bohrium',
            atomicNumber: 107,
            position: { row: 7, col: 7 },
            category: 'transition-metal'
        },
        {
            symbol: 'Hs',
            name: 'Hassium',
            atomicNumber: 108,
            position: { row: 7, col: 8 },
            category: 'transition-metal'
        },
        {
            symbol: 'Mt',
            name: 'Meitnerium',
            atomicNumber: 109,
            position: { row: 7, col: 9 },
            category: 'unknown'
        },
        {
            symbol: 'Ds',
            name: 'Darmstadtium',
            atomicNumber: 110,
            position: { row: 7, col: 10 },
            category: 'unknown'
        },
        {
            symbol: 'Rg',
            name: 'Roentgenium',
            atomicNumber: 111,
            position: { row: 7, col: 11 },
            category: 'unknown'
        },
        {
            symbol: 'Cn',
            name: 'Copernicium',
            atomicNumber: 112,
            position: { row: 7, col: 12 },
            category: 'transition-metal'
        },
        {
            symbol: 'Nh',
            name: 'Nihonium',
            atomicNumber: 113,
            position: { row: 7, col: 13 },
            category: 'unknown'
        },
        {
            symbol: 'Fl',
            name: 'Flerovium',
            atomicNumber: 114,
            position: { row: 7, col: 14 },
            category: 'post-transition-metal'
        },
        {
            symbol: 'Mc',
            name: 'Moscovium',
            atomicNumber: 115,
            position: { row: 7, col: 15 },
            category: 'unknown'
        },
        {
            symbol: 'Lv',
            name: 'Livermorium',
            atomicNumber: 116,
            position: { row: 7, col: 16 },
            category: 'unknown'
        },
        {
            symbol: 'Ts',
            name: 'Tennessine',
            atomicNumber: 117,
            position: { row: 7, col: 17 },
            category: 'halogen'
        },
        {
            symbol: 'Og',
            name: 'Oganesson',
            atomicNumber: 118,
            shells: [2, 8, 18, 32, 32, 18, 8],
            position: { row: 7, col: 18 },
            category: 'noble-gas'
        }
    ].filter((element, index, self) => 
        // Remove duplicates by keeping only the first occurrence of each atomic number
        index === self.findIndex(e => e.atomicNumber === element.atomicNumber)
    ).sort((a, b) => a.atomicNumber - b.atomicNumber) // Sort by atomic number
};

// Full electron configuration for each element
const shellConfiguration = {
    // K shell (n=1)
    1: 2,
    // L shell (n=2)
    2: 8,
    // M shell (n=3)
    3: 18,
    // N shell (n=4)
    4: 32,
    // O shell (n=5)
    5: 32,
    // P shell (n=6)
    6: 18,
    // Q shell (n=7)
    7: 8
};

function calculateElectronShells(atomicNumber) {
    let remainingElectrons = atomicNumber;
    const shells = [];
    
    for (let shell = 1; remainingElectrons > 0; shell++) {
        const maxElectrons = shellConfiguration[shell];
        const electrons = Math.min(remainingElectrons, maxElectrons);
        shells.push(electrons);
        remainingElectrons -= electrons;
    }
    
    return shells;
}

// Initialize all elements with correct electron configurations
elementData.elements.forEach(element => {
    element.shells = calculateElectronShells(element.atomicNumber);
});

function getElementConfiguration(symbol) {
    return elementData.elements.find(element => element.symbol === symbol);
}
