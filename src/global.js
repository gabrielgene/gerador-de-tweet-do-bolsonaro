const date = new Date();
const formattedDate = date
  .toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
  .replace(/ /g, ' de ');

const hour = date.getHours();
const minute = date.getMinutes();
const ampm = hour >= 12 ? 'PM' : 'AM';

const formattedHour = `${hour}:${minute} ${ampm}`;
export default {
  user: {
    avatar: 'images/bolso.jpg',
    fullName: 'Jair M. Bolsonaro',
    twitter: '@jairbolsonaro',
  },
  datetime: `${formattedHour} - ${formattedDate}`,
  retweets: 65.102,
  likes: 157.243,
  comments: 37,
  avatars: [
    'images/avatar-1.jpg',
    'images/avatar-2.jpg',
    'images/avatar-3.jpg',
    'images/avatar-4.jpg',
    'images/avatar-5.jpg',
    'images/avatar-6.jpg',
    'images/avatar-7.jpg',
    'images/avatar-8.jpg',
  ],
};
