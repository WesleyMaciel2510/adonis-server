import { BaseModel, column, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Order from 'App/Models/Order'
import CartItem from 'App/Models/CartItem'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare createdAt: Date

  @column()
  declare updatedAt: Date

  @hasMany(() => Order)
  declare orders: HasMany<typeof Order>

  @hasMany(() => CartItem)
  declare cartItems: HasMany<typeof CartItem>

}
