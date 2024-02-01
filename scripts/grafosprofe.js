class Grafo
{
    constructor()
    {
        this.grafo={};
    }
    agregarVertice(clave)
    {
        this.grafo[clave]=[]
    }
    agregarAdyacente(clave,valor)
    {
        for(let i in this.grafo)
        {
            if(i===clave)
            {
                this.grafo[clave].push(valor);
                return this.grafo;
            }
        }
        return "no existe"
    }
    regresarGrafo()
    {
        for(let i in this.grafo)
        {
            document.write(`${i}->${this.grafo[i]}<br>`)
        }   
    }
}
const grafo1 = new Grafo;

grafo1.agregarVertice("A")
grafo1.agregarVertice("B")
grafo1.agregarVertice("C")
grafo1.agregarVertice("D")

grafo1.agregarAdyacente("A","B")
grafo1.agregarAdyacente("A","C")

grafo1.agregarAdyacente("B","A")
grafo1.agregarAdyacente("B","C")

grafo1.agregarAdyacente("C","D")
grafo1.agregarAdyacente("C","B")
grafo1.agregarAdyacente("C","A")

grafo1.agregarAdyacente("D","C")

grafo1.regresarGrafo()