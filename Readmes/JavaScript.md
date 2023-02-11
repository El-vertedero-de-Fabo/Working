<h1 align="center"> 🕹️JavaScript  </h1>
<div align="center">
  <img src="https://media.giphy.com/media/finu0kgoalrvgYEPn7/giphy.gif"/>
 </div>

# Indice
- [Conceptos Basicos](#)

# Conceptos Basicos

### Comentarios
```js
// Comentario de una linea
/*
    Comentario
    De Varias 
    Lineas
*/
```
### Tipos de Datos
- **undefined :** Cuando no existe un valor asignado
- **null :** Para inicializar los objetos
- **boolean :** True | false
- **string :** "Un string de toda la vida"
- **symbol :** Un símbolo es único. Esto quiere decir que, cada vez que creamos uno nuevo, es completamente diferente y no se compara con ningún otro símbolo, incluso si se crean a partir del mismo valor.
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

### Variables

- **var** Tiene alcance de función, se puede usar las veces que quieras para la misma variable.
- **let** Tiene todas las propiedades del const pero se puede reasignar datos.
- **const** Tiene alcance de bloque, solo se puede usar una vez por cada variable, no podes reasignar datos porque es una constante xd,
- **bloque** Es basicamente cualquier espacio que esté entre llaves de apertura y cierre (incluyendo las funciones).


### El lenguaje es Case-Sensitive
### Operaciones Aritmeticas
```js
var suma = 5 + 5;
var resta = 5 - 10;
var producto = 5 * 5;
var cociente = 20 / 2;
```