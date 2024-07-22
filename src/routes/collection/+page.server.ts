export async function load() {
  const [randomColorsResponse] = await Promise.all([
    fetch('http://localhost:3000/random?isLike=true'),
  ])

  const randomColors = await randomColorsResponse.json()
  //   const tagColors = await tagColorResponse.json();

  // Combine the data
  const combinedData = [...randomColors]
  return {
    colors: combinedData,
  }
}
