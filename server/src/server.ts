import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
    host: 'localhost',
  })
  .then((address) => {
    console.log(`🚀 Server listening at ${address}`)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
