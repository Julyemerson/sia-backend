import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { StoreValidator, UpdateValidator } from 'App/Validators/Company'
import AddressValidator from 'App/Validators/Address/AddressValidator'

import Company from 'App/Models/Company'
import Address from 'App/Models/Address'

export default class CompaniesController {
  public async index({}: HttpContextContract) {
    const company = await Company.all()

    return company
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const dataAddress = await request.validate(AddressValidator)

    const company = await Company.create(data)
    await Address.create({ companyId: company.id, ...dataAddress })

    await Company.query().preload('address')

    return company
  }

  public async show({ params }: HttpContextContract) {
    const company = await Company.findOrFail(params.id)
    return company
  }

  public async update({ params, request }: HttpContextContract) {
    const company = await Company.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    company.merge(data)
    await company.save()

    return data
  }

  public async destroy({ params }: HttpContextContract) {
    const company = await Company.findOrFail(params.id)

    await company.delete()
  }
}
