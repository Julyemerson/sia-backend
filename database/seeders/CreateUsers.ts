import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'jb.leonizio@gmail.com',
        name: 'Julyemerson Leonizio',
        role: 'admin',
        password: 'qwe123',
      },
      {
        email: 'suporte@siprogramas.com.br',
        name: 'Suporte SI',
        role: 'normal',
        password: 'qwe123',
      },
    ])
  }
}
