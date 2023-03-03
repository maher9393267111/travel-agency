import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
 
  //process.env.MAIL_HOST,
  //port: 25,
  port: 465,
  host: 'smtp.gmail.com',
  secure: true, // use SSL
  auth: {
    // user: process.env.MAIL_USER,
    // pass: process.env.MAIL_PASS,
             user: 'gomemahero@gmail.com',
         pass:'cplmletrtixvvpid'

  },
});


async function sendEmail({ name, email }) {
  const emailOptions = {
    form: `gomemahero@gmail.com`,
    to: `${name} ${email}`,
    subject: 'Demo Email',
    html: `<h2>Email sent from a Serverless Function</h2>`,
  };

  return transporter.sendMail(emailOptions);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('DATA-,' , req.body)
    const emailRes = await sendEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    }

    return res.status(400).json({ message: 'Error sending email' });
  }

  return res.status(400).json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}