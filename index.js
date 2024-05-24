import cron from 'node-cron';

// Run every minute
// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });

//* * * * * *
// 1st *: seconds (0-59)
// 2nd *: minutes (0-59)
// 3rd *: hours (0-23)
// 4th *: day of the month (1-31)
// 5th *: month (1-12)
// 6th *: day of the week (0-7) (0 or 7 is Sunday)

// Run every 5 seconds 
cron.schedule('*/5 * * * * *', () => {
  //database
  //fetch
  //api
  //process
  console.log('running a task every 5 seconds');
});

// Run at the 1st minute of every hour.
cron.schedule('1 * * * *', () => {
  console.log('running a task at the 1st minute of every hour');
})

// Run at 9:57 AM every day
cron.schedule('57 9 * * *', () => {
  console.log('running a task at 9:57 AM every day');
})

// Run at 9:57 AM on the last day of July
cron.schedule("57 9 31 7 *", () => {
  console.log('running a task at 9:57 AM on the last day of July');
});

// Run every 1-5 seconds of each minute, i mean five times in a minute
cron.schedule('1-5 * * * * *', () => {
  console.log('running a task every 1-5 seconds of each minute');
})

// Run at 1st, 30th, and 59th second of each minute
cron.schedule('1, 30, 59 * * * * *', () => {
  console.log('running a task at 1st, 30th, and 59th second of each minute');
})

// 0 0 * * * - Run at midnight every day 
// 30 18 * * * - Run at 6:30 PM every day
// 0 0 * * 0 - Run at midnight every Sunday
// 0 0 1 * * - Run at midnight on the first day of every month
// 0 0 1 1 * - Run at midnight on the first day of January
// 0 0 * * 1 - Run at midnight on Monday of every week
// 0 0 * * 1-5 - Run at midnight on weekdays
// 0 0 * * 6,7 - Run at midnight on weekends
// */15 * * * * - Run every 15 minutes 
// 0 */2 * * * - Run every 2 hours
// * */2 * * * - Run every minute of every 2 hours
// 0 9-17 * * * - Run every hour between 9 AM and 5 PM


