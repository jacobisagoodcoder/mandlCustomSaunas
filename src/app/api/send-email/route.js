import { Resend } from "resend";

const resend = new Resend(re_355sry9i_Q9RNw4D15iSE99AkNZrpTVjF);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json(); // Get form data

    const response = await resend.emails.send({
      from: "jacobvandyke194@gmail.com",
      to: "jacobvandyke194@gmail.com", 
      subject:"New Submission from Website",
      html: `<p>This works!</p>`,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
