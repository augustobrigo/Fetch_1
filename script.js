window.onload=inicio;


function inicio(){
    let btn=document.getElementById("btnMostrar");
    btn.onclick=mostrar;
}
function mostrar(){
    //tareas asíncronas
    let contenido=document.getElementById("contenedor");
    fetch("https://randomuser.me/api")
    .then(res => res.json())  //pedir datos y cuando lleguen en formto json
    .then(data =>{
        console.log(data.results[0].name.first);  //cuando lleguen lo mostramos en consola
       //mira la interpolación de contenido JS
        contenido.innerHTML=`
                  <img src="${data.results[0].picture.large}" width="200px">
          <span>"${data.results[0].name.first} ${data.results[0].name.last}"</span> 
          ` 
    });
}