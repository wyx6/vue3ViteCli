export function parse(value: any) {
  let re = ''
  try {
    re = JSON.parse(value)
  } catch (err) {
    return value
  }
  return re
}
