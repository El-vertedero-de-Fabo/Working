<h1 align="center"> 🕹️JavaScript  </h1>
<div align="center">
  <img src="https://media.giphy.com/media/gfld3S4CsRXRZjqEj3/giphy.gif"/>
 </div>

---


# 👉 Indice
- [⌨️ Conceptos Basicos](#⌨️-conceptos-basicos)
    - [💭 Comentarios](#💭comentarios)
    - [📈 Tipo de Datos](#📈-tipos-de-datos)
    - [🖱️ Variables](#🖱️-variables)
    - [🧮 Operaciones](#operaciones)
    - [📚 Arrays](#📚-arreglos)
    - [🔋 Funciones](#funciones)
    - [💽 Condicionales](#condicionales)
    - [🔘 Switch](#🔘-switch)
    - [☕ Objetos](#☕-objetos)
    - [🔁Bucles](#🔁-bucles)
    - [📐 Numeros Random](#📐numeros-random)



---

<div align="center">

# ⌨️ Conceptos Basicos
## 💭Comentarios
</div>

```js
// Comentario de una linea
/*
    Comentario
    De Varias 
    Lineas
*/
```

<div align="center">

## 📈 Tipos de Datos
</div>


- **undefined :** Cuando no existe un valor asignado
- **null :** Para inicializar los objetos
- **boolean :** True | false
- **string :** "Un string de toda la vida"
- **symbol :** Un símbolo es único. Esto quiere decir que, cada vez que creamos uno nuevo, es completamente diferente y no se compara con ningún otro símbolo, incluso si se crean a partir del mismo valor. 
    <br >
    ```js
    const mySymbol = Symbol()
    const mySymbolWithDescription = Symbol('descripción del símbolo')

    // los símbolos son únicos
    Symbol() === Symbol() // false
    // incluso con la misma descripción
    Symbol('a') === Symbol('a') // false 
    ```
- **number :** numeros de toda la vida
- **object :** para objetos :0


<div align="center">

## 🖱️ Variables

</div>

- **`var`** Tiene alcance de función, se puede usar las veces que quieras para la misma variable.
- **`let`** Tiene todas las propiedades del const pero se puede reasignar datos.
- **`const`** Tiene alcance de `bloque`, solo se puede usar una vez por cada variable, no podes reasignar datos porque es una constante xd,
- **`bloque`** Es basicamente cualquier espacio que esté entre llaves de apertura y cierre (incluyendo las funciones).

<div align="center">

##  Operaciones



<table>
<tr>
<td> 🧮 Aritmeticas </td> <td> ⛓️ Strings </td>
</tr>
<tr>
<td>
 
- **suma:** 5 + 5;
- **resta:** 5 - 10;
- **producto:** 5 * 5;
- **cociente:** 20 / 2;
- **decimal:** 23.4
- **resto:** 15 % 5
- **incremento++**
- **resto--**
- **incrementoCustom += 5**
- **restoCustom -= 7**
- **producto \*= 2**
- **cociente /= 3**
- **igualdad:** 5 == '5' //true
- **igualdad Estricta:** 5 === '5' //false
- **desigualdad:** 5 != '5' //false
- **desigualdad Estricta:** 5 !== '5' //true
- **operadores:** <, > , <=, >=, &&, ||, !true //false

</td>
<td>
 
- **'nombre'**
- **"nombre"**
- **"cadena \\"con comillas\\""**
- **'cadena "con comillas" '**
- **"cadena" + "otraCadena"**
- **"cadena" + variable**
- **cadena.length**
- **cadena[indice]**
- `\'` Comilla simple
- `\"` Comilla doble
- `\\` Barra invertida
- `\n` Salto de linea
- `\r` 
- `\t` Tabulación
- `\b` Retroceso (a chequear)
- `\f` Salto de Pagina (a chequear)
- **cadenaANumero:** parseInt("-47")
- **aBinario:** parseInt("1101111", 2)

</td>
</tr>
</table>

</div>

Las cadenas son inmutables, no podriamos hacer esto `cadena[0] = "X"`

<div align="center">

## 📚 Arreglos

</div>

- **Declaración:** array = ['Fabo', 'Crack']
- **Acceso:** array[0] //Fabo :0
- **Remplazo:** array[0] = 'Pto'
- **Agregar al Final:** array.push('Elemento')
- **Eliminar Ultimo:** array.pop()
- **Eliminar primero:** array.shift()
- **Agregar al Principio:** array.unshift('Elemento')
- **Imprimir:** JSON.stringify(array)
<div align="center">

## Funciones

</div>

- **Cuerpo:** function mensaje(){ console.log('Hola mundo'); }
- **Parametros:** function suma(a, b){ return a + b; }

<div align="center">

## Condicionales

</div>

- **if (true) { a++; }**
- **if (true) { a++; } else { a--; }**
- **if (true) { a++; } else if (false) { a--; } else { a+=4 }**
- **x < y ? x : y** Si la condicion es True, retorna x sino y
- a === b ? "a y b son iguales" <br> 
: a > b ? "A es mayor que B" <br>
: "B es mayor que A"

<div align="center">

## 🔘 Switch

<table>
<tr>
<td> Switch Normal </td> <td> Switch Multiples Casos </td>
</tr>
<tr>
<td>
 
```js
var valor = 66;
var respuesta;
switch (valor){
    case 1:
        respuesta = 'valor uno';
        break;
    case 2:
        respuesta = 'valor dos';
        break;
    case 3:
        respuesta = 'valor tres';
        break;
    default:
        respuesta = 'que carajos hiciste';
        break;
}
console.log(respuesta)
```
</td>
<td>

```js
var valor = 66;
var respuesta;
switch (valor){
    case 1:
        respuesta = 'valor uno';
        break;
    case 2:
    case 3:
    case 4:
        respuesta = 'valor dos, tres o cuatro';
        break;
    case 5:
        respuesta = 'valor cinco';
        break;
    default:
        respuesta = 'que carajos hiciste';
        break;
}
console.log(respuesta)
```
</td>
</tr>
 
</table>

</div>

<div align="center">

## ☕ Objetos

</div>

- **Objeto de ejemplo**
    ```js
    var perro = {
        'nombre': 'Pepe',
        'edad': 3,
        'la raza es': 'Pitbull'
    };
    ```
- **acceso:** console.log(perro.nombre)
- **acceso Corchetes:** console.log(perro['la raza es'])
- **agregar:** perro.color = 'negro'
- **eliminar:** delete perro.nombre
- **Se podria utilizar para remplazar un case/else if**
- **verificar propiedad:** perro.hasOwnPropery('edad')

<div align="center">

## 🔁 Bucles

</div>

- **while (a > 10) { a-- }**
- **for (var i = 0; i < 10; i++) {  }**
- **do { a-- } while (a > 10)**// Cuando se le pide datos al usuario

<div align="center">

## 📐Numeros Random

</div>

- **[ 0 - 1 ):** Math.random()
- **[ 0 - (n1-1) ]:** Math.floor( Math.random() * n1 )   
- **[ n1 - n2 ]:** Math.floor(Math.random() * (n2 - n1 + 1)) + n1

