import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public street: string

  @column()
  public neighborhood: string

  @column()
  public state: string

  @column()
  public city: string

  @column()
  public number: string

  @column()
  public reference: string

  @column()
  public companyId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
