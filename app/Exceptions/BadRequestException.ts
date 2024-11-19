import { Exception } from '@adonisjs/core/build/standalone'

export default class BadRequestException extends Exception {
  constructor(message: string) {
    super(message, 400) // 400 is the HTTP status code for Bad Request
  }

  /**
   * Handle this exception explicitly.
   */
  public async handle(ctx: { response: any }) {
    ctx.response.status(this.status).send({
      error: 'Bad Request',
      message: this.message,
    })
  }
}
