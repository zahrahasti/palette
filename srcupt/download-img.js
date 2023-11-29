export function downloadPalette(coloor) {
    // Create a new canvas element
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
  
    // Set canvas dimensions based on the color palette size
    const paletteWidth = coloor.offsetWidth;
    const paletteHeight = coloor.offsetHeight;
    canvas.width = paletteWidth;
    canvas.height = paletteHeight;
  
    // Get the colors from the color palette
    const colorBoxes = coloor.getElementsByClassName('container-color');
  
    // Loop through the color boxes and draw them on the canvas
    let yPos = 0;
    for (let i = 0; i < colorBoxes.length; i++) {
      const colorBox = colorBoxes[i];
      const color = colorBox.style.backgroundColor;
      const boxHeight = colorBox.offsetHeight;
  
      // Draw the color box on the canvas
      ctx.fillStyle = color;
      ctx.fillRect(0, yPos, paletteWidth, boxHeight);
  
      // Increment the y-position for the next color box
      yPos += boxHeight;
    }
  
    // Convert the canvas content to a data URL
    const dataUrl = canvas.toDataURL('image/png');
  
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'color-palette.png'; // Set the desired file name
  
    // Programmatically click the link to trigger the download
    link.click();
  }
   