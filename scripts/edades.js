/*
let nombres = {"juan":18, 
                "pedro":21, 
                "brenda":20, 
                "rodrigo":23, 
                "Mario":19};


for(let i in nombres)
{
    console.log(i)
    console.log(nombres[i]);
}

*/

class persona
{
    constructor()
    {
        this.nombre;
        this.edad;
        this.dicc={};
    }
    guardarId(nombre)
    {
        this.nombre = nombre
        dicc[nombre]=0;
        return dicc;
    }
    guardarValor(nombre,edad)
    {
        this.nombre = nombre
        this.edad = edad;
        dicc[nombre] = edad;
        return dicc
    }
    regresarId()
    {
        this.dicc = dicc
        for(let i in this.dicc)
        {
            return dicc
        }
    }
}


let dicc = {};
let i=0;
let edad = 0;
let nombre;
let personas = new persona();
while(i<6)
{

nombre = prompt("Ingresa un nombre.")
edad = parseInt(prompt("ingresa una edad."))
if(edad<18 || edad>25)
{
    alert("no estas en el rango de 18-25")
}
else{
    personas.guardarId(nombre);
    personas.guardarValor(nombre,edad);
    i++
}
}
console.log(personas.regresarId())