# Calculadora de Partidas Rankeadas

Este código em JavaScript foi desenvolvido como parte do Bootcamp Potências Tech iFood e é projetado para calcular o nível de um herói com base no saldo de vitórias e derrotas. 

### Variáveis
- `rankWins`: Armazena o saldo de vitórias, calculado pela função `rankedMatch`.
- `rankTier`: Armazena o nível do herói, determinado pelas condições na estrutura de controle.

### Função Calculadora
- `rankedMatch(losses, wins)`: Uma função que calcula o saldo de vitórias subtraindo as derrotas (`losses`) das vitórias (`wins`). O resultado é retornado.

### Estrutura de Controle de Nível
- A estrutura `if-else` determina o nível do herói com base no saldo de vitórias (`rankWins`) de acordo com as regras propostas no desafio:

  - Se vitórias for menor do que 10 = Ferro
  - Se vitórias for entre 11 e 20 = Bronze
  - Se vitórias for entre 21 e 50 = Prata
  - Se vitórias for entre 51 e 80 = Ouro
  - Se vitórias for entre 81 e 90 = Diamante
  - Se vitórias for entre 91 e 100= Lendário
  - Se vitórias for maior ou igual a 101 = Imortal

### Output
- A mensagem de saída exibe o saldo de vitórias e o nível do herói.
