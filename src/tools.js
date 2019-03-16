const date = new Date();
export const formattedDate = date.toLocaleDateString('pt-br', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const hour = date.getHours();
const minute = date.getMinutes();

export const formattedHour = `${hour}:${minute}`;
