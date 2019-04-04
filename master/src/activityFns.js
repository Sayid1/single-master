export const prefix = (location, ...prefixs) => {
  return prefixs.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  )
}

export const header = () => true

export const es = location => prefix(location, 'es')

export const cmq = location => prefix(location, 'cmq')

export function navbar(location) {
  return true
}
