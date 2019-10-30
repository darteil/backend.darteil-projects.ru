import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { join } from 'path';

const parentDir = join(__dirname, '..');

const connectionOpts: ConnectionOptions = {
  type: 'sqlite',
  database: `${parentDir}/data/database.db`,
  entities: [`${parentDir}/**/*.entity.{ts,js}`],
  logging: true,
  synchronize: true,
};

const connection: Promise<Connection> = createConnection(connectionOpts);

export default connection;
