const { handler } = require('./index');

const event = {
  body: JSON.stringify({
    name: 'Jehyeon Lee',
    email: 'jehyeonlee27@gmail.com',
    subject: 'Testing Local Lambda',
    message: 'Hello! This is a test email from local testing 🎯'
  })
};

handler(event)
  .then((response) => {
    console.log('Lambda Response:', response);
  })
  .catch((error) => {
    console.error('Lambda Error:', error);
  });
