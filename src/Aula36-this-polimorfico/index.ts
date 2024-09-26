// utilizando o This como tipo

export class Calculator {
  constructor(public number: number) {}

  add(number: number): this {
    this.number += number;
    return this;
  }

  sub(number: number): this {
    this.number -= number;
    return this;
  }

  div(number: number): this {
    this.number /= number;
    return this;
  }

  mult(number: number): this {
    this.number *= number;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pot(number: number): this {
    this.number **= number;
    return this;
  }
}

const calculator = new SubCalculator(10);

console.log(calculator.sub(5).mult(3).pot(2));

// BUILDER - GOF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log('enviando dados via ' + this.method);
  }
}

const request = new RequestBuilder();
request.setUrl('http://urlteste.com.br').setMethod('post').send();

