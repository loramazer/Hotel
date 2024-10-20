
        // Verifica se há uma mensagem na URL
    const urlParams = new URLSearchParams(window.location.search);
    const mensagem = urlParams.get('mensagem');
    
    // Exibir popup de sucesso se a mensagem for 'success'
    if (mensagem === 'success') {
        document.getElementById('success-popup').style.display = 'block';
        showLogin(); // Muda para a tela de login
    }

    // Função para fechar o popup
    function closePopup() {
        document.getElementById('success-popup').style.display = 'none';
    }