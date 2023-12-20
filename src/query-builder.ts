import { ClickHouseClient } from '@clickhouse/client';

type QueryResult<T> = { data: T[]; rows: number; statistics: { elapsed: number }; rows_before_limit_at_least: number };

class QueryBuilder<T = any> {
  private client: ClickHouseClient;
  private query: string;

  constructor(client: ClickHouseClient) {
    this.client = client;
    this.query = '';
  }

  // Method to start a SELECT query
  select(columns: string | string[]): QueryBuilder {
    this.query = `SELECT ${Array.isArray(columns) ? columns.join(', ') : columns}`;
    return this;
  }

  // Method to add FROM clause
  from(table: string): QueryBuilder {
    this.query += ` FROM ${table}`;
    return this;
  }

  // Method to add WHERE clause
  where(condition: string): QueryBuilder {
    this.query += ` WHERE ${condition}`;
    return this;
  }

  // Method to execute the built query
  async execute(): Promise<QueryResult<T>> {
    const queryResult = await this.client.query({ query: this.query });

    return queryResult.json<QueryResult<T>>();
  }

  // Method to start an INSERT query
  insert(table: string, data: Record<string, any>): QueryBuilder {
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data)
      .map((v) => `'${v}'`)
      .join(', ');
    this.query = `INSERT INTO ${table} (${columns}) VALUES (${values})`;
    return this;
  }

  // Method to start an UPDATE query
  update(table: string, data: Record<string, any>): QueryBuilder {
    const updates = Object.entries(data)
      .map(([key, value]) => `${key} = '${value}'`)
      .join(', ');
    this.query = `UPDATE ${table} SET ${updates}`;
    return this;
  }

  // Method to start a DELETE query
  deleteFrom(table: string): QueryBuilder {
    this.query = `DELETE FROM ${table}`;
    return this;
  }

  // Reset the query
  reset(): QueryBuilder {
    this.query = '';
    return this;
  }

  // Method to directly set a raw query
  rawQuery(query: string): QueryBuilder {
    this.query = query;
    return this;
  }

  // Method to get the built query (for debugging)
  getQuery(): string {
    return this.query;
  }

  join(table: string, condition: string, type: 'INNER' | 'LEFT' | 'RIGHT' = 'INNER'): QueryBuilder {
    this.query += ` ${type} JOIN ${table} ON ${condition}`;
    return this;
  }

  // Convenience method for INNER JOIN
  innerJoin(table: string, condition: string): QueryBuilder {
    return this.join(table, condition, 'INNER');
  }

  // Convenience method for LEFT JOIN
  leftJoin(table: string, condition: string): QueryBuilder {
    return this.join(table, condition, 'LEFT');
  }

  // Convenience method for RIGHT JOIN
  rightJoin(table: string, condition: string): QueryBuilder {
    return this.join(table, condition, 'RIGHT');
  }

  castTo<R>(): QueryBuilder<R> {
    // We create a new instance of QueryBuilder with the new type
    // and copy the existing query state to it.
    const newQueryBuilder = new QueryBuilder<R>(this.client);
    newQueryBuilder.query = this.query;
    return newQueryBuilder;
  }
}

export default QueryBuilder;
