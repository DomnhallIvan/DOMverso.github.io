
/* 
DOM: Document Object Model.
El Modelo de Objetos del Documento es un API para documentos HTML y XML.
Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JavaScript.
El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
Teoría DOM: https://jonmircha.com/dom
Documentación en MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
El DOM tiene 3 objetos importantes:
  1) window: hace referencia a toda la ventana del navegador.
  2) document: hace refencia a la estructura del documento HTML.
  3) navigator: hace referencia a la información que se puede obtener del navegador del usuario, por ejemplo: geolocalización, estado de conexión, tipo de navegador, sistema operativo, etc.
  
*/

console.log(window);
console.log(document);
console.log(navigator);

let $logo = document.querySelector("#logo");
console.log($logo);

let $parrafos = document.querySelectorAll("p");
console.log($parrafos);

let $links = document.querySelectorAll(".link");
console.log($links);



console.log($logo.style);
$logo.style.backgroundColor = "#0f0";
$logo.style.padding = "2rem";

$logo.innerText = "<i>Logotipo</i>";
$logo.innerHTML = "<i>Logotipo</i>";

$links[2].innerHTML = "jonmircha.com";
$links[2].href = "https://jonmircha.com";
$links[2].target = "_blank";

//Cuando quieran afectar a varios elementos usaremos un forEach

$parrafos.forEach(function (el, index) {
  console.log(el, index);
  el.style.padding = "1rem";
  el.style.fontFamily = "Courier New";
  el.innerHTML = `
  
  El mero mero, hijo mayor de mi familia, Junior Developer en Unity, C#, sé lo básico de Blender, Html, JavaScript, Bootstrap. 
  `;
});

let nombre = "Ivan Paniagua Maldonado";
let $nombre = document.querySelector("#nombre");


document.write("<h1>Ivan Paniagua Maldonado</h1>");

$nombre.innerHTML = `<b>${nombre}</b>`;

let $foto = document.createElement("img");
$foto.src = "https://cdn.discordapp.com/attachments/845383920458924034/1011653416466006067/IMG_20220823_100825.jpg?ex=6537de2a&is=6525692a&hm=ac191cc738377cfcdc1c2d67918ebdb43f165e0feb6c1c6ae8e7c5848bbad5a7&";
$foto.style.maxWidth = "100%";

document.body.appendChild($foto);

console.log($parrafos[1].classList);