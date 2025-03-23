import { Resend } from "resend";


const resend = new Resend("re_355sry9i_Q9RNw4D15iSE99AkNZrpTVjF");

export async function POST(req) {
  try {
    const { email, subject, message, fName, lName } = await req.json();

    const response = await resend.emails.send({
      from: "gradymandl@mandlcustomsaunas.com",
      to: "gradymandl@mandlcustomsaunas.com", 
      subject:"New Sauna Inquiry",
      html: `<p>First Name: ${fName} </p> <p>Last Name: ${lName} </p> <p>Email: ${email} </p> <p>Other notes: ${message}</p>`,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
