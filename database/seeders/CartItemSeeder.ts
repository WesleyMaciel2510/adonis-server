import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CartItem from '../../app/Models/CartItem'

export default class CartItemSeeder extends BaseSeeder {
  public async run () {
    await CartItem.create({
      productId: 1,
      quantity: 2,
      userId: 1,
    })
  }
}
