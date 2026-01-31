document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#menuToggle');
    const mobileMenu = document.querySelector('#mobileMenu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle')
    const html = document.documentElement;

    if(localStorage.getItem('darkMode') === 'true') {
        html.classList.add('dark')
    };

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark')
        localStorage.setItem('darkMode', html.classList.contains('dark'))
    });
});



// funcion para mostrar respuesta seleccionada

function showAnswer(id) {
    const answerContent = document.getElementById('answerContent');
    const buttons = document.querySelectorAll('#sobre-mi button');
    let content = '';

    // limpiar parrafo previo
    answerContent.innerHTML = '';

    //eliminar las clases de bontones
    buttons.forEach(button => {
        button.classList.remove('bg-gray-100', 'dark:bg-gray-700')
    });

    // Agregando la clase activa con el boton correspondiente
    document.getElementById(`${id}-btn`).classList.add('bg-gray-100', 'dark:bg-gray-700')

    switch(id){
        case 'quien':
            content = 'Soy Javier Marchena Gallo, Desarrollador Backend especializado en los ecosistemas Java y .NET. Me enfoco en la construcción de sistemas robustos y escalables, aplicando principios de ingeniería para resolver problemas complejos de negocio.'
            break;
        case 'trabajos':
            content = 'Como Software Engineer, diseño arquitecturas seguras y eficientes. Mis proyectos estrella incluyen "RestaurantePro", un sistema Full-Stack con Spring Boot y Angular, y una API de Gestión de Tickets en NestJS que implementa lógica avanzada de SLA y control de acceso basado en roles (RBAC). Mi estándar de trabajo se basa en la Tercera Forma Normal (3FN) para bases de datos y principios SOLID para un código mantenible.'
            break;
        case 'actualizado':
            content = 'Mi estrategia de actualización se centra en la convergencia entre la ingeniería tradicional y la Inteligencia Artificial. Adopto una mentalidad "AI-First", integrando herramientas como Claude AI y GitHub Copilot para optimizar el refactor de código, asegurar principios SOLID y acelerar el ciclo de debugging. Además, profundizo en el ecosistema Java (JDK 21) y Spring Boot a través de plataformas líderes como Alura Latam y Udemy, participando activamente en comunidades de desarrollo para dominar las últimas tendencias en arquitecturas microservicios y despliegue continuo.'
            break;
        case 'certificaciones':
            content = 'Actualmente curso la carrera de Ingeniería en Sistemas en la UISIL. Cuento con certificaciones de alto valor en la industria, como "Spring Boot con Java" de Alura Latam y "Frontend Development" de VLA Academy. También poseo la certificación de Responsive Web Design de freeCodeCamp, lo que respalda mi capacidad para entregar interfaces profesionales y adaptables.'
            break;
    }

    // crear el nuevo parrafo
    const parrafo = document.createElement('p');
    parrafo.textContent = content;
    
    // Agrega a el parrafo al contenedor
    answerContent.appendChild(parrafo);
};

document.addEventListener('DOMContentLoaded', () =>{
    showAnswer('quien');
});

