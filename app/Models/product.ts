import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Order from '../Models/Order'
import Store from '../Models/Store'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare quantityInStock: number

  @column()
  declare category: string

  @column()
  declare isActive: boolean

  @column()
  declare imageUrl: string

  @column()
  declare storeId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Order)
  declare order: HasMany<typeof Order>

  @belongsTo(() => Store)
  declare store: BelongsTo<typeof Store>
}
