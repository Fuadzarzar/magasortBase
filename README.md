
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oukn3npvba44g56odc7a.png)

#

#### Uma Landing Page que gera seis dezenas da MegaSena.


## Como gerar

1. Clique no botão Gerar e anote os números


## Stack utilizada

**Front-end:** HTML, CSS

**Back-end:** JavaScript


## Funcionalidades da Página

- Gerar números aleatórios
- Números em ordem crescente

## Função para gerar números aleatórios

``` 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
```
###### **min** = menor número
###### **max** = maior número

## Gerador de números desejados, sem repetições

``` 
 numbers = [];
    num = 6;

    for (index = 0; numbers.length < num; index++) {
      gerador = getRandomInt(1, 61);
      numbers.push(gerador);

      let noRepeat = numbers.filter(function (elem, num, self) {
        return num === self.indexOf(elem);
      });
  
    }
```
###### **num** = quantidade de números desejados
###### **numbers = []** = Array armazena os números

## 

## Números gerados em ordem crescente ou decrescente

``` 
 noRepeat.sort(function (a, b) {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        });
```

###### **(a, b)** = ordem crescente
###### **(b, a)** = ordem decrescente



