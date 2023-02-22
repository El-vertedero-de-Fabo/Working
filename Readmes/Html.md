<div align="center">

## 🔙 [Pagina anterior](https://github.com/NomaDiix/Working)


# 📌`Html`

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGFmNTBiOTlmNjczYWZjOTNmYWEwNTdjYzU3YWZmYmExMzZjMmIwYSZjdD1n/ssq8oGi0pPO5rMLrEV/giphy.gif"/>
</div>


---

# 👉 `Indice`
- [🏠 \<html>](#html)
- [👽 \<head>](#-head)
- [👔 \<body>](#👔body)
- [📝 Formularios](#-formularios)
- [🔗 Links Importantes](#links-importantes)
- [🐰 Easter Eggs](#easter-eggs)

---


## **🏠`<html>`**

- **`<!DOCTYPE html>`** Nos permite decirle al browser que tipo de html vamos a usar
-  Es el elemento raiz, todo lo de nuestra pagina, va dentro de esta etiqueta
  - **`<html lang = "es o en">`** Especificamos el idioma español

## **👽 `<head>`**

Vinculamos con archivos externos y podemos cambiar el titulo de la pagina. Contiene lo que solemos llamar como metadata, los elementos que no vemos pero que son esenciales para que la pagina funcione correctamente.
- `<title>` Titulo de la pagina
- `<link>` Para vincular otros archivos
  - [**href="style.css"**](#)
  - [**rel="stylesheet"**](#) (Relationship) denomina una relación con el documento actual, en este caso lo marcamos como hoja de estilos `stylesheet`



## **👔`<body>`**

Todo lo [azul](#) son los atributos, para que queden mas legibles

- Definimos la estructura de la pagina
- **`<h1,2,3,4,5,6 >`** Encabezado
- **`<p>`** Parrafo
- **`<main>`** Le dice al browser en donde va a estar nuestro contenido principal
- **`<!-- Comentario -->`** Comentarios
- **`<img>`**  
  - [**src**](#) Significa fuente 
  - [**alt**](#) Es una alternativa en texto de la imagen
- **`<a>`** anchor (enlace)
  - [**href="url"**](#) Agregamos la url y listo, podemos poner un `#` para tener un enlase muerto
  - [**target="_blank"**](#) Abre el link en una nueva pestañá
  - [**rel="noopener noreferrer"**](#) Se agrega por seguridad
  - Podes moverte dentro de la misma pagina usando #id-cosa, en href. Y nos manda a la etiqueta que contenga la id ingresada
  - [**id="link-1"**](#) Esto lo agregamos por si queremos hacer referencia a esta etiqueta en algún otro lado
- **`<ul>`** Unordered List (Lista no ordenada)
- **`<ol>`** Order List (Lista ordenada)
  - **`<li>`** List Item (Cada elemento de la lista)
- **`<strong>`** <strong>Para marcar el texto en negrita</strong>
- **`<em>`** Texto en cursiva
- **`<s>`** Strikethrough/tachar
- **`<hr>`** Horizontal Rule/Para separar, es equivalente al --- en markdown
- **`<div>`** Nos permite agrupar contenido bajo un mismo contenedor
- **`<footer>`** Va despues del main, es el pie de pagina
- **`<small>`** <small>Nos permite hacer que el texto sea mas pequeño</small>
- **`<b>`** <b>negrita<b>
- **`<i>`** <i>Italica<i>
- **`<strike>`** <strike> Para tachar </strike>


## 📝 Formularios

- **`<form>`**
  - [**action="enviar-respuesta"**](#)
- **`<input>`** Sirve para obtener una respuesta del usuario
  - [**type="text"**](#) Solicita un texto al usuario
  - [**placeholder="URL de un gato"**](#) es como la guia de ejemplo en el input
  - [**type=""radio"**](#) Creamos un boton de opción
  - [**required**](#) Hacemos que el campo sea obligatorio
  - [**name="interior-exterior"**](#) Hacemos que se pueda elegir uno de los dos elementos, el otro elemento tambien tiene que tener el mismo atributo
  - [**type="checkbox"**](#) 
  - [**name="personalidad"**](#) si queremos tener un grupo de opciones, le agregamos este atributo a todas las etiquetas que querramos
  - [**checked**](#) (marcado) nos permite marcar obciones por defecto 
  - [**value="El valor a enviar, podria ser el id de la etiqueta"**](#) este atributo solo se utiliza con input de `radio` y `checkbox`
- **`<lavel>`** Como el imput no permite seleccionar el texto, el lavel nos permite que el texto tambien funcione como botón
  - [**for="id-delInput"**](#) Nos permite vincular aun mas las etiquetas
- **`Ejemplo:`** \<label for="exterior"> \<input id="exterior" type="radio"> Exterior\</label>
- **`<button>`**
  - [**type="submit"**](#) Enviar y el destino esta en el atributo action de la etiqueta `<form>`
- `<br>` (Break) Romper. Las imagenes y las listas se presentan en lineas separadas, pero no es el caso para todos los elementos, si queremos hacer un salto de linea tenemos que usar esta etiqueta


## 🔗Links importantes
- [**Browser**](https://definicion.de/browser/)
- [**Documentación**](https://developer.mozilla.org/es/docs/Web/HTML/Element/div)
- [**Curso de utilidad**](https://www.youtube.com/watch?v=XqFR2lqBYPs)

## 🐰Easter eggs

Comentas una sección entera usando [`Ctrl + /`](#)