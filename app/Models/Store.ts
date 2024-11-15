import { BaseModel, column, hasMany, HasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'

export default class Store extends BaseModel {
  @column({ isPrimary: true })
  public declare id: number

  @column()
  public declare name: string

  @column()
  public declare description: string

  @column()
  public declare location: string

  @column()
  public declare createdAt: Date

  @column()
  public declare updatedAt: Date

  @hasMany(() => Product)
  public declare products: HasMany<typeof Product>
}
