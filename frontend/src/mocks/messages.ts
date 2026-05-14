export type Message = {
  id: number;
  text: string;
  role: "user" | "bot";
};

export const messages: Message[] = [
  { id: 1, role: "user", text: "Привет! Как дела?" },
  { id: 2, role: "bot", text: "Привет! Всё отлично 😊 Чем помочь?" },

  { id: 3, role: "user", text: "Сделай мне чат на React" },
  { id: 4, role: "bot", text: "Конечно! Давай соберём UI шаг за шагом." },

  { id: 5, role: "user", text: "Что такое useState?" },
  { id: 6, role: "bot", text: "useState — это hook для хранения состояния в компоненте React." },

  { id: 7, role: "user", text: "А useEffect?" },
  { id: 8, role: "bot", text: "useEffect используется для побочных эффектов: fetch, timers, subscriptions." },

  { id: 9, role: "user", text: "Покажи пример useEffect" },
  {
    id: 10,
    role: "bot",
    text: "useEffect(() => { console.log('mounted'); }, []);"
  },

  { id: 11, role: "user", text: "Как работает map?" },
  {
    id: 12,
    role: "bot",
    text: "map() создаёт новый массив, преобразуя каждый элемент."
  },

  { id: 13, role: "user", text: "Покажи пример map" },
  {
    id: 14,
    role: "bot",
    text: "[1,2,3].map(n => n * 2) => [2,4,6]"
  },

  { id: 15, role: "user", text: "Как сделать чат?" },
  {
    id: 16,
    role: "bot",
    text: "Нужно: state для сообщений, input, и map() для рендера bubbles."
  },

  { id: 17, role: "user", text: "Что такое props?" },
  {
    id: 18,
    role: "bot",
    text: "Props — это способ передавать данные в компоненты React."
  },

  { id: 19, role: "user", text: "А state?" },
  {
    id: 20,
    role: "bot",
    text: "State — это внутренние данные компонента, которые могут изменяться."
  },

  { id: 21, role: "user", text: "Сделай UI как ChatGPT" },
  {
    id: 22,
    role: "bot",
    text: "Можно сделать bubbles, blur background, streaming text и auto-scroll."
  },

  { id: 23, role: "user", text: "Что такое TypeScript?" },
  {
    id: 24,
    role: "bot",
    text: "TypeScript — это надстройка над JavaScript с типами."
  },

  { id: 25, role: "user", text: "Покажи тип для массива" },
  {
    id: 26,
    role: "bot",
    text: "Message[] — это массив объектов Message."
  },

  { id: 27, role: "user", text: "Как сделать scroll вниз?" },
  {
    id: 28,
    role: "bot",
    text: "Используй ref + scrollIntoView() после обновления messages."
  },

  { id: 29, role: "user", text: "Спасибо!" },
  {
    id: 30,
    role: "bot",
    text: "Пожалуйста 😊 Удачи в изучении React!"
  },
];