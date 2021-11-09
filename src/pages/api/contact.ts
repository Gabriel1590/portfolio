import { NextApiRequest, NextApiResponse } from 'next';
import * as Yup from 'yup';
import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.PASS_SENDER,
  },
});

type Data = {
  message: string;
};

const sendEmail = (msg: Options) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email(),
      message: Yup.string().required(),
    });

    const data = await schema.validate(req.body);

    const msg = {
      to: process.env.EMAIL_RECEIVER,
      from: process.env.EMAIL_SENDER,
      subject: `Portafolio Contact: ${data.name}`,
      text: `A message from ${data.name}, email ${data.email} \n\n ${data.message}`,
    };

    await sendEmail(msg);

    res.status(200).json({ message: 'Submission sent successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Submission failed to be sent.' });
  }
};

export default handler;
