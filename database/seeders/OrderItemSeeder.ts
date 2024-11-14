import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderItem from '../../app/Models/OrderItem'

export default class OrderItemSeeder extends BaseSeeder {
  public async run () {
    await OrderItem.create({
      orderId: 1,
      productId: 1,
      amount: 2,
    })
  }
}
