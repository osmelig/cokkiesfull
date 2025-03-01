// Botón de conversión de medidas
const medidasBtn = document.getElementById('medidasBtn');
let usandoTazas = false;

medidasBtn.addEventListener('click', () => {
    const ingredientes = document.querySelectorAll('.ingredientes li');
    
    if(!usandoTazas) {
        ingredientes[0].textContent = "2 tazas de harina";
        ingredientes[1].textContent = "⅔ taza de mantequilla";
        ingredientes[2].textContent = "½ taza de azúcar";
        medidasBtn.textContent = "Mostrar medidas en gramos";
    } else {
        ingredientes[0].textContent = "250g de harina";
        ingredientes[1].textContent = "150g de mantequilla";
        ingredientes[2].textContent = "100g de azúcar";
        medidasBtn.textContent = "Mostrar medidas en tazas";
    }
    
    usandoTazas = !usandoTazas;
});