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

- Vinculamos con archivos externos y podemos cambiar el titulo de la pagina

## **👔`<body>`**

- Definimos la estructura de la pagina
- **`<h1,2,3,4,5,6 >`** Encabezado
- **`<p>`** Parrafo
- **`<main>`** Le dice al browser en donde va a estar nuestro contenido principal
- **`<!-- Comentario -->`** Comentarios
- **`<img>`**  
  - **src:** Significa fuente 
  - **alt:** Es una alternativa en texto de la imagen
- **`<a>`** anchor (enlace)
  - **href="url":** Agregamos la url y listo, podemos poner un `#` para tener un enlase muerto
  - **target="_blank":** Abre el link en una nueva pestañá
  - **rel="noopener noreferrer"** Se agrega por seguridad
  - Podes moverte dentro de la misma pagina usando #id-cosa, en href. Y nos manda a la etiqueta que contenga la id ingresada
  - id="link-1"
- **`<ul>`** Unordered List (Lista no ordenada)
- **`<ol>`** Order List (Lista ordenada)
  - **`<li>`** List Item (Cada elemento de la lista)
- **`<strong>`** Para marcar el texto en negrita
- **`<em>`** Texto en cursiva
- **`<s>`** Strikethrough/tachar
- **`<hr>`** Horizontal Rule/Para separar, es equivalente al --- en markdown

## 📝 Formularios

- **`<form>`**
  - [**action="enviar-respuesta"**](#)
- **`<input>`** Sirve para obtener una respuesta del usuario
  - **type="text"** Solicita un texto al usuario
  - **placeholder="URL de un gato"**: es como la guia de ejemplo en el input
  - **type=""radio"** Creamos un boton de opción
  - **required**: Hacemos que el campo sea obligatorio
  - **name="interior-exterior"**
- **`<lavel>`** Como el imput no permite seleccionar el texto, el lavel nos permite que el texto tambien funcione como botón
  - **for="id-delInput"**: Nos permite vincular aun mas las etiquetas
- **`Ejemplo:`** \<label for="exterior"> \<input id="exterior" type="radio"> Exterior\</label>
- **`<button>`**
  - **type="submit"**: Enviar y el destino esta en el atributo action de la etiqueta `<form>`



## 🔗Links importantes
- [**Browser**](https://definicion.de/browser/)
- [**Documentación**](https://developer.mozilla.org/es/docs/Web/HTML/Element/div)
- [**Curso de utilidad**](https://www.youtube.com/watch?v=XqFR2lqBYPs)

## 🐰Easter eggs

Comentas una sección entera usando `Ctrl + /`