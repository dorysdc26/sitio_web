// Navegación suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensaje de bienvenida interactivo
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('Bienvenido a Turismo Sigchos, ¡disfruta de tu visita!');
    }, 500); // Se muestra 0.5 segundos después de que se cargue la página
});
