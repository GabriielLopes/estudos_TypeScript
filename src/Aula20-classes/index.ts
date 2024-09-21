// versão longa
export class Empresa {
  // Atributos
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = []; // Inicializando o atributo diretamente
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome; // Inicializando o atributo pelo constructor
    this.cnpj = cnpj; // Inicializando o atributo pelo constructor
  }
  // Método
  public addNewColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public showColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
// Versão curta
export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {

  }
}

const empresa1 = new Empresa("Udemy", '11.111.111/0001-11');
const colaborador1 = new Colaborador('Gabriel', 'Lopes');
empresa1.addNewColaborador(colaborador1);
empresa1.showColaborador()
