/* import { test } from '@japa/runner'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

test.group('AuthController - Login', (group) => {
  // Create a user before tests run
  group.setup(async () => {
    const hashedPassword = await Hash.make('validpassword')
    await User.create({
      username: 'testuser',
      password: hashedPassword,
    })
  })

  // Clean up after tests
  group.teardown(async () => {
    await User.query().where('username', 'testuser').delete()
  })

  test('should authenticate a user with valid credentials', async ({ client, assert }) => {
    const response = await client.post('/login').json({
      username: 'testuser',
      password: 'validpassword',
    })

    response.assertStatus(200)
    assert.equal(response.text(), 'User Authenticated')
  })

  test('should return an error when the user does not exist', async ({ client }) => {
    const response = await client.post('/login').json({
      username: 'nonexistentuser',
      password: 'anyPassword',
    })

    response.assertStatus(400)
    response.assertTextIncludes('Invalid credentials - User Not Found')
  })

  test('should return an error when the password is incorrect', async ({ client }) => {
    const response = await client.post('/login').json({
      username: 'testuser',
      password: 'invalidpassword',
    })

    response.assertStatus(400)
    response.assertTextIncludes('Invalid credentials - Password does not match')
  })
})
 */
