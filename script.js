function encrypt(text) {
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter === "e") {
            encryptedText += "enter";
        } else if (letter === "i") {
            encryptedText += "imes";
        } else if (letter === "a") {
            encryptedText += "ai";
        } else if (letter === "o") {
            encryptedText += "ober";
        } else if (letter === "u") {
            encryptedText += "ufat";
        } else {
            encryptedText += letter;
        }
    }

    return encryptedText;
}


function decrypt(text) {
    let decryptedText = "";
    let i = 0;

    while (i < text.length) {
       
        if (text[i] === "e" && text.substr(i, 5) === "enter") {
            decryptedText += "e";
            i += 5; 
        } else if (text[i] === "i" && text.substr(i, 4) === "imes") {
            decryptedText += "i";
            i += 4; 
        } else if (text[i] === "a" && text.substr(i, 2) === "ai") {
            decryptedText += "a";
            i += 2;
        } else if (text[i] === "o" && text.substr(i, 4) === "ober") {
            decryptedText += "o";
            i += 4;
        } else if (text[i] === "u" && text.substr(i, 4) === "ufat") {
            decryptedText += "u";
            i += 4; 
        } else {
            decryptedText += text[i]; 
            i++;
        }
    }
    return decryptedText; 
}

function validateInput(text) {
    let valid = true;

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        if ((letter < 'a' || letter > 'z') && letter !== ' ') {
            valid = false;
            break;
        }
    }

    return valid;
}
document.getElementById('encrypt-btn').onclick = function() {
    let inputText = document.getElementById('input-text').value;

    if (validateInput(inputText)) { 
        let encryptedText = encrypt(inputText);
        document.getElementById('output-text').value = encryptedText;
    } else {
        alert('Por favor, ingresa solo letras minúsculas sin acentos.');
    }
};

document.getElementById('decrypt-btn').onclick = function() {
    let inputText = document.getElementById('input-text').value;

    if (validateInput(inputText)) {
        let decryptedText = decrypt(inputText);
        document.getElementById('output-text').value = decryptedText;
    } else {
        alert('Por favor, ingresa solo letras minúsculas sin acentos.');
    }
};

document.getElementById('copy-btn').onclick = function() {
    let outputText = document.getElementById('output-text');
    outputText.select(); 
    document.execCommand('copy'); 
    alert('Texto copiado al portapapeles'); 
};

