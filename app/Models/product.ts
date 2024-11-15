import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Order from '../Models/Order'
import Store from '../Models/Store'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public declare id: number

  @column()
  public declare name: string

  @column()
  public declare description: string

  @column()
  public declare price: number

  @column()
  public declare quantityInStock: number

  @column()
  public declare category: string

  @column()
  public declare isActive: boolean

  @column()
  public declare imageUrl: string

  @column()
  public declare storeId: number

  @column.dateTime({ autoCreate: true })
  public declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public declare updatedAt: DateTime

  @hasMany(() => Order)
  public declare order: HasMany<typeof Order>

  @belongsTo(() => Store)
  public declare store: BelongsTo<typeof Store>
}
