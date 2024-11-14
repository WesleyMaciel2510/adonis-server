import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OrderItem from 'App/Models/OrderItem'

export default class OrderItemsController {
  /**
   * Get a list of all order items.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const orderItems = await OrderItem.query().preload('product')
      return response.json({ data: orderItems })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching order items', error: error.message })
    }
  }

  /**
   * Show a single order item by its ID.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const orderItem = await OrderItem.query().where('id', params.id).preload('product').firstOrFail()
      return response.json({ data: orderItem })
    } catch (error) {
      return response.status(404).json({ message: 'Order item not found', error: error.message })
    }
  }

  /**
   * Create a new order item.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const orderItemData = request.only(['productId', 'amount'])
      const orderItem = await OrderItem.create(orderItemData)
      await orderItem.load('product')
      return response.status(201).json({ message: 'Order item created successfully', data: orderItem })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating order item', error: error.message })
    }
  }

  /**
   * Update an existing order item.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const orderItem = await OrderItem.findOrFail(params.id)
      const orderItemData = request.only(['productId', 'amount'])
      orderItem.merge(orderItemData)
      await orderItem.save()
      await orderItem.load('product')
      return response.json({ message: 'Order item updated successfully', data: orderItem })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating order item', error: error.message })
    }
  }

  /**
   * Delete an order item by its ID.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const orderItem = await OrderItem.findOrFail(params.id)
      await orderItem.delete()
      return response.status(204)
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting order item', error: error.message })
    }
  }
}
