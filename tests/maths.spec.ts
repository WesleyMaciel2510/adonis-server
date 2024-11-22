import { test } from '@japa/runner'

test('basic math works', (context: {
  expect: (actual: any) => { toBe: (expected: any) => void }
}) => {
  const { expect } = context
  expect(1 + 1).toBe(2)
})

test('string equality works', (context: {
  expect: (actual: any) => { toBe: (expected: any) => void }
}) => {
  const { expect } = context
  expect('hello').toBe('hello')
})
