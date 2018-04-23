//Este jogo de batalha naval, que é jogado numa só linha de 7 células, o barco que o jogador vai ter que descobrir ocupa três espaços: célula 3, 4, 5
var parte1 = 3;
var parte2 = 4;
var parte3 = 5;

//O jogo inicia-se com zero jogadas e zero células (partes do barco) atingidas, logo o barco estar afundado é falso
var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

//enquanto o barco não tiver afundado, um ciclo irá correr. Este ciclo faz com que se numa jogada se o jogador escolher um número menor que 0 ou maior que sete, o programa não corre e envia um alerta a dizer que a jogada é inválida.
//se isso não acontecer, o programa continua e acrescenta uma unidade ao total de jogadas.
//se numa jogada, o número corresponder ao numero da parte1, parte 2 ou parte3, um aviso é enviado a dizer que o jogador atingiu uma parte do barco.
//quando as todas as partes forem atingidas, o navio terá afundado e um novo aviso indicará que o jogador acertou em todas as partes. Se tal não for verdadeiro, então uma aviso diz "falhaste" e o jogador volta a jogar, até que tenha atingido as três partes do barco.
while (foiAfundado == false) {

    jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");

    if (jogada < 1 || jogada > 7) {

        alert("Jogada inválida. Tenta de novo!");

    } else {

        totalJogadas = totalJogadas + 1;

        if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

            alert("Acertaste em mais uma parte!");

            atingidas = atingidas + 1;

            if (atingidas == 3) {

                foiAfundado = true;

                alert("Navio totalmente afundado!");

            }

        } else {

            alert("Falhaste...");

        }

    }

}
// Após a conclusão do jogo, é apresentada uma estatistica da pontaria do jogador.
var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " +
    "o que quer dizer que a tua pontaria foi de " + (3 / totalJogadas);

alert(estatistica);