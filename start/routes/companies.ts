import Route from '@ioc:Adonis/Core/Route'

Route.resource('/companies', 'CompaniesController').apiOnly()
