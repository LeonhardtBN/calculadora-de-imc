function calculateIMC() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var resultElement = document.getElementById("result");

    // Limpar mensagem de resultado anterior
    resultElement.innerText = "";

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultElement.innerText = "Por favor, insira valores válidos para altura e peso.";
        return;
    }

    // Convertendo altura de centímetros para metros
    height = height / 100;

    var imc = weight / (height * height);
    var message;

    if (imc < 18.5) {
        message = "Abaixo do peso";
    } else if (imc < 24.9) {
        message = "Peso normal";
    } else if (imc < 29.9) {
        message = "Sobrepeso";
    } else if (imc < 34.9) {
        message = "Obesidade grau II";
    } else{
        message = "Obesidade grau III";
    } 

    resultElement.innerText = "Seu IMC é: " + imc.toFixed(2) + ". " + message;
}
