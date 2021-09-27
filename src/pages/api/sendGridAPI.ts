const sgMail = require("@sendgrid/mail");

export default async (req, res) => {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_INQUIRY_APIKEY);

  const { email, message, name } = req.body;

  const msg = {
    to: "maya.moto10094376@gmail.com",
    from: email,
    subject: name + "さんからお問合せがありました。",
    text: `
    名前：${name}さん
    メールアドレス：${email}
    内容：${message}
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("Error", error);
    res.status(400).send("Message not sent.");
  }
};
