"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@clickhouse/client");
const query_builder_1 = __importDefault(require("../src/query-builder"));
describe('QueryBuilder Tests', () => {
    let queryBuilder;
    beforeAll(() => {
        // Initialize your QueryBuilder here
        // For example, you might need to pass a mock ClickHouse client
        const client = (0, client_1.createClient)({
            host: 'http://localhost:8123',
            database: 'default',
            username: 'default',
            password: 'default'
        });
        queryBuilder = new query_builder_1.default(client);
    });
    test('Basic Query Test', () => {
        // Write a test for a basic query
        // For instance, test the rawQuery method
        expect(queryBuilder.rawQuery('SELECT 1')).resolves.toBeTruthy();
        // Replace with appropriate assertions and method calls
    });
    // Add more tests for other methods and functionalities
});
