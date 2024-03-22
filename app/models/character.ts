import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare name: string

  @column({})
  declare birth: Date

  @column({})
  declare image: string
}
