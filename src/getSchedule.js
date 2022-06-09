const data = require('../data/zoo_data');

const { species } = data;

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday'];

const allSchedule = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

// const wantedAnimal = [];
function getSchedule(scheduleTarget) {
  if (data.species.some(({ name }) => name === scheduleTarget)) {
    return species.find((eachSpecies) => eachSpecies.name === scheduleTarget).availability;
  }
  if (scheduleTarget === undefined || !weekDays.some((weekDay) => weekDay === scheduleTarget)) {
    return allSchedule;
  }

  if (Object.keys(allSchedule).includes(scheduleTarget)) {
    const result = {};
    const newKey = scheduleTarget;
    result[newKey] = allSchedule[scheduleTarget];
    return result;
  }
  // Retorne os animais disponíveis no dia, caso o parâmetro da função seja apenas um dia da semana;
}

console.log(getSchedule('Tuesday'));
// Para isso:
// Crie um objeto e adicione todos os dias da semana como chave;
// Os valores de cada dia da semana deve ser um objeto, possuindo as chaves officeHour e exhibition:

// officeHour deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;

// exhibition deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.

module.exports = getSchedule;
