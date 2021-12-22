import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'

export default class CompaniesController {
  public async index({}: HttpContextContract) {
    const company = await Company.all()

    return company
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'cnpj'])
    const company = await Company.create(data)

    return company
  }

  public async show({ params }: HttpContextContract) {
    const company = await Company.findOrFail(params.id)
    return company
  }

  public async update({ params, request }: HttpContextContract) {
    const company = await Company.findOrFail(params.id)
    const data = request.only(['name', 'cnpj'])

    company.merge(data)
    await company.save()

    return data
  }

  public async destroy({ params }: HttpContextContract) {
    const company = await Company.findOrFail(params.id)

    await company.delete()
  }
}
