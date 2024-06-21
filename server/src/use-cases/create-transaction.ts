import { Category, Transactions, Type } from '@prisma/client'
import { TransactionsRepository } from '../repositories/transactions-repository'

interface TransactionsUseCaseRequest {
  name: string
  amount: number
  type: Type
  category: Category
  account_id?: string
}

interface TransactionsUseCaseResponse {
  transaction: Transactions
}

export class TransactionsUseCase {
  constructor(private transactionsRepository: TransactionsRepository) {}

  async execute({
    name,
    amount,
    type,
    category,
  }: TransactionsUseCaseRequest): Promise<TransactionsUseCaseResponse> {
    const transaction = await this.transactionsRepository.create({
      name,
      amount,
      type,
      category,
      user: {
        create: undefined,
        connectOrCreate: undefined,
        connect: undefined,
      },
    })

    return {
      transaction,
    }
  }
}
