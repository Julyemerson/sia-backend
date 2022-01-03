import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
        table.string('public_place').notNullable(),
        table.string('neighborhood').notNullable(),
        table.string('county').notNullable(),
        table.string('number', 10),
        table.string('state').notNullable(),
        table.string('reference'),
        table
          .integer('company_id')
          .unsigned()
          .references('id')
          .inTable('companies')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
