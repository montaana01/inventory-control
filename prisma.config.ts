// Prisma 7+ configuration (connection URL lives here, not in schema.prisma)
import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import { buildMysqlUrl } from './src/shared/lib/db/mysql';

const databaseUrl = buildMysqlUrl();

if (!databaseUrl) {
  throw new Error('Database url is required for Prisma.');
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: databaseUrl,
  },
});
