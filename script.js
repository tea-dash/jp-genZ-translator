// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded'); // Debug log
    
    // Get button element
    const translateBtn = document.getElementById('translateBtn');
    
    // Add click event listener
    translateBtn.addEventListener('click', async () => {
        console.log('Button clicked'); // Debug log
        
        const inputText = document.getElementById('input').value;
        console.log('Input text:', inputText); // Debug log
        
        try {
            const response = await fetch('https://jp-gen-z-translator.vercel.app/api/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Translation response:', data); // Debug log
            
            document.getElementById('output').textContent = data.result;
        } catch (error) {
            console.error('Translation error:', error);
            document.getElementById('output').textContent = 'Translation failed. Please try again.';
        }
    });
}); 
