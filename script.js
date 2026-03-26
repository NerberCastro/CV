    // Añadir año actual al footer si quieres
    document.addEventListener('DOMContentLoaded', () => {
    console.log('CV de Nerber Castro - Portfolio personal');
    
    // Opcional: añadir efecto de hover suave en las tarjetas
    const cards = document.querySelectorAll('.exp-card, .edu-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.2s ease';
        });
    });
    
    // Mostrar mensaje al descargar CV
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
        console.log('Descargando CV en PDF...');
        });
    }
    });