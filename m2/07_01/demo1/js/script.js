$(document).ready(function(){
    //Click btn cambio
    $('#btnCambiar').click(function(){
        //Cambio de color de h1
        $('#titulo').text('Texto cambiado por Jquery');
        $('#titulo').css('color','red');
    })
})