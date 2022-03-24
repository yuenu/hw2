import { ConverToNumberAndCalculateRate } from '../../src/utils'

describe('utils/numberUtils', () => {
  it('ConverToNumberAndCalculateRate  should return correct format', () => {
    expect(ConverToNumberAndCalculateRate('0', '0')).toEqual(1)
    expect(ConverToNumberAndCalculateRate('2', '2')).toEqual(50)
    expect(ConverToNumberAndCalculateRate('1', '4')).toEqual(20)
  })
})