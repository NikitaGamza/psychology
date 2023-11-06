export const params = [
  {
    head: 'Формат работы',
    name: 'format',
    list: [
      {
        id: 'ochno',
        name: 'Очно',
        value: 'Очно',
      },
      {
        id: 'online',
        name: 'Онлайн',
        value: 'Онлайн',
      },
      {
        id: 'text',
        name: 'Переписка',
        value: 'Переписка',
      },
    ],
  },
  {
    head: 'Город',
    name: 'city',
    list: [
      { id: 'Moscow', name: 'Москва', value: 'Москва' },
      {
        id: 'StPetersburg',
        name: 'Санкт-Петербург',
        value: 'Санкт-Петербург',
      },
      {
        id: 'Izhevsk',
        name: 'Ижевск',
        value: 'Ижевск',
      },
      {
        id: 'Irkutsk',
        name: 'Иркутск',
        value: 'Иркутск',
      },
    ],
  },
  {
    head: 'Пол специалиста',
    name: 'sex',
    list: [
      {
        id: 'male',
        name: 'Мужчина',
        value: true,
      },
      {
        id: 'female',
        name: 'Женщина',
        value: false,
      },
    ],
  },
  {
    head: 'Опыт работы',
    name: 'experience',
    list: [
      {
        id: 10,
        name: 'Более 10 лет',
        value: 10,
      },
      {
        id: 5,
        name: 'Более 5 лет',
        value: 5,
      },
      {
        id: 3,
        name: 'Более 3 лет',
        value: 3,
      },
      {
        id: 2,
        name: 'Более 2 лет',
        value: 2,
      },
      {
        id: 1,
        name: 'Более 1 года',
        value: 1,
      },
    ],
  },
];
