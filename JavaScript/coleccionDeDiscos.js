/*
Tenemos un objeto que representa parte de una colección
de albunes musicales.

Cada álbun tiene un número de identificación unico (id)
asociado a otras propiedades.

No todos los álbunes tienen la información completa.
*/

var coleccionDeDiscos = {
    7853 : {
        tituloDelAlbun: 'Bee Gees Greatest',
        artista: 'Bee Gees',
        canciones: ['Stayin Alive']
    },
    5439: {
        tituloDelAlbun: 'ABBA Gold'
    }
};

/*
Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colección de discos)
- id
- propiedad ('artista' o canciones)
- valor

Tu meta es completar la funcion implementando las siguientes reglas 
para modificar el objeto pasado a la función:

- Si 'valor' es una cadena vacía, elimina la propiedad 
del álbun correspondiente.

- Si 'propiedad' es igual a la cadena de caracteres 'canciones' pero 
el albun no tiene una propiedad llamada 'canciones' crea un arreglo
vacio y agrega 'valor' a ese arreglo.

- Si 'propiedad' es igual a la cadena de caracteres 'canciones' y 
'valor' no es una cadena vacía, agrega 'valor' al final del arreglo
de canciones del álbun correspondiente.

- Si 'valor' no es una cadena vacía y 'propiedad' no es igual a 
'canciones', asigna el valor del parámetro 'valor' a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.
*/

function actualizarDiscos(discos, id, propiedad, valor){
    var disco = discos[id] 
    if (valor === '') {
        delete disco[propiedad];
    }
    else if (propiedad === 'canciones'){
        if (!(disco.hasOwnPropery('canciones'))){
            let array = [];
            array.push(valor);
            disco.canciones = array;
            return
        }
        disco.canciones.push(valor);
    }
    disco[propiedad] = valor;
}

