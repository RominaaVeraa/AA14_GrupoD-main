// Cambia el estado de un campo a verificando.
export function setCheckingState(inputId) {

  const inputElement = document.getElementById(inputId);
  
  if (!inputElement) {
    console.error(`No se encontró el input con id: ${inputId}`);
    return;
  }
  
  // Encuentra el elemento de estado del campo seleccionado.
  const statusElement = inputElement.closest(".campo-formulario").querySelector(".estado-campo");

  if (!statusElement) {
    console.error(`No se encontró el elemento de estado para el input con id: ${inputId}`);
    return;
  }

  statusElement.classList.remove("approved", "rejected");
  statusElement.classList.add("checking");
}

// Cambia el estado de un campo a aprobado.
export function setApprovedState(inputId) {
  const inputElement = document.getElementById(inputId);

  if (!inputElement) {
    console.error(`No se encontró el input con id: ${inputId}`);
    return;
  }

  const statusElement = inputElement.closest(".campo-formulario").querySelector(".estado-campo");

  if (!statusElement) {
    console.error(`No se encontró el elemento de estado para el input con id: ${inputId}`);
    return;
  }
  
  statusElement.classList.remove("checking", "rejected");
  statusElement.classList.add("approved");
}

// Cambia el estado de un campo a rechazado.
export function setRejectedState(inputId) {

  const inputElement = document.getElementById(inputId);

  if (!inputElement) {
    console.error(`No se encontró el input con id: ${inputId}`);
    return;
  }

  const statusElement = inputElement.closest(".campo-formulario").querySelector(".estado-campo");

  if (!statusElement) {
    console.error(`No se encontró el elemento de estado para el input con id: ${inputId}`);
    return;
  }

  statusElement.classList.remove("checking", "approved");
  statusElement.classList.add("rejected");
}

// Limpia el estado de un campo.
export function clearFieldState(inputId) {
  const inputElement = document.getElementById(inputId);
  if (!inputElement) {
    console.error(`No se encontró el input con id: ${inputId}`);
    return;
  }
  const statusElement = inputElement.closest(".campo-formulario").querySelector(".estado-campo");
  if (!statusElement) {
    return;
  }

  statusElement.classList.remove("checking", "approved", "rejected");
}


