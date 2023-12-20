import { createClient } from '@clickhouse/client';
import QueryBuilder from '../src/query-builder';

describe('QueryBuilder Tests', () => {
  let queryBuilder: QueryBuilder;

  beforeAll(() => {
    // Initialize your QueryBuilder here
    // For example, you might need to pass a mock ClickHouse client
    const client = createClient({
        host: 'http://localhost:8123',
        database: 'default',
        username: 'default',
        password: 'default'
      });
     queryBuilder = new QueryBuilder(client);
  });

  test('Basic Query Test', () => {
    // Write a test for a basic query
    // For instance, test the rawQuery method
    expect(queryBuilder.rawQuery('SELECT 1')).resolves.toBeTruthy();
    // Replace with appropriate assertions and method calls
  });

  // Add more tests for other methods and functionalities
});
