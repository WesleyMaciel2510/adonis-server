import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import OrderItem from './OrderItem'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public declare id: number

  @column()
  public declare userId: number

  @column()
  public declare totalPrice: number

  @column()
  public declare status: string

  @column()
  public declare paymentMethod: string

  @column()
  public declare createdAt: Date

  @column()
  public declare updatedAt: Date

  @belongsTo(() => User)
  public declare user: BelongsTo<typeof User>

  @hasMany(() => OrderItem)
  public declare orderItem: HasMany<typeof OrderItem>
}
