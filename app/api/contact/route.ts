import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json()

  if (!email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const subject = phone
    ? `[Dev Portfolio] New message from ${name}, phone: ${phone}`
    : `[Dev Portfolio] New message from ${name}`

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.MAIL_TO!,
      subject,
      text: message,
      replyTo: email,
    })

    if (data.error) throw new Error(String(data.error))

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Mail send failed:', err.message)
    return NextResponse.json({ error: `Mail send failed: ${err}` }, { status: 500 })
  }
}
