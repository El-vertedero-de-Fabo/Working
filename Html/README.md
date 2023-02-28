<div align="center">

## 🔙 [Pagina anterior](https://github.com/NomaDiix/Working)


# 📌`Html`

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGFmNTBiOTlmNjczYWZjOTNmYWEwNTdjYzU3YWZmYmExMzZjMmIwYSZjdD1n/ssq8oGi0pPO5rMLrEV/giphy.gif"/>
</div>


---

# 👉 `Indice`
- [🏋️‍♂️ Ejercicios de desarrolloweb](/Html/Documentos/Ejercicios.md)
- [🦾 Ejercicio de francescricart]()
- [🏠 \<html>](#html)
- [👽 \<head>](#head)
- [👔 \<body>](#body)
  - [📝 Formularios](#formularios)
  - [🎵 Multimedia](#multimedia)
  - [📋 Palabras](#-palabra)
- [🔗 Links Importantes](#links-importantes)
- [🐰 Easter Eggs](#easter-eggs)

---



<div align="center" >

## ♟ Estructura 

<img width="500px" src="https://user-images.githubusercontent.com/55964635/221389043-4a08a7e0-2604-4bd6-8e77-fdbdd183aa14.png" alt="" />
</div>

- **`<header>`** Seria lo primero que sale en la pagina
  - **`<nav>`** Va dentro del header, serian todos los links/paginas que tenemos arriba del todo. Puede ser contactos, proyectos, ect, dentro del nav, usamos listas desordenadas `<ul>`
- **`<article>`**
- **`<section>`** Nos permite separar una web en secciones :0
- **`<aside>`** Pueden ser enlaces a otras noticias, otros blogs, etc

## **🏠`<html>`**

- **`<!DOCTYPE html>`** Nos permite decirle al browser que tipo de html vamos a usar
-  Es el elemento raiz, todo lo de nuestra pagina, va dentro de esta etiqueta
  - **`<html lang = "es o en">`** Especificamos el idioma español

## **👽`<head>`**

Vinculamos con archivos externos y podemos cambiar el titulo de la pagina. Contiene lo que solemos llamar como metadata, los elementos que no vemos pero que son esenciales para que la pagina funcione correctamente.
- `<title>` Titulo de la pagina
- `<link>` Para vincular otros archivos
  - [**rel="stylesheet" href="style.css"**](#) (Relationship) denomina una relación con el documento actual, en este caso lo marcamos como hoja de estilos.
  - [**link rel="icon" href="fabo.ico"**]() ponemos el icono a nuestra web
- `<meta>`
  - [**charset="utf-8"**]() Para poder usar acentos
  - [**name="keywords" content="harina, leche, huevo"**]() Serian las palabras clave para nuestra web
  - [**name="description" content"Una tienda de alimentos dietetica por ejemplo"**]() Una descripción de nuestra web basicamente
  - [**name="author" content="Fabian Martinez"**]()
  - [**name="copyright" content="Facebook Inc"**]() En caso de que nuestra empresa este registrada

## **👔`<body>`**

Todo lo [azul](#) son los atributos, para que queden mas legibles

- Definimos la estructura de la pagina
- **`<h1,2,3,4,5,6 >`** Encabezado
- **`<p>`** Parrafo
- **`<main>`** Le dice al browser en donde va a estar nuestro contenido principal
- **`<!-- Comentario -->`** Comentarios
- **`<ul>`** Unordered List (Lista no ordenada)
- **`<ol>`** Order List (Lista ordenada)
  - **`<li>`** List Item (Cada elemento de la lista)
- **`<hr>`** Horizontal Rule/Para separar, es equivalente al --- en markdown
- **`<div>`** Nos permite agrupar contenido bajo un mismo contenedor
- **`<footer>`** Va despues del main, es el pie de pagina
- **`<table>`** Genero una tabla
  - **`<tr>`** definimos las filas, contiene **`<td>`**
  - **`<td>`** Ponemos los nombres de las columnas
    - **[rowspan="5"]()** Definimos las celdas extras para una misma fila
  - **`<th>`** Se usan para los encabezados de las tablasa (centra la palabra)
- **`<center>`** centra :0
- **`<dl>`** (descriptive list) Representa una lista descriptiva 
  - **`<dt>`** (term in a description) Seria el titulo/elemento
  - **`<dd>`** Detalles de la descripción


## **📝`Formularios`**

- **`<form>`**
  - [**action="enviar-respuesta"**](#)
  - [**method="get"**]()  los datos del formulario son adjuntados a la URI del atributo action
- **`<input>`** Sirve para obtener una respuesta del usuario
  - [**type="text"**](#) Solicita un texto al usuario
  - [**placeholder="URL de un gato"**](#) es como la guia de ejemplo en el input
  - [**type=""radio"**](#) Creamos un boton de opción
  - [**required**](#) Hacemos que el campo sea obligatorio
  - [**name="interior-exterior"**](#) Hacemos que se pueda elegir uno de los dos elementos, el otro elemento tambien tiene que tener el mismo atributo
  - [**type="checkbox"**](#) 
  - [**name="personalidad"**](#) IMPORTANTE Si queremos mandar los datos, todas las etiquetas deben tener un valor descriptivo en name. Si queremos tener un grupo de opciones, le agregamos este atributo a todas las etiquetas que querramos
  - [**checked**](#) (marcado) nos permite marcar obciones por defecto
  - [**value="El valor a enviar, podria ser el id de la etiqueta"**](#) 
  - [**type="password"**]() Para las contraseñas
  - [**type="number"**]()
  - [**type="email"**]()
  - [**type="color"**]()
  - [**type="range" min="1" max="1000"**]()
  - [**type="date"**]()
  - [**type="time"**]()
  - [**type="button" value="Boton"**]()
  - [**type="submit"**]() para enviar los datos
- **`<lavel>`** Como el imput no permite seleccionar el texto, el lavel nos permite que el texto tambien funcione como botón
  - [**for="id-delInput"**](#) Nos permite vincular aun mas las etiquetas
- **`Ejemplo:`** \<label for="exterior"> \<input id="exterior" type="radio"> Exterior\</label>
- **`<button>`**
  - [**type="submit"**](#) Enviar y el destino esta en el atributo action de la etiqueta `<form>`
- `<br>` (Break) Romper. Las imagenes y las listas se presentan en lineas separadas, pero no es el caso para todos los elementos, si queremos hacer un salto de linea tenemos que usar esta etiqueta
- **`<textarea>`** Es como el input pero nos permite modificar el tamaño a mano 
  - **[readonly=""]()** Solo en modo de lectura (no podemos escribir dentro)
- **`<select>`** Nos permite tener una lista de selección
  - **`<option>`** Elementos de la lista, no hace falta poner id, ni otros atributos

## **🎵`Multimedia`**
- **`<img>`**  
  - [**src**](#) Significa fuente 
  - [**alt**](#) Es una alternativa en texto de la imagen
- **`<video>`**
- **`<audio>`**
  - [**src**](#) Significa fuente
  - [**controls**]() Nos permite tener los botones para manejar el video/audio

## 📋 **`Palabra`**
- **`<a>`** anchor (enlace)
  - [**href="url"**](#) Agregamos la url y listo, podemos poner un `#` para tener un enlace muerto
  - [**target="_blank"**](#) Abre el link en una nueva pestaña
  - [**rel="noopener noreferrer"**](#) Se agrega por seguridad
  - Podes moverte dentro de la misma pagina usando #id-cosa, en href. Y nos manda a la etiqueta que contenga la id ingresada
  - [**id="link-1"**](#) Esto lo agregamos por si queremos hacer referencia a esta etiqueta en algún otro lado
- **`<small>`** <small>Nos permite hacer que el texto sea mas pequeño</small>
- **`<b>`** <b>negrita</b>
- **`<i>`** <i>Italica</i>
- **`<strike>`** <strike> Para tachar </strike>
- **`<strong>`** <strong>Para marcar el texto en negrita</strong>
- **`<em>`** <em> Texto en cursiva </em>
- **`<s>`** <s>Strikethrough/tachar </s>

## 🔗Links importantes
- [**Browser**](https://definicion.de/browser/)
- [**Documentación**](https://developer.mozilla.org/es/docs/Web/HTML/Element/div)
- [**Curso de utilidad**](https://www.youtube.com/watch?v=XqFR2lqBYPs)
- [**Ejercicios desarrolloweb**](http://desarrolloweb.dlsi.ua.es/libros/html-css/ejercicios)
- [**Ejercicios francescricart**](https://francescricart.com/tutorial-html/ejercicios-html/)


## 🐰Easter eggs

Comentas una sección entera usando [`Ctrl + /`](#)