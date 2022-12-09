//la api fecth sirve para traer datos de una dirección y los trae en formato json

//ce¿rear ejemplo de como traer datos de la api https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))


