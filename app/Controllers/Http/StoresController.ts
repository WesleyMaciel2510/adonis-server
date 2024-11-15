import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Models/Store'

export default class StoreController {
  /**
   * Get a list of all stores.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const stores = await Store.all()
      return response.json({ data: stores })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching stores', error: error.message })
    }
  }

  /**
   * Show a single store by its ID.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const store = await Store.findOrFail(params.id)
      return response.json({ data: store })
    } catch (error) {
      return response.status(404).json({ message: 'Store not found', error: error.message })
    }
  }

  /**
   * Create a new store.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const storeData = request.only(['name', 'description', 'location', 'imageUrl'])
      const store = await Store.create(storeData)
      return response.status(201).json({ message: 'Store created successfully', data: store })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating store', error: error.message })
    }
  }

  /**
   * Update an existing store.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const store = await Store.findOrFail(params.id)
      const storeData = request.only(['name', 'description', 'location', 'imageUrl'])
      store.merge(storeData)
      await store.save()
      return response.json({ message: 'Store updated successfully', data: store })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating store', error: error.message })
    }
  }

  /**
   * Delete a store by its ID.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const store = await Store.findOrFail(params.id)
      await store.delete()
      return response.status(200).json({ message: 'Store Deleted Successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting store', error: error.message })
    }
  }
}
