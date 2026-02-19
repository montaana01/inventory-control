import { Pool } from 'mysql2/promise';

export type MysqlPool = Pool;

export type GlobalWithMysqlPool = typeof globalThis & {
  __MYSQL_POOL__?: MysqlPool;
};
