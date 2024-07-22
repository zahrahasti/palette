export async function load() {
  const response = await fetch('http://localhost:3000/random')
  const data = await response.json()
  return {
    colors: data,
  }
}
