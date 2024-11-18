import { BaseModel, beforeSave, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Order from 'App/Models/Order'
import CartItem from 'App/Models/CartItem'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public declare id: number

  @column()
  public declare username: string

  @column()
  public declare name: string

  @column()
  public declare email: string

  @column({ serializeAs: null })
  public declare password: string

  @column()
  public declare createdAt: Date

  @column()
  public declare updatedAt: Date

  @hasMany(() => Order)
  public declare orders: HasMany<typeof Order>

  @hasMany(() => CartItem)
  public declare cartItems: HasMany<typeof CartItem>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  public async verifyPassword(plainPassword: string): Promise<boolean> {
    return Hash.verify(this.password, plainPassword)
  }
}
