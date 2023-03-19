alter table "public"."product_passports"
  add constraint "product_passports_product_id_fkey"
  foreign key ("product_id")
  references "public"."products"
  ("id") on update cascade on delete restrict;
