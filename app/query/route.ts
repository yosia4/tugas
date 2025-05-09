// File: app/api/invoices/route.ts

import postgres from "postgres";

// Koneksi ke database menggunakan environment variable
const sql = postgres(process.env.POSTGRES_URL as string, {
  ssl: "require", // agar aman saat di-host di luar lokal
});

// Fungsi untuk mengambil data invoice tertentu
async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666
  `;
  return data;
}

// Handler API GET
export async function GET() {
  try {
    const data = await listInvoices();
    return Response.json(data);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
