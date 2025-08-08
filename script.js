document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
            opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    // Typed.js configuration
    new Typed('.typewriter', {
        strings: ['AI Engineer.', 'Full-Stack Developer.', 'Open-Source Contributor.', 'Linux Enthusiast.'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        smartBackspace: true,
    });

    // Fetch GitHub repositories
    const githubUsername = 'Chikobara';
    const githubProjectsContainer = document.getElementById('github-projects');

    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`)
        .then(response => response.json())
        .then(repos => {
            let projectsHTML = '<h3>My GitHub Projects</h3><div class="skills-grid">';
            // Filter out forked repos and get top 6
            const nonForkedRepos = repos.filter(repo => !repo.fork).slice(0, 6);

            nonForkedRepos.forEach(repo => {
                projectsHTML += `
                    <a href="${repo.html_url}" target="_blank" class="skill" style="text-decoration: none; color: var(--text-color);">
                        <h4>${repo.name}</h4>
                        <p>${repo.description || 'No description available.'}</p>
                        <small>${repo.language || 'N/A'}</small>
                    </a>
                `;
            });
            projectsHTML += '</div>';
            if(nonForkedRepos.length > 0) {
                 githubProjectsContainer.innerHTML = projectsHTML;
            } else {
                 githubProjectsContainer.innerHTML = '<h3>My GitHub Projects</h3><p>Could not fetch projects from GitHub.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching GitHub repos:', error);
            githubProjectsContainer.innerHTML = '<h3>My GitHub Projects</h3><p>Could not fetch projects from GitHub.</p>';
        });
});
