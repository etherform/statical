CREATE TABLE "public"."warehouse_storages" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "created_by" uuid NOT NULL, "updated_by" uuid NOT NULL, "disabled" boolean NOT NULL DEFAULT false, "short_name" text NOT NULL, "full_name" text, "warehouse_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("updated_by") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("warehouse_id") REFERENCES "public"."warehouses"("id") ON UPDATE cascade ON DELETE restrict, UNIQUE ("short_name"));
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
CREATE TRIGGER "set_public_warehouse_storages_updated_at"
BEFORE UPDATE ON "public"."warehouse_storages"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_warehouse_storages_updated_at" ON "public"."warehouse_storages" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
