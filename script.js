// Datos de los proyectos CON imageUrl
const projects = [
    {
        id: 1,
        title: "🛒 Supermercado Cardal",
        description: "Aplicación web CRUD para gestión empresarial de supermercado",
        tech: ["HTML5", "CSS3", "Javascript"],
        imageUrl: "https://i.ibb.co/5W2ptjnW/1.png",
        hasDoubleLinks: true,
        demoUrl: "https://oliveradrianrubiorauldtap.infinityfreeapp.com",
        repoUrl: "https://github.com/ziguratspa/supermercadoCARDAL.git",
        badge: "Dev"
    },
    {
        id: 2,
        title: "📝 Formulario Ficha Médica",
        description: "Formulario web CRUD para datos médicos",
        tech: ["HTML", "CSS", "Javascript"],
        imageUrl: "https://i.ibb.co/v4x0QWtV/2.png",
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
        imageUrl: "https://i.ibb.co/7thsPytg/playwright.png",
        hasDoubleLinks: false,
        demoUrl: "https://github.com/Ziguratspa/qa-portfolio-2026.git",
        repoUrl: null,
        badge: "QA testing"
    },
    {
        id: 4,
        title: "🔐 Automatización Test API ",
        description: "Suite de pruebas automatizadas para API REST",
        tech: ["Postman/JavaScript"],
        imageUrl: "https://i.ibb.co/fYRQWQJ4/3.png",
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
        imageUrl: "https://i.ibb.co/4wxc69SR/react.png",
        hasDoubleLinks: true,
        demoUrl: "https://ziguratspa.github.io/weather-dashboard/",
        repoUrl: "https://github.com/Ziguratspa/weather-dashboard.git",
        badge: "Dev"
    },
    {
        id: 6,
        title: " 🖥  WebDriver ",
        description: "Pruebas funcionales a web S.I.I.",
        tech: ["Selenium/JavaScript"],
        imageUrl: "https://i.ibb.co/TqY8fgx0/selenium.png",
        hasDoubleLinks: false,
        demoUrl: "https://github.com/Ziguratspa/pruebas-sii-chile.git",
        repoUrl: null,
        badge: "QA testing"
    },
    {
        id: 7,
        title: " 💾 Consulta SQL automatizada",
        description: "Consultas a base de datos Planta de tratamiento de Aguas",
        tech: ["Playwright/Typescript"],
        imageUrl: "https://i.ibb.co/7thsPytg/playwright.png",
        hasDoubleLinks: false,
        demoUrl: "https://github.com/Ziguratspa/suite-qa-aguas.git",
        repoUrl: null,
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

// Función para crear las tarjetas de proyectos (MODIFICADA para usar imageUrl)
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Imagen del proyecto - USA imageUrl como fondo
        const imageDiv = document.createElement('div');
        imageDiv.className = 'project-image';
        
        // Usar imageUrl como fondo de imagen
        if (project.imageUrl) {
            imageDiv.style.backgroundImage = `url(${project.imageUrl})`;
            imageDiv.style.backgroundSize = 'cover';
            imageDiv.style.backgroundPosition = 'center';
        } else {
            // Fallback por si no hay imageUrl
            imageDiv.style.background = "#cccccc";
        }
        
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
            // Botón único que lleva al repositorio
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
    
    console.log("%c✨ Portafolio cargado con imágenes | 7 proyectos", "color: #764ba2; font-size: 16px; font-weight: bold;");
});