import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login({ request, response }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])

    // Find user by username
    const user = await User.findBy('username', username)
    // If no user is found, return an error
    if (!user) {
      return response.badRequest('Invalid credentials - User Not Found')
    }

    // Verify if the entered password matches the stored  password
    const passwordIsValid = await Hash.verify(user.password, password)

    // If password doesn't match, return an error
    if (!passwordIsValid) {
      return response.badRequest('Invalid credentials - Password does not match')
    }

    // If password matches, return a successful response
    return response.ok('User Authenticated')
  }
}
