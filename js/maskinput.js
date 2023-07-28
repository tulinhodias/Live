// Aguarde o documento ser carregado
$(document).ready(function() {
    // Selecione o campo de entrada pelo ID e aplique a máscara
    $('#telefone1').mask('(00) 0000-00009');

    // Adicione um evento de envio ao formulário
    $('#formulario-contato1').submit(function(event) {
      // Obtém o valor do campo de telefone
      let telefone = $('#telefone1').val();

      // Remove os caracteres indesejados (espaços, parênteses e traço)
      let numeros = telefone.replace(/\D/g, '');

      // Atualiza o valor do campo de telefone com apenas os dígitos
      $('#telefone1').val(numeros);
    });
  });

  // Aguarde o documento ser carregado
$(document).ready(function() {
    // Selecione o campo de entrada pelo ID e aplique a máscara
    $('#telefone2').mask('(00) 0000-00009');

    // Adicione um evento de envio ao formulário
    $('#formulario-contato2').submit(function(event) {
      // Obtém o valor do campo de telefone
      let telefone = $('#telefone2').val();

      // Remove os caracteres indesejados (espaços, parênteses e traço)
      let numeros = telefone.replace(/\D/g, '');

      // Atualiza o valor do campo de telefone com apenas os dígitos
      $('#telefone2').val(numeros);
    });
  });