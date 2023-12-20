//Esta función imprime el nombre de los meses sobre las celdas combinadas

function nombreMeses(Data){
let labelPositions = [1, 23, 45, 68, 92, 113, 137, 160, 182, 205, 228]
  let mesesLabel = ["FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"]
  for (let i = 0; i < labelPositions.length; i++) {
    Data[1][labelPositions[i]] = mesesLabel[i]
  }
}

export default nombreMeses