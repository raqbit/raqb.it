// Local endpoint for FAHClient control socket
const url = "http://localhost:36330";

/**
 * Send commands to the FAHClient control socket
 * @param {Array<string>} commands commands to send to the FAHClient control socket
 */
async function sendFahCommands(commands) {
  const payload = `${commands.join("\n")}\n`;
  try {
    await fetch(url, { method: "POST", body: payload });
  } catch (e) {
    // Error expected because invalid HTTP response
  }
}
