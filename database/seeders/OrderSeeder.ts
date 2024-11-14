import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Order from '../../app/Models/Order'

export default class OrderSeeder extends BaseSeeder {
  public async run () {
    await Order.create({
      userId: 1,
      totalPrice: 59.99,
      status: 'pending',
      paymentMethod: 'Credit Card',
    })
  }
}
