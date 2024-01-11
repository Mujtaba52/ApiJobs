function confirmationTemplate(
    {
        name,
    }) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume Distribution Confirmation</title>
        <style>
            /* Add your custom styles here */
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                color: #666;
            }
            .contact {
                margin-top: 20px;
            }
            .contact a {
                color: #007BFF;
                text-decoration: none;
            }
            .footer {
                margin-top: 20px;
                background-color: #f4f4f4;
                padding: 10px;
                text-align: center;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Resume Distribution Confirmation</h1>
            <p>Dear ${name},</p>
            <p>Our team has carefully reviewed your application and ensured that it has been shared with the relevant hiring managers. Your resume will now be considered for these opportunities.</p>
            <p>Please keep an eye on your email for any updates or interview requests from employers. It's essential to monitor your spam folder as well, just in case our emails end up there.</p>
            <p>If you have any questions or need further assistance, please don't hesitate to reach out to our support team at <a href="mailto:seek@jobss.com.au">seek@jobss.com.au</a>. We're here to help.</p>
            <p>Thank you for choosing our platform to assist you in your job search. We wish you the best of luck in your job application process!</p>
            <div class="contact">
                <p>Best regards,</p>
                <p><strong>Team Jobss.com.au</strong></p>
            </div>
        </div>
        <div class="footer">
            © 2024 Jobss.com.au. All rights reserved.
        </div>
    </body>
    </html>`;
};

module.exports = {confirmationTemplate}
