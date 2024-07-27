function share() {
  if (navigator.share) {
    navigator.share({
      title: 'Reglamento SMBW Fan Game', // Título a compartir
      text: '¡Mira el reglamento oficial de SMBW Fan Game para evitar baneos!', // Descripción a compartir
      url: window.location.href // URL de la página actual
    })
    .then(() => console.log('Contenido compartido'))
    .catch((error) => console.log('Error al compartir:', error));
  } else {
    // Si el navegador no soporta navigator.share, puedes usar otros métodos como
    // crear un enlace temporal y copiarlo al portapapeles
    console.log('Esta función no es compatible con tu navegador');
  }
}
