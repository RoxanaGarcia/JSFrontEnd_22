
function claculo_SubTot(){
 var precio= document.getElementById("precio").value;
 var cant=document.getElementById("cantidad").value;
 var val_porc = document.forms["form_calc"].seleccion.value;
 var total= precio * cant;
 var desc=total * val_porc;
 var subTot=total - desc;
 document.forms["form_calc"].total_pagar.value=subTot;
alert(' Felicitacionesss compro su Tickets..!!!');

}