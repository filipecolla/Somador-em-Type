import Somador from "./soma";
import Subtrador from "./subtracao";
import Divisor from "./duvisao";
import Multiplicador from "./multiplicacao";

const divisao = new Divisor();
const Subtracao = new Subtrador();
const soma = new Somador();
const multiplica = new Multiplicador();

const resultadoDivisao = divisao.calcular(22, 33);
const resultadoSubtracao = Subtracao.calcular(22, 33);
const resultadoSoma = soma.calcular(22, 33);
const resultadoMultiplicacao = multiplica.calcular(22, 33);

console.log(resultadoDivisao);
console.log(resultadoSubtracao);
console.log(resultadoSoma);
console.log(resultadoMultiplicacao);