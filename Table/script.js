function adicionarItem(){
    var entrada = document.getElementById("entrada").value
    var saida = document.getElementById("saida").value
    var nome = document.getElementById("nome").value
    var carga_horario = document.getElementById("carga_horario").value
    var valor_hora = document.getElementById("valor_hora").value


    if (!nome || !entrada || !saida|| !carga_horario || !valor_hora){
        alert("Preencha o campo");
        return;
    }
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novalinha =tabela.insertRow(tabela.rows.length);
    var celulanome = novalinha.insertCell(0)
    var celulaentrada = novalinha.insertCell(1)
    var celulasaida =  novalinha.insertCell(2)
    var celulacargaHorario = novalinha.insertCell(3)
    var celulavalorhora = novalinha.insertCell(4)
    var celulaTempoTraba = novalinha.insertCell(5)
    var celulaHorasfaltantes = novalinha.insertCell(6)
    var celularHorasextras = novalinha.insertCell(7)
    var celuladesconto = novalinha.insertCell(8)
    var celulavalorhoraextra = novalinha.insertCell(9)
    var celulatotal = novalinha.insertCell(10)





    celulanome.innerHTML = nome;
    celulaentrada.innerHTML = entrada;
    celulasaida.innerHTML = saida;
    celulacargaHorario.innerHTML = carga_horario;
    celulavalorhora.innerHTML = valor_hora;
    horasTrabalhadas = Math.floor(saida) - Math.floor(entrada);
    celulaTempoTraba.innerHTML = horasTrabalhadas
    if  (horasTrabalhadas < carga_horario){
        celulaHorasfaltantes.innerHTML = horasTrabalhadas - carga_horario;
    }else{
        celulaHorasfaltantes.innerHTML = 0;
    }
    if (horasTrabalhadas > carga_horario){
        celularHorasextras.innerHTML = horasTrabalhadas - carga_horario;
    }else{
        celularHorasextras.innerHTML = 0;
    }
    celuladesconto.innerHTML = celulaHorasfaltantes * valor_hora;
    celulavalorhoraextra.innerHTML = celularHorasextras * (valor_hora/2)
    celulatotal.innerHTML = valor_hora * carga_horario - celuladesconto + celulavalorhora


    

    
    document.getElementById("nome").value="";
    document.getElementById("entrada").value="";
    document.getElementById("saida").value="";
    document.getElementById("carga_horario").value="";
    document.getElementById("valor_hora").value="";

}
function exportarParaExcel() {
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "Tabela_Pontos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, { sheet: "Tabela de Produtos" });
    XLSX.writeFile(wb, nomeArquivo);
}