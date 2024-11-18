import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, response }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])

    // Find user by username
    const user = await User.findBy('username', username)

    // If no user is found or the hashed password doesn't match, return an error
    if (!user || user.password !== password) {
      return response.badRequest('Invalid credentials')
    }

    // If password matches, return a successful response
    return response.ok('User Authenticated')
  }
}
