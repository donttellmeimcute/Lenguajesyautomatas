const grafo = {
    'A': ['B','C','D'],
    'B': ['A','D','E'],
    'C': ['A','D','F'],
    'D': ['A','B','C','E','F'],
    'E': ['B','F','D'],
    'F': ['D','C','E']
};

class Arbolexpansion {
    conexo(grafo) {
        this.grafo = grafo;
        for (let i in grafo) {
            if (this.grafo[i].length === 0) {
                return false;
            }
        }
        return true; 
    }
    ciclico(grafo, inicial) {
        this.grafo = grafo;
        this.inicial = inicial;
        const visitados = [];
        const padres = [];
        const nuevoGrafo = {}
        const temp = (nodo, padre) => {
            visitados.push(nodo);
            padres[nodo] = padre;

            const adyacentes = grafo[nodo];
            for (let i = 0; i < adyacentes.length; i++) {
                const adyacente = adyacentes[i];
                let visitado = false;
                for (let j = 0; j < visitados.length; j++) {
                    if (visitados[j] === adyacente) {
                        visitado = true;
                        break;
                    }
                }

                if (!visitado) {
                    temp(adyacente, nodo);
                } else {
                    return true; 
                }
            }
        };

        temp(inicial, null);

        return false;
    }
    construirGrafo()
    {
        
    }
}

const test = new Arbolexpansion();
console.log(test.conexo(grafo));
console.log(test.ciclico(grafo, 'A'));
