import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class InternalServerErrorException extends Exception {
  constructor(message: string) {
    super(message, 500) // 500 is the HTTP status code for Internal Server Error
  }

  /**
   * Handle this exception explicitly.
   */
  public async handle(ctx: HttpContextContract) {
    ctx.response.status(this.status).send({
      error: 'Internal Server Error',
      message: this.message,
    })
  }
}
