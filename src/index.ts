import { ClickHouseLogLevel, createClient } from '@clickhouse/client';
import QueryBuilder from './query-builder';

// Example usage
const client = createClient({
  host: 'http://localhost:8123',
  database: 'default',
  username: 'default',
  password: 'default',
});

const queryBuilder = new QueryBuilder(client);

const query1 = queryBuilder
  .select('*')
  .from('users')
  .innerJoin('orders', 'users.id = orders.user_id')
  .execute()
  .then((result) => {
    console.log('res', result);
  })
  .catch((err) => {
    console.error(err);
  });

console.log('query1', query1);
