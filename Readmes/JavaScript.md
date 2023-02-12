<h1 align="center"> 🕹️JavaScript  </h1>
<div align="center">
  <img src="https://media.giphy.com/media/l0HlTy9x8FZo0XO1i/giphy.gif"/>
 </div>

---

# 👉 Indice
- [Conceptos Basicos](#conceptos-basicos)
    - [Comentarios](#comentarios)
    - [Tipo de Datos](#tipos-de-datos)
    - [Variables](#variables)
    - [Operaciones Aritmeticas](#🧮-operaciones-aritmeticas)
    - [Strings](#strings)
    - [Secuencia de Escape](#secuencia-de-escape)
    - [Arrays](#arreglos)
    - [Funciones](#funciones)

---

# Conceptos Basicos

### 💭Comentarios
```js
// Comentario de una linea
/*
    Comentario
    De Varias 
    Lineas
*/
```
### 📈 Tipos de Datos
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

### Variables

- **`var`** Tiene alcance de función, se puede usar las veces que quieras para la misma variable.
- **`let`** Tiene todas las propiedades del const pero se puede reasignar datos.
- **`const`** Tiene alcance de bloque, solo se puede usar una vez por cada variable, no podes reasignar datos porque es una constante xd,
- **`bloque`** Es basicamente cualquier espacio que esté entre llaves de apertura y cierre (incluyendo las funciones).

### 🧮 Operaciones Aritmeticas

- **suma** = 5 + 5;
- **resta** = 5 - 10;
- **producto** = 5 * 5;
- **cociente** = 20 / 2;
- **decimal** = 23.4
- **resto** = 15 % 5
- **incremento++;**
- **resto--;**
- **incrementoCustom += 5;**
- **restoCustom -= 7;**
- **producto \*= 2**
- **cociente /= 3**

### ⛓️ Strings

- **'nombre'**
- **"nombre"**
- **"cadena \\"con comillas\\""**
- **'cadena "con comillas" '**
- **"cadena" + "otraCadena"**
- **"cadena" + variable**
- **cadena.length**
- **cadena[indice]**
- Las cadenas son inmutables, no podriamos hacer esto `cadena[0] = "X"` pero podemos modificar la cadena completa (`cadena = otraCadena`)

### Secuencia de Escape
- `\'` Comilla simple
- `\"` Comilla doble
- `\\` Barra invertida
- `\n` Salto de linea
- `\r` Nos permite quedarnos con el resto de un string (a chequear)
- `\t` Tabulación
- `\b` Retroceso (a chequear)
- `\f` Salto de Pagina (a chequear)

### 📚 Arreglos

- **Declaración:** array = ['Fabo', 'Crack']
- **Acceso:** array[0] //Fabo :0
- **Remplazo:** array[0] = 'Pto'
- **Agregar al Final:** array.push('Elemento')
- **Eliminar Ultimo:** array.pop()
- **Eliminar primero:** array.shift()
- **Agregar al Principio:** array.unshift('Elemento')
- **Imprimir:** JSON.stringify(array)

### Funciones

- **Cuerpo:** function mensaje(){ console.log('Hola mundo'); }
- **Parametros:** function suma(a, b){ return a + b; }
