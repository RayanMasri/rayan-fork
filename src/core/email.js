const nodemailer = require("nodemailer");
async function setupEmail(emailConfig) {
  // Create a transporter object using the emailConfig provided
  let transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: {
      user: emailConfig.auth.user,
      pass: emailConfig.auth.pass,
    },
  });

  // Verify the transporter object is valid and can send emails
  await transporter.verify();

  return transporter;
}
async function sendEmail({ emailConfig, template, ...data }) {
  // Use the emailConfig to setup the transporter
  let transporter = nodemailer.createTransport(emailConfig);

  // Use the emailConfig and html to send the email
  await transporter.sendMail({
    from: emailConfig.auth.user,
    to: data.to,
    subject: data.subject,
    html: template(data),
  });
}

/* 
export async function sendEmail(transport, params) {
  return await new Promise((resolve, reject) => {
    transport.sendMail(params, function (error, info) {
      if (error === null) {
        console.log("error=", error);
        resolve(false);
      } else {
        console.log(info);
        resolve(true);
      }
    });
  });
} */
/* 
export async function sendEmailVerify(transport) {
  return await new Promise((resolve, reject) => {
    transport.sendMail(getVerifyEmail, function (error, info) {
      if (error === null) {
        console.log("error=", error);
        resolve(false);
      } else {
        console.log(info);
        resolve(true);
      }
    });
  });
}

export async function sendEmailInvoice(transport) {
  return await new Promise((resolve, reject) => {
    transport.sendMail(getEmailInvoiceTemplate, function (error, info) {
      if (error === null) {
        console.log("error=", error);
        resolve(false);
      } else {
        console.log(info);
        resolve(true);
      }
    });
  });
}

export async function sendEmailReset(transport) {
  return await new Promise((resolve, reject) => {
    transport.sendMail(getResetEmail, function (error, info) {
      if (error === null) {
        console.log("error=", error);
        resolve(false);
      } else {
        console.log(info);
        resolve(true);
      }
    });
  });
} */

module.exports = {
  setupEmail,
  sendEmail,
};
