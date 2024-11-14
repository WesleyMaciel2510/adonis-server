import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {
  /**
   * Get a list of all users.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const users = await User.all()
      return response.json({ data: users })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching users', error: error.message })
    }
  }

  /**
   * Show a single user by its ID.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      return response.json({ data: user })
    } catch (error) {
      return response.status(404).json({ message: 'User not found', error: error.message })
    }
  }

  /**
   * Create a new user.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const userData = request.only(['username', 'email', 'password']) 
      const user = await User.create(userData)
      return response.status(201).json({ message: 'User created successfully', data: user })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating user', error: error.message })
    }
  }

  /**
   * Update an existing user.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      const userData = request.only(['username', 'email', 'password']) 
      user.merge(userData)
      await user.save()
      return response.json({ message: 'User updated successfully', data: user })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating user', error: error.message })
    }
  }

  /**
   * Delete a user by its ID.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()
      return response.status(204)
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting user', error: error.message })
    }
  }
}
