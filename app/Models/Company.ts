import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Address from 'App/Models/Address'

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
