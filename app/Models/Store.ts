import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/product'

export default class Store extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare location: string

  @column()
  declare createdAt: Date

  @column()
  declare updatedAt: Date

  @hasMany(() => Product)
  declare products: HasMany<typeof Product>
}
