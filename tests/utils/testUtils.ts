import { Ignitor } from '@adonisjs/core/build/standalone'
import Application from '@ioc:Adonis/Core/Application'

export const testUtils = {
  httpServer: () => {
    return {
      start: async () => {
        const ignitor = new Ignitor(Application.appRoot)
        const httpServer = ignitor.httpServer()
        await httpServer.start()
      },
    }
  },
}
