import type { ChatMessage } from "../lib/types";

export const sendMessage = async (messages: ChatMessage[]) => {
  const res = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    const errorText = await res.text();

    throw {
      response: {
        status: res.status,
        message: errorText,
      },
    };
  }

  const data = await res.json();
  return data;
};


// Проверка обработки ошибки
// export const sendMessage = async (messages: ChatMessage[]) => {
//   throw {
//     response: {
//       status: 500,
//       message: "Fake server error (testing)",
//     },
//   };
// };