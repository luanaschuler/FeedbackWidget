import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "72c0e1a913b3e0",
    pass: "8b8345b7d3eb5a"
  }
});

export class NodemailMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Luana Caroline <luanaschuler@gmail.com>',
      subject,
      html: body,
    });
  }
}