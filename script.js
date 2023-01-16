const data = { username: 'example' };

function setData() {

    var results = JSON.parse(sessionStorage.getItem("resultados"));

    if(results){
        document.getElementById("categoria1").textContent  = results.predictions[0].clase;
        document.getElementById("categoria2").textContent  = results.predictions[1].clase;
        document.getElementById("categoria3").textContent  = results.predictions[2].clase;
        document.getElementById("afavor1").textContent  += parseFloat(results.predictions[0].favor_value).toFixed(2);
        document.getElementById("afavor2").textContent  += parseFloat(results.predictions[1].favor_value).toFixed(2);
        document.getElementById("afavor3").textContent  += parseFloat(results.predictions[2].favor_value).toFixed(2);
        document.getElementById("contra1").textContent  += parseFloat(results.predictions[0].contra_value).toFixed(2);
        document.getElementById("contra2").textContent  += parseFloat(results.predictions[1].contra_value).toFixed(2);
        document.getElementById("contra3").textContent  += parseFloat(results.predictions[2].contra_value).toFixed(2);
        document.getElementById("imgAF1").src += results.predictions[0].favor;
        document.getElementById("imgAF2").src += results.predictions[1].favor;
        document.getElementById("imgAF3").src += results.predictions[2].favor;
        document.getElementById("imgEC1").src += results.predictions[0].contra;
        document.getElementById("imgEC2").src += results.predictions[1].contra;
        document.getElementById("imgEC3").src += results.predictions[2].contra;
    }    

}

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

    // Save data to sessionStorage
    sessionStorage.setItem("resultados", JSON.stringify(data));

    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });

}