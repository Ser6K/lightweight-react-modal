export function classnames<T>(...classes: T[]) {
  return classes.filter((value: T) => !!value === true).join(' ')
}
