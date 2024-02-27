function adicionarItem(){
    var entrada = document.getElementById("entrada").value.replace(/\:/g, '.');
    var saida = document.getElementById("saida").value.replace(/\:/g, '.');
    var nome = document.getElementById("nome").value
    var carga_horario = document.getElementById("carga_horario").value.replace(/\:/g, '.');
    var valor_hora = document.getElementById("valor_hora").value.replace(/\:/g, '.');

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
    horas = (horasTrabalhadas - carga_horario )* (-1)

    console.log(celulatotal.value)
    if  (horasTrabalhadas < carga_horario){
        celulaHorasfaltantes.innerHTML = horasTrabalhadas - carga_horario;
        celulatotal.innerHTML =  (horas*valor_hora - carga_horario * valor_hora)*(-1);
        celuladesconto.innerHTML = horas * valor_hora;
        celularHorasextras.innerHTML = 0;
    }else if (horasTrabalhadas > carga_horario){
        celularHorasextras.innerHTML = horasTrabalhadas - carga_horario;
        celulatotal.innerHTML = horas * (valor_hora / 2) + horasTrabalhadas * valor_hora ;
        celulavalorhoraextra.innerHTML = (horasTrabalhadas - carga_horario) * (valor_hora / 2);
        celulaHorasfaltantes.innerHTML = 0;
        celuladesconto.innerHTML = 0;
    }else{
        celularHorasextras.innerHTML = 0;
        celulaHorasfaltantes.innerHTML = 0;
        celuladesconto.innerHTML = 0;
        celulatotal.innerHTML = horasTrabalhadas * valor_hora;
    }
    
    

    
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