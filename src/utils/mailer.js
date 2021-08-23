const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.aol.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

async function verify() {
  const connection = await transporter.verify();

  if (connection) {
    console.log("Server ready to take messages");
  }
}

async function welcome({ email, name }) {
  await transporter.sendMail({
    from: `"${process.env.MAILER_USERNAME}" <${process.env.MAILER_USER}>`,
    to: email,
    subject: "Welcome",
    html: `
      <div>
        <h1>Hello ${name}</h1>
        <p>Welcome to our CROSSFITAPP community!!!</p>
        <a href="http://localhost:3000">Go to CROSSFITAPP here!</a>
        <p></p>
        <img width="500" height="300" src="https://res.cloudinary.com/mashcol/image/upload/v1626845873/crossfitapp-profileImages/crossfitapp-community_jgx63m.jpg" />
      </div>
    `,
  });
}

async function welcomeAdmin({ email, name, password }) {
  await transporter.sendMail({
    from: `"${process.env.MAILER_USERNAME}" <${process.env.MAILER_USER}>`,
    to: email,
    subject: "Welcome to our Team",
    html: `
      <div>
        <h1>Hello ${name}</h1>
        <br/>
        <p>Welcome to our CROSSFITAPP community!, you have been registered as administrator in the app, your access password is your DNI number.</p>
        <br/>
        <a href="http://localhost:3000">Go to CROSSFITAPP here!</a>
        <br/>
        <br/>
        <img width="500" height="300" src="https://res.cloudinary.com/mashcol/image/upload/v1626845873/crossfitapp-profileImages/crossfitapp-community_jgx63m.jpg" />
      </div>
    `,
  });
}

module.exports = {
  transporter,
  verify,
  welcome,
  welcomeAdmin,
};
