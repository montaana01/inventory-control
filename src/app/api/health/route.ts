import { NextResponse } from 'next/server';

import { getMysqlPool } from '@/shared/lib/db/mysql';

export async function GET(): Promise<NextResponse> {
  try {
    const pool = getMysqlPool();
    await pool.query('SELECT 1');
    return NextResponse.json({ ok: true, db: 'ok' }, { status: 200 });
  } catch (e) {
    const errorCode = e;
    const response: Record<string, unknown> = {
      ok: false,
      db: 'fail',
      errorCode,
    };
    return NextResponse.json(response, { status: 503 });
  }
}
