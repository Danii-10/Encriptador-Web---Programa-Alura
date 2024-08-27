document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('encrypt-btn').addEventListener('click', function() {
        let text = document.getElementById('input-text').value;
        let encryptedText = encrypt(text);
        document.getElementById('output-text').value = encryptedText;
    });

    document.getElementById('decrypt-btn').addEventListener('click', function() {
        let text = document.getElementById('input-text').value;
        let decryptedText = decrypt(text); 
        document.getElementById('output-text').value = decryptedText;
    });

    document.getElementById('copy-btn').addEventListener('click', function() {
        let text = document.getElementById('output-text');
        text.select();
        document.execCommand('copy');
    });
});

function encrypt(text) {
    return btoa(text);
}

function decrypt(text) {
    try {
        return atob(text);
    } catch (e) {
        return "Error al desencriptar el texto.";
    }
}