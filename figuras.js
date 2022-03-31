// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado)

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado)

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado ** 2;
}
// const areaCuadrado = ladoCuadrado ** 2;
// console.log("El área del cuadrado es: " + areaCuadrado)

console.groupEnd();

// Código del triángulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + ", " + ladoTriangulo2 + ", " + baseTriangulo);
// console.log("La altura es: " + alturaTriangulo);

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
};
// console.log("El perimetro del triángulo es: " + perimetroTriangulo);

function areaTriangulo(alturaTriangulo, baseTriangulo) {
    return (alturaTriangulo * baseTriangulo) / 2
};
// console.log("El área del triángulo es: " + areaTriangulo);
console.groupEnd();

// Código del circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo);
//Diámetro
function diametroCirculo(radioCirculo) {
    return radioCirculo * 2
};
// console.log("El diámetro del círculo es: " + diametroCirculo);
//PI
const PI = Math.PI;
// console.log("El valor de PI es : " + PI);
//Circunferencia
function perimetroCirculo(diametroCirculo) {
    return diametroCirculo * PI
};
// console.log("El perimetro del círculo es: " + perimetroCirculo);
//Area
function areaCirculo(radioCirculo) {
    return (radioCirculo ** 2) * PI
};
// console.log("El área del círculo es: " + areaCirculo);

console.groupEnd();

//Aquí interactiamos con Javascript

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    return alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    return alert(perimetro);
}