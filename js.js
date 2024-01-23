/*
function checker(edad)
{
    
    if (edad >= 18)
    {
        alert("Permitido");
    }
    else
    {
        alert("No permitido");
    }
}

while (true)
{
    checker(parseInt(prompt("Ingrese su edad: ")))
}
*/
/*
{
let x = [1,2,5,7];
x.push(10);
let len = x.length;
document.write("longitud de la lista: ", len, "<br>");
y = x.slice(0,-1);
document.write("sublista de x, y: ",y,"<br>");
document.write("lista x: ",x,"<br>");
let z = [...x,...y];
document.write("juntar las dos listas x y.","<br>", z);
}
*/

//introducir 5 valores a una lista, aparece un mensaje de gracias y termina
/*
{
let x =[];
for(let i=1; i<=5; i++)
{
    let numero = prompt("Ingresa valores")
    x.push(parseInt(numero));
}
alert("gracias");
document.write(x);
}
*/

//estructuras de datos y algoritmos
//algoritmo 1: lista de n valores, ordenar todos esos valores
/*
{
    function bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    let list = [1, 8, 6, 6, 3, 2, 2, 1, 3, 4,5,6,7,8,8,6,1,2,3,4,3,2,1,0,1,1,1,2,3,4,5,6,4,3,3,43,3,6,7,6,5,3,3,2,1];
    document.write("lista desordenada ", list, "<br>")
    let listaordenada = bubbleSort(list);
    document.write("lista ordenada   ",listaordenada);
}
*/

//algoritmo 2: quicksort


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const izqu = [];
    const derec = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            izqu.push(arr[i]);
        } else {
            derec.push(arr[i]);
        }
    }

    return [...quickSort(izqu), pivot, ...quickSort(derec)];
}

//Algortmos de busqueda

//Algoritmo 1: busqueda lineal
/*
function linealSearch(list,num)
{
    for(let i of list)
    {
        if(num === i)
        {
            alert("Esta en la lista");
        }
        else{
            continue;
        }
    }
}
list = [1,5,4,3,2,1,6,7,9,6];
linealSearch(list,parseInt(prompt("Pon un numero a buscar:")));

*/
/*
//Algoritmo 2: busqueda binaria

function binarySearch(list, dato, pivot) {
    list = quickSort(list);
    if (pivot === dato) {
        return true;
    }
    if (dato === list[list.length]) {
        return true;
    }
    if (dato === list[0]) {
        return true;
    }
    if (dato < pivot) {
        const izq = list.slice(0, list.indexOf(pivot));
        pivot = izq[Math.round(izq.length / 2)];
        console.log("pivote", pivot, izq);
        return binarySearch(izq, dato, pivot);
    }
    if (dato > pivot) {
        der = list.slice(list.indexOf(pivot), list.length);
        pivot = der[Math.round(der.length / 2)];
        console.log("pivote: ", pivot, der);
        return binarySearch(der, dato, pivot); 
    } else {
        return false;
    }
}


list = [3,1,2,5,6,4,2,1,2,3,6,7];
pivot = list[(list.length/2)+1];
let esta = binarySearch(list,parseInt(prompt("ingresa un numero:")),pivot);
if(esta==true)
{
    alert("Esta en la lista");
}
else{
    alert("no esta en la lista");
}

*/

//poo

//clases

class Animal
{
    constructor(color,tamaño)
    {
        this.color=color
        this.tamaño = tamaño
    }
    comer()
    {
        document.write("Estoy comiendo");
    }
    mover()
    {
        document.write("me estoy moviendo");
    }
    existir()
    {
        document.write('Tengo el color, ${this.color} con tamaño: ${this.tamaño}');
    }
}