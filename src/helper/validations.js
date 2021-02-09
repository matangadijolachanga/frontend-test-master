export const isUndefined = value => typeof value === 'undefined' ? true : false

export const isNotUndefined = value => typeof value !== 'undefined' ? true : false

export const isEmpty = value => value === '' ? true : false

export const isNotEmpty = value => value !== '' ? true : false

export const isNull = value => value === null ? true : false

export const isNotNull = value => value !== null ? true : false

export const arrayIsEmpty = array => array.length === 0 ? true : false

export const arrayIsNotEmpty = array => array.length > 0 ? true : false

export const arrayMoreThanOneItem = array => array.length > 1 ? true : false

export const objectIsEmpty = object => Object.keys(object).length === 0 ? true : false

export const objectIsNotEmpty = object => Object.keys(object).length > 0 ? true : false

export const valueInObject = (object, key, value) => object.some(data => data[key] === value)
