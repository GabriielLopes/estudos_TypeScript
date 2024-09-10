function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}
const pessoa: {nome: string, sobrenome: string, exibirNome } = {
  nome: 'Gabriel',
  sobrenome: 'Lopes',

  exibirNome(): void {
    console.log(this.nome + this.sobrenome);
  }
}
semRetorno('teste', 'teste', 'teste', )
pessoa.exibirNome();

export { pessoa }
