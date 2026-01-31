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