import { Config } from '@japa/runner/build/src/types'
import { testUtils } from './utils/testUtils'

export const configureSuite: Config['configureSuite'] = (suite) => {
  if (['browser', 'functional', 'e2e'].includes(suite.name)) {
    return suite.setup(() => testUtils.httpServer().start())
  }
}

export const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>> = {
  setup: [
    () => {
      console.log('running before all the tests')
    },
  ],
  teardown: [
    () => {
      console.log('running after all the tests')
    },
  ],
}
