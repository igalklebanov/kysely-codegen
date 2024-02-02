import {
  BunSqliteDialect,
  LibsqlDialect,
  MysqlDialect,
  PostgresDialect,
  SqliteDialect,
} from '../dialects';
import type { Dialect } from './dialect';

export type DialectName =
  | 'bun-sqlite'
  | 'libsql'
  | 'mysql'
  | 'postgres'
  | 'sqlite';

/**
 * Returns a dialect instance for a pre-defined dialect name.
 */
export class DialectManager {
  getDialect(name: DialectName): Dialect {
    switch (name) {
      case 'bun-sqlite':
        return new BunSqliteDialect();
      case 'libsql':
        return new LibsqlDialect();
      case 'mysql':
        return new MysqlDialect();
      case 'postgres':
        return new PostgresDialect();
      default:
        return new SqliteDialect();
    }
  }
}