import { NextResponse } from "next/server";
import { Resend } from "resend";
import { categories } from "@/data/categories";

const categorySlugs = new Set(categories.map((c) => c.slug));

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.phone !== "string" ||
    typeof body.category !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !categorySlugs.has(body.category)
  ) {
    return NextResponse.json(
      { error: "Vul alle verplichte velden correct in." },
      { status: 400 },
    );
  }

  const { name, email, phone, category, message } = body as {
    name: string;
    email: string;
    phone: string;
    category: string;
    message: string;
  };

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.OFFERTE_TO_EMAIL;

  if (!apiKey || !toAddress) {
    console.error(
      "RESEND_API_KEY of OFFERTE_TO_EMAIL ontbreekt — e-mail niet verzonden.",
    );
    return NextResponse.json(
      { error: "Offertes ontvangen is momenteel niet beschikbaar." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const categoryLabel =
    categories.find((c) => c.slug === category)?.label ?? category;

  const { error } = await resend.emails.send({
    from: process.env.OFFERTE_FROM_EMAIL ?? "SolarMist <onboarding@resend.dev>",
    to: toAddress,
    replyTo: email,
    subject: `Nieuwe offerte-aanvraag: ${categoryLabel}`,
    text: [
      `Naam: ${name}`,
      `E-mail: ${email}`,
      `Telefoon: ${phone || "-"}`,
      `Categorie: ${categoryLabel}`,
      "",
      "Bericht:",
      message || "-",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Versturen is mislukt, probeer het later opnieuw." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
