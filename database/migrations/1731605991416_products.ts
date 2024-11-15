import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.decimal('price', 12, 2).notNullable()
      table.integer('quantity_in_stock').notNullable()
      table.string('category').notNullable()
      table.boolean('is_active').defaultTo(true)
      table.string('image_url').nullable()
      table.integer('store_id').unsigned().references('id').inTable('stores').onDelete('CASCADE')
      table.integer('order_id').unsigned().references('id').inTable('order').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
