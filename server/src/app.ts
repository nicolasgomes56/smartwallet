import fastify from 'fastify'

import { ZodError } from 'zod'

import { env } from './env'

import { AppRoutes } from './http/routes'

export const app = fastify()

app.register(AppRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // Aqui se deve fazer o log de erro para uma ferramenta externa ex: Sentry, DataDog, NewRelic, etc.
  }

  return reply.status(500).send({
    message: 'Internal server error.',
  })
})
