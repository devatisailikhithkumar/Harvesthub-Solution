async function getVoices() {
    return new Promise(resolve => {
        const voices = speechSynthesis.getVoices();
        if (voices.length) {
            resolve(voices);
        } else {
            speechSynthesis.onvoiceschanged = () => {
                resolve(speechSynthesis.getVoices());
            };
        }
    });
}

async function speakText(text, lang) {
    const voices = await getVoices();
    const utterance = new SpeechSynthesisUtterance(text);

    // Find a voice that matches the selected language
    const voice = voices.find(v => v.lang.startsWith(lang));
    
    if (voice) {
        utterance.voice = voice;
    } else {
        console.warn(`No voice found for language code: ${lang}`);
    }
    
    utterance.lang = lang; // Use the selected language code
    speechSynthesis.speak(utterance);
}

document.addEventListener('DOMContentLoaded', () => {
    const speakButton = document.getElementById('testSpeak');
    const languageSelect = document.getElementById('language');

    speakButton.addEventListener('click', async () => {
        const selectedLanguage = languageSelect.value;
        let textToSpeak;
        
        if (selectedLanguage === 'te-IN') {
            textToSpeak = `హార్వెస్ట్‌హబ్ సొల్యూషన్‌కు స్వాగతం. రైతులను కొనుగోలు దారులతో అనుసంధానం చేయడం.`;
        } else {
            textToSpeak = `Welcome to HARVESTHUB SOLUTION. Connecting Farmers with Buyers.`;
        }
        
        await speakText(textToSpeak, selectedLanguage);
    });
});
