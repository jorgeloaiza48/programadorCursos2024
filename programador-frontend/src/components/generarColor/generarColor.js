function generarNumero(numero) {
    return Math.trunc((Math.random() * numero.toFixed(0)));
  }

 function colorRGB() {
    let color = "(" + generarNumero(50) + "," + generarNumero(150) + "," + generarNumero(250) + ")";
    return "rgb" + color
  }

  export default colorRGB