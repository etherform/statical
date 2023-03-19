alter table "public"."product_passports"
  add constraint "product_passports_producer_id_fkey"
  foreign key (producer_id)
  references "public"."companies"
  (id) on update cascade on delete restrict;
alter table "public"."product_passports" alter column "producer_id" drop not null;
alter table "public"."product_passports" add column "producer_id" uuid;
