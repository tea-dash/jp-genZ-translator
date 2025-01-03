async function translateToGenZ() {
  try {
    const response = await fetch('https://jp-gen-z-translator.vercel.app/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: document.getElementById('input').value
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById('output').textContent = data.result;
  } catch (error) {
    console.error('Error details:', error);
  }
} 