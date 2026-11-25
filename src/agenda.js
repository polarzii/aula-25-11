/* ===========================================================
   As funções que só devolvem, vindas do script.js da agenda.
   Iguais às antigas, só com export na frente.
   =========================================================== */

// formatarData('2026-10-28') → '28/10'
export function formatarData(data) {
    const partes = data.split('-');
    return partes[2] + '/' + partes[1];
}

// nomearTipo('apresentacao') → 'Apresentação'
export function nomearTipo(tipo) {
    if (tipo === 'prova') {
        return 'Prova';
    }
    if (tipo === 'trabalho') {
        return 'Trabalho';
    }
    return 'Apresentação';
}

// Uma lista nova, da data mais próxima para a mais distante.
export function ordenarPorData(entregas) {
    return entregas.toSorted((a, b) => a.data.localeCompare(b.data));
}

// Só as entregas que ainda não foram feitas.
export function filtrarPendentes(entregas) {
    return entregas.filter(entrega => entrega.feita === false);
}

// A entrega aparece com este filtro?
// passaNoFiltro({ tipo: 'prova' }, 'todos') → true
// passaNoFiltro({ tipo: 'prova' }, 'trabalho') → false
export function passaNoFiltro(entrega, tipo) {
    return tipo === 'todos' || entrega.tipo === tipo;
}

// A pendente com a data mais próxima, ou undefined se não houver.
export function encontrarProxima(entregas) {
    return ordenarPorData(filtrarPendentes(entregas))[0];
}

// montarTextoDaProxima(entregas) → 'Matemática — 28/10'
export function montarTextoDaProxima(entregas) {
    const proxima = encontrarProxima(entregas);
    if (proxima === undefined) {
        return 'Nada pendente';
    }
    return proxima.materia + ' — ' + formatarData(proxima.data);
}

export function calcularDiasAte(data, agora) {
    const dia = new Date(data + 'T00:00');
    const hoje = new Date(agora);
    hoje.setHours(0, 0, 0, 0);
    return Math.round((dia - hoje) / 86400000);
}

export function montarTextoDosDias(dias) {
    if (dias === 0) {
        return 'é hoje';
    }
    if (dias === 1) {
        return 'falta 1 dia';
    }
    if (dias > 1) {
        return `faltam ${dias} dias`;
    }
    if (dias === -1) {
        return 'passou há 1 dia';
    }
    return `passou há ${Math.abs(dias)} dias`;
}

