import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Appointment from 'App/Models/Appointment'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public name: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public role: 'admin' | 'normal'

  @column()
  public rememberMeToken?: string

  @hasMany(() => Appointment)
  public appointment: HasMany<typeof Appointment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
