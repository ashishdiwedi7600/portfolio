import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- Wire up Resend here ---
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@ashishdiwedi.dev>',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Portfolio contact: ${subject || 'New message'} from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
