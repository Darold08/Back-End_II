export function validaNome(nome) {
    const regexNome = /^[A-Za-zÀ-ÿ\s\-']+$/;
    const isvalid = nome.lenght >= 2 && regexNome.test(nome);
    return isvalid ;
}

export function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalid = regexEmail.test(email);
    return isvalid;
}

export function validaUsuario(nome, email) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    
    const usuarioValido = nomeValido && emailValido;

    if (usuarioValido) {
        return {status: true, mensagem: ''};
    } else {
        return {status: false, mensagem: 'Nome e/ou Email inválido(s).'};
    }
}


export function validaTelefone(telefone) {
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return typeof telefone === 'string' && regexTelefone.test(telefone);
}
