import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Store from 'App/Models/Store'

export default class StoreSeeder extends BaseSeeder {
  public async run () {
    const store = await Store.create({
      name: 'Test Store',
      description: 'A store for testing purposes.',
      location: '123 Test Street',
    })

    await store.related('products').create({
      name: 'Sample Product',
      description: 'This is a test product for testing purposes.',
      price: 19.99,
      quantityInStock: 100,
      category: 'Test Category',
      imageUrl: 'http://example.com/sample-product.jpg',
    })
  }
}
