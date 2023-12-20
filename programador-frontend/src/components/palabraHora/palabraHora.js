 //Esta función imprime la palabra "hora" en cada columna donde inicia cada mes

function palabraHora(Data){
 let horas = [0, 22, 44, 67, 91, 112, 136, 159, 181,205,227,250]
 for (let i = 0; i < horas.length; i++) {
   Data[3][horas[i]] = "Hora"
 }
}

export default palabraHora

