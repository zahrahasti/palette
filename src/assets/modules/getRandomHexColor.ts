function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (which is #FFFFFF in hex)
  const randomColor = Math.floor(Math.random() * 16777215)
  // Convert the number to a hex string and pad with leading zeros if necessary
  return `#${randomColor.toString(16).padStart(6, '0')}`
}

export { getRandomHexColor }
