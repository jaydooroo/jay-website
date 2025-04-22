const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

exports.handler = async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // ✅ or use "https://www.jehyeonlee.net"
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // ✅ Handle CORS preflight request
  if (event.requestContext?.http?.method === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "", // no content needed
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    const params = {
      Destination: {
        ToAddresses: ['dlwpgus612@gmail.com'],
      },
      Message: {
        Body: {
          Text: {
            Data: `Message from ${name} <${email}>:\n\n${message}`,
          },
        },
        Subject: {
          Data: `Contact Form: ${subject}`,
        },
      },
      Source: 'dlwpgus612@gmail.com',
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        message: "Failed to send email",
        error: error.message,
      }),
    };
  }
};
