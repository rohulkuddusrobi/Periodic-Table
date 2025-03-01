document.addEventListener('DOMContentLoaded', () => {
    // Remove loading screen when everything is loaded
    window.addEventListener('load', () => {
        document.querySelector('.loading').style.display = 'none';
    });

    const periodicTable = document.getElementById('periodicTable');
    const orbitView = document.getElementById('orbitView');
    const orbitCanvas = document.getElementById('orbitCanvas');
    const backButton = document.getElementById('backButton');

    const orbitAnimation = new OrbitAnimation(orbitCanvas);

    function createPeriodicTable() {
        elementData.elements.forEach(element => {
            const elementDiv = document.createElement('div');
            elementDiv.className = `element ${element.category}`;
            elementDiv.innerHTML = `
                <div class="atomic-number">${element.atomicNumber}</div>
                <div class="symbol">${element.symbol}</div>
                <div class="name">${element.name}</div>
            `;
            elementDiv.style.gridRow = element.position.row;
            elementDiv.style.gridColumn = element.position.col;
            
            elementDiv.addEventListener('click', () => showOrbitView(element));
            periodicTable.appendChild(elementDiv);
        });
    }

    function showOrbitView(element) {
        periodicTable.style.display = 'none';
        orbitView.style.display = 'block';

        // Remove existing title if any
        const existingTitle = document.querySelector('.element-title');
        if (existingTitle) {
            existingTitle.remove();
        }

        // Create simplified element title
        const titleDiv = document.createElement('div');
        titleDiv.className = 'element-title';
        titleDiv.innerHTML = `
            <div class="name">${element.name}</div>
            <div class="electron-config">Electrons: ${element.shells.join('-')}</div>
        `;
        orbitView.appendChild(titleDiv);

        orbitAnimation.createAtom(element);
    }

    backButton.addEventListener('click', () => {
        orbitView.style.display = 'none';
        periodicTable.style.display = 'grid';
    });

    createPeriodicTable();
});
