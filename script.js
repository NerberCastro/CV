// Interacciones para el CV de Nerber Castro
document.addEventListener('DOMContentLoaded', () => {
  console.log('CV de Nerber Castro - Portfolio personal');
  
  // Efecto sutil en tarjetas
  const tarjetas = document.querySelectorAll('.tarjeta-exp, .tarjeta-estudio');
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', () => {
      tarjeta.style.transition = 'all 0.2s ease';
    });
  });
  
  // Mensaje al descargar CV
  const botonDescarga = document.querySelector('.boton-descarga');
  if (botonDescarga) {
    botonDescarga.addEventListener('click', () => {
      console.log('Descargando CV en PDF...');
    });
  }
});
