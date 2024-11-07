import historicoInflacao from '../dados/dados.js'


export const buscar = () => {
    return historicoInflacao;
}

export const buscarPorAno = () => {
    return historicoInflacao.filter(ipca => ipca.ano.includes(anoIpca));
};

export const buscarPorId = (id) => {
    const idIpca = parseInt(id);
    return historicoInflacao.find(ipca => ipca.id === idIpca);
}


