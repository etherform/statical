CREATE TABLE "public"."dict_companies" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "short_name" text NOT NULL, "full_name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("short_name"), UNIQUE ("full_name"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_dict_companies_updated_at"
BEFORE UPDATE ON "public"."dict_companies"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_dict_companies_updated_at" ON "public"."dict_companies" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
