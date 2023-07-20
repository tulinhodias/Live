function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

// Função para atualizar o contador a cada segundo
function atualizarContador(tempoRestante) {
    const contadorElemento = document.getElementById('contador');

    if (tempoRestante >= 0) {
        contadorElemento.textContent = formatarTempo(tempoRestante);
        tempoRestante--;
        setTimeout(() => atualizarContador(tempoRestante), 1000);
    } else {
        contadorElemento.textContent = 'Tempo encerrado!';
    }
}

// Tempo inicial de 9 minutos e 59 segundos em segundos
const tempoInicial = 9 * 60 + 59;

// Chamar a função de atualização do contador assim que a página for aberta
window.onload = () => {
    atualizarContador(tempoInicial);
};