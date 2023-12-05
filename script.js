// Váriaveis
let rankWins= rankedMatch(5, 32);
console.log(rankWins)
let rankTier = "";

// Estrutura de Controle de Nível
if (rankWins < 10) {
    rankTier = "Ferro";
} else if (rankWins > 11 && rankWins < 20) {
    rankTier = "Bronze";
} else if (rankWins > 21 && rankWins < 50) {
    rankTier = "Prata";
} else if (rankWins > 51 && rankWins < 80) {
    rankTier = "Ouro";
} else if (rankWins > 81 && rankWins < 90) {
    rankTier = "Diamante";
} else if (rankWins > 91 && rankWins < 100) {
    rankTier = "Lendário";
} else if (rankWins >= 101) {
    rankTier = "Imortal";
}

// Output - Mensagem de sáida
console.log(`O Herói tem saldo de ${rankWins} está no nível de ${rankTier}`);

// Função Calculadora
function rankedMatch(losses, wins) {
    result = wins - losses;
    return result;
};