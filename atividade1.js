let prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um numero: "))

let senha;
let tentativas = 0;
let senhaCorreta = "senha";

if (isNaN(numero)){
    console.log('Número digitado invalido, tente novamente!')
}
while(tentativas < 3) {
    senha = prompt('Digite a senha: ');
    console.log();
if (senha === senhaCorreta){
{
console.log('===== =====')
console.log('Soma \n', numero);
for(let i=1; i<=10; i++)
{
    console.log(numero + ' + ' + i + ' = ' + (numero * i))
}

console.log('===== =====')
console.log('Subtracao \n', numero);
for(let i=1; i<=10; i++)
{
    console.log(numero + ' - ' + i + ' = ' + (numero * i))
}

console.log('===== =====')
console.log('Multiplicacao \n', numero);
for(let i=1; i<=10; i++)
{
    console.log(numero + ' * ' + i + ' = ' + (numero * i))
}

console.log('===== =====');
console.log('Divisao\n', numero);
for(let i=1; i<=10; i++)
{
    console.log(numero + ' / ' + i + ' = ' + (numero * i))
}
console.log('===== =====');
}
break;
} else 
     tentativas++;
     console.log('Senha Invalida! Tentativas ' + tentativas + ' De 3')

if (tentativas === 3) {

    console.log('Número máximo de tentativas excedido. Acesso bloqueado. ');
    console.log();
}
}