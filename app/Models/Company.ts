import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Address from 'App/Models/Address'
import Appointment from 'App/Models/Appointment'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public companyName: string

  @column()
  public fantasyName: string

  @column()
  public cnpj: string

  @hasMany(() => Address)
  public address: HasMany<typeof Address>

  @hasMany(() => Appointment)
  public appointment: HasMany<typeof Appointment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
