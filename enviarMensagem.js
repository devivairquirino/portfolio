
function enviarWhatsapp (event ){
    event.preventDefault;
    const nome= document.querySelector("#nome").value;
    const mensagem= document.querySelector("#mensagem").value;
    const telefone= '5514981934022';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;

    const mensagemFormatada = encodeURIComponent(texto);
    
    const url=`https://wa.me/${telefone}?text=${texto}`;

    window.open(url, "_blank");
    
}