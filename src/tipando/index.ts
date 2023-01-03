import { frota } from "./frota"
import { TCarro } from "./types"

// type TCarro = {
//   marca: string
//   modelo: string
//   ano: number
// }

function buscarCarrosPorMarca(frota:TCarro[], marca?:string):Array<TCarro> {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota,"Ford"))