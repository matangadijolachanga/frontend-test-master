import jsStringArray from 'js-search-array'
import { arrayIsNotEmpty } from './validations'

export const searchCounters = (value, array, key) => jsStringArray(value, array, key)

export const foundCounter = (value, array, key) => {
    const counters = jsStringArray(value, array, key)
    return arrayIsNotEmpty(counters)
}

export const sumConters = counters => {
    return counters.reduce((prev, current) => prev + current.count, 0)
}