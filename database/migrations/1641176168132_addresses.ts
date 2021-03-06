import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
        table.string('street').notNullable(), //Logradouro
        table.string('neighborhood').notNullable(), //Bairro
        table.string('number', 10),
        table.string('city').notNullable(),
        table.string('state').notNullable(), // Estado
        table.string('reference'),
        table
          .integer('company_id')
          .unsigned()
          .references('id')
          .inTable('companies')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      table.timestamp('created_at', { useTz: true }), table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
