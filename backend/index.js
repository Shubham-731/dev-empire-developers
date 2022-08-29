const express = require("express");
const nodemailer = require("nodemailer");
const axios = require("axios");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const fs = require("fs");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv/config");

const PORT = process.env.PORT || 5500;

// Nodemailer credentials
const receiverEmail = process.env.RECEIVER_EMAIL;
const receiverPass = process.env.RECEIVER_PASS;

// Paramantra credentials
const pmApiKey = process.env.PARAMANTRA_APIKEY;
const pmAuth = process.env.PARAMANTRA_AUTH;

const sheetId = "1-IK0RNQKMkcM13JoVcSxzWfiLkL_XesN-lp_mIMoNzM";
const spreadsheetCredentials = JSON.parse(
  fs.readFileSync("empire-developers-984450bba104.json")
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/brochures", express.static("brochures"));
/* app.use(express.static(path.join(__dirname, "../frontend/build")));

// Serving static files
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
}); */

// Enquire route
app.post("/enquire", async (req, res) => {
  const { name, phone, email, roomPreference, siteVisit, source } = req.body;

  try {
    // Random query id
    const queryid = crypto.randomUUID();

    // Enquiry date
    const date = new Date();
    const enquiryDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    // PARAMANTRA
    const pmURL =
      "https://cloud.paramantra.com/paramantra/api/data/new/format/json";

    const pmReqConfig = {
      method: "post",
      url: pmURL,
      headers: {
        "X-API-KEY": pmApiKey,
        "ACTION-ON": "K1tE5",
        Authorization: `Basic ${pmAuth}`,
        "Content-Type": "multipart/form-data",
      },
      data: {
        phonefax: phone, // From client
        rep_id: "empiresupport",
        channel_id: "Website",
        email: email, // From client
        f_name: name, // From client
        subject: "Lead from Website",
        queryid: queryid, // Computer generated
        notes: `I'm interested in ${roomPreference}`, // From client
      },
    };

    const crmResponse = await axios(pmReqConfig);
    const crmData = {
      crmStatus: crmResponse.data[0].status,
      crmMsg: crmResponse.data[0].message,
    };

    if (crmData.crmStatus === 409) {
      return res
        .status(409)
        .json({ status: "error", msg: "Phone number already registered!" });
    } else if (crmData.crmStatus === 200) {
      // NODEMAILER
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: receiverEmail,
          pass: receiverPass,
        },
      });

      await transporter.sendMail({
        from: email,
        to: receiverEmail,
        subject: `Enquiry from ${name}`,
        html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Source:</b> ${source}</p>
        <p><b>Room Preference:</b> ${roomPreference}</p>
        <p><b>Interested to visit site:</b> ${siteVisit}</p>
        `,
      });

      // GOOGLE SPREADSHEET
      const doc = new GoogleSpreadsheet(sheetId);

      await doc.useServiceAccountAuth({
        client_email: spreadsheetCredentials.client_email,
        private_key: spreadsheetCredentials.private_key,
      });
      await doc.loadInfo();

      let sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        Name: name,
        Phone: phone,
        Email: email,
        "Room Preference": roomPreference,
        "Site Visit": siteVisit,
        Source: source,
        Date: enquiryDate,
      });

      res
        .status(200)
        .json({ status: "ok", msg: "Enquiry submitted successfully!" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error occured. Try again!",
    });
    console.log(error);
  }
});

// Contact route
app.post("/contact", async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: receiverEmail,
        pass: receiverPass,
      },
    });

    await transporter.sendMail({
      from: email,
      to: receiverEmail,
      subject: `Enquiry from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        `,
    });

    res.status(200).json({ status: "ok", msg: "Enquiry submitted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: error.msg });
  }
});

// Brochure route
app.post("/brochure", async (req, res) => {
  const { name, phone } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: receiverEmail,
        pass: receiverPass,
      },
    });

    await transporter.sendMail({
      from: "empiredevelopersclients@gmail.com",
      to: receiverEmail,
      subject: `Enquiry from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        `,
    });

    res.status(200).json({ status: "ok", msg: "Send brochure!" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", msg: "Some went wrong. Try again!" });
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
