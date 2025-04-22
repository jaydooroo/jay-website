const AWS = require('aws-sdk');

// Configure SES region
const ses = new AWS.SES({ region: 'us-east-1' });

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { name, email, subject, message } = body;

    const emailParams = {
      Destination: {
        ToAddresses: ['dlwpgus612@gmail.com'], // Change to your receiving email
      },
      Message: {
        Body: {
          Text: {
            Data: `You received a message from your website contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        },
        Subject: {
          Data: `Website Contact: ${subject}`,
        },
      },
      Source: 'dlwpgus612@gmail.com', // Must be verified in SES (in sandbox mode, both sender & recipient must be)
    };

    await ses.sendEmail(emailParams).promise();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Lambda SES Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};
