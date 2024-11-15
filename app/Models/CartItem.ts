import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'
import User from 'App/Models/User'

export default class CartItem extends BaseModel {
  @column({ isPrimary: true })
  public declare id: number

  @column()
  public declare userId: number

  @column()
  public declare productId: number

  @column()
  public declare quantity: number

  @column()
  public declare createdAt: Date

  @column()
  public declare updatedAt: Date

  @belongsTo(() => Product)
  public declare product: BelongsTo<typeof Product>

  @belongsTo(() => User)
  public declare user: BelongsTo<typeof User>
}
