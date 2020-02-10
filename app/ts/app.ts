import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));
$('#importa-dados').click(controller.importaDados.bind(controller));
// document.querySelector('.form')
//     .addEventListener('submit', controller.adiciona.bind(controller));