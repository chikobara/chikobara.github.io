// Initializing Typed.js
var typed = new Typed('#typed-text', {
    strings: ['AI Engineer', 'Deep Learning Enthusiast', 'Open Source Contributor', 'Full Stack Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Three.js Background Animation
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Helper function to create a circular star texture
function getStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Draw a radial gradient (white center to transparent edge)
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}

// Particles (Stars)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1500; // More particles for a galaxy feel
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20; // Spread clearer
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material
const material = new THREE.PointsMaterial({
    size: 0.05, // Slightly larger to be visible as stars
    map: getStarTexture(),
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending
});

// Mesh
const particlesMesh = new THREE.Points(particlesGeometry, material);
scene.add(particlesMesh);

camera.position.z = 3;

// Mouse Interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animate
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();

    // Rotate the galaxy slowly
    particlesMesh.rotation.y = elapsedTime * 0.02;
    particlesMesh.rotation.x = elapsedTime * 0.01;

    // Interactive rotation
    particlesMesh.rotation.y += mouseX * 0.00005;
    particlesMesh.rotation.x += mouseY * 0.00005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: stop observing once shown if you don't want it to hide again
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Dynamic Projects & Star Counts
// Dynamic Projects & Star Counts
const projectsGrid = document.getElementById('projects-grid');
const username = 'Chikobara';

function renderSkeletons() {
    projectsGrid.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const skeleton = document.createElement('div');
        skeleton.classList.add('skeleton-card');
        projectsGrid.appendChild(skeleton);
    }
}

async function fetchGitHubData() {
    renderSkeletons();
    
    // Simulate a brief minimum delay to prevent flickering if fetch is too fast
    // and to show off the skeleton :)
    const loadStart = Date.now();

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stargazers_count&direction=desc&per_page=100`);
        const repos = await response.json();

        // Priority Projects (Lumos, Memoir)
        const priorityNames = ['lumos', 'memoir'];
        const priorityRepos = [];
        const otherRepos = [];

        repos.forEach(repo => {
            if (priorityNames.includes(repo.name.toLowerCase())) {
                priorityRepos.push(repo);
            } else {
                otherRepos.push(repo);
            }
        });

        // Filter valid other projects
        const filteredOtherRepos = otherRepos.filter(repo => {
            const isPortfolio = repo.name.toLowerCase() === 'chikobara.github.io';
            const isMeaningfulFork = !repo.fork || repo.stargazers_count > 0;
            return !isPortfolio && isMeaningfulFork && repo.description;
        });

        // Sort priority repos by stars
        priorityRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        // Sort other repos by stars (strictly)
        filteredOtherRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        // Combine: Priority + Top others
        const spacesLeft = 8 - priorityRepos.length;
        const topOthers = filteredOtherRepos.slice(0, Math.max(0, spacesLeft));
        
        const finalRepos = [...priorityRepos, ...topOthers];

        // Calculate delay needed to show skeleton for at least 800ms total
        const elapsed = Date.now() - loadStart;
        const remainingDelay = Math.max(0, 800 - elapsed);
        
        setTimeout(() => {
            // Clear skeletons
            projectsGrid.innerHTML = '';

            finalRepos.forEach((repo, index) => {
                const card = document.createElement('div');
                card.classList.add('glass-card', 'project-card');
                // Initial opacity 0 handled by CSS
                
                // Tilt attributes
                card.setAttribute('data-tilt', '');
                card.setAttribute('data-tilt-max', '10');
                card.setAttribute('data-tilt-speed', '400');
                card.setAttribute('data-tilt-glare', '');
                card.setAttribute('data-tilt-max-glare', '0.3');

                const language = repo.language || 'Code';

                card.innerHTML = `
                    <div class="card-content">
                        <div class="card-header-flex">
                            <h3>${repo.name}</h3>
                            <span class="star-count"><i class="fas fa-star"></i> <span>${repo.stargazers_count}</span></span>
                        </div>
                        <span class="badge">${language}</span>
                        <p>${repo.description}</p>
                        <div class="tech-stack">
                            <span>${language}</span>
                        </div>
                        <a href="${repo.html_url}" target="_blank" class="glow-btn">View Project</a>
                    </div>
                `;
                
                projectsGrid.appendChild(card);
                
                // Re-initialize tilt
                if (typeof VanillaTilt !== 'undefined') {
                    VanillaTilt.init(card);
                }

                // Trigger reflow to enable transition or just add class with slight stagger
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, index * 100); // Stagger effect
                });
            });
        }, remainingDelay);

    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        projectsGrid.innerHTML = '<p style="color: white; text-align: center;">Failed to load projects.</p>';
    }
}

fetchGitHubData();

