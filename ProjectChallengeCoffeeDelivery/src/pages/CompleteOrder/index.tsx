import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CompleteOrderContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
  pix = 'pix',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP!'),
  street: zod.string().min(1, 'Informe a Rua!'),
  number: zod.string().min(1, 'Informe o Número!'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro!'),
  city: zod.string().min(1, 'Informe a Cidade!'),
  uf: zod.string().min(1, 'Informe a UF!'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: 'Informe o método de pagamento!',
      }
    },
  }),
})

/*
  Nesta parte foi usado o infer, justamente para 
  inferir os tipos do objeto confirmOrderFormValidationSchema
*/
export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/OrderConfirmed', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
