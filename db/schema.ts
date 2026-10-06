// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const leads=sqliteTable('leads',{id:text('id').primaryKey(),payload:text('payload').notNull(),createdAt:integer('created_at').notNull(),simulated:integer('simulated').notNull()});
export const feedback=sqliteTable('feedback',{id:text('id').primaryKey(),userId:text('user_id').notNull(),area:text('area').notNull(),message:text('message').notNull(),createdAt:integer('created_at').notNull()});
