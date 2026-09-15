// ==========================================
// FASAL FLOW - COMMON SCRIPT
// ==========================================


// ==========================================
// TEXT TO SPEECH
// ==========================================

function speakText(text) {

    if (!("speechSynthesis" in window)) {

        console.log("Text-to-Speech is not supported.");

        return;
    }


    // Stop previous speech
    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    // Voice settings
    speech.rate = 0.9;

    speech.pitch = 1;

    speech.volume = 1;


    // Speak
    window.speechSynthesis.speak(speech);

}


// ==========================================
// STOP SPEECH
// ==========================================

function stopSpeaking() {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

}


// ==========================================
// TEST VOICE
// ==========================================

function testVoice() {

    speakText(
        "Hello. FASAL FLOW voice assistance is working."
    );

}
