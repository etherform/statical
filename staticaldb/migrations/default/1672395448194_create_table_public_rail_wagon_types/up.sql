CREATE TABLE "public"."rail_wagon_types" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" text NOT NULL, "volume" real NOT NULL, PRIMARY KEY ("id") , UNIQUE ("type"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
