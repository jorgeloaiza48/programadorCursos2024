//*******Este bloque imprime las iniciales de los días de la semana acorde al mes (marzo)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de marzo */

  function marzo(Data){
  let dias_marzo = ["L", "M", "Mi", "J", "V"]
  let aux_marzo = 4 //esta variable empieza en 4 porque en el array "dias" la posición 4 corresponde a "v"(viernes)que es el primer día hábil de marzo en el 2024
  let valor_marzo = 1
  for (let i = 23; i <= 43; i++) { //la variable i va hasta 43 porque el último día hábil va en la columna 43
    Data[3][i] = dias_marzo[aux_marzo]
    Data[2][i] = valor_marzo
    Data[0][i] = 3
    if (aux_marzo === 4) {
      aux_marzo = 0
      valor_marzo = valor_marzo + 3
    }
    else {
      aux_marzo++
      valor_marzo++
    }
  }
}

export default marzo
