import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class FirstUserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      email: 'jb.leonizio@gmail.com',
      name: 'Julyemerson Leonizio',
      password: 'qwe123',
    })
  }
}
