class OrbitAnimation {
    constructor(container) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        this.container = container;
        this.electrons = [];
        this.orbits = [];
        
        this.init();
        this.setupLights();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
        
        // Set up camera position and controls
        this.camera.position.z = 10;
        this.camera.position.y = 5;
        this.camera.lookAt(0, 0, 0);

        // Add orbit controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    setupLights() {
        // Ambient light for overall illumination
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);

        // Main directional light
        const mainLight = new THREE.DirectionalLight(0xffffff, 1);
        mainLight.position.set(10, 10, 10);
        this.scene.add(mainLight);

        // Additional point lights for better nucleus highlighting
        const pointLight1 = new THREE.PointLight(0xff7f7f, 1, 100);
        pointLight1.position.set(5, 5, 5);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x7f7fff, 1, 100);
        pointLight2.position.set(-5, -5, -5);
        this.scene.add(pointLight2);
    }

    createAtom(elementConfig) {
        this.clearScene();
        
        // Create nucleus with glow effect
        const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const nucleusMaterial = new THREE.MeshPhongMaterial({
            color: 0xff0000,
            emissive: 0x440000,
            shininess: 50
        });
        const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
        this.scene.add(nucleus);

        // Add nucleus glow
        const nucleusGlow = new THREE.Sprite(
            new THREE.SpriteMaterial({
                map: this.createGlowTexture(),
                color: 0xff5555,
                transparent: true,
                blending: THREE.AdditiveBlending
            })
        );
        nucleusGlow.scale.set(2, 2, 2);
        nucleus.add(nucleusGlow);

        // Create electron shells
        elementConfig.shells.forEach((electronCount, shellIndex) => {
            const radius = (shellIndex + 1) * 1.5;
            this.createOrbit(radius);
            
            for (let i = 0; i < electronCount; i++) {
                const angle = (i * 2 * Math.PI / electronCount);
                this.createElectron(radius, angle, shellIndex);
            }
        });

        this.animate();
    }

    createOrbit(radius) {
        const orbitGeometry = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 64);
        const orbitMaterial = new THREE.MeshBasicMaterial({
            color: 0x3333ff,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbit.rotation.x = Math.PI / 2;
        this.scene.add(orbit);
        this.orbits.push(orbit);
    }

    createElectron(radius, angle, shellIndex) {
        const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const electronMaterial = new THREE.MeshPhongMaterial({
            color: 0x00ff00,
            emissive: 0x004400,
            shininess: 50
        });
        const electron = new THREE.Mesh(electronGeometry, electronMaterial);
        
        // Add electron glow
        const glow = new THREE.Sprite(
            new THREE.SpriteMaterial({
                map: this.createGlowTexture(),
                color: 0x33ff33,
                transparent: true,
                blending: THREE.AdditiveBlending
            })
        );
        glow.scale.set(0.5, 0.5, 0.5);
        electron.add(glow);

        // Calculate speed based on shell number (Bohr's model approximation)
        // Speed is inversely proportional to the square of the shell number
        const baseSpeed = 0.015;
        const shellNumber = shellIndex + 1;
        const speed = baseSpeed / (shellNumber * shellNumber);

        electron.userData = {
            radius,
            angle,
            speed,
            shellIndex,
            baseSpeed
        };
        
        this.electrons.push(electron);
        this.scene.add(electron);
    }

    createGlowTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const time = performance.now() * 0.001;

        this.electrons.forEach(electron => {
            // Base rotation speed modified by shell position
            electron.userData.angle += electron.userData.speed;
            
            // Calculate position with slight vertical oscillation
            const verticalOffset = Math.sin(electron.userData.angle * 2) * 0.05;
            
            electron.position.x = electron.userData.radius * Math.cos(electron.userData.angle);
            electron.position.z = electron.userData.radius * Math.sin(electron.userData.angle);
            electron.position.y = verticalOffset;

            // Rotate electron on its axis
            electron.rotation.y = electron.userData.angle;
        });

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    clearScene() {
        while(this.scene.children.length > 0) { 
            this.scene.remove(this.scene.children[0]);
        }
        this.electrons = [];
        this.orbits = [];
        this.setupLights();
    }
}
