 //****Esta función imprime las horas desde las 6 am hasta las 22 horas.******/

function horasEnNumeros(Data){
let columns = [0, 22, 44, 67, 91, 112, 136, 159, 181, 204, 227, 249]
  for (let j = 0; j < columns.length; j++) {
    for (let i = 4; i < 20; i++) {
      let aux = i + 3;
      Data[i][columns[j]] = i + 2 + " a " + aux;
    }
  }
}

export default horasEnNumeros