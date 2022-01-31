import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreAppointmentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    companyId: schema.number(),
    userId: schema.number(),
    appointmentDate: schema.date({}, [
      rules.unique({ table: 'appointments', column: 'appointment_date' }),
    ]),
    obs: schema.string(),
  })

  public messages = {}
}
