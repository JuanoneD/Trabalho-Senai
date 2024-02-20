var entradagl;
var saidagl;
var dateglo;
function fordata(date){
    var options = {
        month :"short",
        day: "numeric",
        year: "numeric"
    };
    return date.tolocalstring("pt-BR",options)
}
function gamer(){
    var entrada = document.getElementById("entrada").value;
    var saida = document.getElementById("saida").value;
    var date = new Date();
    


    entradagl = entrada;
    saidagl = saida;
    dateglo = date;

    document.getElementById(confentrada).textContent = entrada;
    document.getElementById(confsaida).textContent = saida;
    document.getElementById(data).textContent = fordata(date);
}

function enviar(){
    var num = "112312312312312"
    var link ="https://wa.me/"+ num +"?text = Ponto registrado as "+ entradagl +"saida as "+ saidagl + "no dia "+ fordata(date);
    window.open(link,"_blank");
}