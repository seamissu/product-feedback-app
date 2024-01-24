export const dynamic = 'force-dynamic';

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { feedback } from '../../../../db/schema';

import { NextResponse } from 'next/server';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export async function GET(request: Request) {
  const result = await db.select().from(feedback);

  return NextResponse.json(result, { status: 200 });
}
