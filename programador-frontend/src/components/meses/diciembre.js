 //*******Este bloque imprime las iniciales de los días de la semana acorde al mes(diciembre)***//
 //*******Coloca los valores correspondientes a cadía hábil del mes de diciembre */

 function diciembre(Data){
  let dias_diciembre = ["L", "M", "Mi", "J", "V"]
  let aux_diciembre = 0 //esta variable empieza en 0 porque en el array "dias" la posición 0 corresponde a "L"(lunes)que es el primer día hábil de diciembre en 2024.
  let valor_diciembre = 2 //este valor es 2 porque el primer día hábil de diciembre es dos.
  for (let i = 228; i <=249; i++) {
    Data[3][i] = dias_diciembre[aux_diciembre]
    Data[2][i] = valor_diciembre
    Data[0][i] = 12
    if (aux_diciembre === 4) {
      aux_diciembre = 0
      valor_diciembre = valor_diciembre + 3
    }
    else {
      aux_diciembre++
      valor_diciembre++
    }
  }
}

export default diciembre