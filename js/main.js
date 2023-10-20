const $ = (id) => document.getElementById(id)
// Tema

const cambiarModoOscuro = () => {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
  }
  
  const cambiarModoClaro = () => {
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
  }
  


// INICIALIZACIONES
  const inicializarTemas = () => {
    $('button-theme-dark').addEventListener('click', cambiarModoClaro)
    $('light-theme-button').addEventListener('click', cambiarModoOscuro)
  }

  const inicializar = () => {
    inicializarTemas()
    inicializarPaneles()
    inicializarImagen()
    inicializarTexto()
    inicializarValoresDefault()
  
    $('download-meme-button').addEventListener('click', descargarMeme)
  }
  
  window.onload = inicializar
  