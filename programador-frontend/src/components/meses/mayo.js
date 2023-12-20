//*******Este bloque imprime las iniciales de los días de la semana acorde al mes (mayo)***//
  //*******Coloca los valores correspondientes a cadía hábil del mes de mayo */

  function mayo(Data){
  let dias_mayo = ["L", "M", "Mi", "J", "V"]
  let aux_mayo = 2 //esta variable empieza en 2 porque en el array "dias" la posición 2 corresponde a "Mi"(miércolesd)que es el primer día hábil de mayo en 2024
  let valor_mayo = 1
  for (let i = 68; i <= 90; i++) {
    Data[3][i] = dias_mayo[aux_mayo]
    Data[2][i] = valor_mayo
    Data[0][i] = 5
    if (aux_mayo === 4) {
      aux_mayo = 0
      valor_mayo = valor_mayo + 3
    }
    else {
      aux_mayo++
      valor_mayo++
    }
  }
}

export default mayo