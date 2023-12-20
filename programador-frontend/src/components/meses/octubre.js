 //*******Este bloque imprime las iniciales de los días de la semana acorde al mes(octubre)***//
 //*******Coloca los valores correspondientes a cadía hábil del mes de octubre */

 function octubre(Data){
  let dias_octubre = ["L", "M", "Mi", "J", "V"]
  let aux_octubre = 1 //esta variable empieza en 1 porque en el array "dias" la posición 1 corresponde a "M"(martes)que es el primer día hábil de octubre en 2024.
  let valor_octubre = 1 //este valor es 1 porque el primer día hábil de octubre es 1.
  for (let i = 182; i <= 204; i++) {
    Data[3][i] = dias_octubre[aux_octubre]
    Data[2][i] = valor_octubre
    Data[0][i] = 10
    if (aux_octubre === 4) {
      aux_octubre = 0
      valor_octubre = valor_octubre + 3
    }
    else {
      aux_octubre++
      valor_octubre++
    }
  }
}

export default octubre