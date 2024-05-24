import cron from 'node-cron';
import nodemailer from 'nodemailer';

// user email data
// {
//   user: 'd2xlcojorrig6po3@ethereal.email',
//   pass: 'XW6cCPEnQdWTzh93n1',
//   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//   imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//   web: 'https://ethereal.email'
// }

// create a test account
// nodemailer.createTestAccount().then(account => {
//   console.log(account);
// })

let transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	secure: false,
	auth: {
		user: "d2xlcojorrig6po3@ethereal.email",
		pass: "XW6cCPEnQdWTzh93n1",
	},
});

cron.schedule('*/1 * * * *', async () => {
    const info = await transporter.sendMail({
        from: "vqc1909a@gmail.com",
        to: "vcquispe@avatar-global.com",
        subject: "Hello World",
        text: "hello world testing" 
    });
    console.log(info.messageId);

    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log(previewUrl);
});
