$(document).ready(function(){
    // Detectar evento de envío de datos
    $('#formularioPrestamo').submit(function(e){
        e.preventDefault(); // Prevenir el envio excesivo

        // Obtener o realizar captura de datos
        const monto = parseFloat($('#montoPrestamo').val());
        const tasaAnual = parseFloat($('#tasaInteres').val());
        const meses = parseInt($('#plazoMeses').val());

        // Validacion
        if(monto <= 0 || tasaAnual <= 0 || meses <= 0){
            alert('Por favor ingrese valores válidos');
            return;
        }

        // Calculo de prestamo
        const tasaMensual = (tasaAnual / 100) / 12;

        // Cuota mensual con formula de amortizacion math
        let cuotaMensual;
        if (tasaMensual === 0){
            cuotaMensual = monto / meses;
        }else {
            cuotaMensual = monto * (tasaMensual * Math.pow(1 + tasaMensual, meses)) / (Math.pow(1 + tasaMensual, meses) - 1);
        }

        // Total a pagar
        const totalPagar = cuotaMensual * meses;

        // Total intereses
        const totalIntereses = totalPagar - monto;

        // Mostrar resultados
        $('#cuotaMensual').text('$' + cuotaMensual.toFixed(2));
        $('#totalPagar').text('$' + totalPagar.toFixed(2));
        $('#totalInteres').text('$' + totalIntereses.toFixed(2));
    
        // Animacion
        $('#resultados').slideDown(500);
    })
})