import { sendMail } from '@/app/lib/mail';
export const send = async () => {
  await sendMail({
    to: 'gamzans@gmail.com',
    name: 'Nikita',
    subject: 'Test mail',
    body: `<h1>HIIII</h1>`,
  });
};
