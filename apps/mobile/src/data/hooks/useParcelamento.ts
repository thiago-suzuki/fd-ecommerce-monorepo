import { CalcularParcelamento } from '@fd-ecommerce/core'

export default function useParcelamento(valor: number, quantidade: number = 12) {
    return new CalcularParcelamento().executar(valor, quantidade)
}
