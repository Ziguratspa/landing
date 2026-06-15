// Datos de los proyectos
const projects = [
    {
        id: 1,
        title: "🛒 Supermercado Cardal",
        description: "Aplicación web para gestión empresarial de supermercado",
        tech: ["HTML5", "CSS3", "Javascript"],
        imageBg: "linear-gradient(135deg, #00b4db, #0083b0)",
        hasDoubleLinks: true,
        demoUrl: "https://oliveradrianrubiorauldtap.infinityfreeapp.com",
        repoUrl: "https://github.com/ziguratspa/supermercadoCARDAL.git",
        badge: "Dev"
    },
    {
        id: 2,
        title: "📝 Formulario Ficha Médica",
        description: "Formulario CRUD para datos médicos",
        tech: ["HTML", "CSS", "Javascript"],
        imageBg: "linear-gradient(135deg, #f093fb, #f5576c)",
        hasDoubleLinks: true,
        demoUrl: "https://oliversportfolio.synergize.co",
        repoUrl: "https://github.com/ziguraspa/formulariofichamed.git",
        badge: "Dev"
    },
    {
        id: 3,
        title: "💻 Automatización Web",
        description: "Pruebas E2E Headless usando Playwright",
        tech: ["JavaScript/TypeScript"],
        imageBg: "linear-gradient(135deg, #a8edea, #fed6e3)",
        hasDoubleLinks: false,
        demoUrl: "https://github.com/Ziguratspa/qa-portfolio-2026.git",
        repoUrl: null,
        badge: "QA testing"
    },
    {
        id: 4,
        title: "🔐 Automatización API ",
        description: "Pruebas de API REST con Postman",
        tech: ["JavaScript"],
        imageBg: "linear-gradient(135deg, #4facfe, #00f2fe)",
        hasDoubleLinks: false,
        demoUrl: "https://github.com/Ziguratspa/postman-api-testing-portfolio.git",
        repoUrl: null,
        badge: "QA testing"
    },
    {
        id: 5,
        title: "⛅️  Clima WebApp ",
        description: "Dashboard de pronóstico climático con API",
        tech: ["React"],
        imageBg: "linear-gradient(135deg, #4facfe, #00f2fe)",
        hasDoubleLinks: true,
        demoUrl: "https://ziguratspa.github.io/weather-dashboard/",
        repoUrl: "https://github.com/Ziguratspa/weather-dashboard.git",
        badge: "Dev"
    },
    {
        id: 6,
        title: "💾  WebDriver ",
        description: "Pruebas funcionales a web S.I.I.",
        tech: ["Selenium"],
        imageBg: "linear-gradient(135deg, #4facfe, #00f2fe)",
        hasDoubleLinks: false,
        repoUrl: "https://github.com/Ziguratspa/pruebas-sii-chile.git",
        badge: "QA testing"
    }
];

// Función para mostrar tooltip personalizado
function showTooltip(message, event) {
    let tooltip = document.querySelector('.tooltip-message');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip-message';
        document.body.appendChild(tooltip);
    }
    
    tooltip.textContent = message;
    tooltip.style.left = (event.clientX + 15) + 'px';
    tooltip.style.top = (event.clientY - 30) + 'px';
    tooltip.style.opacity = '1';
    
    setTimeout(() => {
        tooltip.style.opacity = '0';
    }, 1500);
}

// Función para crear las tarjetas de proyectos
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Imagen del proyecto (div con gradiente)
        const imageDiv = document.createElement('div');
        imageDiv.className = 'project-image';
        imageDiv.style.background = project.imageBg;
        
        // Badge
        const badge = document.createElement('span');
        badge.className = 'project-badge';
        badge.textContent = project.badge;
        imageDiv.appendChild(badge);
        
        // Contenido
        const contentDiv = document.createElement('div');
        contentDiv.className = 'project-content';
        
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;
        
        // Tecnologías
        const techDiv = document.createElement('div');
        techDiv.className = 'project-tech';
        project.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            techDiv.appendChild(tag);
        });
        
        // Contenedor de botones
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';
        
        if (project.hasDoubleLinks) {
            // Botón Demo (web front-end)
            const demoBtn = document.createElement('a');
            demoBtn.href = project.demoUrl;
            demoBtn.target = '_blank';
            demoBtn.rel = 'noopener noreferrer';
            demoBtn.className = 'btn btn-demo';
            demoBtn.innerHTML = '🌐 Ver Demo';
            
            demoBtn.addEventListener('click', (e) => {
                showTooltip(`Abriendo demo: ${project.title}`, e);
            });
            
            // Botón Repositorio
            const repoBtn = document.createElement('a');
            repoBtn.href = project.repoUrl;
            repoBtn.target = '_blank';
            repoBtn.rel = 'noopener noreferrer';
            repoBtn.className = 'btn btn-repo';
            repoBtn.innerHTML = '📂 Repositorio';
            
            repoBtn.addEventListener('click', (e) => {
                showTooltip(`Ver código en GitHub: ${project.title}`, e);
            });
            
            buttonsContainer.appendChild(demoBtn);
            buttonsContainer.appendChild(repoBtn);
        } else {
            // Botón único que lleva a la demo web
            const singleBtn = document.createElement('a');
            singleBtn.href = project.demoUrl;
            singleBtn.target = '_blank';
            singleBtn.rel = 'noopener noreferrer';
            singleBtn.className = 'btn btn-single';
            singleBtn.innerHTML = '📂 Repositorio';
            
            singleBtn.addEventListener('click', (e) => {
                showTooltip(`Abriendo ${project.title}`, e);
            });
            
            buttonsContainer.appendChild(singleBtn);
        }
        
        // Armar la tarjeta
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        contentDiv.appendChild(techDiv);
        contentDiv.appendChild(buttonsContainer);
        
        card.appendChild(imageDiv);
        card.appendChild(contentDiv);
        
        grid.appendChild(card);
    });
}

// Efecto adicional: Mostrar mensaje de bienvenida en consola
console.log("%c✨ Portafolio cargado | 4 proyectos listos", "color: #764ba2; font-size: 16px; font-weight: bold;");
console.log("✅ Proyectos con doble enlace: ClimateVision y TaskFlow");
console.log("🔗 Proyectos con enlace único: PixelArt Studio y PassGen Pro");

// Seguimiento del mouse para tooltips
document.addEventListener('mousemove', (e) => {
    const tooltip = document.querySelector('.tooltip-message');
    if (tooltip && tooltip.style.opacity === '1') {
        tooltip.style.left = (e.clientX + 15) + 'px';
        tooltip.style.top = (e.clientY - 30) + 'px';
    }
});

// Inicializar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Animación sutil al cargar
    const header = document.querySelector('.header h1');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'all 0.5s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }
});