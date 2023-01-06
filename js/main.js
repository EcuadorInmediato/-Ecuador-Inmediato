
let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};




function QR() {
    document.getElementById("informacion").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    ids1();  
}



var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {


    document.getElementById("portafolio").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("galeria").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    backweb(); 
     
}


function galery(){
    document.getElementById("galeria").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids1();  
    
}



function contactar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("side").style.display = "none";;
    document.getElementById("galeria").style.display = "none"; 
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    ids1();  
    
}

function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    ids1();    
       
}

 function backweb() {
   
    if (contador==1) {
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("objetivos").style.display = "none";
        document.getElementById("galeria").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        contador=1;
        backarriba();
      

    }
    else{
            history.back();
        
    }

    } 

//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        history.back();

    }
    else if (contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("informacion").style.display = "none";
        document.getElementById("galeria").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        contador=1;
        history.back();

    }
    else {
        history.back();
    }
       
    }


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
  
// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 50,
         behavior: 'smooth'
        });
        });

  
  
//formulario>


        document.querySelector("#submit").addEventListener("click", e => {
            e.preventDefault();
          
            //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
            let telefono = "593985576167";
          
            let cliente = document.querySelector("#cliente").value;
            let edad = document.querySelector("#edad").value;
            let msj = document.querySelector("#msj").value;
            let resp = document.querySelector("#respuesta");
          
            resp.classList.remove("fail");
            resp.classList.remove("send");
          
            let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                  *Ecuador Inmediato*%0A
                  *Datos del Contacto*%0A
                  *Nombre*%0A
                  ${cliente}%0A
                  *Celular*%0A
                  ${edad}%0A
                  *Mensaje*%0A
                  ${msj}%0A`;
          
            if (cliente === "" || edad === "" || msj === "") {
              resp.classList.add("fail");
              resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
              return false;
            }
            resp.classList.remove("fail");
            resp.classList.add("send");
            resp.innerHTML = `Tu Msj Fue Enviado, ${cliente}`;
          
            window.open(url);
          });
          
    
    
        
        
        function msj2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'info',
            text: 'función disponible próximamente',
            footer: 'Tarjeta Demo'
            });
          
           
          };

          function ftuser() {
            Swal.fire({
                title: 'Ecuador Inmediato',
                text: 'Medio de Comunicación Digital',
                imageUrl: 'img/Ecuadorinmediato.png',
                imageWidth: 100,
                confirmButtonText: 'Añadir a Contactos',
                showCloseButton: 'true',
                showCancelButton: true,
          
            
              }).then((result) => {
                if (result.isConfirmed) {
                msj2();
            
                }
              })
        
         
        };
    
          const shareData2 = {
            title: 'Ecuador Inmediato',
            text: 'Enviado desde Cliconline App. Web Tarjeta Digital Ecuador Inmediato',
            url: 'https://ecuadorinmediatodigital.blogspot.com',
            }
            
            
            // Share must be triggered by "user activation"
           
            var urltarjeta = 'https://ecuadorinmediatodigital.blogspot.com'
          
            function sharetarjeta(){
            if (navigator.share) {
                navigator
               .share(shareData2)
               .then(() => console.log('correcto'))
               .catch(error => console.log ('error sharing',error) );
            }else {
                sharetj();
            }
            } 
    
    const $content = document.getElementById('textareacopy');
          $btncopy = document.getElementById ('btcopi');
          $title = document.getElementById ('titlelink')
    
          $btncopy.addEventListener('click', e => {
            $content.select();
            document.execCommand('copy')
            msj2();
          });


