export const params = [
  {
    head: 'Опыт работы',
    name: 'experience',
    type: 'radio',
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
  {
    head: 'Специализация',
    name: 'specialization',
    type: 'button',
    list: [
      {
        id: 1,
        name: 'Более 1 года',
        value: 1,
      },
    ],
  },
  {
    head: 'Методы и подходы',
    name: 'methods',
    type: 'checkbox',
    list: [
      {
        id: 'Coaching',
        name: 'Коучинг',
        value: 'Коучинг',
      },
      {
        id: 'Geshtalt',
        name: 'Гештальт-терапия',
        value: 'Гештальт-терапия',
      },
    ],
  },
  // {
  //   head: 'Формат работы',
  //   name: 'format',
  //   type: 'radio',
  //   list: [
  //     {
  //       id: 'ochno',
  //       name: 'Очно',
  //       value: 'Очно',
  //     },
  //     {
  //       id: 'online',
  //       name: 'Онлайн',
  //       value: 'Онлайн',
  //     },
  //     {
  //       id: 'text',
  //       name: 'Переписка',
  //       value: 'Переписка',
  //     },
  //   ],
  // },
  {
    head: 'Пол специалиста',
    name: 'sex',
    type: 'radio',
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
    head: 'Город',
    name: 'city',
    type: 'radio',
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
];
