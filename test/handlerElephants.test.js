// const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('count retorna a população de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  test('names retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  test('averageAge retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });

  test('location retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });

  test('popularity retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  test('availability retorna um array de quand é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  test('Não passando argumentos a função deve retornar undefined;', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });

  test('passando uma parametro não string retorna mensagem de erro', () => {
    const actual = handlerElephants(12);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
});
