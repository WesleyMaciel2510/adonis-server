import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BusinessException extends Exception {
  constructor(message: string) {
    super(message, 422) // 422 is the HTTP status code for Unprocessable Entity
  }

  /**
   * Handle this exception explicitly.
   */
  public async handle(ctx: HttpContextContract) {
    ctx.response.status(this.status).send({
      error: 'Unprocessable Entity',
      message: this.message,
    })
  }
}
