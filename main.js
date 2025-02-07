const form = document.getElementById('form');
let linhas = '';

form.addEventListener('submit',function(e)
{
    e.preventDefault();

    const inputNomeForm = document.getElementById('Nome');
    const inputTellForm = document.getElementById('tell');

    let linha = '<tr>';
    linha += `<td>${inputNomeForm.value}</td>`;
    linha += `<td>${inputTellForm.value}</td>`;
    linha += `<td>${inputTellForm.value >= 9 ? 'Registrado' : 'Rejeitado'}</td>`;
    linha += '</tr>' ;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeForm.value = '';
    inputTellForm.value = '';
});