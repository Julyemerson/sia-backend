import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreAppointmentValidator } from 'App/Validators/appointment'
import Appointment from 'App/Models/Appointment'

export default class AppointmentsController {
  public async index({}: HttpContextContract) {
    const appointments = await Appointment.all()

    return appointments
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreAppointmentValidator)

    const appointment = await Appointment.create(data)

    return appointment
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
