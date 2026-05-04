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
    email: varchar("email", {length: 50}).unique().notNull(),

    emailVerified: timestamp("emailVerified", {mode: "date"}),
    image: text("image"),

    created_at: timestamp({mode: "date"}).defaultNow(),
    description: text("description"),
})

export const credentials = pgTable("credentials", {
    userId: uuid("user_id").notNull().references(() => users.id, {onDelete: "cascade"}),
    passwordHash: text("password_hash").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const accounts = pgTable("account", {
    userId: uuid("userId")
        .notNull()
        .references(() => users.id),

    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),

    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: timestamp("expires_at", { mode: "date" }),

    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
})

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: uuid().notNull().references(() => users.id),
    expires: timestamp("expires", {mode: "date"}).notNull(),
})

export const verificationTokens = pgTable("verificationToken", {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", {mode: "date"}),
})

export const memories = pgTable("memory", {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id),
    objectName: varchar("name", {length: 40}),
    emotions: text("emotion"),
    people: text("people"),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
})