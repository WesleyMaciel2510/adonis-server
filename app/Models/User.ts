import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Order from 'App/Models/Order'
import CartItem from 'App/Models/CartItem'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public declare id: number

  @column()
  public declare username: string

  @column()
  public declare name: string

  @column()
  public declare email: string

  @column()
  public declare password: string

  @column()
  public declare createdAt: Date

  @column()
  public declare updatedAt: Date

  @hasMany(() => Order)
  public declare orders: HasMany<typeof Order>

  @hasMany(() => CartItem)
  public declare cartItems: HasMany<typeof CartItem>
}
