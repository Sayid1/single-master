export const prefix = (location, ...prefixs) => {
  return prefixs.some(
    prefix => location.hash.startsWith(`#/${prefix}`)
  )
}

export const header = () => true

export const slider = () => true

export const app3 = location => prefix(location, 'app3')
export const appVue = location => prefix(location, 'appVue')
