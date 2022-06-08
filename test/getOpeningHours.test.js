const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('nao passando argumentos', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  test('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  test('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is ppen', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });

  test('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  test('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid.', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  test('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  test('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: The hour should represent a number', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });

  test('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: The minutes should represent a number', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });

  test('Para horas maiores que o devido lançar erro', () => {
    expect(() => getOpeningHours('Sunday', '14:00-AM')).toThrowError('The hour must be between 0 and 12');
  });

  test('Para minutos maiores que o devido lançar erro', () => {
    expect(() => getOpeningHours('Sunday', '09:80-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
