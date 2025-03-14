# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
**a) A saída será undefined seguido de erro ==> correta**

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**R: A alternativa correta é a letra a, a justificativa para este resultado é porque ao considerar a nomeclatura "var x " não há um valor inicial oque resulta a expressão resultante "undefined" porém para a nomeclatura "let y" se usa o TDZ (Temporal Dead Zone) oque se torna necessário que seja declarada a variante "let" para poder ser utilizada o "console.log" em seguida.**

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

**a) Substituir if (a || b === 0) por if (a === 0 || b === 0)**

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

**R: A alternativa correta para a questão 2 é a letra a, pois (a || b === 0) não consegue verificar se o a ou b é igual a "0" conforme a expectativa. Para fazer com que o código funcione precisamos relacionar (a === 0 || b === 0) para que prossiga com a verificação dos números.**
______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

**b) O código imprime 200.**

c) O código imprime 50.

d) O código gera um erro.

**R: A alternativa correta é a letra b, esse resultado se dá por conta que o switch somente para com a expressão "break" sendo pedido pelo console.log o resultado de "eletronicos" porém o próprio codigo não tem uma parada correta para que haja este resultado.**
______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

**d) 24**

**R: A saída desse console.log é igual a 24 porque sua lógica é igual é feita da seguinta maneira, em map estamos multiplicando todos os números da array "números" em dois fazendo com que seu primeiro resultado de lógica [2, 4, 6, 8, 10], já em filter está nos dizendo que ele quer somente filtrar os números da lista atual acima de 5 ficando assim [6, 8, 10]. A última parte da lógica do resultado é a soma destes termos (reduce) sendo 6+ 8+ 10 = 24.**
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

**c) ["banana", "abacaxi", "manga", "laranja"]**

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**R: A alternativa correta é a letra d, isso ocorre pois splice funciona da seguinte maneira ao substituir elementos da primeira array. A splice funciona da seguinte maneira dentro do código:** 
**lista.splice("qual posição que irá começar a substituição", "quantos itens serão retirados", "item 1 implementado", "item 2 implementado"), lembrando que devemos contar o primeiro item da lista como "0" na lógica de programação.**
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


**a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.**

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**R: A alternativa correta é a letra a, as duas afirmações estão corretas trazendo assim que a forma que a linguagem Java Script usa para herdar é a "extends" que é utilizada em outras classes para não haver uma repetição de código e consequentemente a poluição do código.**
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

**a) I e II são verdadeiras.**

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**R: I) A classe Funcionario herda de pessoas os atributos que quer sem ter que repetir o código a partir da função "extends". Já II) Temos `apresentar()` declarado na classe Pessoa sendo posteriormente "puxado" com a função "super" em Funcionario que dá suporte as informações requerida em seu console.log.**    
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

**b) A asserção é verdadeira e a razão é falsa.**

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**R: Asserção está correta por apresentar como por exemplo na linguagem Java Script as classes (métodos), fazendo com que seja possível que uma classe por exemplo corresponda a várias outras classes herdadas utilizando a classe mãe. Já a razão está incorreta pelo Java Script não é possível suportar mais de um método igual em seu código, causando erro ao retornar somente o ultimo termo declarado e não os dois de mesmo nome.** 
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
**R: **
```javascript
function somaArray(numeros) {
var soma = 0;//Adicionando a váriavel para que se inicie a soma dos itens da lista.
//Na linguagem java se colocamos size se refere ao tamanho, porém estamos falando de uma array então mudamos para length.
    for (i = 0; i < numeros.lenght; i++) {
        soma = 2*numeros[i];//Colocando "+=" para que a soma não pegue somente um valor na lista, acumulando os termos.
    }
    return soma;// Retorna o valor de soma.
}
console.log(somaArray([1, 2, 3, 4]));// Imprime o resultado da função somaArray com os números escolhidos no console.
```

______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

 **R: A herança neste contexto está compreendida quando ao invês de criar novos atributos para cada classe podemos reutiliza-las a partir de uma classe mãe utilizando o termo "extends" construindo sua base a partir de outra base como o exemplo do código abaixo em Livro. Também temos a alteração em calcularDesconto para diferenciar em relação ao desconto utilizado no livro, alterando de 10% para 20%.**
```javascript
//Criando a classe de produto.
class Produto {
    constructor (nome, preco){// Identificando atributos na classe para possíveis calculos.
    this.nome = nome;
    this.preco = preco;
}
    calcularDesconto () {
        return this.preco - (this.preco * 0.10)// Calculo de desconto do produto de 10%.
    }
}

class Livro extends Produto {//Utilizando a base de código de Produto
    constructor (nome, preco) {
        super (nome, preco);
    }

    calcularDesconto () {
        return this.preco - (this.preco * 0.20);//Alteramos o valor do desconto para 20%.
    }
}
//Variaveis para impressão.
let produto1 = new Produto ("Garrafa", 7);
let livro1 = new Livro ("Veias abertas da América Látina", 89.90);

console.log(`${produto1.nome}, está na promoção está saindo ${produto1.calcularDesconto()}!`);//Retorno esperado Garrafa e 6.3.
console.log(`${livro1.nome}, está na promoção estando ${livro1.calcularDesconto()}!`);//Retorno esperado Veias abertas da América Látina e 71.92. 
