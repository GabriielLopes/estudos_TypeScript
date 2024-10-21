// RECORD
const obj1: Record<string, string | number> = {
  nome: 'Gabriel',
  sobrenome: 'Lopes',
  idade: 24
}
console.log(obj1)

type PessoaProtocol = {
  nome?: string,
  sobrenome?: string,
  idade?: number,
}

//  REQUIRED
// ELE TRANSFORMA TUDO QUE FOR OPCIONAL EM OBRIGATÓRIO
type PessoaRequired = Required<PessoaProtocol>;

// PARTIAL
// ELE TRANSFORMA TUDO QUE FOR OBRIGATÓRIO EM OPCIONAL
type PessoaPartial = Partial<PessoaProtocol>;

// READONLY
// ELE TRANFORMA TUDO EM READONLY
type PessoaReadOnly = Readonly<PessoaRequired>;

// PICK
// PERMITE QUE VOCÊ ESCOLHA OQUE QUER UTILIZAR
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>

const obj2: PessoaProtocol = {
  nome: 'Gabriel',
  sobrenome: 'Lopes',
  idade: 24,
};

console.log(obj1, obj2)

// EXTRACT E EXCLUDE

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // Irá computar os tipos que não estão em CDE
type TipoExtract = Extract<ABC,CDE>; // Irá computar os tipos que estão em ABC que podem ser atribuidos ao CDE

type AccountMongo = {
  _id: string,
  nome: string,
  idade: number,
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string
};

const accountMongo: AccountMongo = {
  _id: 'adasdasdasdasdsa',
  nome: 'Gabriel',
  idade: 25,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData} = accountMongo;
  return {...accountData, id: _id};
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// MODULE MODE
export default 1;
