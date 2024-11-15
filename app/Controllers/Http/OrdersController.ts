import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrderController {
  /**
   * Get a list of all orders.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const orders = await Order.all()
      return response.json({ data: orders })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching orders', error: error.message })
    }
  }

  /**
   * Show a single order by its ID.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const order = await Order.findOrFail(params.id)
      return response.json({ data: order })
    } catch (error) {
      return response.status(404).json({ message: 'Order not found', error: error.message })
    }
  }

  /**
   * Create a new order.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const orderData = request.only(['userId', 'totalPrice', 'status', 'paymentMethod'])
      const order = await Order.create(orderData)
      return response.status(201).json({ message: 'Order created successfully', data: order })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating order', error: error.message })
    }
  }

  /**
   * Update an existing order.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const order = await Order.findOrFail(params.id)
      const orderData = request.only(['total_amount', 'status'])
      order.merge(orderData)
      await order.save()
      return response.json({ message: 'Order updated successfully', data: order })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating order', error: error.message })
    }
  }

  /**
   * Delete an order by its ID.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const order = await Order.findOrFail(params.id)
      await order.delete()
      return response.status(200).json({ message: 'Order Deleted Successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting order', error: error.message })
    }
  }
}
