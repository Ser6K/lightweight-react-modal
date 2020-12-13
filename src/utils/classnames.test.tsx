import { classnames } from './classnames'

describe('classNames', () => {
  test('it can concatenate multiple classNames', () => {
    const result = classnames('className1', 'className2')

    expect(result).toBe('className1 className2')
  })

  test("it doesn't concatenate falsy values", () => {
    const result = classnames('className1', null)
    const result2 = classnames(null, 'className')

    expect(result).toBe('className1')
    expect(result2).toBe('className')
  })

  test('it returns empty string if no values provided or all values are falsy', () => {
    const result = classnames(null, false)
    const result2 = classnames()

    expect(result).toBe('')
    expect(result2).toBe('')
  })
})
