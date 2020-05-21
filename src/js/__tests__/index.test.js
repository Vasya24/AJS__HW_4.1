import { numCheck } from '../../index'

test('Try/Catch checking', () => {
  numCheck('0');
  for (let num in arguments) {
      num = parseInt(num, 10)
  if (num === 0) {
      throw ('Ничего не выйдет')
  }
}
})