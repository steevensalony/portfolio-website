// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  message?: string;
  botField?: string; // simple spam trap
};

// Very light validation (friendly errors)
function validate(body: Body) {
  const errors: string[] = [];
  if (!body.name || body.name.trim().length < 2) errors.push("Name is required.");
  if (!body.email || !body.email.includes("@")) errors.push("Valid email is required.");
  if (!body.message || body.message.trim().length < 10)
    errors.push("Message should be at least 10 characters.");
  if (body.botField && body.botField.trim().length > 0)
    errors.push("Spam detected.");
  return errors;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const errors = validate(body);
    if (errors.length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    // For now, we just log to the server console so you can see it works.
    // Later, we'll email this to you.
    console.log("CONTACT MESSAGE:", {
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, errors: ["Something went wrong."] },
      { status: 500 }
    );
  }
}
