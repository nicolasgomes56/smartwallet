import { FastifyInstance } from 'fastify'

export async function AppRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    return { hello: 'world' }
  })
}
