import Fastify from 'fastify'

const server = Fastify({logger: true});

let count = 0;
const expensiveOperation = () => new Promise(r => setTimeout(() => r(++count), 100))
server.get('/', async () => {
    return await expensiveOperation();
})
const start = async () => {
    try {
      await server.listen({ port: 3000 })
    } catch (err) {
      server.log.error(err)
      process.exit(1)
    }
  }
  start().then()