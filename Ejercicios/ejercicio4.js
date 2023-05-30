function ejercicio4 (string){
    let resultado = '';

    for(let i= string.length - 1; i >= 0; --i){
        resultado += string[i];
    }
    return resultado;
}

console.log(ejercicio4('ejercicio4'))
console.log(ejercicio4('Alfonso'))


