# 🌟 query-house: A Flexible ClickHouse Query Builder for Node.js 🚀

Welcome to `query-house` 👋, your go-to Node.js library for building and executing SQL queries seamlessly with ClickHouse! Crafted with TypeScript, `query-house` provides a fluent, intuitive API to construct queries with ease, ensuring type safety and developer happiness 😊.

## Features

- 🏗️ **Fluent Query Building**: Easily build queries with a chainable method syntax.
- 🔍 **Strong Typing with TypeScript**: Enjoy autocompletion and type checking with TypeScript's strong typing.
- 🔄 **Dynamic Typing with `.castTo<Type>()`**: Flexibly cast query results to custom types, perfect for handling JOINs and complex selects.
- 📊 **Support for Advanced Queries**: Dive into advanced SQL with support for JOINs, subqueries, aggregations, and more.
- 🛠️ **Easy to Extend**: Tailor `query-house` to your project's specific needs.
- 📚 **Comprehensive Documentation**: Get started quickly with our thorough guides and examples.
- 🧪 **Robust Testing**: Rely on well-tested code with an extensive suite of automated tests.

## Getting Started

```bash
yarn add query-house
```

## Quick Example

Get up and running with `query-house` in no time! Here's a simple example to demonstrate how to use the query builder to fetch data from a ClickHouse database.

```typescript
import { QueryHouse } from 'query-house';
import { createClient } from '@clickhouse/client';

import { ClickHouseLogLevel, createClient } from '@clickhouse/client';
import QueryBuilder from './query-builder';

// Initialize ClickHouse client (replace with your configuration)
const client = createClient({
  host: 'http://localhost:8123',
  database: 'default',
  username: 'user',
  password: 'pass',
});

// Create a new instance of QueryHouse
const queryHouse = new QueryHouse(client);

// Building and executing a simple SELECT query
async function fetchUsers() {
    try {
        const users = await queryHouse
            .select('*')
            .from('users')
            .where('age > 30')
            .execute();

        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Run the function to fetch data
fetchUsers();
```