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
        content = 'Soy Javier Marchena Gallo, Desarrollador Backend especializado en Java/Spring Boot y NestJS. Me enfoco en la construcción de APIs robustas y seguras, aplicando principios de arquitectura limpia para resolver problemas reales de negocio.'
        break;
        case 'trabajos':
            content = 'Diseño y desarrollo APIs RESTful con Spring Boot y NestJS, implementando seguridad con JWT/RBAC, bases de datos relacionales bajo normalización 3FN y documentación con Swagger/OpenAPI. Todos mis proyectos los desarrollo de forma individual, demostrando autonomía técnica completa.'
            break;
        case 'actualizado':
            content = 'Me mantengo actualizado a través de plataformas como Alura Latam, donde completé el programa Oracle Next Education (ONE) Backend G8. Profundizo constantemente en el ecosistema Java/Spring Boot y NestJS, y practico construyendo proyectos reales.'
            break;
        case 'certificaciones':
            content = 'Actualmente curso el último cuatrimestre de Ingeniería en Sistemas en la Universidad Internacional San Isidro Labrador. Cuento con la certificación Oracle Next Education (ONE) – Backend G8 de Alura Latam/Oracle, y la certificación Master Full Stack Front End Web Developer de VLA Academy.'
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

