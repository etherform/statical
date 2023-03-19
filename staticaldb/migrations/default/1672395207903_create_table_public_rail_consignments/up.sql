CREATE TABLE "public"."rail_consignments" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted" boolean NOT NULL DEFAULT false, "created_by" uuid NOT NULL, "updated_by" uuid NOT NULL, "contractor_id" uuid NOT NULL, "product_passport_id" uuid NOT NULL, "number" text NOT NULL, "date" timestamptz NOT NULL, "quantity" float4 NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("created_by") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("updated_by") REFERENCES "auth"."users"("id") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("contractor_id") REFERENCES "public"."companies"("id") ON UPDATE cascade ON DELETE restrict, FOREIGN KEY ("product_passport_id") REFERENCES "public"."product_passports"("id") ON UPDATE cascade ON DELETE restrict, UNIQUE ("number"));
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
CREATE TRIGGER "set_public_rail_consignments_updated_at"
BEFORE UPDATE ON "public"."rail_consignments"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_rail_consignments_updated_at" ON "public"."rail_consignments" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
