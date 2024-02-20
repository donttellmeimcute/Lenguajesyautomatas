function guardar() {
    const formulario = document.getElementById('guardar');
    const inputs = formulario.getElementsByTagName('input');
    const diccionario = {};

    for (let i = 0; i < inputs.length-1; i++) {
        const input = inputs[i];
        const user = input.name;
        const valor = input.value;
        diccionario[user] = valor;
    }

    console.log(diccionario);

}
