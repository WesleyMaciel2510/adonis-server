import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from '../../app/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run () {
    await Product.create({
      name: 'Sample Product',
      description: 'This is a test product for testing purposes.',
      price: 19.99,
      quantityInStock: 100,
      category: 'Test Category',
      imageUrl: 'http://example.com/sample-product.jpg',
    })
  }
}
