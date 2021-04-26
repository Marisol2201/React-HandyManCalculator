const { format: formatDate } = require('date-fns');

export const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString);

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};

formatDate(new Date(), 'dd MMM, yyyy HH:mm:ss') // returns local time
formatDate(getUTCDate(), 'dd MMM, yyyy HH:mm:ss') // returns UTC time

// export const setDate = (time) => {
//     const dateTime = new Date(time);
  
//     const date = dateTime.getDate();
//     const month = dateTime.getMonth();
//     const year = dateTime.getFullYear();
//     const minutes = dateTime.getHours();
  
//     return `${date}/${month}/${year} ${minutes}`;
//   };
