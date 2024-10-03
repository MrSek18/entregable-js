function verificar(){
    xnom=document.fm1.txtnom.value; 
    xdni=document.fm1.txtdni.value;
    xedad=document.fm1.txtedad.value;
    xemail = document.fm1.txtemail.value;
    xest=document.fm1.estudios.value;
    xacepto=document.fm1.txtcond.checked;
    xs=document.fm1.sexo;

    if(xnom.length=='0')
    {  
      alert("Ingrese Nombres Completos"); 
      document.fm1.txtnom.focus();
      return;         
    }
  
    var ernom=/[A-Za-zñÑ\s]/;
    if (!ernom.test(xnom)) {  
      alert('Solo Letras por favor');
      return;  
    }
  
    var erdni=/\d{8}/;
    if (!erdni.test(xdni)) { 
      alert('Contenido del dni NO ES válido.');
      return;  
    }
  
    if(xedad.length=='0'){
        alert("Ingresa edad");
        return;
    }
  
    if(isNaN(xedad)){
        alert("Edad Solo números");
        return;
    }
    if(xedad<18){
      alert("Debes ser mayor de edad");
      return;
    }
  
    if(xemail.length=='0'){
        alert("Ingresa email ");
        return;
    }
  
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(xemail)){
        alert("Error: La dirección de correo es incorrecta.");
        return;
    }      
  
    if (xest.length=='0'){
        alert("Error: Elija Estudios.");
        return;
    }
  
    resultado="";
    for(var i=0;i<xs.length;i++){
        if(xs[i].checked)
        resultado=xs[i].value;
    }  
    if(resultado.length=='0'){
        alert("debes marcar el sexo");
        return;
    }
  
    if (!xacepto){
        alert("Error: Acepte Condiciones.");
        return;
    }
  
    document.fm1.action="./ver_datos.html";
    document.fm1.method="GET";
    document.fm1.submit();
    }


    // function obt_products(){
    //   productos_checked = [];
    //   let products = []; // Inicializa el array

    //   for(let i = 0; i <= 5; i++) {
    //     products[i] = document.fm2[`p${i + 1}`].checked; // Accede al valor del input utilizando la concatenación
    //   }
      
    //   console.log(products); // Muestra el array de productos
      

    // }

    // obt_products();

    // p2 = document.getElementById("p6").textContent;
    // console.log(p2)


    // p1 = document.fm2.p6.value;

    // console.log(p1)



    function checkeds() {
      let productosMarcados = []; // Inicializa el array para los productos marcados
  
      // Selecciona solo los checkboxes dentro del formulario fm2
      const checkboxes = document.fm2.querySelectorAll('input[type="checkbox"]');
  
      // Recorre cada checkbox
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) { // Verifica si el checkbox está marcado
              productosMarcados.push(checkbox.name); // Agrega el valor al array
          }
      });
      console.log(productosMarcados)


      for(producto of productosMarcados){
        
       document.createElement("p");
        document.getElementById("productList")
        
      }
      // Muestra el array de productos marcados
    }





    document.getElementById('showProductsButton').addEventListener('click', function() {
      var productList = document.getElementById('productList');
      productList.classList.toggle('hidden'); // Alterna la clase 'hidden'
    });

  
    function Recupera_Datos(){
     // Recuperar los datos enviados por POST
     var formData = new URLSearchParams(window.location.search);
     var datos = "";
     var campos = {
       "txtnom": "Nombre",
       "txtemail": "Email",
       "txtdni": "DNI",
       "txtedad": "Edad",
       "estudios": "Estudios",
       "sexo": "Sexo",
       "txtcond": "Aceptó Condiciones"  
     };
  
     formData.forEach(function (value, key) { 
       datos += campos[key].toUpperCase() + " >> " + value.toUpperCase() + "<br>";      
  
     });
     // Mostrar los datos en la página
     document.getElementById("datos_informacion").innerHTML = datos;
  
    }