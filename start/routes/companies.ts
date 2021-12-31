import Route from '@ioc:Adonis/Core/Route'

Route.resource('/companies', 'CompaniesController')
  .apiOnly()
  .middleware({
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
  })
