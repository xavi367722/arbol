class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.raiz = null;
    }
  
    insertar(valor) {
      const nodoNuevo = new Nodo(valor);
      if (this.raiz === null) {
        this.raiz = nodoNuevo;
        return true;
      } else {
        let nodoActual = this.raiz;
        while (true) {
          if (valor < nodoActual.valor) {
            if (nodoActual.izquierda === null) {
              nodoActual.izquierda = nodoNuevo;
              return true;
            }
            nodoActual = nodoActual.izquierda;
          } else {
            if (nodoActual.derecha === null) {
              nodoActual.derecha = nodoNuevo;
              return true;
            }
            nodoActual = nodoActual.derecha;
          }
        }
      }
    }
  
    buscar(valor) {
      let nodoActual = this.raiz;
      while (nodoActual !== null) {
        if (valor === nodoActual.valor) {
          return true;
        } else if (valor < nodoActual.valor) {
          nodoActual = nodoActual.izquierda;
        } else {
          nodoActual = nodoActual.derecha;
        }
      }
      return false;
    }
  
    buscarTodas(valor) {
      const coincidencias = [];
  
      function buscarRecursivamente(nodo) {
        if (nodo === null) {
          return;
        }
  
        if (valor === nodo.valor) {
          coincidencias.push(nodo.valor);
        }
  
        buscarRecursivamente(nodo.izquierda);
        buscarRecursivamente(nodo.derecha);
      }
  
      buscarRecursivamente(this.raiz);
  
      return coincidencias;
    }
  }
  
  const binaryTree = new BinaryTree();
  binaryTree.insertar(5);
  binaryTree.insertar(2);
  binaryTree.insertar(3);
  binaryTree.insertar(8);
  binaryTree.insertar(5);
  
  const todasLasCoincidencias = binaryTree.buscarTodas(5);
  console.log(todasLasCoincidencias); 
  
