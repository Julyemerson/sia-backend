import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Appointment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public companyId: number

  @column()
  public userId: number

  @column()
  public appointmentDate: DateTime

  @column()
  public obs: string

  @column()
  public isCanceled: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
