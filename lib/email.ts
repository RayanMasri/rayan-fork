import nodemailer from "nodemailer";

type HajarMailParameters = {
  HAJAR_MAIL_PARAMETERS: { name: string, host: string, port: string, secure: string, username: string, password: string }[]
};

interface HajarTransportArray {
  [key: string]: nodemailer.Transporter;
}

export function setup(params: HajarMailParameters) {
  let listTransport: HajarTransportArray = {};
  if (params && params.HAJAR_MAIL_PARAMETERS) {
    for (var i = 0; i < params.HAJAR_MAIL_PARAMETERS.length; i++) {
      let config = params.HAJAR_MAIL_PARAMETERS[i];
      const transporter = nodemailer.createTransport({
        //host: config.host, //replace with your email provider
        //port: config.port,
        //secure: config.secure,
        auth: {
          user: config.username,
          pass: config.password,
        },
      });
      listTransport[config.name] = transporter;
      listTransport[config.name].verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(`Server ${config.name} is ready to send mail`);
        }
      });
    }
  }
  return listTransport;
}

export function send(transport: nodemailer.Transporter, message: nodemailer.SendMailOptions) {
  if (transport) {
    transport.sendMail(message, (error, info) => {
      console.log(error);
      console.log(info);
    });
  }
}