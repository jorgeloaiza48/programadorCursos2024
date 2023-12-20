//*******Este bloque imprime las iniciales de los días de la semana acorde al mes(noviembre)***//
//*******Coloca los valores correspondientes a cadía hábil del mes de noviembre */

function noviembre(Data){
  let dias_noviembre = ["L", "M", "Mi", "J", "V"]
  let aux_noviembre = 4 //esta variable empieza en 4 porque en el array "dias" la posición 4 corresponde a "V"(viernes)que es el primer día hábil de noviembre en 2024.
  let valor_noviembre = 1 //este valor es 1 porque el primer día hábil de noviembre es 1.
  for (let i = 206; i < 227; i++) { //i empieza en 206 porque esa es la columna donde inicia el mes de noviembre.
    Data[3][i] = dias_noviembre[aux_noviembre]
    Data[2][i] = valor_noviembre
    Data[0][i] = 11
    if (aux_noviembre === 4) {
      aux_noviembre = 0
      valor_noviembre = valor_noviembre + 3
    }
    else {
      aux_noviembre++
      valor_noviembre++
    }
  }
}

export default noviembre