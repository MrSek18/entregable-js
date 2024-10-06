function verificar(){
  xnom=document.fm1.txtnom.value; 
  xdni=document.fm1.txtdni.value;
  xedad=document.fm1.txtedad.value;
  xemail = document.fm1.txtemail.value;
  xacepto=document.fm1.txtcond.checked;
  xnumero=document.fm1.txtnumero.value;
  xdirec = document.fm1.txtdirec.value;

  if(xdirec.length == "0"){
    alert("Ingrese una dirección válida")
    return;
  }

  if(xnumero.length == "0"){
    alert("Ingrese el numero de contacto")
  }
  if(isNaN(xnumero)){
    alert("El numero telefónico solo puede contener numeros");
    return
  }

  

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


  if (!xacepto){
      alert("Error: Acepte Condiciones.");
      return;
  }

  if(checkList() != true){ 
    alert("Escoja al menos un producto");
    return;
  }


  let total = 0;
  let productosMarcados = [];
    const checkboxes = document.fm2.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            productosMarcados.push(checkbox.name); 
            total += parseFloat(checkbox.value); 

        }
    });

  localStorage.setItem("productosSeleccionados", JSON.stringify(productosMarcados));
  localStorage.setItem("totalSeleccionado", total.toFixed(2)); 

  

  document.fm1.action="./ver_datos.html";
  document.fm1.method="GET";
  document.fm1.submit();
  }



  function checkList() {
    const list = document.getElementById("productListItems");
    const listItems = list.getElementsByTagName("li"); 

    if (listItems.length > 0) {
        return true;
    } else {
        return false;
    }
  }


  let clicks = 0;

function checkeds() {
    let productosMarcados = []; 
    let total = 0; 
  
    const checkboxes = document.fm2.querySelectorAll('input[type="checkbox"]');
  
    // Recorre cada checkbox
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) { 
            productosMarcados.push(checkbox.name); 
            total += parseFloat(checkbox.value); 
        }
    });
  
    let lista = document.getElementById("productListItems"); 
  
    function listingProducts() {
        for (let i = 0; i < productosMarcados.length; i++) {
            let product = document.createElement("li"); 
            product.textContent = productosMarcados[i];
            product.classList.add("list-group-item"); 
            lista.appendChild(product);
        }
    }
  
    if (clicks === 0) {
        listingProducts();
        clicks = 1;
    } else {
        lista.innerHTML = ""; 
        listingProducts();
    }
    checkList();

    const totalElement = document.getElementById("totalPrice");
    totalElement.textContent = `Total: S/${total.toFixed(2)}`; 
}
  






  document.getElementById('showProductsButton').addEventListener('click', function() {
    var productList = document.getElementById('productList');
    productList.classList.toggle('hidden'); 
  });


  function Recupera_Datos(){
   var formData = new URLSearchParams(window.location.search);
   var datos = "";
   var campos = {
     "txtnom": "Nombre",
     "txtemail": "Email",
     "txtdni": "DNI",
     "txtedad": "Edad",
     "txtnumero": "Numero de contacto",
     "txtdirec": "Dirección de entrega",
   };

   formData.forEach(function (value, key) {
    if (key !== "txtcond") {
        datos += campos[key].toUpperCase() + ": " + value.toUpperCase() + "<br>";
    }
  });
   document.getElementById("datos_informacion").innerHTML = datos;
  
  const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];
  const receivedProductsList = document.getElementById("receivedProducts");

  productosSeleccionados.forEach(function (producto) {
      let listItem = document.createElement("li");
      listItem.textContent = producto;
      listItem.classList.add("list-group-item");
      receivedProductsList.appendChild(listItem);
  });
  const totalSeleccionado = localStorage.getItem("totalSeleccionado") || "0.00";
  const totalElement = document.createElement("p");
  totalElement.textContent = `Total: S/${totalSeleccionado}`;
  receivedProductsList.appendChild(totalElement); 

  }