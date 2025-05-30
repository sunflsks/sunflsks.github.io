let text = "sudhip nashi"
let IPA = "/su.dʰip na.ʃi/"
let status = "cs + linguistics @ umass amherst"
var idx = 0;

function typeStatus() {
}


function typeIPA() {
    if (idx >= IPA.length) {
        clearTimeout(typeIPA);
        return;
    } else {
        document.getElementById("ipa").innerHTML += IPA.charAt(idx);
        idx++;
        setTimeout(typeIPA, 50);
    }
}


function typeName() {
    if (idx >= text.length) {
        idx = 0;
        clearTimeout(typeName);
        typeIPA();
        return;
    } else {
        document.getElementById("name").innerHTML += text.charAt(idx);
        idx++;
        setTimeout(typeName, 50);
    }
}

function initWaves() {
    waveProperties = {
        fills: [
            '#006994FF',
            '#00699480'
        ]
    }
    waves(waveProperties).mount('#waves');
}

function init() {
    typeName();
    initWaves();
}
