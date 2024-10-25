const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res=await fetch(url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = documento.createElement('p')
    paragrafo.classList.add('graficos-conteiner__texto')
    paragrafo.innerHTML = `Você sabia que o mundo /
    tem <span>${dados.total_pessoas_mundo}</span> /
     de pessoas e que aproximadamente /
     <span>${dados.total_pessoas_conectadas}</span> estão /
     conectadas em alguma rede social e passam /
     em média <span>${dados.tempo_medio}</span> /
     horas conectadas.`
    console.log(paragrafo)
    const conteiner =document.getElementById('graficos-conteiner')
    conteiner.appendChild(paragrafo)
}
vizualizarInformacoesGlobais()
      