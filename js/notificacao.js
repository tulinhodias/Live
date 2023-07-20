function exibirToast(mensagem) {
    const toastElement = document.createElement('div');
    toastElement.classList.add('toast');
    toastElement.textContent = mensagem;
  
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    toastElement.appendChild(progressBar);
  
    const progress = document.createElement('div');
    progress.classList.add('progress');
    progressBar.appendChild(progress);
  
    document.body.appendChild(toastElement);
  
    setTimeout(() => {
      toastElement.style.opacity = '1';
    }, 100);
  
    setTimeout(() => {
      toastElement.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(toastElement);
      }, 500); // Tempo de espera após o desaparecimento (500 milissegundos)
    }, 5000); // 5 segundos de exibição da notificação
  }
  
  function simularCompraAutomatica() {
    const mensagens = [
      '👀 1272 Pessoas acessaram hoje',
      '🕐 7 Cadastros nos últimos 5 min.',
      '✅ Dr. João Paulo se inscreveu',
      '👍🏻 132 Vagas Confirmadas',
      '☑️ 140 Vagas Disponíveis',
      '👥 431 Dentistas viram a página'
    ];
  
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    exibirToast(mensagemAleatoria);
  
    // Chama a função novamente a cada 10 segundos
    setTimeout(simularCompraAutomatica, 10000); // 10 segundos (10000 milissegundos)
  }
  
  // Inicia a simulação de compra automática
  simularCompraAutomatica();
  