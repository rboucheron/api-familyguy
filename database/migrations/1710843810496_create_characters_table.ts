import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'characters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('image')
      table.date('birth')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
