import { Prisma, Transactions } from '@prisma/client'

export interface TransactionsRepository {
  create(data: Prisma.TransactionsCreateInput): Promise<Transactions>
  update(
    id: string,
    data: Prisma.TransactionsUpdateInput,
  ): Promise<Transactions>
  findById(id: string): Promise<Transactions | null>
  findByCategory(category: string): Promise<Transactions[]>
}
