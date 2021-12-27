import Route from '@ioc:Adonis/Core/Route'

Route.resource('/companies', 'CompaniesController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
  })
