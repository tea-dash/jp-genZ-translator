async function translateToGenZ() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');
    const translateBtn = document.getElementById('translate-btn');

    if (!inputText.trim()) {
        alert('Please enter some text to translate!');
        return;
    }

    translateBtn.disabled = true;
    translateBtn.textContent = 'Translating...';

    try {
        const response = await fetch('https://jp-gen-z-translator-git-main-tadashi-kumazawas-projects.vercel.app/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: `Translate the following Japanese text into Gen Z Japanese slang. 
                Make it sound casual, trendy, and use popular internet slang and abbreviations. 
                Text to translate: ${inputText}`
            })
        });

        const data = await response.json();
        console.log('Response:', data);

        if (data.content && data.content[0]) {
            outputText.value = data.content[0].text;
        } else {
            outputText.value = 'Error: ' + (data.error?.message || 'Unknown error');
        }

    } catch (error) {
        console.error('Error details:', error);
        outputText.value = 'Error: ' + error.message;
    } finally {
        translateBtn.disabled = false;
        translateBtn.textContent = 'Translate ➜';
    }
}

document.getElementById('translate-btn').addEventListener('click', translateToGenZ);
