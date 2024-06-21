import { User } from '@prisma/client'
import { UsersRepository } from '../repositories/users-repository'

export type RegisterUseCaseRequest = {
  name: string
  email: string
}

export type RegisterUseCaseResponse = {
  user: User
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const user = await this.usersRepository.create({ name, email })
    return { user }
  }
}
