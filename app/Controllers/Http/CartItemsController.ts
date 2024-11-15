import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CartItem from 'App/Models/CartItem'

export default class CartItemController {
  /**
   * Get a list of all cart items.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const cartItems = await CartItem.all()
      return response.json({ data: cartItems })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching cart items', error: error.message })
    }
  }

  /**
   * Show a single cart item by its ID.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const cartItem = await CartItem.findOrFail(params.id)
      return response.json({ data: cartItem })
    } catch (error) {
      return response.status(404).json({ message: 'CartItem not found', error: error.message })
    }
  }

  /**
   * Create a new cart item.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const cartItemData = request.only(['product_id', 'quantity', 'user_id'])
      const cartItem = await CartItem.create(cartItemData)
      return response.status(201).json({ message: 'CartItem created successfully', data: cartItem })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating cart item', error: error.message })
    }
  }

  /**
   * Update an existing cart item.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const cartItem = await CartItem.findOrFail(params.id)
      const cartItemData = request.only(['quantity'])
      cartItem.merge(cartItemData)
      await cartItem.save()
      return response.json({ message: 'CartItem updated successfully', data: cartItem })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating cart item', error: error.message })
    }
  }

  /**
   * Delete a cart item by its ID.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const cartItem = await CartItem.findOrFail(params.id)
      await cartItem.delete()
      return response.status(200).json({ message: 'CartItem Deleted Successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting cart item', error: error.message })
    }
  }
}
