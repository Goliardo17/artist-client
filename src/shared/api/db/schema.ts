import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const canvases = pgTable('canvas', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 277 }).default("New Flow").notNull(),
});
