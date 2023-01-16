const data = { username: 'example' };

function sendText(texto) {
    
    const data = {data: texto}

    console.log(document.getElementById('textArea1').textContent);

    fetch('http://127.0.0.1:8000/v1/xsvmc/predict', {
        method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });

}