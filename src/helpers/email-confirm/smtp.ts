import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { portalUrl, smtpConfig } from '../../config';

export class EmailWorker {

	private readonly transporter: Transporter;

	constructor() {
		this.transporter = nodemailer.createTransport(
		// {
		// 	sendmail: true,
		// 	newline: 'unix',
		// 	path: '/usr/sbin/sendmail'
		// }
		smtpConfig
		);
	}

	async sendEmail(email, u, c) {
		console.log(email);
		await this.transporter.sendMail({
			from: 'ПрофТестиум',
			to: email,
			subject: 'Подтверждение регистрации на ПрофТестиум',
			html: `<h1>Здарова ебать! Твоя ссыл-очка на подтверждение:</h1> <br><a href="${portalUrl}/api/users/confirmRegistration?u=${u}&c=${c}"></a>`,
		});
	}
}