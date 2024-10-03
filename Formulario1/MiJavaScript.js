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