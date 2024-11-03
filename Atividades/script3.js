const consultarCEP = async () => {
    const cep = document.getElementById('cep').value.trim();
    const resultado = document.getElementById('resultado');

    if (cep.length !== 8) {
        resultado.innerHTML = '<p>CEP inválido. Por favor, digite um CEP válido de 8 dígitos.</p>';
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            resultado.innerHTML = '<p>CEP não encontrado.</p>';
        } else {
            resultado.innerHTML = `
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        }
    } catch (error) {
        resultado.innerHTML = '<p>Erro ao consultar o CEP. Tente novamente mais tarde.</p>';
    }
};

document.getElementById('consultar').addEventListener('click', consultarCEP);