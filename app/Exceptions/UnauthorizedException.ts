import { Exception } from '@adonisjs/core/build/standalone'

export default class UnauthorizedException extends Exception {
  constructor(message: string) {
    super(message, 403) // 403 is the HTTP status code for Forbidden
  }

  /**
   * Handle this exception explicitly.
   */
  public async handle(ctx: { response: any }) {
    ctx.response.status(this.status).send({
      error: 'Forbidden',
      message: this.message,
    })
  }
}
