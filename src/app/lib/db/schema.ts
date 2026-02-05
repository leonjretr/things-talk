import {
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from "drizzle-orm/pg-core"

export const users = pgTable("user", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", {length: 40}),
    surname: varchar("surname", {length: 40}),
    email: varchar("email", {length: 50}),
    created_at: timestamp({mode: "date"}),
    description: text("description"),
})

export const accounts = pgTable("account", {
    userId: uuid("id").notNull().references(() => users.id),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    access_token: text("access_token"),
    refresh_token: text("refresh_token"),
    expires_at: timestamp("expires_at", {mode: "date"}),
})

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: uuid().notNull().references(() => users.id),
    expires_at: timestamp("expires_at", {mode: "date"}),
})

export const verificationTokens = pgTable("verificationToken", {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires_at: timestamp("expires_at", {mode: "date"}),
})

export const memories = pgTable("memory", {
    userId: uuid("id").notNull().references(() => users.id),
    objectName: varchar("name", {length: 40}),
    emotions: text("emotion"),
    people: text("people"),
    description: text("description"),
})