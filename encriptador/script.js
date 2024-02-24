
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptador-texto");
const aviso = document.querySelector("#advertencia");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenido-tarjeta");
const btncopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector('.btn-desencriptar')




btnEncriptar.addEventListener("click" , e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );


    if(texto ==""){
       aviso.style.color = "#ffffff";
       aviso.textContent ="El campo de texto no dede estar vacio";

       setTimeout(()=>{
          aviso.removeAttribute("style");
        },1500);
        
    }

    else if(texto !== txt){
        aviso.style.color = "#ffffff";
        aviso.textContent ="Solo letras minusculas y sin acentos";
 
        setTimeout(()=>{
           aviso.removeAttribute("style");
         },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.fontsize = "";
        aviso.style.color = "#ffffff";
        aviso.style.fonttweight = "800";
        aviso.textContent ="El texto debe ser todo en minuscula";
 
        setTimeout(()=>{
           aviso.removeAttribute("style");
         },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        contenido.remove();
    }

})

btnDesencriptar.addEventListener("click" , e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );


    if(texto ==""){
       aviso.style.color = "#ffffff";
       aviso.textContent ="El campo de texto no dede estar vacio";

       setTimeout(()=>{
          aviso.removeAttribute("style");
        },1500);
        
    }

    else if(texto !== txt){
        aviso.style.color = "#ffffff";
        aviso.textContent ="Solo letras minusculas y sin acentos";
 
        setTimeout(()=>{
           aviso.removeAttribute("style");
         },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.fontsize = "";
        aviso.style.color = "#ffffff";
        aviso.style.fonttweight = "800";
        aviso.textContent ="El texto debe ser todo en minuscula";
 
        setTimeout(()=>{
           aviso.removeAttribute("style");
         },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        contenido.remove();
    }

})

btncopiar.addEventListener("click" , e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})