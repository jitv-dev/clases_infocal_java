$(document).ready(function () {
  console.log("JQuery funcionando");
  // detectar evento de envio de dato / formulario
  $('#formularioPrestamo').submit(function(e){
   e.preventDefault(); //prevenir el envio excesivo

  // $("#btnCalcular").click(function () {
  //   console.log("btn click");

  //   $("#alertContainer").empty();

    //obtener o realizar captura de datos
    const monto = parseFloat($("#montoPrestamo").val());
    const tasaAnual = parseFloat($("#tasaInteres").val());
    const meses = parseInt($("#plazoMeses").val());

    // console.log("Monto", monto);
    // console.log("Tasa", tasaAnual);
    // console.log("Meses", meses);
    //validacion
    if (monto <= 0 || tasaAnual < 0 || meses <= 0) {
      alert("Por favor, ingresa valores válidos");
      return;
    }

    //calcular prestamo
    const tasaMensual = tasaAnual / 100 / 12;

    //cuota mensual formula de amortizacion math
    let cuotaMensual;
    if (tasaMensual === 0) {
      cuotaMensual = monto / meses;
    } else {
      cuotaMensual =
        (monto * (tasaMensual * Math.pow(1 + tasaMensual, meses))) /
        (Math.pow(1 + tasaMensual, meses) - 1);
    }
    //total a pagar
    const totalPagar = cuotaMensual * meses;

    //total intereses
    const totalIntereses = totalPagar - monto;

    //mostrar resultados
    $("#cuotaMensual").text("$" + cuotaMensual.toFixed(2));
    $("#totalPagar").text("$" + totalPagar.toFixed(2));
    $("#totalInteres").text("$" + totalIntereses.toFixed(2));

    //animacion
    $("#resultado").slideDown(500);
  });
});
