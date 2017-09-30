const icon = document.getElementById('cactus-icon');

WebMidi.enable((err) => {
    if (err) {
        return;
    }

    for (let i = 0; i < WebMidi.inputs.length; i++) {
        const input = WebMidi.inputs[i];

        input.addListener('noteon', 'all', (e) => {
            if (e.note.name === 'C') {
                icon.src = 'img/prick.png';
            } else {
                icon.src = 'img/cactus_icon.svg';
            }
        });
    }
});