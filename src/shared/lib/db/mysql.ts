import mysql from 'mysql2/promise';

import { GlobalWithMysqlPool, MysqlPool } from '@/shared/types/mysql';

const globalWithMysqlPool = globalThis as GlobalWithMysqlPool;

export function buildMysqlUrl(): string {
  const host: string = process.env.DB_HOST ?? 'localhost';
  const port = Number.parseInt(process.env.DB_PORT ?? '3306', 10);
  const database = process.env.DB_NAME;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD ?? '';

  if (!database || !user) {
    throw new Error('Missing DB_NAME or DB_USER');
  }

  const auth = `${encodeURIComponent(user)}:${encodeURIComponent(password)}`;
  return `mysql://${auth}@${host}:${String(port)}/${encodeURIComponent(database)}`;
}

function createMysqlPool(url: string): MysqlPool {
  return mysql.createPool({
    uri: url,
    connectionLimit: 5,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
}

export function getMysqlPool(): MysqlPool {
  if (!globalWithMysqlPool.__MYSQL_POOL__) {
    const url = process.env.DATABASE_URL ?? buildMysqlUrl();
    globalWithMysqlPool.__MYSQL_POOL__ = createMysqlPool(url);
  }

  return globalWithMysqlPool.__MYSQL_POOL__;
}
