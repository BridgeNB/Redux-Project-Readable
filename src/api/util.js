export function guid() {
  function random() {
    return Math.random().toString(36).substr(-8)
  }
  return random()
}
