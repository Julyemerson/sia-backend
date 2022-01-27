import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companies extends BaseSchema {
  protected tableName = 'companies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary(),
        table.string('company_name').notNullable(), //razão social
        table.string('cnpj', 14).notNullable(),
        table.string('fantasy_name'),
        table.timestamp('created_at', { useTz: true }),
        table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
