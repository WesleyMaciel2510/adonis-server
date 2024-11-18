import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'wesley2510',
        email: 'wesleymaciel2500@gmail.com',
        password: 'test123',
        name: 'Wesley Maciel',
      },
      {
        username: 'jacinto11',
        email: 'jacinto11@hotmail.com',
        password: await Hash.make('password123'), // Hashing the password
        name: 'Jacinto Barroso',
      },
    ])
  }
}
