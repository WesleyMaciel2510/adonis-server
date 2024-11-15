import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/product'

export default class ProductController {
  private readonly validFields = ['name', 'description', 'price', 'quantityInStock', 'category', 'isActive', 'imageUrl']

  /**
   * Get a list of all products.
   */
  public async index({ response }: HttpContextContract) {
    try {
      const products = await Product.all()
      return response.json({ data: products })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching products', error: error.message })
    }
  }

  /**
   * Create a new product.
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = this.getValidProductData(request)
      const product = await Product.create(data)
      return response.status(201).json({ message: 'Product created successfully', data: product })
    } catch (error) {
      return response.status(500).json({ message: 'Error creating product', error: error.message })
    }
  }

  /**
   * Show a single product by its ID.
   */
  public async show({ params, response }: HttpContextContract) {
    try {
      const product = await Product.findOrFail(params.id)
      return response.json({ data: product })
    } catch (error) {
      return response.status(404).json({ message: 'Product not found', error: error.message })
    }
  }

  /**
   * Update an existing product.
   */
  public async update({ params, request, response }: HttpContextContract) {
    try {
      const product = await Product.findOrFail(params.id)
      const data = this.getValidProductData(request)
      product.merge(data)
      await product.save()
      return response.json({ message: 'Product updated successfully', data: product })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating product', error: error.message })
    }
  }

  /**
   * Delete a product by its ID.
   */
  public async destroy({ params, response }: HttpContextContract) {
    try {
      const product = await Product.findOrFail(params.id)
      await product.delete()
      return response.status(200).json({ message: 'Product Deleted Successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting product', error: error.message })
    }
  }

  /**
   * Extract and validate the product data from the request body.
   * This method ensures that only valid fields are included.
   */
  private getValidProductData(request: HttpContextContract['request']) {
    return request.only(this.validFields)
  }
}
