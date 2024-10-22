type OpcaoDeVotacao = {
  numeroDeVotos: number;
  opcao: string;
};

export class VotacaoModel {
  private opcoesDeVotacao: OpcaoDeVotacao[] = [];
  private tituloVotacao: string;

  constructor(tituloVotacao: string) {
    this.tituloVotacao = tituloVotacao;
  }

  addOpcoesDeVotacao(opcaoDeVotacao: OpcaoDeVotacao): void {
    if (!opcaoDeVotacao) return;
    this.opcoesDeVotacao.push(opcaoDeVotacao);
  }

  votar(indexOpcaoVoto: number): void {
    if (!this.opcoesDeVotacao[indexOpcaoVoto]) return;
    this.opcoesDeVotacao[indexOpcaoVoto].numeroDeVotos += 1;
  }

  mostrarResultados(): void {
    console.log(this.tituloVotacao);
    for (const votos of this.opcoesDeVotacao) {
      console.log(votos.opcao + ' ' + votos.numeroDeVotos);
    }
  }
}

const votLingProgFav = new VotacaoModel('Qual sua linguagem de programação favorita?');

votLingProgFav.addOpcoesDeVotacao({ numeroDeVotos: 0, opcao: 'Java' });
votLingProgFav.addOpcoesDeVotacao({ numeroDeVotos: 0, opcao: 'JavaScript' });
votLingProgFav.addOpcoesDeVotacao({ numeroDeVotos: 0, opcao: 'C#' });

votLingProgFav.votar(0);
votLingProgFav.votar(0);
votLingProgFav.votar(1);
votLingProgFav.mostrarResultados();

const votCorFavorita = new VotacaoModel('Qual sua cor favorita?');

votCorFavorita.addOpcoesDeVotacao({ numeroDeVotos: 0, opcao: 'Vermelho' });
votCorFavorita.addOpcoesDeVotacao({ numeroDeVotos: 0, opcao: 'Verde' });
votCorFavorita.addOpcoesDeVotacao({ numeroDeVotos: 0, opcao: 'Azul' });
votCorFavorita.votar(0);
votCorFavorita.votar(0);
votCorFavorita.votar(1);
votCorFavorita.votar(2);
votCorFavorita.votar(2);
votCorFavorita.mostrarResultados()
