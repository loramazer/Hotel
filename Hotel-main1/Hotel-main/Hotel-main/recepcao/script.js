// Função para simular a disponibilidade dos quartos
const quartosDisponiveis = Array.from({ length: 15 }, (_, index) => ({
    numero: index + 1,
    ocupado: Math.random() < 0.5 // 50% de chance de estar ocupado
}));

// Atualiza a lista de quartos disponíveis
function atualizarListaQuartos() {
    const listaQuartos = document.getElementById('lista-quartos');
    listaQuartos.innerHTML = ''; // Limpa a lista atual

    quartosDisponiveis.forEach(quarto => {
        const li = document.createElement('li');
        li.textContent = `Quarto ${quarto.numero}: ${quarto.ocupado ? 'Ocupado' : 'Disponível'}`;
        li.className = quarto.ocupado ? 'occupied' : 'available';
        listaQuartos.appendChild(li);
    });
}

// Evento para visualizar a disponibilidade
document.getElementById('visualizar-btn').addEventListener('click', () => {
    const listaQuartos = document.getElementById('quartos');
    listaQuartos.style.display = listaQuartos.style.display === 'none' ? 'block' : 'none';
    atualizarListaQuartos();
});

// Eventos para check-in
document.getElementById('checkin-btn').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const quarto = parseInt(document.getElementById('quarto').value, 10);
    const quartoSelecionado = quartosDisponiveis.find(q => q.numero === quarto);

    if (quartoSelecionado && !quartoSelecionado.ocupado) {
        quartoSelecionado.ocupado = true;
        alert(`Check-in realizado para ${nome} no quarto ${quarto}.`);
    } else {
        alert('Quarto não disponível ou inválido.');
    }
});

// Eventos para check-out
document.getElementById('checkout-btn').addEventListener('click', () => {
    const nome = document.getElementById('checkout-nome').value;
    const quartoSelecionado = quartosDisponiveis.find(q => q.ocupado);

    if (quartoSelecionado) {
        quartoSelecionado.ocupado = false;
        alert(`Check-out realizado para ${nome} no quarto ${quartoSelecionado.numero}.`);
    } else {
        alert('Nenhum hóspede encontrado.');
    }
});

// Evento para realizar o pagamento
document.getElementById('pagamento-btn').addEventListener('click', () => {
    const nome = document.getElementById('pagamento-nome').value;
    const valor = document.getElementById('valor').value;
    const metodo = document.getElementById('metodo').value;

    if (valor && metodo) {
        alert(`Pagamento de R$ ${valor} realizado para ${nome} via ${metodo}.`);
    } else {
        alert('Preencha todos os campos.');
    }
});
