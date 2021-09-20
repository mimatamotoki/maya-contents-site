import * as sendgrid from "@sendgrid/mail";

export class SendGridAPI {
  static sendMail(data: {
    to: string;
    from: string;
    subject: string;
    text: string;
  }) {
    sendgrid.setApiKey("YOUR API KEY");
    const msg = {
      to: data.to,
      from: data.from,
      subject: data.subject,
      text: data.text,
    };
    sendgrid
      .send(msg)
      .then((_) => {
        console.log("success to sendGrid");
      })
      .catch((error) => {
        console.log("failed to sendGrid");
        console.log(error);
      });
  }
}
