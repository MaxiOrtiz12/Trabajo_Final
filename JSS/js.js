window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  var confirmationMessage = '¿Seguro que quieres salir de la página?';
  event.returnValue = confirmationMessage;
  return confirmationMessage;
});

var selectCiudad = document.getElementById('ciudad');
var leyendaViaticos = document.getElementById('leyenda-viaticos');

selectCiudad.addEventListener('change', function() {
  var selectedOption = selectCiudad.options[selectCiudad.selectedIndex].value;
  var leyenda = '';

  switch (selectedOption) {
    case 'san-nicolas':
      leyenda = 'No se cobrará viáticos';
      break;
    case 'rosario':
      leyenda = 'Se le cobrará $1200 de viáticos';
      break;
    case 'buenos-aires':
      leyenda = 'Se le cobrará $5000 de viáticos';
      break;
    case 'otra-provincia':
      leyenda = 'Se cobrará los viáticos dependiendo los km';
      break;
    default:
      leyenda = '';
      break;
  }

  leyendaViaticos.textContent = leyenda;
});

function mostrarMensaje() {
    alert("Gracias por enviar tu solicitud, pronto te contestaré.");
  }
