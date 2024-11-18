import Env from '@ioc:Adonis/Core/Env'

export default {
  guard: 'api',

  api: {
    driver: 'jwt',
    tokenProvider: {
      driver: 'jwt',
      provider: 'users',
      secret: Env.get('JWT_SECRET'),
      options: {
        expiresIn: '1h',
      },
    },
  },
}
