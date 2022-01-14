import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Appointments extends BaseSchema {
  protected tableName = 'appointments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
        table
          .integer('company_id')
          .unsigned()
          .references('id')
          .inTable('companies')
          .onUpdate('CASCADE')
          .onDelete('CASCADE'),
        table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE'),
        table.dateTime('appointment_date').notNullable(),
        table.text('obs', 'longtext').notNullable(),
        table.boolean('is_canceled')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
