/**
 * Decodes a Uint8 Array into a black & white image
 * @param {Uint8ClampedArray} bytes encoded data
 * @returns {ImageData}
 */
function decode(bytes, width, height) {
  const imgData = [];

  for (let i = 0; i < bytes.length; i += 1) {
    let byte = bytes[i];

    for (let j = 0; j < 8; j++) {
      // Get LSB
      const bit = byte & 0b10000000;

      if (bit === 0b10000000) {
        // Push white pixel
        imgData.push(255, 255, 255, 255);
      } else {
        // Push black pixel
        imgData.push(0, 0, 0, 255);
      }

      // Shift 1 to the left
      byte <<= 1;
    }
  }

  const data = new Uint8ClampedArray(imgData);

  return new ImageData(data, width);
}
