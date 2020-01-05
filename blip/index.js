if (!"WebAssembly" in window)
  window.alert("Sorry, deze browser wordt niet ondersteund :(");
const audioError = `Kon niet beginnen met luisteren, heb je een microfoon aangesloten?.`;

let sdk;
const { Chirp, CHIRP_SDK_STATE } = ChirpSDK;

// App
let app = new Vue({
  el: "#app",
  data: {
    state: CHIRP_SDK_STATE.NOT_CREATED,
    message: ""
  },
  methods: {
    startSdk: function() {
      sdk.start().catch(console.error);
    }
  }
});

const getCanvasContext = () => {
  return document.querySelector(".imgCanvas").getContext("2d");
};

const setCanvasImage = data => {
  const ctx = getCanvasContext();
  ctx.imageSmoothingEnabled = false;

  const renderer = document.createElement("canvas");
  renderer.width = data.width;
  renderer.height = data.height;
  renderer.getContext("2d").putImageData(data, 0, 0);

  ctx.drawImage(renderer, 0, 0, ctx.canvas.width, ctx.canvas.height);
};

// SDK
Chirp({
  key: "3f3293ecba8BEA53c5f0bd3ED",
  onStateChanged: (previous, current) => (app.state = current),
  onReceived: data => {
    if (data.length === 0) {
      window.alert(
        `Hmm, I kon het niet verstaan. Probeer je volume hoger te zetten.`
      );
      return;
    }

    const decodedData = decode(data, 16, 16);
    setCanvasImage(decodedData);
  }
})
  .then(_sdk => {
    sdk = _sdk;
    window.scroll({ top: 0, behavior: "smooth" });
  })
  .catch(err => {
    console.error(err);
    err.message.includes("WebAssembly")
      ? window.alert(err)
      : window.alert(audioError);
  });
