const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);

    // chama function que verifica se peso ja foi postado
    if(verApostaExiste(peso)){
        alert("Alguém já apostou este peso, informe outro...");
        frm.inPeso.focus();
        return
    }
    
    // se houver dados em localStorage
    if(localStorage.getItem("melanciaNome")){
      // obtém o conteúdo ja salvo e acrescenta ";" + dados da aposta

      const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
      const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

      localStorage.setItem("melanciaNome", melanciaNome);
      localStorage.setItem("melanciaPeso", melanciaPeso);
    }else{
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas();
    frm.reset();
    frm.inNome.focus();
})

const verApostaExiste = (peso) =>{
    if(localStorage.getItem("melanciaPeso")){
        const peso = localStorage.getItem("melanciaPeso").split(";");

        // O peso deve ser convertido em string, pois o vetor contém strings
        return peso.includes(peso.toString());
    }else{
        return false;
    }
}

const mostrarApostas = () =>{
    // se não há apostas armazenadas em localstorage
    if(!localStorage.getItem("melanciaNome")){
        // limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
        respLista.innerText = "";

        return;
    }

    // obtém o conteúdo das variáveis salvas no localStorage, separando-as
    // em elementos de vetor a cada ocorrência do ";"

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = "";

    // repetição para percorrer todos os elementos do vetor
    for(let i = 0; i < nomes.length; i++){
        // concatena em linhas os nomes dos apostadores e suas apostas
        linhas += nomes[i] + "-" + pesos[i] + "gr \n";

    }

        //exibe as linhas (altera o conteúdo do elemento respLista)
        respLista.innerText = linhas;
}

// chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () =>{
    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostas cadastradas");
        return;
    }

    // solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

    // se não informou, retorna
    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return
    }

    // obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    //valor inicial para o vencedor é o da primeira aposta

    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    // percorre as apostas
    for(let i = 1; i < nomes.length; i++){
        // calcula a diferença de peso do "vencendor" e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(Number(pesos[i] - pesoCorreto));

        if(difAposta < difVencedor){
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }

    // monta mensagem com dados do vencedor
    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
    mensagem += "\n----------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "gr";
    alert(mensagem);
})

frm.btLimpar.addEventListener("click", () =>{
    if(confirm("Confirma exclusão de todas as apostas?")){
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");
        mostrarApostas()
    }
})