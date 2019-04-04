export const prefix = (location, ...prefixs) => {
  return prefixs.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  )
}

export const header = () => true

export const slider = () => true

export const app3 = location => prefix(location, 'app3')
