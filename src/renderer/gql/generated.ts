import gql from 'graphql-tag'
import * as Urql from '@urql/vue'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  bytea: any
  citext: string
  jsonb: string
  timestamp: string
  timestamptz: string
  uuid: string
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
  _eq: InputMaybe<Scalars['Boolean']>
  _gt: InputMaybe<Scalars['Boolean']>
  _gte: InputMaybe<Scalars['Boolean']>
  _in: InputMaybe<Array<Scalars['Boolean']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['Boolean']>
  _lte: InputMaybe<Scalars['Boolean']>
  _neq: InputMaybe<Scalars['Boolean']>
  _nin: InputMaybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export interface Float_Comparison_Exp {
  _eq: InputMaybe<Scalars['Float']>
  _gt: InputMaybe<Scalars['Float']>
  _gte: InputMaybe<Scalars['Float']>
  _in: InputMaybe<Array<Scalars['Float']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['Float']>
  _lte: InputMaybe<Scalars['Float']>
  _neq: InputMaybe<Scalars['Float']>
  _nin: InputMaybe<Array<Scalars['Float']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_Comparison_Exp {
  _eq: InputMaybe<Scalars['Int']>
  _gt: InputMaybe<Scalars['Int']>
  _gte: InputMaybe<Scalars['Int']>
  _in: InputMaybe<Array<Scalars['Int']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['Int']>
  _lte: InputMaybe<Scalars['Int']>
  _neq: InputMaybe<Scalars['Int']>
  _nin: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq: InputMaybe<Scalars['String']>
  _gt: InputMaybe<Scalars['String']>
  _gte: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']>
  _in: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']>
  _is_null: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']>
  _lt: InputMaybe<Scalars['String']>
  _lte: InputMaybe<Scalars['String']>
  _neq: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']>
  _nin: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']>
}

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthProviderRequests {
  id: Scalars['uuid']
  options: Maybe<Scalars['jsonb']>
}

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthProviderRequestsOptionsArgs {
  path: InputMaybe<Scalars['String']>
}

/** aggregated selection of "auth.provider_requests" */
export interface AuthProviderRequests_Aggregate {
  aggregate: Maybe<AuthProviderRequests_Aggregate_Fields>
  nodes: Array<AuthProviderRequests>
}

/** aggregate fields of "auth.provider_requests" */
export interface AuthProviderRequests_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<AuthProviderRequests_Max_Fields>
  min: Maybe<AuthProviderRequests_Min_Fields>
}

/** aggregate fields of "auth.provider_requests" */
export interface AuthProviderRequests_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface AuthProviderRequests_Append_Input {
  options: InputMaybe<Scalars['jsonb']>
}

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export interface AuthProviderRequests_Bool_Exp {
  _and: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>
  _not: InputMaybe<AuthProviderRequests_Bool_Exp>
  _or: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>
  id: InputMaybe<Uuid_Comparison_Exp>
  options: InputMaybe<Jsonb_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface AuthProviderRequests_Delete_At_Path_Input {
  options: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface AuthProviderRequests_Delete_Elem_Input {
  options: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface AuthProviderRequests_Delete_Key_Input {
  options: InputMaybe<Scalars['String']>
}

/** input type for inserting data into table "auth.provider_requests" */
export interface AuthProviderRequests_Insert_Input {
  id: InputMaybe<Scalars['uuid']>
  options: InputMaybe<Scalars['jsonb']>
}

/** aggregate max on columns */
export interface AuthProviderRequests_Max_Fields {
  id: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface AuthProviderRequests_Min_Fields {
  id: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "auth.provider_requests" */
export interface AuthProviderRequests_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>
}

/** on_conflict condition type for table "auth.provider_requests" */
export interface AuthProviderRequests_On_Conflict {
  constraint: AuthProviderRequests_Constraint
  update_columns: Array<AuthProviderRequests_Update_Column>
  where: InputMaybe<AuthProviderRequests_Bool_Exp>
}

/** Ordering options when selecting data from "auth.provider_requests". */
export interface AuthProviderRequests_Order_By {
  id: InputMaybe<Order_By>
  options: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.provider_requests */
export interface AuthProviderRequests_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface AuthProviderRequests_Prepend_Input {
  options: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
}

/** input type for updating data in table "auth.provider_requests" */
export interface AuthProviderRequests_Set_Input {
  id: InputMaybe<Scalars['uuid']>
  options: InputMaybe<Scalars['jsonb']>
}

/** Streaming cursor of the table "authProviderRequests" */
export interface AuthProviderRequests_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface AuthProviderRequests_Stream_Cursor_Value_Input {
  id: InputMaybe<Scalars['uuid']>
  options: InputMaybe<Scalars['jsonb']>
}

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options',
}

export interface AuthProviderRequests_Updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<AuthProviderRequests_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<AuthProviderRequests_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<AuthProviderRequests_Delete_Key_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<AuthProviderRequests_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthProviderRequests_Set_Input>
  where: AuthProviderRequests_Bool_Exp
}

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthProviders {
  id: Scalars['String']
  /** An array relationship */
  userProviders: Array<AuthUserProviders>
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate
}

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthProvidersUserProvidersArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthProvidersUserProviders_AggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** aggregated selection of "auth.providers" */
export interface AuthProviders_Aggregate {
  aggregate: Maybe<AuthProviders_Aggregate_Fields>
  nodes: Array<AuthProviders>
}

/** aggregate fields of "auth.providers" */
export interface AuthProviders_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<AuthProviders_Max_Fields>
  min: Maybe<AuthProviders_Min_Fields>
}

/** aggregate fields of "auth.providers" */
export interface AuthProviders_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<AuthProviders_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export interface AuthProviders_Bool_Exp {
  _and: InputMaybe<Array<AuthProviders_Bool_Exp>>
  _not: InputMaybe<AuthProviders_Bool_Exp>
  _or: InputMaybe<Array<AuthProviders_Bool_Exp>>
  id: InputMaybe<String_Comparison_Exp>
  userProviders: InputMaybe<AuthUserProviders_Bool_Exp>
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey',
}

/** input type for inserting data into table "auth.providers" */
export interface AuthProviders_Insert_Input {
  id: InputMaybe<Scalars['String']>
  userProviders: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export interface AuthProviders_Max_Fields {
  id: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface AuthProviders_Min_Fields {
  id: Maybe<Scalars['String']>
}

/** response of any mutation on the table "auth.providers" */
export interface AuthProviders_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>
}

/** input type for inserting object relation for remote table "auth.providers" */
export interface AuthProviders_Obj_Rel_Insert_Input {
  data: AuthProviders_Insert_Input
  /** upsert condition */
  on_conflict: InputMaybe<AuthProviders_On_Conflict>
}

/** on_conflict condition type for table "auth.providers" */
export interface AuthProviders_On_Conflict {
  constraint: AuthProviders_Constraint
  update_columns: Array<AuthProviders_Update_Column>
  where: InputMaybe<AuthProviders_Bool_Exp>
}

/** Ordering options when selecting data from "auth.providers". */
export interface AuthProviders_Order_By {
  id: InputMaybe<Order_By>
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Order_By>
}

/** primary key columns input for table: auth.providers */
export interface AuthProviders_Pk_Columns_Input {
  id: Scalars['String']
}

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "auth.providers" */
export interface AuthProviders_Set_Input {
  id: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "authProviders" */
export interface AuthProviders_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface AuthProviders_Stream_Cursor_Value_Input {
  id: InputMaybe<Scalars['String']>
}

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id',
}

export interface AuthProviders_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthProviders_Set_Input>
  where: AuthProviders_Bool_Exp
}

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthRefreshTokens {
  createdAt: Scalars['timestamptz']
  expiresAt: Scalars['timestamptz']
  refreshToken: Scalars['uuid']
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']
}

/** aggregated selection of "auth.refresh_tokens" */
export interface AuthRefreshTokens_Aggregate {
  aggregate: Maybe<AuthRefreshTokens_Aggregate_Fields>
  nodes: Array<AuthRefreshTokens>
}

export interface AuthRefreshTokens_Aggregate_Bool_Exp {
  count: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>
}

export interface AuthRefreshTokens_Aggregate_Bool_Exp_Count {
  arguments: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<AuthRefreshTokens_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.refresh_tokens" */
export interface AuthRefreshTokens_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<AuthRefreshTokens_Max_Fields>
  min: Maybe<AuthRefreshTokens_Min_Fields>
}

/** aggregate fields of "auth.refresh_tokens" */
export interface AuthRefreshTokens_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Aggregate_Order_By {
  count: InputMaybe<Order_By>
  max: InputMaybe<AuthRefreshTokens_Max_Order_By>
  min: InputMaybe<AuthRefreshTokens_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Arr_Rel_Insert_Input {
  data: Array<AuthRefreshTokens_Insert_Input>
  /** upsert condition */
  on_conflict: InputMaybe<AuthRefreshTokens_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export interface AuthRefreshTokens_Bool_Exp {
  _and: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>
  _not: InputMaybe<AuthRefreshTokens_Bool_Exp>
  _or: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  expiresAt: InputMaybe<Timestamptz_Comparison_Exp>
  refreshToken: InputMaybe<Uuid_Comparison_Exp>
  user: InputMaybe<Users_Bool_Exp>
  userId: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey',
}

/** input type for inserting data into table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  expiresAt: InputMaybe<Scalars['timestamptz']>
  refreshToken: InputMaybe<Scalars['uuid']>
  user: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface AuthRefreshTokens_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  expiresAt: Maybe<Scalars['timestamptz']>
  refreshToken: Maybe<Scalars['uuid']>
  userId: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Max_Order_By {
  createdAt: InputMaybe<Order_By>
  expiresAt: InputMaybe<Order_By>
  refreshToken: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** aggregate min on columns */
export interface AuthRefreshTokens_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  expiresAt: Maybe<Scalars['timestamptz']>
  refreshToken: Maybe<Scalars['uuid']>
  userId: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Min_Order_By {
  createdAt: InputMaybe<Order_By>
  expiresAt: InputMaybe<Order_By>
  refreshToken: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>
}

/** on_conflict condition type for table "auth.refresh_tokens" */
export interface AuthRefreshTokens_On_Conflict {
  constraint: AuthRefreshTokens_Constraint
  update_columns: Array<AuthRefreshTokens_Update_Column>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** Ordering options when selecting data from "auth.refresh_tokens". */
export interface AuthRefreshTokens_Order_By {
  createdAt: InputMaybe<Order_By>
  expiresAt: InputMaybe<Order_By>
  refreshToken: InputMaybe<Order_By>
  user: InputMaybe<Users_Order_By>
  userId: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.refresh_tokens */
export interface AuthRefreshTokens_Pk_Columns_Input {
  refreshToken: Scalars['uuid']
}

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  expiresAt: InputMaybe<Scalars['timestamptz']>
  refreshToken: InputMaybe<Scalars['uuid']>
  userId: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "authRefreshTokens" */
export interface AuthRefreshTokens_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface AuthRefreshTokens_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  expiresAt: InputMaybe<Scalars['timestamptz']>
  refreshToken: InputMaybe<Scalars['uuid']>
  userId: InputMaybe<Scalars['uuid']>
}

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId',
}

export interface AuthRefreshTokens_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthRefreshTokens_Set_Input>
  where: AuthRefreshTokens_Bool_Exp
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthRoles {
  role: Scalars['String']
  /** An array relationship */
  userRoles: Array<AuthUserRoles>
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate
  /** An array relationship */
  usersByDefaultRole: Array<Users>
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthRolesUserRolesArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthRolesUserRoles_AggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthRolesUsersByDefaultRoleArgs {
  distinct_on: InputMaybe<Array<Users_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Users_Order_By>>
  where: InputMaybe<Users_Bool_Exp>
}

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthRolesUsersByDefaultRole_AggregateArgs {
  distinct_on: InputMaybe<Array<Users_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Users_Order_By>>
  where: InputMaybe<Users_Bool_Exp>
}

/** aggregated selection of "auth.roles" */
export interface AuthRoles_Aggregate {
  aggregate: Maybe<AuthRoles_Aggregate_Fields>
  nodes: Array<AuthRoles>
}

/** aggregate fields of "auth.roles" */
export interface AuthRoles_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<AuthRoles_Max_Fields>
  min: Maybe<AuthRoles_Min_Fields>
}

/** aggregate fields of "auth.roles" */
export interface AuthRoles_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<AuthRoles_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export interface AuthRoles_Bool_Exp {
  _and: InputMaybe<Array<AuthRoles_Bool_Exp>>
  _not: InputMaybe<AuthRoles_Bool_Exp>
  _or: InputMaybe<Array<AuthRoles_Bool_Exp>>
  role: InputMaybe<String_Comparison_Exp>
  userRoles: InputMaybe<AuthUserRoles_Bool_Exp>
  userRoles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>
  usersByDefaultRole: InputMaybe<Users_Bool_Exp>
  usersByDefaultRole_aggregate: InputMaybe<Users_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey',
}

/** input type for inserting data into table "auth.roles" */
export interface AuthRoles_Insert_Input {
  role: InputMaybe<Scalars['String']>
  userRoles: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>
  usersByDefaultRole: InputMaybe<Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export interface AuthRoles_Max_Fields {
  role: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface AuthRoles_Min_Fields {
  role: Maybe<Scalars['String']>
}

/** response of any mutation on the table "auth.roles" */
export interface AuthRoles_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>
}

/** input type for inserting object relation for remote table "auth.roles" */
export interface AuthRoles_Obj_Rel_Insert_Input {
  data: AuthRoles_Insert_Input
  /** upsert condition */
  on_conflict: InputMaybe<AuthRoles_On_Conflict>
}

/** on_conflict condition type for table "auth.roles" */
export interface AuthRoles_On_Conflict {
  constraint: AuthRoles_Constraint
  update_columns: Array<AuthRoles_Update_Column>
  where: InputMaybe<AuthRoles_Bool_Exp>
}

/** Ordering options when selecting data from "auth.roles". */
export interface AuthRoles_Order_By {
  role: InputMaybe<Order_By>
  userRoles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Order_By>
  usersByDefaultRole_aggregate: InputMaybe<Users_Aggregate_Order_By>
}

/** primary key columns input for table: auth.roles */
export interface AuthRoles_Pk_Columns_Input {
  role: Scalars['String']
}

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role',
}

/** input type for updating data in table "auth.roles" */
export interface AuthRoles_Set_Input {
  role: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "authRoles" */
export interface AuthRoles_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface AuthRoles_Stream_Cursor_Value_Input {
  role: InputMaybe<Scalars['String']>
}

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role',
}

export interface AuthRoles_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthRoles_Set_Input>
  where: AuthRoles_Bool_Exp
}

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthUserProviders {
  accessToken: Scalars['String']
  createdAt: Scalars['timestamptz']
  id: Scalars['uuid']
  /** An object relationship */
  provider: AuthProviders
  providerId: Scalars['String']
  providerUserId: Scalars['String']
  refreshToken: Maybe<Scalars['String']>
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']
}

/** aggregated selection of "auth.user_providers" */
export interface AuthUserProviders_Aggregate {
  aggregate: Maybe<AuthUserProviders_Aggregate_Fields>
  nodes: Array<AuthUserProviders>
}

export interface AuthUserProviders_Aggregate_Bool_Exp {
  count: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>
}

export interface AuthUserProviders_Aggregate_Bool_Exp_Count {
  arguments: InputMaybe<Array<AuthUserProviders_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<AuthUserProviders_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.user_providers" */
export interface AuthUserProviders_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<AuthUserProviders_Max_Fields>
  min: Maybe<AuthUserProviders_Min_Fields>
}

/** aggregate fields of "auth.user_providers" */
export interface AuthUserProviders_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<AuthUserProviders_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.user_providers" */
export interface AuthUserProviders_Aggregate_Order_By {
  count: InputMaybe<Order_By>
  max: InputMaybe<AuthUserProviders_Max_Order_By>
  min: InputMaybe<AuthUserProviders_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.user_providers" */
export interface AuthUserProviders_Arr_Rel_Insert_Input {
  data: Array<AuthUserProviders_Insert_Input>
  /** upsert condition */
  on_conflict: InputMaybe<AuthUserProviders_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export interface AuthUserProviders_Bool_Exp {
  _and: InputMaybe<Array<AuthUserProviders_Bool_Exp>>
  _not: InputMaybe<AuthUserProviders_Bool_Exp>
  _or: InputMaybe<Array<AuthUserProviders_Bool_Exp>>
  accessToken: InputMaybe<String_Comparison_Exp>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  provider: InputMaybe<AuthProviders_Bool_Exp>
  providerId: InputMaybe<String_Comparison_Exp>
  providerUserId: InputMaybe<String_Comparison_Exp>
  refreshToken: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  user: InputMaybe<Users_Bool_Exp>
  userId: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key',
}

/** input type for inserting data into table "auth.user_providers" */
export interface AuthUserProviders_Insert_Input {
  accessToken: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  id: InputMaybe<Scalars['uuid']>
  provider: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>
  providerId: InputMaybe<Scalars['String']>
  providerUserId: InputMaybe<Scalars['String']>
  refreshToken: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  user: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface AuthUserProviders_Max_Fields {
  accessToken: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['uuid']>
  providerId: Maybe<Scalars['String']>
  providerUserId: Maybe<Scalars['String']>
  refreshToken: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  userId: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "auth.user_providers" */
export interface AuthUserProviders_Max_Order_By {
  accessToken: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  providerId: InputMaybe<Order_By>
  providerUserId: InputMaybe<Order_By>
  refreshToken: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** aggregate min on columns */
export interface AuthUserProviders_Min_Fields {
  accessToken: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['uuid']>
  providerId: Maybe<Scalars['String']>
  providerUserId: Maybe<Scalars['String']>
  refreshToken: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  userId: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "auth.user_providers" */
export interface AuthUserProviders_Min_Order_By {
  accessToken: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  providerId: InputMaybe<Order_By>
  providerUserId: InputMaybe<Order_By>
  refreshToken: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.user_providers" */
export interface AuthUserProviders_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>
}

/** on_conflict condition type for table "auth.user_providers" */
export interface AuthUserProviders_On_Conflict {
  constraint: AuthUserProviders_Constraint
  update_columns: Array<AuthUserProviders_Update_Column>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** Ordering options when selecting data from "auth.user_providers". */
export interface AuthUserProviders_Order_By {
  accessToken: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  provider: InputMaybe<AuthProviders_Order_By>
  providerId: InputMaybe<Order_By>
  providerUserId: InputMaybe<Order_By>
  refreshToken: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  user: InputMaybe<Users_Order_By>
  userId: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.user_providers */
export interface AuthUserProviders_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_providers" */
export interface AuthUserProviders_Set_Input {
  accessToken: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  id: InputMaybe<Scalars['uuid']>
  providerId: InputMaybe<Scalars['String']>
  providerUserId: InputMaybe<Scalars['String']>
  refreshToken: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  userId: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "authUserProviders" */
export interface AuthUserProviders_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface AuthUserProviders_Stream_Cursor_Value_Input {
  accessToken: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  id: InputMaybe<Scalars['uuid']>
  providerId: InputMaybe<Scalars['String']>
  providerUserId: InputMaybe<Scalars['String']>
  refreshToken: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  userId: InputMaybe<Scalars['uuid']>
}

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
}

export interface AuthUserProviders_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthUserProviders_Set_Input>
  where: AuthUserProviders_Bool_Exp
}

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthUserRoles {
  createdAt: Scalars['timestamptz']
  id: Scalars['uuid']
  role: Scalars['String']
  /** An object relationship */
  roleByRole: AuthRoles
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']
}

/** aggregated selection of "auth.user_roles" */
export interface AuthUserRoles_Aggregate {
  aggregate: Maybe<AuthUserRoles_Aggregate_Fields>
  nodes: Array<AuthUserRoles>
}

export interface AuthUserRoles_Aggregate_Bool_Exp {
  count: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>
}

export interface AuthUserRoles_Aggregate_Bool_Exp_Count {
  arguments: InputMaybe<Array<AuthUserRoles_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<AuthUserRoles_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.user_roles" */
export interface AuthUserRoles_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<AuthUserRoles_Max_Fields>
  min: Maybe<AuthUserRoles_Min_Fields>
}

/** aggregate fields of "auth.user_roles" */
export interface AuthUserRoles_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<AuthUserRoles_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.user_roles" */
export interface AuthUserRoles_Aggregate_Order_By {
  count: InputMaybe<Order_By>
  max: InputMaybe<AuthUserRoles_Max_Order_By>
  min: InputMaybe<AuthUserRoles_Min_Order_By>
}

/** input type for inserting array relation for remote table "auth.user_roles" */
export interface AuthUserRoles_Arr_Rel_Insert_Input {
  data: Array<AuthUserRoles_Insert_Input>
  /** upsert condition */
  on_conflict: InputMaybe<AuthUserRoles_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export interface AuthUserRoles_Bool_Exp {
  _and: InputMaybe<Array<AuthUserRoles_Bool_Exp>>
  _not: InputMaybe<AuthUserRoles_Bool_Exp>
  _or: InputMaybe<Array<AuthUserRoles_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  role: InputMaybe<String_Comparison_Exp>
  roleByRole: InputMaybe<AuthRoles_Bool_Exp>
  user: InputMaybe<Users_Bool_Exp>
  userId: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key',
}

/** input type for inserting data into table "auth.user_roles" */
export interface AuthUserRoles_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  id: InputMaybe<Scalars['uuid']>
  role: InputMaybe<Scalars['String']>
  roleByRole: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>
  user: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface AuthUserRoles_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['uuid']>
  role: Maybe<Scalars['String']>
  userId: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "auth.user_roles" */
export interface AuthUserRoles_Max_Order_By {
  createdAt: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  role: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** aggregate min on columns */
export interface AuthUserRoles_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  id: Maybe<Scalars['uuid']>
  role: Maybe<Scalars['String']>
  userId: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "auth.user_roles" */
export interface AuthUserRoles_Min_Order_By {
  createdAt: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  role: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.user_roles" */
export interface AuthUserRoles_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>
}

/** on_conflict condition type for table "auth.user_roles" */
export interface AuthUserRoles_On_Conflict {
  constraint: AuthUserRoles_Constraint
  update_columns: Array<AuthUserRoles_Update_Column>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** Ordering options when selecting data from "auth.user_roles". */
export interface AuthUserRoles_Order_By {
  createdAt: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  role: InputMaybe<Order_By>
  roleByRole: InputMaybe<AuthRoles_Order_By>
  user: InputMaybe<Users_Order_By>
  userId: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.user_roles */
export interface AuthUserRoles_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_roles" */
export interface AuthUserRoles_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  id: InputMaybe<Scalars['uuid']>
  role: InputMaybe<Scalars['String']>
  userId: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "authUserRoles" */
export interface AuthUserRoles_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface AuthUserRoles_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  id: InputMaybe<Scalars['uuid']>
  role: InputMaybe<Scalars['String']>
  userId: InputMaybe<Scalars['uuid']>
}

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
}

export interface AuthUserRoles_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthUserRoles_Set_Input>
  where: AuthUserRoles_Bool_Exp
}

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface AuthUserSecurityKeys {
  counter: Scalars['bigint']
  credentialId: Scalars['String']
  credentialPublicKey: Maybe<Scalars['bytea']>
  id: Scalars['uuid']
  nickname: Maybe<Scalars['String']>
  transports: Scalars['String']
  /** An object relationship */
  user: Users
  userId: Scalars['uuid']
}

/** aggregated selection of "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Aggregate {
  aggregate: Maybe<AuthUserSecurityKeys_Aggregate_Fields>
  nodes: Array<AuthUserSecurityKeys>
}

export interface AuthUserSecurityKeys_Aggregate_Bool_Exp {
  count: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>
}

export interface AuthUserSecurityKeys_Aggregate_Bool_Exp_Count {
  arguments: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Aggregate_Fields {
  avg: Maybe<AuthUserSecurityKeys_Avg_Fields>
  count: Scalars['Int']
  max: Maybe<AuthUserSecurityKeys_Max_Fields>
  min: Maybe<AuthUserSecurityKeys_Min_Fields>
  stddev: Maybe<AuthUserSecurityKeys_Stddev_Fields>
  stddev_pop: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>
  stddev_samp: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>
  sum: Maybe<AuthUserSecurityKeys_Sum_Fields>
  var_pop: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>
  var_samp: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>
  variance: Maybe<AuthUserSecurityKeys_Variance_Fields>
}

/** aggregate fields of "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Aggregate_Order_By {
  avg: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>
  count: InputMaybe<Order_By>
  max: InputMaybe<AuthUserSecurityKeys_Max_Order_By>
  min: InputMaybe<AuthUserSecurityKeys_Min_Order_By>
  stddev: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>
  stddev_pop: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>
  stddev_samp: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>
  sum: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>
  var_pop: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>
  var_samp: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>
  variance: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>
}

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Arr_Rel_Insert_Input {
  data: Array<AuthUserSecurityKeys_Insert_Input>
  /** upsert condition */
  on_conflict: InputMaybe<AuthUserSecurityKeys_On_Conflict>
}

/** aggregate avg on columns */
export interface AuthUserSecurityKeys_Avg_Fields {
  counter: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Avg_Order_By {
  counter: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export interface AuthUserSecurityKeys_Bool_Exp {
  _and: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>
  _not: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
  _or: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>
  counter: InputMaybe<Bigint_Comparison_Exp>
  credentialId: InputMaybe<String_Comparison_Exp>
  credentialPublicKey: InputMaybe<Bytea_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  nickname: InputMaybe<String_Comparison_Exp>
  transports: InputMaybe<String_Comparison_Exp>
  user: InputMaybe<Users_Bool_Exp>
  userId: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey',
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Inc_Input {
  counter: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Insert_Input {
  counter: InputMaybe<Scalars['bigint']>
  credentialId: InputMaybe<Scalars['String']>
  credentialPublicKey: InputMaybe<Scalars['bytea']>
  id: InputMaybe<Scalars['uuid']>
  nickname: InputMaybe<Scalars['String']>
  transports: InputMaybe<Scalars['String']>
  user: InputMaybe<Users_Obj_Rel_Insert_Input>
  userId: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface AuthUserSecurityKeys_Max_Fields {
  counter: Maybe<Scalars['bigint']>
  credentialId: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  nickname: Maybe<Scalars['String']>
  transports: Maybe<Scalars['String']>
  userId: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Max_Order_By {
  counter: InputMaybe<Order_By>
  credentialId: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  nickname: InputMaybe<Order_By>
  transports: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** aggregate min on columns */
export interface AuthUserSecurityKeys_Min_Fields {
  counter: Maybe<Scalars['bigint']>
  credentialId: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  nickname: Maybe<Scalars['String']>
  transports: Maybe<Scalars['String']>
  userId: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Min_Order_By {
  counter: InputMaybe<Order_By>
  credentialId: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  nickname: InputMaybe<Order_By>
  transports: InputMaybe<Order_By>
  userId: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>
}

/** on_conflict condition type for table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_On_Conflict {
  constraint: AuthUserSecurityKeys_Constraint
  update_columns: Array<AuthUserSecurityKeys_Update_Column>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

/** Ordering options when selecting data from "auth.user_security_keys". */
export interface AuthUserSecurityKeys_Order_By {
  counter: InputMaybe<Order_By>
  credentialId: InputMaybe<Order_By>
  credentialPublicKey: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  nickname: InputMaybe<Order_By>
  transports: InputMaybe<Order_By>
  user: InputMaybe<Users_Order_By>
  userId: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.user_security_keys */
export interface AuthUserSecurityKeys_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId',
}

/** input type for updating data in table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Set_Input {
  counter: InputMaybe<Scalars['bigint']>
  credentialId: InputMaybe<Scalars['String']>
  credentialPublicKey: InputMaybe<Scalars['bytea']>
  id: InputMaybe<Scalars['uuid']>
  nickname: InputMaybe<Scalars['String']>
  transports: InputMaybe<Scalars['String']>
  userId: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export interface AuthUserSecurityKeys_Stddev_Fields {
  counter: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Stddev_Order_By {
  counter: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export interface AuthUserSecurityKeys_Stddev_Pop_Fields {
  counter: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Stddev_Pop_Order_By {
  counter: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export interface AuthUserSecurityKeys_Stddev_Samp_Fields {
  counter: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Stddev_Samp_Order_By {
  counter: InputMaybe<Order_By>
}

/** Streaming cursor of the table "authUserSecurityKeys" */
export interface AuthUserSecurityKeys_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface AuthUserSecurityKeys_Stream_Cursor_Value_Input {
  counter: InputMaybe<Scalars['bigint']>
  credentialId: InputMaybe<Scalars['String']>
  credentialPublicKey: InputMaybe<Scalars['bytea']>
  id: InputMaybe<Scalars['uuid']>
  nickname: InputMaybe<Scalars['String']>
  transports: InputMaybe<Scalars['String']>
  userId: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export interface AuthUserSecurityKeys_Sum_Fields {
  counter: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Sum_Order_By {
  counter: InputMaybe<Order_By>
}

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId',
}

export interface AuthUserSecurityKeys_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<AuthUserSecurityKeys_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthUserSecurityKeys_Set_Input>
  where: AuthUserSecurityKeys_Bool_Exp
}

/** aggregate var_pop on columns */
export interface AuthUserSecurityKeys_Var_Pop_Fields {
  counter: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Var_Pop_Order_By {
  counter: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export interface AuthUserSecurityKeys_Var_Samp_Fields {
  counter: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Var_Samp_Order_By {
  counter: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export interface AuthUserSecurityKeys_Variance_Fields {
  counter: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Variance_Order_By {
  counter: InputMaybe<Order_By>
}

/** Internal table for tracking migrations. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface Auth_Migrations {
  executed_at: Maybe<Scalars['timestamp']>
  hash: Scalars['String']
  id: Scalars['Int']
  name: Scalars['String']
}

/** aggregated selection of "auth.migrations" */
export interface Auth_Migrations_Aggregate {
  aggregate: Maybe<Auth_Migrations_Aggregate_Fields>
  nodes: Array<Auth_Migrations>
}

/** aggregate fields of "auth.migrations" */
export interface Auth_Migrations_Aggregate_Fields {
  avg: Maybe<Auth_Migrations_Avg_Fields>
  count: Scalars['Int']
  max: Maybe<Auth_Migrations_Max_Fields>
  min: Maybe<Auth_Migrations_Min_Fields>
  stddev: Maybe<Auth_Migrations_Stddev_Fields>
  stddev_pop: Maybe<Auth_Migrations_Stddev_Pop_Fields>
  stddev_samp: Maybe<Auth_Migrations_Stddev_Samp_Fields>
  sum: Maybe<Auth_Migrations_Sum_Fields>
  var_pop: Maybe<Auth_Migrations_Var_Pop_Fields>
  var_samp: Maybe<Auth_Migrations_Var_Samp_Fields>
  variance: Maybe<Auth_Migrations_Variance_Fields>
}

/** aggregate fields of "auth.migrations" */
export interface Auth_Migrations_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Auth_Migrations_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface Auth_Migrations_Avg_Fields {
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "auth.migrations". All fields are combined with a logical 'AND'. */
export interface Auth_Migrations_Bool_Exp {
  _and: InputMaybe<Array<Auth_Migrations_Bool_Exp>>
  _not: InputMaybe<Auth_Migrations_Bool_Exp>
  _or: InputMaybe<Array<Auth_Migrations_Bool_Exp>>
  executed_at: InputMaybe<Timestamp_Comparison_Exp>
  hash: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Int_Comparison_Exp>
  name: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "auth.migrations" */
export enum Auth_Migrations_Constraint {
  /** unique or primary key constraint on columns "name" */
  MigrationsNameKey = 'migrations_name_key',
  /** unique or primary key constraint on columns "id" */
  MigrationsPkey = 'migrations_pkey',
}

/** input type for incrementing numeric columns in table "auth.migrations" */
export interface Auth_Migrations_Inc_Input {
  id: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "auth.migrations" */
export interface Auth_Migrations_Insert_Input {
  executed_at: InputMaybe<Scalars['timestamp']>
  hash: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['Int']>
  name: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface Auth_Migrations_Max_Fields {
  executed_at: Maybe<Scalars['timestamp']>
  hash: Maybe<Scalars['String']>
  id: Maybe<Scalars['Int']>
  name: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface Auth_Migrations_Min_Fields {
  executed_at: Maybe<Scalars['timestamp']>
  hash: Maybe<Scalars['String']>
  id: Maybe<Scalars['Int']>
  name: Maybe<Scalars['String']>
}

/** response of any mutation on the table "auth.migrations" */
export interface Auth_Migrations_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Migrations>
}

/** on_conflict condition type for table "auth.migrations" */
export interface Auth_Migrations_On_Conflict {
  constraint: Auth_Migrations_Constraint
  update_columns: Array<Auth_Migrations_Update_Column>
  where: InputMaybe<Auth_Migrations_Bool_Exp>
}

/** Ordering options when selecting data from "auth.migrations". */
export interface Auth_Migrations_Order_By {
  executed_at: InputMaybe<Order_By>
  hash: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  name: InputMaybe<Order_By>
}

/** primary key columns input for table: auth.migrations */
export interface Auth_Migrations_Pk_Columns_Input {
  id: Scalars['Int']
}

/** select columns of table "auth.migrations" */
export enum Auth_Migrations_Select_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "auth.migrations" */
export interface Auth_Migrations_Set_Input {
  executed_at: InputMaybe<Scalars['timestamp']>
  hash: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['Int']>
  name: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface Auth_Migrations_Stddev_Fields {
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface Auth_Migrations_Stddev_Pop_Fields {
  id: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface Auth_Migrations_Stddev_Samp_Fields {
  id: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "auth_migrations" */
export interface Auth_Migrations_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Auth_Migrations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Auth_Migrations_Stream_Cursor_Value_Input {
  executed_at: InputMaybe<Scalars['timestamp']>
  hash: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['Int']>
  name: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export interface Auth_Migrations_Sum_Fields {
  id: Maybe<Scalars['Int']>
}

/** update columns of table "auth.migrations" */
export enum Auth_Migrations_Update_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export interface Auth_Migrations_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Auth_Migrations_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Auth_Migrations_Set_Input>
  where: Auth_Migrations_Bool_Exp
}

/** aggregate var_pop on columns */
export interface Auth_Migrations_Var_Pop_Fields {
  id: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface Auth_Migrations_Var_Samp_Fields {
  id: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface Auth_Migrations_Variance_Fields {
  id: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface Bigint_Comparison_Exp {
  _eq: InputMaybe<Scalars['bigint']>
  _gt: InputMaybe<Scalars['bigint']>
  _gte: InputMaybe<Scalars['bigint']>
  _in: InputMaybe<Array<Scalars['bigint']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['bigint']>
  _lte: InputMaybe<Scalars['bigint']>
  _neq: InputMaybe<Scalars['bigint']>
  _nin: InputMaybe<Array<Scalars['bigint']>>
}

/** columns and relationships of "storage.buckets" */
export interface Buckets {
  cacheControl: Maybe<Scalars['String']>
  createdAt: Scalars['timestamptz']
  downloadExpiration: Scalars['Int']
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  id: Scalars['String']
  maxUploadFileSize: Scalars['Int']
  minUploadFileSize: Scalars['Int']
  presignedUrlsEnabled: Scalars['Boolean']
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "storage.buckets" */
export interface BucketsFilesArgs {
  distinct_on: InputMaybe<Array<Files_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Files_Order_By>>
  where: InputMaybe<Files_Bool_Exp>
}

/** columns and relationships of "storage.buckets" */
export interface BucketsFiles_AggregateArgs {
  distinct_on: InputMaybe<Array<Files_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Files_Order_By>>
  where: InputMaybe<Files_Bool_Exp>
}

/** aggregated selection of "storage.buckets" */
export interface Buckets_Aggregate {
  aggregate: Maybe<Buckets_Aggregate_Fields>
  nodes: Array<Buckets>
}

/** aggregate fields of "storage.buckets" */
export interface Buckets_Aggregate_Fields {
  avg: Maybe<Buckets_Avg_Fields>
  count: Scalars['Int']
  max: Maybe<Buckets_Max_Fields>
  min: Maybe<Buckets_Min_Fields>
  stddev: Maybe<Buckets_Stddev_Fields>
  stddev_pop: Maybe<Buckets_Stddev_Pop_Fields>
  stddev_samp: Maybe<Buckets_Stddev_Samp_Fields>
  sum: Maybe<Buckets_Sum_Fields>
  var_pop: Maybe<Buckets_Var_Pop_Fields>
  var_samp: Maybe<Buckets_Var_Samp_Fields>
  variance: Maybe<Buckets_Variance_Fields>
}

/** aggregate fields of "storage.buckets" */
export interface Buckets_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Buckets_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface Buckets_Avg_Fields {
  downloadExpiration: Maybe<Scalars['Float']>
  maxUploadFileSize: Maybe<Scalars['Float']>
  minUploadFileSize: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export interface Buckets_Bool_Exp {
  _and: InputMaybe<Array<Buckets_Bool_Exp>>
  _not: InputMaybe<Buckets_Bool_Exp>
  _or: InputMaybe<Array<Buckets_Bool_Exp>>
  cacheControl: InputMaybe<String_Comparison_Exp>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  downloadExpiration: InputMaybe<Int_Comparison_Exp>
  files: InputMaybe<Files_Bool_Exp>
  files_aggregate: InputMaybe<Files_Aggregate_Bool_Exp>
  id: InputMaybe<String_Comparison_Exp>
  maxUploadFileSize: InputMaybe<Int_Comparison_Exp>
  minUploadFileSize: InputMaybe<Int_Comparison_Exp>
  presignedUrlsEnabled: InputMaybe<Boolean_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey',
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export interface Buckets_Inc_Input {
  downloadExpiration: InputMaybe<Scalars['Int']>
  maxUploadFileSize: InputMaybe<Scalars['Int']>
  minUploadFileSize: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "storage.buckets" */
export interface Buckets_Insert_Input {
  cacheControl: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  downloadExpiration: InputMaybe<Scalars['Int']>
  files: InputMaybe<Files_Arr_Rel_Insert_Input>
  id: InputMaybe<Scalars['String']>
  maxUploadFileSize: InputMaybe<Scalars['Int']>
  minUploadFileSize: InputMaybe<Scalars['Int']>
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export interface Buckets_Max_Fields {
  cacheControl: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  downloadExpiration: Maybe<Scalars['Int']>
  id: Maybe<Scalars['String']>
  maxUploadFileSize: Maybe<Scalars['Int']>
  minUploadFileSize: Maybe<Scalars['Int']>
  updatedAt: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export interface Buckets_Min_Fields {
  cacheControl: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  downloadExpiration: Maybe<Scalars['Int']>
  id: Maybe<Scalars['String']>
  maxUploadFileSize: Maybe<Scalars['Int']>
  minUploadFileSize: Maybe<Scalars['Int']>
  updatedAt: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "storage.buckets" */
export interface Buckets_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>
}

/** input type for inserting object relation for remote table "storage.buckets" */
export interface Buckets_Obj_Rel_Insert_Input {
  data: Buckets_Insert_Input
  /** upsert condition */
  on_conflict: InputMaybe<Buckets_On_Conflict>
}

/** on_conflict condition type for table "storage.buckets" */
export interface Buckets_On_Conflict {
  constraint: Buckets_Constraint
  update_columns: Array<Buckets_Update_Column>
  where: InputMaybe<Buckets_Bool_Exp>
}

/** Ordering options when selecting data from "storage.buckets". */
export interface Buckets_Order_By {
  cacheControl: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  downloadExpiration: InputMaybe<Order_By>
  files_aggregate: InputMaybe<Files_Aggregate_Order_By>
  id: InputMaybe<Order_By>
  maxUploadFileSize: InputMaybe<Order_By>
  minUploadFileSize: InputMaybe<Order_By>
  presignedUrlsEnabled: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
}

/** primary key columns input for table: storage.buckets */
export interface Buckets_Pk_Columns_Input {
  id: Scalars['String']
}

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "storage.buckets" */
export interface Buckets_Set_Input {
  cacheControl: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  downloadExpiration: InputMaybe<Scalars['Int']>
  id: InputMaybe<Scalars['String']>
  maxUploadFileSize: InputMaybe<Scalars['Int']>
  minUploadFileSize: InputMaybe<Scalars['Int']>
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export interface Buckets_Stddev_Fields {
  downloadExpiration: Maybe<Scalars['Float']>
  maxUploadFileSize: Maybe<Scalars['Float']>
  minUploadFileSize: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface Buckets_Stddev_Pop_Fields {
  downloadExpiration: Maybe<Scalars['Float']>
  maxUploadFileSize: Maybe<Scalars['Float']>
  minUploadFileSize: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface Buckets_Stddev_Samp_Fields {
  downloadExpiration: Maybe<Scalars['Float']>
  maxUploadFileSize: Maybe<Scalars['Float']>
  minUploadFileSize: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "buckets" */
export interface Buckets_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Buckets_Stream_Cursor_Value_Input {
  cacheControl: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  downloadExpiration: InputMaybe<Scalars['Int']>
  id: InputMaybe<Scalars['String']>
  maxUploadFileSize: InputMaybe<Scalars['Int']>
  minUploadFileSize: InputMaybe<Scalars['Int']>
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export interface Buckets_Sum_Fields {
  downloadExpiration: Maybe<Scalars['Int']>
  maxUploadFileSize: Maybe<Scalars['Int']>
  minUploadFileSize: Maybe<Scalars['Int']>
}

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export interface Buckets_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Buckets_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Buckets_Set_Input>
  where: Buckets_Bool_Exp
}

/** aggregate var_pop on columns */
export interface Buckets_Var_Pop_Fields {
  downloadExpiration: Maybe<Scalars['Float']>
  maxUploadFileSize: Maybe<Scalars['Float']>
  minUploadFileSize: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface Buckets_Var_Samp_Fields {
  downloadExpiration: Maybe<Scalars['Float']>
  maxUploadFileSize: Maybe<Scalars['Float']>
  minUploadFileSize: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface Buckets_Variance_Fields {
  downloadExpiration: Maybe<Scalars['Float']>
  maxUploadFileSize: Maybe<Scalars['Float']>
  minUploadFileSize: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export interface Bytea_Comparison_Exp {
  _eq: InputMaybe<Scalars['bytea']>
  _gt: InputMaybe<Scalars['bytea']>
  _gte: InputMaybe<Scalars['bytea']>
  _in: InputMaybe<Array<Scalars['bytea']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['bytea']>
  _lte: InputMaybe<Scalars['bytea']>
  _neq: InputMaybe<Scalars['bytea']>
  _nin: InputMaybe<Array<Scalars['bytea']>>
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export interface Citext_Comparison_Exp {
  _eq: InputMaybe<Scalars['citext']>
  _gt: InputMaybe<Scalars['citext']>
  _gte: InputMaybe<Scalars['citext']>
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['citext']>
  _in: InputMaybe<Array<Scalars['citext']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['citext']>
  _is_null: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['citext']>
  _lt: InputMaybe<Scalars['citext']>
  _lte: InputMaybe<Scalars['citext']>
  _neq: InputMaybe<Scalars['citext']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['citext']>
  _nin: InputMaybe<Array<Scalars['citext']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['citext']>
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['citext']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['citext']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['citext']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['citext']>
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['citext']>
}

/** columns and relationships of "companies" */
export interface Companies {
  createdAt: Scalars['timestamptz']
  createdBy: Scalars['uuid']
  disabled: Scalars['Boolean']
  fullName: Maybe<Scalars['String']>
  id: Scalars['uuid']
  shortName: Scalars['String']
  updatedAt: Scalars['timestamptz']
  updatedBy: Scalars['uuid']
}

/** aggregated selection of "companies" */
export interface Companies_Aggregate {
  aggregate: Maybe<Companies_Aggregate_Fields>
  nodes: Array<Companies>
}

/** aggregate fields of "companies" */
export interface Companies_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<Companies_Max_Fields>
  min: Maybe<Companies_Min_Fields>
}

/** aggregate fields of "companies" */
export interface Companies_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Companies_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export interface Companies_Bool_Exp {
  _and: InputMaybe<Array<Companies_Bool_Exp>>
  _not: InputMaybe<Companies_Bool_Exp>
  _or: InputMaybe<Array<Companies_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  createdBy: InputMaybe<Uuid_Comparison_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  fullName: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  shortName: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  updatedBy: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint on columns "id" */
  CompaniesPkey = 'companies_pkey',
  /** unique or primary key constraint on columns "short_name" */
  CompaniesShortNameKey = 'companies_short_name_key',
}

/** input type for inserting data into table "companies" */
export interface Companies_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface Companies_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface Companies_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "companies" */
export interface Companies_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Companies>
}

/** on_conflict condition type for table "companies" */
export interface Companies_On_Conflict {
  constraint: Companies_Constraint
  update_columns: Array<Companies_Update_Column>
  where: InputMaybe<Companies_Bool_Exp>
}

/** Ordering options when selecting data from "companies". */
export interface Companies_Order_By {
  createdAt: InputMaybe<Order_By>
  createdBy: InputMaybe<Order_By>
  disabled: InputMaybe<Order_By>
  fullName: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  shortName: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  updatedBy: InputMaybe<Order_By>
}

/** primary key columns input for table: companies */
export interface Companies_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

/** input type for updating data in table "companies" */
export interface Companies_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "companies" */
export interface Companies_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Companies_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Companies_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

export interface Companies_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Companies_Set_Input>
  where: Companies_Bool_Exp
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "storage.files" */
export interface Files {
  /** An object relationship */
  bucket: Buckets
  bucketId: Scalars['String']
  createdAt: Scalars['timestamptz']
  etag: Maybe<Scalars['String']>
  id: Scalars['uuid']
  isUploaded: Maybe<Scalars['Boolean']>
  mimeType: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  size: Maybe<Scalars['Int']>
  updatedAt: Scalars['timestamptz']
  uploadedByUserId: Maybe<Scalars['uuid']>
}

/** aggregated selection of "storage.files" */
export interface Files_Aggregate {
  aggregate: Maybe<Files_Aggregate_Fields>
  nodes: Array<Files>
}

export interface Files_Aggregate_Bool_Exp {
  bool_and: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>
  bool_or: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>
  count: InputMaybe<Files_Aggregate_Bool_Exp_Count>
}

export interface Files_Aggregate_Bool_Exp_Bool_And {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<Files_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export interface Files_Aggregate_Bool_Exp_Bool_Or {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<Files_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export interface Files_Aggregate_Bool_Exp_Count {
  arguments: InputMaybe<Array<Files_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<Files_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "storage.files" */
export interface Files_Aggregate_Fields {
  avg: Maybe<Files_Avg_Fields>
  count: Scalars['Int']
  max: Maybe<Files_Max_Fields>
  min: Maybe<Files_Min_Fields>
  stddev: Maybe<Files_Stddev_Fields>
  stddev_pop: Maybe<Files_Stddev_Pop_Fields>
  stddev_samp: Maybe<Files_Stddev_Samp_Fields>
  sum: Maybe<Files_Sum_Fields>
  var_pop: Maybe<Files_Var_Pop_Fields>
  var_samp: Maybe<Files_Var_Samp_Fields>
  variance: Maybe<Files_Variance_Fields>
}

/** aggregate fields of "storage.files" */
export interface Files_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Files_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "storage.files" */
export interface Files_Aggregate_Order_By {
  avg: InputMaybe<Files_Avg_Order_By>
  count: InputMaybe<Order_By>
  max: InputMaybe<Files_Max_Order_By>
  min: InputMaybe<Files_Min_Order_By>
  stddev: InputMaybe<Files_Stddev_Order_By>
  stddev_pop: InputMaybe<Files_Stddev_Pop_Order_By>
  stddev_samp: InputMaybe<Files_Stddev_Samp_Order_By>
  sum: InputMaybe<Files_Sum_Order_By>
  var_pop: InputMaybe<Files_Var_Pop_Order_By>
  var_samp: InputMaybe<Files_Var_Samp_Order_By>
  variance: InputMaybe<Files_Variance_Order_By>
}

/** input type for inserting array relation for remote table "storage.files" */
export interface Files_Arr_Rel_Insert_Input {
  data: Array<Files_Insert_Input>
  /** upsert condition */
  on_conflict: InputMaybe<Files_On_Conflict>
}

/** aggregate avg on columns */
export interface Files_Avg_Fields {
  size: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "storage.files" */
export interface Files_Avg_Order_By {
  size: InputMaybe<Order_By>
}

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export interface Files_Bool_Exp {
  _and: InputMaybe<Array<Files_Bool_Exp>>
  _not: InputMaybe<Files_Bool_Exp>
  _or: InputMaybe<Array<Files_Bool_Exp>>
  bucket: InputMaybe<Buckets_Bool_Exp>
  bucketId: InputMaybe<String_Comparison_Exp>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  etag: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  isUploaded: InputMaybe<Boolean_Comparison_Exp>
  mimeType: InputMaybe<String_Comparison_Exp>
  name: InputMaybe<String_Comparison_Exp>
  size: InputMaybe<Int_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  uploadedByUserId: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey',
}

/** input type for incrementing numeric columns in table "storage.files" */
export interface Files_Inc_Input {
  size: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "storage.files" */
export interface Files_Insert_Input {
  bucket: InputMaybe<Buckets_Obj_Rel_Insert_Input>
  bucketId: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  etag: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  isUploaded: InputMaybe<Scalars['Boolean']>
  mimeType: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Int']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  uploadedByUserId: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface Files_Max_Fields {
  bucketId: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  etag: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  mimeType: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  size: Maybe<Scalars['Int']>
  updatedAt: Maybe<Scalars['timestamptz']>
  uploadedByUserId: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "storage.files" */
export interface Files_Max_Order_By {
  bucketId: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  etag: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  mimeType: InputMaybe<Order_By>
  name: InputMaybe<Order_By>
  size: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  uploadedByUserId: InputMaybe<Order_By>
}

/** aggregate min on columns */
export interface Files_Min_Fields {
  bucketId: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  etag: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  mimeType: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  size: Maybe<Scalars['Int']>
  updatedAt: Maybe<Scalars['timestamptz']>
  uploadedByUserId: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "storage.files" */
export interface Files_Min_Order_By {
  bucketId: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  etag: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  mimeType: InputMaybe<Order_By>
  name: InputMaybe<Order_By>
  size: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  uploadedByUserId: InputMaybe<Order_By>
}

/** response of any mutation on the table "storage.files" */
export interface Files_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Files>
}

/** on_conflict condition type for table "storage.files" */
export interface Files_On_Conflict {
  constraint: Files_Constraint
  update_columns: Array<Files_Update_Column>
  where: InputMaybe<Files_Bool_Exp>
}

/** Ordering options when selecting data from "storage.files". */
export interface Files_Order_By {
  bucket: InputMaybe<Buckets_Order_By>
  bucketId: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  etag: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  isUploaded: InputMaybe<Order_By>
  mimeType: InputMaybe<Order_By>
  name: InputMaybe<Order_By>
  size: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  uploadedByUserId: InputMaybe<Order_By>
}

/** primary key columns input for table: storage.files */
export interface Files_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId',
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded',
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded',
}

/** input type for updating data in table "storage.files" */
export interface Files_Set_Input {
  bucketId: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  etag: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  isUploaded: InputMaybe<Scalars['Boolean']>
  mimeType: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Int']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  uploadedByUserId: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export interface Files_Stddev_Fields {
  size: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "storage.files" */
export interface Files_Stddev_Order_By {
  size: InputMaybe<Order_By>
}

/** aggregate stddev_pop on columns */
export interface Files_Stddev_Pop_Fields {
  size: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "storage.files" */
export interface Files_Stddev_Pop_Order_By {
  size: InputMaybe<Order_By>
}

/** aggregate stddev_samp on columns */
export interface Files_Stddev_Samp_Fields {
  size: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "storage.files" */
export interface Files_Stddev_Samp_Order_By {
  size: InputMaybe<Order_By>
}

/** Streaming cursor of the table "files" */
export interface Files_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Files_Stream_Cursor_Value_Input {
  bucketId: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  etag: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  isUploaded: InputMaybe<Scalars['Boolean']>
  mimeType: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
  size: InputMaybe<Scalars['Int']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  uploadedByUserId: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export interface Files_Sum_Fields {
  size: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "storage.files" */
export interface Files_Sum_Order_By {
  size: InputMaybe<Order_By>
}

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId',
}

export interface Files_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Files_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Files_Set_Input>
  where: Files_Bool_Exp
}

/** aggregate var_pop on columns */
export interface Files_Var_Pop_Fields {
  size: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "storage.files" */
export interface Files_Var_Pop_Order_By {
  size: InputMaybe<Order_By>
}

/** aggregate var_samp on columns */
export interface Files_Var_Samp_Fields {
  size: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "storage.files" */
export interface Files_Var_Samp_Order_By {
  size: InputMaybe<Order_By>
}

/** aggregate variance on columns */
export interface Files_Variance_Fields {
  size: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "storage.files" */
export interface Files_Variance_Order_By {
  size: InputMaybe<Order_By>
}

/** columns and relationships of "goods_arrival_types" */
export interface GoodsArrivalTypes {
  label: Maybe<Scalars['String']>
  type: Scalars['String']
}

/** aggregated selection of "goods_arrival_types" */
export interface GoodsArrivalTypes_Aggregate {
  aggregate: Maybe<GoodsArrivalTypes_Aggregate_Fields>
  nodes: Array<GoodsArrivalTypes>
}

/** aggregate fields of "goods_arrival_types" */
export interface GoodsArrivalTypes_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<GoodsArrivalTypes_Max_Fields>
  min: Maybe<GoodsArrivalTypes_Min_Fields>
}

/** aggregate fields of "goods_arrival_types" */
export interface GoodsArrivalTypes_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<GoodsArrivalTypes_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "goods_arrival_types". All fields are combined with a logical 'AND'. */
export interface GoodsArrivalTypes_Bool_Exp {
  _and: InputMaybe<Array<GoodsArrivalTypes_Bool_Exp>>
  _not: InputMaybe<GoodsArrivalTypes_Bool_Exp>
  _or: InputMaybe<Array<GoodsArrivalTypes_Bool_Exp>>
  label: InputMaybe<String_Comparison_Exp>
  type: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "goods_arrival_types" */
export enum GoodsArrivalTypes_Constraint {
  /** unique or primary key constraint on columns "type" */
  GoodsArrivalTypesPkey = 'goods_arrival_types_pkey',
}

/** input type for inserting data into table "goods_arrival_types" */
export interface GoodsArrivalTypes_Insert_Input {
  label: InputMaybe<Scalars['String']>
  type: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export interface GoodsArrivalTypes_Max_Fields {
  label: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export interface GoodsArrivalTypes_Min_Fields {
  label: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

/** response of any mutation on the table "goods_arrival_types" */
export interface GoodsArrivalTypes_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<GoodsArrivalTypes>
}

/** on_conflict condition type for table "goods_arrival_types" */
export interface GoodsArrivalTypes_On_Conflict {
  constraint: GoodsArrivalTypes_Constraint
  update_columns: Array<GoodsArrivalTypes_Update_Column>
  where: InputMaybe<GoodsArrivalTypes_Bool_Exp>
}

/** Ordering options when selecting data from "goods_arrival_types". */
export interface GoodsArrivalTypes_Order_By {
  label: InputMaybe<Order_By>
  type: InputMaybe<Order_By>
}

/** primary key columns input for table: goods_arrival_types */
export interface GoodsArrivalTypes_Pk_Columns_Input {
  type: Scalars['String']
}

/** select columns of table "goods_arrival_types" */
export enum GoodsArrivalTypes_Select_Column {
  /** column name */
  Label = 'label',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "goods_arrival_types" */
export interface GoodsArrivalTypes_Set_Input {
  label: InputMaybe<Scalars['String']>
  type: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "goodsArrivalTypes" */
export interface GoodsArrivalTypes_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: GoodsArrivalTypes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface GoodsArrivalTypes_Stream_Cursor_Value_Input {
  label: InputMaybe<Scalars['String']>
  type: InputMaybe<Scalars['String']>
}

/** update columns of table "goods_arrival_types" */
export enum GoodsArrivalTypes_Update_Column {
  /** column name */
  Label = 'label',
  /** column name */
  Type = 'type',
}

export interface GoodsArrivalTypes_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<GoodsArrivalTypes_Set_Input>
  where: GoodsArrivalTypes_Bool_Exp
}

export interface Jsonb_Cast_Exp {
  String: InputMaybe<String_Comparison_Exp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface Jsonb_Comparison_Exp {
  _cast: InputMaybe<Jsonb_Cast_Exp>
  /** is the column contained in the given json value */
  _contained_in: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains: InputMaybe<Scalars['jsonb']>
  _eq: InputMaybe<Scalars['jsonb']>
  _gt: InputMaybe<Scalars['jsonb']>
  _gte: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any: InputMaybe<Array<Scalars['String']>>
  _in: InputMaybe<Array<Scalars['jsonb']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['jsonb']>
  _lte: InputMaybe<Scalars['jsonb']>
  _neq: InputMaybe<Scalars['jsonb']>
  _nin: InputMaybe<Array<Scalars['jsonb']>>
}

/** mutation root */
export interface Mutation_Root {
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider: Maybe<AuthProviders>
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest: Maybe<AuthProviderRequests>
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests: Maybe<AuthProviderRequests_Mutation_Response>
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders: Maybe<AuthProviders_Mutation_Response>
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken: Maybe<AuthRefreshTokens>
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens: Maybe<AuthRefreshTokens_Mutation_Response>
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole: Maybe<AuthRoles>
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles: Maybe<AuthRoles_Mutation_Response>
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider: Maybe<AuthUserProviders>
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders: Maybe<AuthUserProviders_Mutation_Response>
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole: Maybe<AuthUserRoles>
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles: Maybe<AuthUserRoles_Mutation_Response>
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey: Maybe<AuthUserSecurityKeys>
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys: Maybe<AuthUserSecurityKeys_Mutation_Response>
  /** delete single row from the table: "storage.buckets" */
  deleteBucket: Maybe<Buckets>
  /** delete data from the table: "storage.buckets" */
  deleteBuckets: Maybe<Buckets_Mutation_Response>
  /** delete data from the table: "companies" */
  deleteCompanies: Maybe<Companies_Mutation_Response>
  /** delete single row from the table: "companies" */
  deleteCompany: Maybe<Companies>
  /** delete single row from the table: "storage.files" */
  deleteFile: Maybe<Files>
  /** delete data from the table: "storage.files" */
  deleteFiles: Maybe<Files_Mutation_Response>
  /** delete single row from the table: "goods_arrival_types" */
  deleteGoodsArrivalType: Maybe<GoodsArrivalTypes>
  /** delete data from the table: "goods_arrival_types" */
  deleteGoodsArrivalTypes: Maybe<GoodsArrivalTypes_Mutation_Response>
  /** delete single row from the table: "products" */
  deleteProduct: Maybe<Products>
  /** delete single row from the table: "product_groups" */
  deleteProductGroup: Maybe<ProductGroups>
  /** delete data from the table: "product_groups" */
  deleteProductGroups: Maybe<ProductGroups_Mutation_Response>
  /** delete single row from the table: "product_passports" */
  deleteProductPassport: Maybe<ProductPassports>
  /** delete data from the table: "product_passports" */
  deleteProductPassports: Maybe<ProductPassports_Mutation_Response>
  /** delete data from the table: "products" */
  deleteProducts: Maybe<Products_Mutation_Response>
  /** delete single row from the table: "auth.users" */
  deleteUser: Maybe<Users>
  /** delete data from the table: "auth.users" */
  deleteUsers: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "warehouses" */
  deleteWarehouse: Maybe<Warehouses>
  /** delete single row from the table: "warehouse_groups" */
  deleteWarehouseGroup: Maybe<WarehouseGroups>
  /** delete data from the table: "warehouse_groups" */
  deleteWarehouseGroups: Maybe<WarehouseGroups_Mutation_Response>
  /** delete single row from the table: "warehouse_storages" */
  deleteWarehouseStorage: Maybe<WarehouseStorages>
  /** delete data from the table: "warehouse_storages" */
  deleteWarehouseStorages: Maybe<WarehouseStorages_Mutation_Response>
  /** delete data from the table: "warehouses" */
  deleteWarehouses: Maybe<Warehouses_Mutation_Response>
  /** delete data from the table: "auth.migrations" */
  delete_auth_migrations: Maybe<Auth_Migrations_Mutation_Response>
  /** delete single row from the table: "auth.migrations" */
  delete_auth_migrations_by_pk: Maybe<Auth_Migrations>
  /** delete data from the table: "storage.schema_migrations" */
  delete_storage_schema_migrations: Maybe<Storage_Schema_Migrations_Mutation_Response>
  /** delete single row from the table: "storage.schema_migrations" */
  delete_storage_schema_migrations_by_pk: Maybe<Storage_Schema_Migrations>
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider: Maybe<AuthProviders>
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest: Maybe<AuthProviderRequests>
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests: Maybe<AuthProviderRequests_Mutation_Response>
  /** insert data into the table: "auth.providers" */
  insertAuthProviders: Maybe<AuthProviders_Mutation_Response>
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken: Maybe<AuthRefreshTokens>
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens: Maybe<AuthRefreshTokens_Mutation_Response>
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole: Maybe<AuthRoles>
  /** insert data into the table: "auth.roles" */
  insertAuthRoles: Maybe<AuthRoles_Mutation_Response>
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider: Maybe<AuthUserProviders>
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders: Maybe<AuthUserProviders_Mutation_Response>
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole: Maybe<AuthUserRoles>
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles: Maybe<AuthUserRoles_Mutation_Response>
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey: Maybe<AuthUserSecurityKeys>
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys: Maybe<AuthUserSecurityKeys_Mutation_Response>
  /** insert a single row into the table: "storage.buckets" */
  insertBucket: Maybe<Buckets>
  /** insert data into the table: "storage.buckets" */
  insertBuckets: Maybe<Buckets_Mutation_Response>
  /** insert data into the table: "companies" */
  insertCompanies: Maybe<Companies_Mutation_Response>
  /** insert a single row into the table: "companies" */
  insertCompany: Maybe<Companies>
  /** insert a single row into the table: "storage.files" */
  insertFile: Maybe<Files>
  /** insert data into the table: "storage.files" */
  insertFiles: Maybe<Files_Mutation_Response>
  /** insert a single row into the table: "goods_arrival_types" */
  insertGoodsArrivalType: Maybe<GoodsArrivalTypes>
  /** insert data into the table: "goods_arrival_types" */
  insertGoodsArrivalTypes: Maybe<GoodsArrivalTypes_Mutation_Response>
  /** insert a single row into the table: "products" */
  insertProduct: Maybe<Products>
  /** insert a single row into the table: "product_groups" */
  insertProductGroup: Maybe<ProductGroups>
  /** insert data into the table: "product_groups" */
  insertProductGroups: Maybe<ProductGroups_Mutation_Response>
  /** insert a single row into the table: "product_passports" */
  insertProductPassport: Maybe<ProductPassports>
  /** insert data into the table: "product_passports" */
  insertProductPassports: Maybe<ProductPassports_Mutation_Response>
  /** insert data into the table: "products" */
  insertProducts: Maybe<Products_Mutation_Response>
  /** insert a single row into the table: "auth.users" */
  insertUser: Maybe<Users>
  /** insert data into the table: "auth.users" */
  insertUsers: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "warehouses" */
  insertWarehouse: Maybe<Warehouses>
  /** insert a single row into the table: "warehouse_groups" */
  insertWarehouseGroup: Maybe<WarehouseGroups>
  /** insert data into the table: "warehouse_groups" */
  insertWarehouseGroups: Maybe<WarehouseGroups_Mutation_Response>
  /** insert a single row into the table: "warehouse_storages" */
  insertWarehouseStorage: Maybe<WarehouseStorages>
  /** insert data into the table: "warehouse_storages" */
  insertWarehouseStorages: Maybe<WarehouseStorages_Mutation_Response>
  /** insert data into the table: "warehouses" */
  insertWarehouses: Maybe<Warehouses_Mutation_Response>
  /** insert data into the table: "auth.migrations" */
  insert_auth_migrations: Maybe<Auth_Migrations_Mutation_Response>
  /** insert a single row into the table: "auth.migrations" */
  insert_auth_migrations_one: Maybe<Auth_Migrations>
  /** insert data into the table: "storage.schema_migrations" */
  insert_storage_schema_migrations: Maybe<Storage_Schema_Migrations_Mutation_Response>
  /** insert a single row into the table: "storage.schema_migrations" */
  insert_storage_schema_migrations_one: Maybe<Storage_Schema_Migrations>
  /** update single row of the table: "auth.providers" */
  updateAuthProvider: Maybe<AuthProviders>
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest: Maybe<AuthProviderRequests>
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests: Maybe<AuthProviderRequests_Mutation_Response>
  /** update data of the table: "auth.providers" */
  updateAuthProviders: Maybe<AuthProviders_Mutation_Response>
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken: Maybe<AuthRefreshTokens>
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens: Maybe<AuthRefreshTokens_Mutation_Response>
  /** update single row of the table: "auth.roles" */
  updateAuthRole: Maybe<AuthRoles>
  /** update data of the table: "auth.roles" */
  updateAuthRoles: Maybe<AuthRoles_Mutation_Response>
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider: Maybe<AuthUserProviders>
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders: Maybe<AuthUserProviders_Mutation_Response>
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole: Maybe<AuthUserRoles>
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles: Maybe<AuthUserRoles_Mutation_Response>
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey: Maybe<AuthUserSecurityKeys>
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys: Maybe<AuthUserSecurityKeys_Mutation_Response>
  /** update single row of the table: "storage.buckets" */
  updateBucket: Maybe<Buckets>
  /** update data of the table: "storage.buckets" */
  updateBuckets: Maybe<Buckets_Mutation_Response>
  /** update data of the table: "companies" */
  updateCompanies: Maybe<Companies_Mutation_Response>
  /** update single row of the table: "companies" */
  updateCompany: Maybe<Companies>
  /** update single row of the table: "storage.files" */
  updateFile: Maybe<Files>
  /** update data of the table: "storage.files" */
  updateFiles: Maybe<Files_Mutation_Response>
  /** update single row of the table: "goods_arrival_types" */
  updateGoodsArrivalType: Maybe<GoodsArrivalTypes>
  /** update data of the table: "goods_arrival_types" */
  updateGoodsArrivalTypes: Maybe<GoodsArrivalTypes_Mutation_Response>
  /** update single row of the table: "products" */
  updateProduct: Maybe<Products>
  /** update single row of the table: "product_groups" */
  updateProductGroup: Maybe<ProductGroups>
  /** update data of the table: "product_groups" */
  updateProductGroups: Maybe<ProductGroups_Mutation_Response>
  /** update single row of the table: "product_passports" */
  updateProductPassport: Maybe<ProductPassports>
  /** update data of the table: "product_passports" */
  updateProductPassports: Maybe<ProductPassports_Mutation_Response>
  /** update data of the table: "products" */
  updateProducts: Maybe<Products_Mutation_Response>
  /** update single row of the table: "auth.users" */
  updateUser: Maybe<Users>
  /** update data of the table: "auth.users" */
  updateUsers: Maybe<Users_Mutation_Response>
  /** update single row of the table: "warehouses" */
  updateWarehouse: Maybe<Warehouses>
  /** update single row of the table: "warehouse_groups" */
  updateWarehouseGroup: Maybe<WarehouseGroups>
  /** update data of the table: "warehouse_groups" */
  updateWarehouseGroups: Maybe<WarehouseGroups_Mutation_Response>
  /** update single row of the table: "warehouse_storages" */
  updateWarehouseStorage: Maybe<WarehouseStorages>
  /** update data of the table: "warehouse_storages" */
  updateWarehouseStorages: Maybe<WarehouseStorages_Mutation_Response>
  /** update data of the table: "warehouses" */
  updateWarehouses: Maybe<Warehouses_Mutation_Response>
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many: Maybe<
    Array<Maybe<AuthProviderRequests_Mutation_Response>>
  >
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many: Maybe<
    Array<Maybe<AuthProviders_Mutation_Response>>
  >
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many: Maybe<
    Array<Maybe<AuthRefreshTokens_Mutation_Response>>
  >
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many: Maybe<
    Array<Maybe<AuthUserProviders_Mutation_Response>>
  >
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many: Maybe<
    Array<Maybe<AuthUserRoles_Mutation_Response>>
  >
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many: Maybe<
    Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>
  >
  /** update data of the table: "auth.migrations" */
  update_auth_migrations: Maybe<Auth_Migrations_Mutation_Response>
  /** update single row of the table: "auth.migrations" */
  update_auth_migrations_by_pk: Maybe<Auth_Migrations>
  /** update multiples rows of table: "auth.migrations" */
  update_auth_migrations_many: Maybe<
    Array<Maybe<Auth_Migrations_Mutation_Response>>
  >
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many: Maybe<Array<Maybe<Buckets_Mutation_Response>>>
  /** update multiples rows of table: "companies" */
  update_companies_many: Maybe<Array<Maybe<Companies_Mutation_Response>>>
  /** update multiples rows of table: "storage.files" */
  update_files_many: Maybe<Array<Maybe<Files_Mutation_Response>>>
  /** update multiples rows of table: "goods_arrival_types" */
  update_goodsArrivalTypes_many: Maybe<
    Array<Maybe<GoodsArrivalTypes_Mutation_Response>>
  >
  /** update multiples rows of table: "product_groups" */
  update_productGroups_many: Maybe<
    Array<Maybe<ProductGroups_Mutation_Response>>
  >
  /** update multiples rows of table: "product_passports" */
  update_productPassports_many: Maybe<
    Array<Maybe<ProductPassports_Mutation_Response>>
  >
  /** update multiples rows of table: "products" */
  update_products_many: Maybe<Array<Maybe<Products_Mutation_Response>>>
  /** update data of the table: "storage.schema_migrations" */
  update_storage_schema_migrations: Maybe<Storage_Schema_Migrations_Mutation_Response>
  /** update single row of the table: "storage.schema_migrations" */
  update_storage_schema_migrations_by_pk: Maybe<Storage_Schema_Migrations>
  /** update multiples rows of table: "storage.schema_migrations" */
  update_storage_schema_migrations_many: Maybe<
    Array<Maybe<Storage_Schema_Migrations_Mutation_Response>>
  >
  /** update multiples rows of table: "auth.users" */
  update_users_many: Maybe<Array<Maybe<Users_Mutation_Response>>>
  /** update multiples rows of table: "warehouse_groups" */
  update_warehouseGroups_many: Maybe<
    Array<Maybe<WarehouseGroups_Mutation_Response>>
  >
  /** update multiples rows of table: "warehouse_storages" */
  update_warehouseStorages_many: Maybe<
    Array<Maybe<WarehouseStorages_Mutation_Response>>
  >
  /** update multiples rows of table: "warehouses" */
  update_warehouses_many: Maybe<Array<Maybe<Warehouses_Mutation_Response>>>
}

/** mutation root */
export interface Mutation_RootDeleteAuthProviderArgs {
  id: Scalars['String']
}

/** mutation root */
export interface Mutation_RootDeleteAuthProviderRequestArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteAuthProviderRequestsArgs {
  where: AuthProviderRequests_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteAuthProvidersArgs {
  where: AuthProviders_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteAuthRefreshTokenArgs {
  refreshToken: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteAuthRefreshTokensArgs {
  where: AuthRefreshTokens_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteAuthRoleArgs {
  role: Scalars['String']
}

/** mutation root */
export interface Mutation_RootDeleteAuthRolesArgs {
  where: AuthRoles_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteAuthUserProviderArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteAuthUserProvidersArgs {
  where: AuthUserProviders_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteAuthUserRoleArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteAuthUserRolesArgs {
  where: AuthUserRoles_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteAuthUserSecurityKeyArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteAuthUserSecurityKeysArgs {
  where: AuthUserSecurityKeys_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteBucketArgs {
  id: Scalars['String']
}

/** mutation root */
export interface Mutation_RootDeleteBucketsArgs {
  where: Buckets_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteCompaniesArgs {
  where: Companies_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteCompanyArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteFileArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteFilesArgs {
  where: Files_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteGoodsArrivalTypeArgs {
  type: Scalars['String']
}

/** mutation root */
export interface Mutation_RootDeleteGoodsArrivalTypesArgs {
  where: GoodsArrivalTypes_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteProductArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteProductGroupArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteProductGroupsArgs {
  where: ProductGroups_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteProductPassportArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteProductPassportsArgs {
  where: ProductPassports_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteProductsArgs {
  where: Products_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteUserArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteUsersArgs {
  where: Users_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteWarehouseArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteWarehouseGroupArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteWarehouseGroupsArgs {
  where: WarehouseGroups_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteWarehouseStorageArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDeleteWarehouseStoragesArgs {
  where: WarehouseStorages_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDeleteWarehousesArgs {
  where: Warehouses_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_Auth_MigrationsArgs {
  where: Auth_Migrations_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_Auth_Migrations_By_PkArgs {
  id: Scalars['Int']
}

/** mutation root */
export interface Mutation_RootDelete_Storage_Schema_MigrationsArgs {
  where: Storage_Schema_Migrations_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_Storage_Schema_Migrations_By_PkArgs {
  version: Scalars['bigint']
}

/** mutation root */
export interface Mutation_RootInsertAuthProviderArgs {
  object: AuthProviders_Insert_Input
  on_conflict: InputMaybe<AuthProviders_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthProviderRequestArgs {
  object: AuthProviderRequests_Insert_Input
  on_conflict: InputMaybe<AuthProviderRequests_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthProviderRequestsArgs {
  objects: Array<AuthProviderRequests_Insert_Input>
  on_conflict: InputMaybe<AuthProviderRequests_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthProvidersArgs {
  objects: Array<AuthProviders_Insert_Input>
  on_conflict: InputMaybe<AuthProviders_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthRefreshTokenArgs {
  object: AuthRefreshTokens_Insert_Input
  on_conflict: InputMaybe<AuthRefreshTokens_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthRefreshTokensArgs {
  objects: Array<AuthRefreshTokens_Insert_Input>
  on_conflict: InputMaybe<AuthRefreshTokens_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthRoleArgs {
  object: AuthRoles_Insert_Input
  on_conflict: InputMaybe<AuthRoles_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthRolesArgs {
  objects: Array<AuthRoles_Insert_Input>
  on_conflict: InputMaybe<AuthRoles_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthUserProviderArgs {
  object: AuthUserProviders_Insert_Input
  on_conflict: InputMaybe<AuthUserProviders_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthUserProvidersArgs {
  objects: Array<AuthUserProviders_Insert_Input>
  on_conflict: InputMaybe<AuthUserProviders_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthUserRoleArgs {
  object: AuthUserRoles_Insert_Input
  on_conflict: InputMaybe<AuthUserRoles_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthUserRolesArgs {
  objects: Array<AuthUserRoles_Insert_Input>
  on_conflict: InputMaybe<AuthUserRoles_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthUserSecurityKeyArgs {
  object: AuthUserSecurityKeys_Insert_Input
  on_conflict: InputMaybe<AuthUserSecurityKeys_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertAuthUserSecurityKeysArgs {
  objects: Array<AuthUserSecurityKeys_Insert_Input>
  on_conflict: InputMaybe<AuthUserSecurityKeys_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertBucketArgs {
  object: Buckets_Insert_Input
  on_conflict: InputMaybe<Buckets_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertBucketsArgs {
  objects: Array<Buckets_Insert_Input>
  on_conflict: InputMaybe<Buckets_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertCompaniesArgs {
  objects: Array<Companies_Insert_Input>
  on_conflict: InputMaybe<Companies_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertCompanyArgs {
  object: Companies_Insert_Input
  on_conflict: InputMaybe<Companies_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertFileArgs {
  object: Files_Insert_Input
  on_conflict: InputMaybe<Files_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertFilesArgs {
  objects: Array<Files_Insert_Input>
  on_conflict: InputMaybe<Files_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertGoodsArrivalTypeArgs {
  object: GoodsArrivalTypes_Insert_Input
  on_conflict: InputMaybe<GoodsArrivalTypes_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertGoodsArrivalTypesArgs {
  objects: Array<GoodsArrivalTypes_Insert_Input>
  on_conflict: InputMaybe<GoodsArrivalTypes_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertProductArgs {
  object: Products_Insert_Input
  on_conflict: InputMaybe<Products_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertProductGroupArgs {
  object: ProductGroups_Insert_Input
  on_conflict: InputMaybe<ProductGroups_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertProductGroupsArgs {
  objects: Array<ProductGroups_Insert_Input>
  on_conflict: InputMaybe<ProductGroups_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertProductPassportArgs {
  object: ProductPassports_Insert_Input
  on_conflict: InputMaybe<ProductPassports_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertProductPassportsArgs {
  objects: Array<ProductPassports_Insert_Input>
  on_conflict: InputMaybe<ProductPassports_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertProductsArgs {
  objects: Array<Products_Insert_Input>
  on_conflict: InputMaybe<Products_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertUserArgs {
  object: Users_Insert_Input
  on_conflict: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertUsersArgs {
  objects: Array<Users_Insert_Input>
  on_conflict: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertWarehouseArgs {
  object: Warehouses_Insert_Input
  on_conflict: InputMaybe<Warehouses_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertWarehouseGroupArgs {
  object: WarehouseGroups_Insert_Input
  on_conflict: InputMaybe<WarehouseGroups_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertWarehouseGroupsArgs {
  objects: Array<WarehouseGroups_Insert_Input>
  on_conflict: InputMaybe<WarehouseGroups_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertWarehouseStorageArgs {
  object: WarehouseStorages_Insert_Input
  on_conflict: InputMaybe<WarehouseStorages_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertWarehouseStoragesArgs {
  objects: Array<WarehouseStorages_Insert_Input>
  on_conflict: InputMaybe<WarehouseStorages_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsertWarehousesArgs {
  objects: Array<Warehouses_Insert_Input>
  on_conflict: InputMaybe<Warehouses_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Auth_MigrationsArgs {
  objects: Array<Auth_Migrations_Insert_Input>
  on_conflict: InputMaybe<Auth_Migrations_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Auth_Migrations_OneArgs {
  object: Auth_Migrations_Insert_Input
  on_conflict: InputMaybe<Auth_Migrations_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Storage_Schema_MigrationsArgs {
  objects: Array<Storage_Schema_Migrations_Insert_Input>
  on_conflict: InputMaybe<Storage_Schema_Migrations_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Storage_Schema_Migrations_OneArgs {
  object: Storage_Schema_Migrations_Insert_Input
  on_conflict: InputMaybe<Storage_Schema_Migrations_On_Conflict>
}

/** mutation root */
export interface Mutation_RootUpdateAuthProviderArgs {
  _set: InputMaybe<AuthProviders_Set_Input>
  pk_columns: AuthProviders_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateAuthProviderRequestArgs {
  _append: InputMaybe<AuthProviderRequests_Append_Input>
  _delete_at_path: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>
  _delete_elem: InputMaybe<AuthProviderRequests_Delete_Elem_Input>
  _delete_key: InputMaybe<AuthProviderRequests_Delete_Key_Input>
  _prepend: InputMaybe<AuthProviderRequests_Prepend_Input>
  _set: InputMaybe<AuthProviderRequests_Set_Input>
  pk_columns: AuthProviderRequests_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateAuthProviderRequestsArgs {
  _append: InputMaybe<AuthProviderRequests_Append_Input>
  _delete_at_path: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>
  _delete_elem: InputMaybe<AuthProviderRequests_Delete_Elem_Input>
  _delete_key: InputMaybe<AuthProviderRequests_Delete_Key_Input>
  _prepend: InputMaybe<AuthProviderRequests_Prepend_Input>
  _set: InputMaybe<AuthProviderRequests_Set_Input>
  where: AuthProviderRequests_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateAuthProvidersArgs {
  _set: InputMaybe<AuthProviders_Set_Input>
  where: AuthProviders_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateAuthRefreshTokenArgs {
  _set: InputMaybe<AuthRefreshTokens_Set_Input>
  pk_columns: AuthRefreshTokens_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateAuthRefreshTokensArgs {
  _set: InputMaybe<AuthRefreshTokens_Set_Input>
  where: AuthRefreshTokens_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateAuthRoleArgs {
  _set: InputMaybe<AuthRoles_Set_Input>
  pk_columns: AuthRoles_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateAuthRolesArgs {
  _set: InputMaybe<AuthRoles_Set_Input>
  where: AuthRoles_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateAuthUserProviderArgs {
  _set: InputMaybe<AuthUserProviders_Set_Input>
  pk_columns: AuthUserProviders_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateAuthUserProvidersArgs {
  _set: InputMaybe<AuthUserProviders_Set_Input>
  where: AuthUserProviders_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateAuthUserRoleArgs {
  _set: InputMaybe<AuthUserRoles_Set_Input>
  pk_columns: AuthUserRoles_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateAuthUserRolesArgs {
  _set: InputMaybe<AuthUserRoles_Set_Input>
  where: AuthUserRoles_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateAuthUserSecurityKeyArgs {
  _inc: InputMaybe<AuthUserSecurityKeys_Inc_Input>
  _set: InputMaybe<AuthUserSecurityKeys_Set_Input>
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateAuthUserSecurityKeysArgs {
  _inc: InputMaybe<AuthUserSecurityKeys_Inc_Input>
  _set: InputMaybe<AuthUserSecurityKeys_Set_Input>
  where: AuthUserSecurityKeys_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateBucketArgs {
  _inc: InputMaybe<Buckets_Inc_Input>
  _set: InputMaybe<Buckets_Set_Input>
  pk_columns: Buckets_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateBucketsArgs {
  _inc: InputMaybe<Buckets_Inc_Input>
  _set: InputMaybe<Buckets_Set_Input>
  where: Buckets_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateCompaniesArgs {
  _set: InputMaybe<Companies_Set_Input>
  where: Companies_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateCompanyArgs {
  _set: InputMaybe<Companies_Set_Input>
  pk_columns: Companies_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateFileArgs {
  _inc: InputMaybe<Files_Inc_Input>
  _set: InputMaybe<Files_Set_Input>
  pk_columns: Files_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateFilesArgs {
  _inc: InputMaybe<Files_Inc_Input>
  _set: InputMaybe<Files_Set_Input>
  where: Files_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateGoodsArrivalTypeArgs {
  _set: InputMaybe<GoodsArrivalTypes_Set_Input>
  pk_columns: GoodsArrivalTypes_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateGoodsArrivalTypesArgs {
  _set: InputMaybe<GoodsArrivalTypes_Set_Input>
  where: GoodsArrivalTypes_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateProductArgs {
  _set: InputMaybe<Products_Set_Input>
  pk_columns: Products_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateProductGroupArgs {
  _set: InputMaybe<ProductGroups_Set_Input>
  pk_columns: ProductGroups_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateProductGroupsArgs {
  _set: InputMaybe<ProductGroups_Set_Input>
  where: ProductGroups_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateProductPassportArgs {
  _inc: InputMaybe<ProductPassports_Inc_Input>
  _set: InputMaybe<ProductPassports_Set_Input>
  pk_columns: ProductPassports_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateProductPassportsArgs {
  _inc: InputMaybe<ProductPassports_Inc_Input>
  _set: InputMaybe<ProductPassports_Set_Input>
  where: ProductPassports_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateProductsArgs {
  _set: InputMaybe<Products_Set_Input>
  where: Products_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateUserArgs {
  _append: InputMaybe<Users_Append_Input>
  _delete_at_path: InputMaybe<Users_Delete_At_Path_Input>
  _delete_elem: InputMaybe<Users_Delete_Elem_Input>
  _delete_key: InputMaybe<Users_Delete_Key_Input>
  _prepend: InputMaybe<Users_Prepend_Input>
  _set: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateUsersArgs {
  _append: InputMaybe<Users_Append_Input>
  _delete_at_path: InputMaybe<Users_Delete_At_Path_Input>
  _delete_elem: InputMaybe<Users_Delete_Elem_Input>
  _delete_key: InputMaybe<Users_Delete_Key_Input>
  _prepend: InputMaybe<Users_Prepend_Input>
  _set: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateWarehouseArgs {
  _set: InputMaybe<Warehouses_Set_Input>
  pk_columns: Warehouses_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateWarehouseGroupArgs {
  _set: InputMaybe<WarehouseGroups_Set_Input>
  pk_columns: WarehouseGroups_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateWarehouseGroupsArgs {
  _set: InputMaybe<WarehouseGroups_Set_Input>
  where: WarehouseGroups_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateWarehouseStorageArgs {
  _set: InputMaybe<WarehouseStorages_Set_Input>
  pk_columns: WarehouseStorages_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdateWarehouseStoragesArgs {
  _set: InputMaybe<WarehouseStorages_Set_Input>
  where: WarehouseStorages_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdateWarehousesArgs {
  _set: InputMaybe<Warehouses_Set_Input>
  where: Warehouses_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_AuthProviderRequests_ManyArgs {
  updates: Array<AuthProviderRequests_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_AuthProviders_ManyArgs {
  updates: Array<AuthProviders_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_AuthRefreshTokens_ManyArgs {
  updates: Array<AuthRefreshTokens_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_AuthRoles_ManyArgs {
  updates: Array<AuthRoles_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_AuthUserProviders_ManyArgs {
  updates: Array<AuthUserProviders_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_AuthUserRoles_ManyArgs {
  updates: Array<AuthUserRoles_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs {
  updates: Array<AuthUserSecurityKeys_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Auth_MigrationsArgs {
  _inc: InputMaybe<Auth_Migrations_Inc_Input>
  _set: InputMaybe<Auth_Migrations_Set_Input>
  where: Auth_Migrations_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_Auth_Migrations_By_PkArgs {
  _inc: InputMaybe<Auth_Migrations_Inc_Input>
  _set: InputMaybe<Auth_Migrations_Set_Input>
  pk_columns: Auth_Migrations_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdate_Auth_Migrations_ManyArgs {
  updates: Array<Auth_Migrations_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Buckets_ManyArgs {
  updates: Array<Buckets_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Companies_ManyArgs {
  updates: Array<Companies_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Files_ManyArgs {
  updates: Array<Files_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_GoodsArrivalTypes_ManyArgs {
  updates: Array<GoodsArrivalTypes_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_ProductGroups_ManyArgs {
  updates: Array<ProductGroups_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_ProductPassports_ManyArgs {
  updates: Array<ProductPassports_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Products_ManyArgs {
  updates: Array<Products_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Storage_Schema_MigrationsArgs {
  _inc: InputMaybe<Storage_Schema_Migrations_Inc_Input>
  _set: InputMaybe<Storage_Schema_Migrations_Set_Input>
  where: Storage_Schema_Migrations_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_Storage_Schema_Migrations_By_PkArgs {
  _inc: InputMaybe<Storage_Schema_Migrations_Inc_Input>
  _set: InputMaybe<Storage_Schema_Migrations_Set_Input>
  pk_columns: Storage_Schema_Migrations_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdate_Storage_Schema_Migrations_ManyArgs {
  updates: Array<Storage_Schema_Migrations_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Users_ManyArgs {
  updates: Array<Users_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_WarehouseGroups_ManyArgs {
  updates: Array<WarehouseGroups_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_WarehouseStorages_ManyArgs {
  updates: Array<WarehouseStorages_Updates>
}

/** mutation root */
export interface Mutation_RootUpdate_Warehouses_ManyArgs {
  updates: Array<Warehouses_Updates>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "product_groups" */
export interface ProductGroups {
  createdAt: Scalars['timestamptz']
  createdBy: Scalars['uuid']
  disabled: Scalars['Boolean']
  fullName: Maybe<Scalars['String']>
  id: Scalars['uuid']
  shortName: Scalars['String']
  updatedAt: Scalars['timestamptz']
  updatedBy: Scalars['uuid']
}

/** aggregated selection of "product_groups" */
export interface ProductGroups_Aggregate {
  aggregate: Maybe<ProductGroups_Aggregate_Fields>
  nodes: Array<ProductGroups>
}

/** aggregate fields of "product_groups" */
export interface ProductGroups_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<ProductGroups_Max_Fields>
  min: Maybe<ProductGroups_Min_Fields>
}

/** aggregate fields of "product_groups" */
export interface ProductGroups_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<ProductGroups_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "product_groups". All fields are combined with a logical 'AND'. */
export interface ProductGroups_Bool_Exp {
  _and: InputMaybe<Array<ProductGroups_Bool_Exp>>
  _not: InputMaybe<ProductGroups_Bool_Exp>
  _or: InputMaybe<Array<ProductGroups_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  createdBy: InputMaybe<Uuid_Comparison_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  fullName: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  shortName: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  updatedBy: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "product_groups" */
export enum ProductGroups_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductGroupsPkey = 'product_groups_pkey',
  /** unique or primary key constraint on columns "short_name" */
  ProductGroupsShortNameKey = 'product_groups_short_name_key',
}

/** input type for inserting data into table "product_groups" */
export interface ProductGroups_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface ProductGroups_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface ProductGroups_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "product_groups" */
export interface ProductGroups_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<ProductGroups>
}

/** on_conflict condition type for table "product_groups" */
export interface ProductGroups_On_Conflict {
  constraint: ProductGroups_Constraint
  update_columns: Array<ProductGroups_Update_Column>
  where: InputMaybe<ProductGroups_Bool_Exp>
}

/** Ordering options when selecting data from "product_groups". */
export interface ProductGroups_Order_By {
  createdAt: InputMaybe<Order_By>
  createdBy: InputMaybe<Order_By>
  disabled: InputMaybe<Order_By>
  fullName: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  shortName: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  updatedBy: InputMaybe<Order_By>
}

/** primary key columns input for table: product_groups */
export interface ProductGroups_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "product_groups" */
export enum ProductGroups_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

/** input type for updating data in table "product_groups" */
export interface ProductGroups_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "productGroups" */
export interface ProductGroups_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: ProductGroups_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface ProductGroups_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** update columns of table "product_groups" */
export enum ProductGroups_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

export interface ProductGroups_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<ProductGroups_Set_Input>
  where: ProductGroups_Bool_Exp
}

/** columns and relationships of "product_passports" */
export interface ProductPassports {
  createdAt: Scalars['timestamptz']
  createdBy: Scalars['uuid']
  date: Scalars['timestamptz']
  density: Scalars['Float']
  disabled: Scalars['Boolean']
  id: Scalars['uuid']
  number: Scalars['String']
  producerId: Scalars['uuid']
  product_id: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  updatedBy: Scalars['uuid']
}

/** aggregated selection of "product_passports" */
export interface ProductPassports_Aggregate {
  aggregate: Maybe<ProductPassports_Aggregate_Fields>
  nodes: Array<ProductPassports>
}

/** aggregate fields of "product_passports" */
export interface ProductPassports_Aggregate_Fields {
  avg: Maybe<ProductPassports_Avg_Fields>
  count: Scalars['Int']
  max: Maybe<ProductPassports_Max_Fields>
  min: Maybe<ProductPassports_Min_Fields>
  stddev: Maybe<ProductPassports_Stddev_Fields>
  stddev_pop: Maybe<ProductPassports_Stddev_Pop_Fields>
  stddev_samp: Maybe<ProductPassports_Stddev_Samp_Fields>
  sum: Maybe<ProductPassports_Sum_Fields>
  var_pop: Maybe<ProductPassports_Var_Pop_Fields>
  var_samp: Maybe<ProductPassports_Var_Samp_Fields>
  variance: Maybe<ProductPassports_Variance_Fields>
}

/** aggregate fields of "product_passports" */
export interface ProductPassports_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<ProductPassports_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface ProductPassports_Avg_Fields {
  density: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "product_passports". All fields are combined with a logical 'AND'. */
export interface ProductPassports_Bool_Exp {
  _and: InputMaybe<Array<ProductPassports_Bool_Exp>>
  _not: InputMaybe<ProductPassports_Bool_Exp>
  _or: InputMaybe<Array<ProductPassports_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  createdBy: InputMaybe<Uuid_Comparison_Exp>
  date: InputMaybe<Timestamptz_Comparison_Exp>
  density: InputMaybe<Float_Comparison_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  number: InputMaybe<String_Comparison_Exp>
  producerId: InputMaybe<Uuid_Comparison_Exp>
  product_id: InputMaybe<Uuid_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  updatedBy: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "product_passports" */
export enum ProductPassports_Constraint {
  /** unique or primary key constraint on columns "number" */
  ProductPassportsNumberKey = 'product_passports_number_key',
  /** unique or primary key constraint on columns "id" */
  ProductPassportsPkey = 'product_passports_pkey',
}

/** input type for incrementing numeric columns in table "product_passports" */
export interface ProductPassports_Inc_Input {
  density: InputMaybe<Scalars['Float']>
}

/** input type for inserting data into table "product_passports" */
export interface ProductPassports_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  date: InputMaybe<Scalars['timestamptz']>
  density: InputMaybe<Scalars['Float']>
  disabled: InputMaybe<Scalars['Boolean']>
  id: InputMaybe<Scalars['uuid']>
  number: InputMaybe<Scalars['String']>
  producerId: InputMaybe<Scalars['uuid']>
  product_id: InputMaybe<Scalars['uuid']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface ProductPassports_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  date: Maybe<Scalars['timestamptz']>
  density: Maybe<Scalars['Float']>
  id: Maybe<Scalars['uuid']>
  number: Maybe<Scalars['String']>
  producerId: Maybe<Scalars['uuid']>
  product_id: Maybe<Scalars['uuid']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface ProductPassports_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  date: Maybe<Scalars['timestamptz']>
  density: Maybe<Scalars['Float']>
  id: Maybe<Scalars['uuid']>
  number: Maybe<Scalars['String']>
  producerId: Maybe<Scalars['uuid']>
  product_id: Maybe<Scalars['uuid']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "product_passports" */
export interface ProductPassports_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<ProductPassports>
}

/** on_conflict condition type for table "product_passports" */
export interface ProductPassports_On_Conflict {
  constraint: ProductPassports_Constraint
  update_columns: Array<ProductPassports_Update_Column>
  where: InputMaybe<ProductPassports_Bool_Exp>
}

/** Ordering options when selecting data from "product_passports". */
export interface ProductPassports_Order_By {
  createdAt: InputMaybe<Order_By>
  createdBy: InputMaybe<Order_By>
  date: InputMaybe<Order_By>
  density: InputMaybe<Order_By>
  disabled: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  number: InputMaybe<Order_By>
  producerId: InputMaybe<Order_By>
  product_id: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  updatedBy: InputMaybe<Order_By>
}

/** primary key columns input for table: product_passports */
export interface ProductPassports_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "product_passports" */
export enum ProductPassports_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Date = 'date',
  /** column name */
  Density = 'density',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  ProducerId = 'producerId',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

/** input type for updating data in table "product_passports" */
export interface ProductPassports_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  date: InputMaybe<Scalars['timestamptz']>
  density: InputMaybe<Scalars['Float']>
  disabled: InputMaybe<Scalars['Boolean']>
  id: InputMaybe<Scalars['uuid']>
  number: InputMaybe<Scalars['String']>
  producerId: InputMaybe<Scalars['uuid']>
  product_id: InputMaybe<Scalars['uuid']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export interface ProductPassports_Stddev_Fields {
  density: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface ProductPassports_Stddev_Pop_Fields {
  density: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface ProductPassports_Stddev_Samp_Fields {
  density: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "productPassports" */
export interface ProductPassports_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: ProductPassports_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface ProductPassports_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  date: InputMaybe<Scalars['timestamptz']>
  density: InputMaybe<Scalars['Float']>
  disabled: InputMaybe<Scalars['Boolean']>
  id: InputMaybe<Scalars['uuid']>
  number: InputMaybe<Scalars['String']>
  producerId: InputMaybe<Scalars['uuid']>
  product_id: InputMaybe<Scalars['uuid']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** aggregate sum on columns */
export interface ProductPassports_Sum_Fields {
  density: Maybe<Scalars['Float']>
}

/** update columns of table "product_passports" */
export enum ProductPassports_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Date = 'date',
  /** column name */
  Density = 'density',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  ProducerId = 'producerId',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

export interface ProductPassports_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<ProductPassports_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<ProductPassports_Set_Input>
  where: ProductPassports_Bool_Exp
}

/** aggregate var_pop on columns */
export interface ProductPassports_Var_Pop_Fields {
  density: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface ProductPassports_Var_Samp_Fields {
  density: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface ProductPassports_Variance_Fields {
  density: Maybe<Scalars['Float']>
}

/** columns and relationships of "products" */
export interface Products {
  createdAt: Scalars['timestamptz']
  createdBy: Scalars['uuid']
  disabled: Scalars['Boolean']
  fullName: Maybe<Scalars['String']>
  id: Scalars['uuid']
  productGroupId: Scalars['uuid']
  shortName: Scalars['String']
  updatedAt: Scalars['timestamptz']
  updatedBy: Scalars['uuid']
}

/** aggregated selection of "products" */
export interface Products_Aggregate {
  aggregate: Maybe<Products_Aggregate_Fields>
  nodes: Array<Products>
}

/** aggregate fields of "products" */
export interface Products_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<Products_Max_Fields>
  min: Maybe<Products_Min_Fields>
}

/** aggregate fields of "products" */
export interface Products_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Products_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export interface Products_Bool_Exp {
  _and: InputMaybe<Array<Products_Bool_Exp>>
  _not: InputMaybe<Products_Bool_Exp>
  _or: InputMaybe<Array<Products_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  createdBy: InputMaybe<Uuid_Comparison_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  fullName: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  productGroupId: InputMaybe<Uuid_Comparison_Exp>
  shortName: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  updatedBy: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey',
  /** unique or primary key constraint on columns "short_name" */
  ProductsShortNameKey = 'products_short_name_key',
}

/** input type for inserting data into table "products" */
export interface Products_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  productGroupId: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface Products_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  productGroupId: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface Products_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  productGroupId: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "products" */
export interface Products_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Products>
}

/** on_conflict condition type for table "products" */
export interface Products_On_Conflict {
  constraint: Products_Constraint
  update_columns: Array<Products_Update_Column>
  where: InputMaybe<Products_Bool_Exp>
}

/** Ordering options when selecting data from "products". */
export interface Products_Order_By {
  createdAt: InputMaybe<Order_By>
  createdBy: InputMaybe<Order_By>
  disabled: InputMaybe<Order_By>
  fullName: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  productGroupId: InputMaybe<Order_By>
  shortName: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  updatedBy: InputMaybe<Order_By>
}

/** primary key columns input for table: products */
export interface Products_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ProductGroupId = 'productGroupId',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

/** input type for updating data in table "products" */
export interface Products_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  productGroupId: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "products" */
export interface Products_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Products_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  productGroupId: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ProductGroupId = 'productGroupId',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

export interface Products_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Products_Set_Input>
  where: Products_Bool_Exp
}

export interface Query_Root {
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider: Maybe<AuthProviders>
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest: Maybe<AuthProviderRequests>
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken: Maybe<AuthRefreshTokens>
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole: Maybe<AuthRoles>
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider: Maybe<AuthUserProviders>
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole: Maybe<AuthUserRoles>
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey: Maybe<AuthUserSecurityKeys>
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk: Maybe<Auth_Migrations>
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket: Maybe<Buckets>
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate
  /** fetch data from the table: "companies" */
  companies: Array<Companies>
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate
  /** fetch data from the table: "companies" using primary key columns */
  company: Maybe<Companies>
  /** fetch data from the table: "storage.files" using primary key columns */
  file: Maybe<Files>
  /** An array relationship */
  files: Array<Files>
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate
  /** fetch data from the table: "goods_arrival_types" using primary key columns */
  goodsArrivalType: Maybe<GoodsArrivalTypes>
  /** fetch data from the table: "goods_arrival_types" */
  goodsArrivalTypes: Array<GoodsArrivalTypes>
  /** fetch aggregated fields from the table: "goods_arrival_types" */
  goodsArrivalTypes_aggregate: GoodsArrivalTypes_Aggregate
  /** fetch data from the table: "products" using primary key columns */
  product: Maybe<Products>
  /** fetch data from the table: "product_groups" using primary key columns */
  productGroup: Maybe<ProductGroups>
  /** fetch data from the table: "product_groups" */
  productGroups: Array<ProductGroups>
  /** fetch aggregated fields from the table: "product_groups" */
  productGroups_aggregate: ProductGroups_Aggregate
  /** fetch data from the table: "product_passports" using primary key columns */
  productPassport: Maybe<ProductPassports>
  /** fetch data from the table: "product_passports" */
  productPassports: Array<ProductPassports>
  /** fetch aggregated fields from the table: "product_passports" */
  productPassports_aggregate: ProductPassports_Aggregate
  /** fetch data from the table: "products" */
  products: Array<Products>
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate
  /** fetch data from the table: "storage.schema_migrations" */
  storage_schema_migrations: Array<Storage_Schema_Migrations>
  /** fetch aggregated fields from the table: "storage.schema_migrations" */
  storage_schema_migrations_aggregate: Storage_Schema_Migrations_Aggregate
  /** fetch data from the table: "storage.schema_migrations" using primary key columns */
  storage_schema_migrations_by_pk: Maybe<Storage_Schema_Migrations>
  /** fetch data from the table: "auth.users" using primary key columns */
  user: Maybe<Users>
  /** fetch data from the table: "auth.users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate
  /** fetch data from the table: "warehouses" using primary key columns */
  warehouse: Maybe<Warehouses>
  /** fetch data from the table: "warehouse_groups" using primary key columns */
  warehouseGroup: Maybe<WarehouseGroups>
  /** fetch data from the table: "warehouse_groups" */
  warehouseGroups: Array<WarehouseGroups>
  /** fetch aggregated fields from the table: "warehouse_groups" */
  warehouseGroups_aggregate: WarehouseGroups_Aggregate
  /** fetch data from the table: "warehouse_storages" using primary key columns */
  warehouseStorage: Maybe<WarehouseStorages>
  /** fetch data from the table: "warehouse_storages" */
  warehouseStorages: Array<WarehouseStorages>
  /** fetch aggregated fields from the table: "warehouse_storages" */
  warehouseStorages_aggregate: WarehouseStorages_Aggregate
  /** fetch data from the table: "warehouses" */
  warehouses: Array<Warehouses>
  /** fetch aggregated fields from the table: "warehouses" */
  warehouses_aggregate: Warehouses_Aggregate
}

export interface Query_RootAuthProviderArgs {
  id: Scalars['String']
}

export interface Query_RootAuthProviderRequestArgs {
  id: Scalars['uuid']
}

export interface Query_RootAuthProviderRequestsArgs {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export interface Query_RootAuthProviderRequestsAggregateArgs {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export interface Query_RootAuthProvidersArgs {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviders_Order_By>>
  where: InputMaybe<AuthProviders_Bool_Exp>
}

export interface Query_RootAuthProvidersAggregateArgs {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviders_Order_By>>
  where: InputMaybe<AuthProviders_Bool_Exp>
}

export interface Query_RootAuthRefreshTokenArgs {
  refreshToken: Scalars['uuid']
}

export interface Query_RootAuthRefreshTokensArgs {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export interface Query_RootAuthRefreshTokensAggregateArgs {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export interface Query_RootAuthRoleArgs {
  role: Scalars['String']
}

export interface Query_RootAuthRolesArgs {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRoles_Order_By>>
  where: InputMaybe<AuthRoles_Bool_Exp>
}

export interface Query_RootAuthRolesAggregateArgs {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRoles_Order_By>>
  where: InputMaybe<AuthRoles_Bool_Exp>
}

export interface Query_RootAuthUserProviderArgs {
  id: Scalars['uuid']
}

export interface Query_RootAuthUserProvidersArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

export interface Query_RootAuthUserProvidersAggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

export interface Query_RootAuthUserRoleArgs {
  id: Scalars['uuid']
}

export interface Query_RootAuthUserRolesArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

export interface Query_RootAuthUserRolesAggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

export interface Query_RootAuthUserSecurityKeyArgs {
  id: Scalars['uuid']
}

export interface Query_RootAuthUserSecurityKeysArgs {
  distinct_on: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export interface Query_RootAuthUserSecurityKeysAggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export interface Query_RootAuth_MigrationsArgs {
  distinct_on: InputMaybe<Array<Auth_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Auth_Migrations_Order_By>>
  where: InputMaybe<Auth_Migrations_Bool_Exp>
}

export interface Query_RootAuth_Migrations_AggregateArgs {
  distinct_on: InputMaybe<Array<Auth_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Auth_Migrations_Order_By>>
  where: InputMaybe<Auth_Migrations_Bool_Exp>
}

export interface Query_RootAuth_Migrations_By_PkArgs {
  id: Scalars['Int']
}

export interface Query_RootBucketArgs {
  id: Scalars['String']
}

export interface Query_RootBucketsArgs {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Buckets_Order_By>>
  where: InputMaybe<Buckets_Bool_Exp>
}

export interface Query_RootBucketsAggregateArgs {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Buckets_Order_By>>
  where: InputMaybe<Buckets_Bool_Exp>
}

export interface Query_RootCompaniesArgs {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Companies_Order_By>>
  where: InputMaybe<Companies_Bool_Exp>
}

export interface Query_RootCompanies_AggregateArgs {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Companies_Order_By>>
  where: InputMaybe<Companies_Bool_Exp>
}

export interface Query_RootCompanyArgs {
  id: Scalars['uuid']
}

export interface Query_RootFileArgs {
  id: Scalars['uuid']
}

export interface Query_RootFilesArgs {
  distinct_on: InputMaybe<Array<Files_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Files_Order_By>>
  where: InputMaybe<Files_Bool_Exp>
}

export interface Query_RootFilesAggregateArgs {
  distinct_on: InputMaybe<Array<Files_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Files_Order_By>>
  where: InputMaybe<Files_Bool_Exp>
}

export interface Query_RootGoodsArrivalTypeArgs {
  type: Scalars['String']
}

export interface Query_RootGoodsArrivalTypesArgs {
  distinct_on: InputMaybe<Array<GoodsArrivalTypes_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<GoodsArrivalTypes_Order_By>>
  where: InputMaybe<GoodsArrivalTypes_Bool_Exp>
}

export interface Query_RootGoodsArrivalTypes_AggregateArgs {
  distinct_on: InputMaybe<Array<GoodsArrivalTypes_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<GoodsArrivalTypes_Order_By>>
  where: InputMaybe<GoodsArrivalTypes_Bool_Exp>
}

export interface Query_RootProductArgs {
  id: Scalars['uuid']
}

export interface Query_RootProductGroupArgs {
  id: Scalars['uuid']
}

export interface Query_RootProductGroupsArgs {
  distinct_on: InputMaybe<Array<ProductGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductGroups_Order_By>>
  where: InputMaybe<ProductGroups_Bool_Exp>
}

export interface Query_RootProductGroups_AggregateArgs {
  distinct_on: InputMaybe<Array<ProductGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductGroups_Order_By>>
  where: InputMaybe<ProductGroups_Bool_Exp>
}

export interface Query_RootProductPassportArgs {
  id: Scalars['uuid']
}

export interface Query_RootProductPassportsArgs {
  distinct_on: InputMaybe<Array<ProductPassports_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductPassports_Order_By>>
  where: InputMaybe<ProductPassports_Bool_Exp>
}

export interface Query_RootProductPassports_AggregateArgs {
  distinct_on: InputMaybe<Array<ProductPassports_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductPassports_Order_By>>
  where: InputMaybe<ProductPassports_Bool_Exp>
}

export interface Query_RootProductsArgs {
  distinct_on: InputMaybe<Array<Products_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Products_Order_By>>
  where: InputMaybe<Products_Bool_Exp>
}

export interface Query_RootProducts_AggregateArgs {
  distinct_on: InputMaybe<Array<Products_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Products_Order_By>>
  where: InputMaybe<Products_Bool_Exp>
}

export interface Query_RootStorage_Schema_MigrationsArgs {
  distinct_on: InputMaybe<Array<Storage_Schema_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Storage_Schema_Migrations_Order_By>>
  where: InputMaybe<Storage_Schema_Migrations_Bool_Exp>
}

export interface Query_RootStorage_Schema_Migrations_AggregateArgs {
  distinct_on: InputMaybe<Array<Storage_Schema_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Storage_Schema_Migrations_Order_By>>
  where: InputMaybe<Storage_Schema_Migrations_Bool_Exp>
}

export interface Query_RootStorage_Schema_Migrations_By_PkArgs {
  version: Scalars['bigint']
}

export interface Query_RootUserArgs {
  id: Scalars['uuid']
}

export interface Query_RootUsersArgs {
  distinct_on: InputMaybe<Array<Users_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Users_Order_By>>
  where: InputMaybe<Users_Bool_Exp>
}

export interface Query_RootUsersAggregateArgs {
  distinct_on: InputMaybe<Array<Users_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Users_Order_By>>
  where: InputMaybe<Users_Bool_Exp>
}

export interface Query_RootWarehouseArgs {
  id: Scalars['uuid']
}

export interface Query_RootWarehouseGroupArgs {
  id: Scalars['uuid']
}

export interface Query_RootWarehouseGroupsArgs {
  distinct_on: InputMaybe<Array<WarehouseGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseGroups_Order_By>>
  where: InputMaybe<WarehouseGroups_Bool_Exp>
}

export interface Query_RootWarehouseGroups_AggregateArgs {
  distinct_on: InputMaybe<Array<WarehouseGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseGroups_Order_By>>
  where: InputMaybe<WarehouseGroups_Bool_Exp>
}

export interface Query_RootWarehouseStorageArgs {
  id: Scalars['uuid']
}

export interface Query_RootWarehouseStoragesArgs {
  distinct_on: InputMaybe<Array<WarehouseStorages_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseStorages_Order_By>>
  where: InputMaybe<WarehouseStorages_Bool_Exp>
}

export interface Query_RootWarehouseStorages_AggregateArgs {
  distinct_on: InputMaybe<Array<WarehouseStorages_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseStorages_Order_By>>
  where: InputMaybe<WarehouseStorages_Bool_Exp>
}

export interface Query_RootWarehousesArgs {
  distinct_on: InputMaybe<Array<Warehouses_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Warehouses_Order_By>>
  where: InputMaybe<Warehouses_Bool_Exp>
}

export interface Query_RootWarehouses_AggregateArgs {
  distinct_on: InputMaybe<Array<Warehouses_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Warehouses_Order_By>>
  where: InputMaybe<Warehouses_Bool_Exp>
}

/** columns and relationships of "storage.schema_migrations" */
export interface Storage_Schema_Migrations {
  dirty: Scalars['Boolean']
  version: Scalars['bigint']
}

/** aggregated selection of "storage.schema_migrations" */
export interface Storage_Schema_Migrations_Aggregate {
  aggregate: Maybe<Storage_Schema_Migrations_Aggregate_Fields>
  nodes: Array<Storage_Schema_Migrations>
}

/** aggregate fields of "storage.schema_migrations" */
export interface Storage_Schema_Migrations_Aggregate_Fields {
  avg: Maybe<Storage_Schema_Migrations_Avg_Fields>
  count: Scalars['Int']
  max: Maybe<Storage_Schema_Migrations_Max_Fields>
  min: Maybe<Storage_Schema_Migrations_Min_Fields>
  stddev: Maybe<Storage_Schema_Migrations_Stddev_Fields>
  stddev_pop: Maybe<Storage_Schema_Migrations_Stddev_Pop_Fields>
  stddev_samp: Maybe<Storage_Schema_Migrations_Stddev_Samp_Fields>
  sum: Maybe<Storage_Schema_Migrations_Sum_Fields>
  var_pop: Maybe<Storage_Schema_Migrations_Var_Pop_Fields>
  var_samp: Maybe<Storage_Schema_Migrations_Var_Samp_Fields>
  variance: Maybe<Storage_Schema_Migrations_Variance_Fields>
}

/** aggregate fields of "storage.schema_migrations" */
export interface Storage_Schema_Migrations_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Storage_Schema_Migrations_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export interface Storage_Schema_Migrations_Avg_Fields {
  version: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "storage.schema_migrations". All fields are combined with a logical 'AND'. */
export interface Storage_Schema_Migrations_Bool_Exp {
  _and: InputMaybe<Array<Storage_Schema_Migrations_Bool_Exp>>
  _not: InputMaybe<Storage_Schema_Migrations_Bool_Exp>
  _or: InputMaybe<Array<Storage_Schema_Migrations_Bool_Exp>>
  dirty: InputMaybe<Boolean_Comparison_Exp>
  version: InputMaybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "storage.schema_migrations" */
export enum Storage_Schema_Migrations_Constraint {
  /** unique or primary key constraint on columns "version" */
  SchemaMigrationsPkey = 'schema_migrations_pkey',
}

/** input type for incrementing numeric columns in table "storage.schema_migrations" */
export interface Storage_Schema_Migrations_Inc_Input {
  version: InputMaybe<Scalars['bigint']>
}

/** input type for inserting data into table "storage.schema_migrations" */
export interface Storage_Schema_Migrations_Insert_Input {
  dirty: InputMaybe<Scalars['Boolean']>
  version: InputMaybe<Scalars['bigint']>
}

/** aggregate max on columns */
export interface Storage_Schema_Migrations_Max_Fields {
  version: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export interface Storage_Schema_Migrations_Min_Fields {
  version: Maybe<Scalars['bigint']>
}

/** response of any mutation on the table "storage.schema_migrations" */
export interface Storage_Schema_Migrations_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Storage_Schema_Migrations>
}

/** on_conflict condition type for table "storage.schema_migrations" */
export interface Storage_Schema_Migrations_On_Conflict {
  constraint: Storage_Schema_Migrations_Constraint
  update_columns: Array<Storage_Schema_Migrations_Update_Column>
  where: InputMaybe<Storage_Schema_Migrations_Bool_Exp>
}

/** Ordering options when selecting data from "storage.schema_migrations". */
export interface Storage_Schema_Migrations_Order_By {
  dirty: InputMaybe<Order_By>
  version: InputMaybe<Order_By>
}

/** primary key columns input for table: storage.schema_migrations */
export interface Storage_Schema_Migrations_Pk_Columns_Input {
  version: Scalars['bigint']
}

/** select columns of table "storage.schema_migrations" */
export enum Storage_Schema_Migrations_Select_Column {
  /** column name */
  Dirty = 'dirty',
  /** column name */
  Version = 'version',
}

/** input type for updating data in table "storage.schema_migrations" */
export interface Storage_Schema_Migrations_Set_Input {
  dirty: InputMaybe<Scalars['Boolean']>
  version: InputMaybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export interface Storage_Schema_Migrations_Stddev_Fields {
  version: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export interface Storage_Schema_Migrations_Stddev_Pop_Fields {
  version: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export interface Storage_Schema_Migrations_Stddev_Samp_Fields {
  version: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "storage_schema_migrations" */
export interface Storage_Schema_Migrations_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Storage_Schema_Migrations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Storage_Schema_Migrations_Stream_Cursor_Value_Input {
  dirty: InputMaybe<Scalars['Boolean']>
  version: InputMaybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export interface Storage_Schema_Migrations_Sum_Fields {
  version: Maybe<Scalars['bigint']>
}

/** update columns of table "storage.schema_migrations" */
export enum Storage_Schema_Migrations_Update_Column {
  /** column name */
  Dirty = 'dirty',
  /** column name */
  Version = 'version',
}

export interface Storage_Schema_Migrations_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Storage_Schema_Migrations_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Storage_Schema_Migrations_Set_Input>
  where: Storage_Schema_Migrations_Bool_Exp
}

/** aggregate var_pop on columns */
export interface Storage_Schema_Migrations_Var_Pop_Fields {
  version: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export interface Storage_Schema_Migrations_Var_Samp_Fields {
  version: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export interface Storage_Schema_Migrations_Variance_Fields {
  version: Maybe<Scalars['Float']>
}

export interface Subscription_Root {
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider: Maybe<AuthProviders>
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest: Maybe<AuthProviderRequests>
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken: Maybe<AuthRefreshTokens>
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole: Maybe<AuthRoles>
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider: Maybe<AuthUserProviders>
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole: Maybe<AuthUserRoles>
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey: Maybe<AuthUserSecurityKeys>
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk: Maybe<Auth_Migrations>
  /** fetch data from the table in a streaming manner: "auth.migrations" */
  auth_migrations_stream: Array<Auth_Migrations>
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket: Maybe<Buckets>
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>
  /** fetch data from the table: "companies" */
  companies: Array<Companies>
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate
  /** fetch data from the table in a streaming manner: "companies" */
  companies_stream: Array<Companies>
  /** fetch data from the table: "companies" using primary key columns */
  company: Maybe<Companies>
  /** fetch data from the table: "storage.files" using primary key columns */
  file: Maybe<Files>
  /** An array relationship */
  files: Array<Files>
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>
  /** fetch data from the table: "goods_arrival_types" using primary key columns */
  goodsArrivalType: Maybe<GoodsArrivalTypes>
  /** fetch data from the table: "goods_arrival_types" */
  goodsArrivalTypes: Array<GoodsArrivalTypes>
  /** fetch aggregated fields from the table: "goods_arrival_types" */
  goodsArrivalTypes_aggregate: GoodsArrivalTypes_Aggregate
  /** fetch data from the table in a streaming manner: "goods_arrival_types" */
  goodsArrivalTypes_stream: Array<GoodsArrivalTypes>
  /** fetch data from the table: "products" using primary key columns */
  product: Maybe<Products>
  /** fetch data from the table: "product_groups" using primary key columns */
  productGroup: Maybe<ProductGroups>
  /** fetch data from the table: "product_groups" */
  productGroups: Array<ProductGroups>
  /** fetch aggregated fields from the table: "product_groups" */
  productGroups_aggregate: ProductGroups_Aggregate
  /** fetch data from the table in a streaming manner: "product_groups" */
  productGroups_stream: Array<ProductGroups>
  /** fetch data from the table: "product_passports" using primary key columns */
  productPassport: Maybe<ProductPassports>
  /** fetch data from the table: "product_passports" */
  productPassports: Array<ProductPassports>
  /** fetch aggregated fields from the table: "product_passports" */
  productPassports_aggregate: ProductPassports_Aggregate
  /** fetch data from the table in a streaming manner: "product_passports" */
  productPassports_stream: Array<ProductPassports>
  /** fetch data from the table: "products" */
  products: Array<Products>
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>
  /** fetch data from the table: "storage.schema_migrations" */
  storage_schema_migrations: Array<Storage_Schema_Migrations>
  /** fetch aggregated fields from the table: "storage.schema_migrations" */
  storage_schema_migrations_aggregate: Storage_Schema_Migrations_Aggregate
  /** fetch data from the table: "storage.schema_migrations" using primary key columns */
  storage_schema_migrations_by_pk: Maybe<Storage_Schema_Migrations>
  /** fetch data from the table in a streaming manner: "storage.schema_migrations" */
  storage_schema_migrations_stream: Array<Storage_Schema_Migrations>
  /** fetch data from the table: "auth.users" using primary key columns */
  user: Maybe<Users>
  /** fetch data from the table: "auth.users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>
  /** fetch data from the table: "warehouses" using primary key columns */
  warehouse: Maybe<Warehouses>
  /** fetch data from the table: "warehouse_groups" using primary key columns */
  warehouseGroup: Maybe<WarehouseGroups>
  /** fetch data from the table: "warehouse_groups" */
  warehouseGroups: Array<WarehouseGroups>
  /** fetch aggregated fields from the table: "warehouse_groups" */
  warehouseGroups_aggregate: WarehouseGroups_Aggregate
  /** fetch data from the table in a streaming manner: "warehouse_groups" */
  warehouseGroups_stream: Array<WarehouseGroups>
  /** fetch data from the table: "warehouse_storages" using primary key columns */
  warehouseStorage: Maybe<WarehouseStorages>
  /** fetch data from the table: "warehouse_storages" */
  warehouseStorages: Array<WarehouseStorages>
  /** fetch aggregated fields from the table: "warehouse_storages" */
  warehouseStorages_aggregate: WarehouseStorages_Aggregate
  /** fetch data from the table in a streaming manner: "warehouse_storages" */
  warehouseStorages_stream: Array<WarehouseStorages>
  /** fetch data from the table: "warehouses" */
  warehouses: Array<Warehouses>
  /** fetch aggregated fields from the table: "warehouses" */
  warehouses_aggregate: Warehouses_Aggregate
  /** fetch data from the table in a streaming manner: "warehouses" */
  warehouses_stream: Array<Warehouses>
}

export interface Subscription_RootAuthProviderArgs {
  id: Scalars['String']
}

export interface Subscription_RootAuthProviderRequestArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootAuthProviderRequestsArgs {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export interface Subscription_RootAuthProviderRequestsAggregateArgs {
  distinct_on: InputMaybe<Array<AuthProviderRequests_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviderRequests_Order_By>>
  where: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export interface Subscription_RootAuthProviderRequests_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>
  where: InputMaybe<AuthProviderRequests_Bool_Exp>
}

export interface Subscription_RootAuthProvidersArgs {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviders_Order_By>>
  where: InputMaybe<AuthProviders_Bool_Exp>
}

export interface Subscription_RootAuthProvidersAggregateArgs {
  distinct_on: InputMaybe<Array<AuthProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthProviders_Order_By>>
  where: InputMaybe<AuthProviders_Bool_Exp>
}

export interface Subscription_RootAuthProviders_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>
  where: InputMaybe<AuthProviders_Bool_Exp>
}

export interface Subscription_RootAuthRefreshTokenArgs {
  refreshToken: Scalars['uuid']
}

export interface Subscription_RootAuthRefreshTokensArgs {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export interface Subscription_RootAuthRefreshTokensAggregateArgs {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export interface Subscription_RootAuthRefreshTokens_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

export interface Subscription_RootAuthRoleArgs {
  role: Scalars['String']
}

export interface Subscription_RootAuthRolesArgs {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRoles_Order_By>>
  where: InputMaybe<AuthRoles_Bool_Exp>
}

export interface Subscription_RootAuthRolesAggregateArgs {
  distinct_on: InputMaybe<Array<AuthRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRoles_Order_By>>
  where: InputMaybe<AuthRoles_Bool_Exp>
}

export interface Subscription_RootAuthRoles_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>
  where: InputMaybe<AuthRoles_Bool_Exp>
}

export interface Subscription_RootAuthUserProviderArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootAuthUserProvidersArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

export interface Subscription_RootAuthUserProvidersAggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

export interface Subscription_RootAuthUserProviders_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

export interface Subscription_RootAuthUserRoleArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootAuthUserRolesArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

export interface Subscription_RootAuthUserRolesAggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

export interface Subscription_RootAuthUserRoles_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

export interface Subscription_RootAuthUserSecurityKeyArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootAuthUserSecurityKeysArgs {
  distinct_on: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export interface Subscription_RootAuthUserSecurityKeysAggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export interface Subscription_RootAuthUserSecurityKeys_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

export interface Subscription_RootAuth_MigrationsArgs {
  distinct_on: InputMaybe<Array<Auth_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Auth_Migrations_Order_By>>
  where: InputMaybe<Auth_Migrations_Bool_Exp>
}

export interface Subscription_RootAuth_Migrations_AggregateArgs {
  distinct_on: InputMaybe<Array<Auth_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Auth_Migrations_Order_By>>
  where: InputMaybe<Auth_Migrations_Bool_Exp>
}

export interface Subscription_RootAuth_Migrations_By_PkArgs {
  id: Scalars['Int']
}

export interface Subscription_RootAuth_Migrations_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Auth_Migrations_Stream_Cursor_Input>>
  where: InputMaybe<Auth_Migrations_Bool_Exp>
}

export interface Subscription_RootBucketArgs {
  id: Scalars['String']
}

export interface Subscription_RootBucketsArgs {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Buckets_Order_By>>
  where: InputMaybe<Buckets_Bool_Exp>
}

export interface Subscription_RootBucketsAggregateArgs {
  distinct_on: InputMaybe<Array<Buckets_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Buckets_Order_By>>
  where: InputMaybe<Buckets_Bool_Exp>
}

export interface Subscription_RootBuckets_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>
  where: InputMaybe<Buckets_Bool_Exp>
}

export interface Subscription_RootCompaniesArgs {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Companies_Order_By>>
  where: InputMaybe<Companies_Bool_Exp>
}

export interface Subscription_RootCompanies_AggregateArgs {
  distinct_on: InputMaybe<Array<Companies_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Companies_Order_By>>
  where: InputMaybe<Companies_Bool_Exp>
}

export interface Subscription_RootCompanies_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Companies_Stream_Cursor_Input>>
  where: InputMaybe<Companies_Bool_Exp>
}

export interface Subscription_RootCompanyArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootFileArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootFilesArgs {
  distinct_on: InputMaybe<Array<Files_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Files_Order_By>>
  where: InputMaybe<Files_Bool_Exp>
}

export interface Subscription_RootFilesAggregateArgs {
  distinct_on: InputMaybe<Array<Files_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Files_Order_By>>
  where: InputMaybe<Files_Bool_Exp>
}

export interface Subscription_RootFiles_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>
  where: InputMaybe<Files_Bool_Exp>
}

export interface Subscription_RootGoodsArrivalTypeArgs {
  type: Scalars['String']
}

export interface Subscription_RootGoodsArrivalTypesArgs {
  distinct_on: InputMaybe<Array<GoodsArrivalTypes_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<GoodsArrivalTypes_Order_By>>
  where: InputMaybe<GoodsArrivalTypes_Bool_Exp>
}

export interface Subscription_RootGoodsArrivalTypes_AggregateArgs {
  distinct_on: InputMaybe<Array<GoodsArrivalTypes_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<GoodsArrivalTypes_Order_By>>
  where: InputMaybe<GoodsArrivalTypes_Bool_Exp>
}

export interface Subscription_RootGoodsArrivalTypes_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<GoodsArrivalTypes_Stream_Cursor_Input>>
  where: InputMaybe<GoodsArrivalTypes_Bool_Exp>
}

export interface Subscription_RootProductArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootProductGroupArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootProductGroupsArgs {
  distinct_on: InputMaybe<Array<ProductGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductGroups_Order_By>>
  where: InputMaybe<ProductGroups_Bool_Exp>
}

export interface Subscription_RootProductGroups_AggregateArgs {
  distinct_on: InputMaybe<Array<ProductGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductGroups_Order_By>>
  where: InputMaybe<ProductGroups_Bool_Exp>
}

export interface Subscription_RootProductGroups_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<ProductGroups_Stream_Cursor_Input>>
  where: InputMaybe<ProductGroups_Bool_Exp>
}

export interface Subscription_RootProductPassportArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootProductPassportsArgs {
  distinct_on: InputMaybe<Array<ProductPassports_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductPassports_Order_By>>
  where: InputMaybe<ProductPassports_Bool_Exp>
}

export interface Subscription_RootProductPassports_AggregateArgs {
  distinct_on: InputMaybe<Array<ProductPassports_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<ProductPassports_Order_By>>
  where: InputMaybe<ProductPassports_Bool_Exp>
}

export interface Subscription_RootProductPassports_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<ProductPassports_Stream_Cursor_Input>>
  where: InputMaybe<ProductPassports_Bool_Exp>
}

export interface Subscription_RootProductsArgs {
  distinct_on: InputMaybe<Array<Products_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Products_Order_By>>
  where: InputMaybe<Products_Bool_Exp>
}

export interface Subscription_RootProducts_AggregateArgs {
  distinct_on: InputMaybe<Array<Products_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Products_Order_By>>
  where: InputMaybe<Products_Bool_Exp>
}

export interface Subscription_RootProducts_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>
  where: InputMaybe<Products_Bool_Exp>
}

export interface Subscription_RootStorage_Schema_MigrationsArgs {
  distinct_on: InputMaybe<Array<Storage_Schema_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Storage_Schema_Migrations_Order_By>>
  where: InputMaybe<Storage_Schema_Migrations_Bool_Exp>
}

export interface Subscription_RootStorage_Schema_Migrations_AggregateArgs {
  distinct_on: InputMaybe<Array<Storage_Schema_Migrations_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Storage_Schema_Migrations_Order_By>>
  where: InputMaybe<Storage_Schema_Migrations_Bool_Exp>
}

export interface Subscription_RootStorage_Schema_Migrations_By_PkArgs {
  version: Scalars['bigint']
}

export interface Subscription_RootStorage_Schema_Migrations_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Storage_Schema_Migrations_Stream_Cursor_Input>>
  where: InputMaybe<Storage_Schema_Migrations_Bool_Exp>
}

export interface Subscription_RootUserArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootUsersArgs {
  distinct_on: InputMaybe<Array<Users_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Users_Order_By>>
  where: InputMaybe<Users_Bool_Exp>
}

export interface Subscription_RootUsersAggregateArgs {
  distinct_on: InputMaybe<Array<Users_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Users_Order_By>>
  where: InputMaybe<Users_Bool_Exp>
}

export interface Subscription_RootUsers_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>
  where: InputMaybe<Users_Bool_Exp>
}

export interface Subscription_RootWarehouseArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootWarehouseGroupArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootWarehouseGroupsArgs {
  distinct_on: InputMaybe<Array<WarehouseGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseGroups_Order_By>>
  where: InputMaybe<WarehouseGroups_Bool_Exp>
}

export interface Subscription_RootWarehouseGroups_AggregateArgs {
  distinct_on: InputMaybe<Array<WarehouseGroups_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseGroups_Order_By>>
  where: InputMaybe<WarehouseGroups_Bool_Exp>
}

export interface Subscription_RootWarehouseGroups_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<WarehouseGroups_Stream_Cursor_Input>>
  where: InputMaybe<WarehouseGroups_Bool_Exp>
}

export interface Subscription_RootWarehouseStorageArgs {
  id: Scalars['uuid']
}

export interface Subscription_RootWarehouseStoragesArgs {
  distinct_on: InputMaybe<Array<WarehouseStorages_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseStorages_Order_By>>
  where: InputMaybe<WarehouseStorages_Bool_Exp>
}

export interface Subscription_RootWarehouseStorages_AggregateArgs {
  distinct_on: InputMaybe<Array<WarehouseStorages_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<WarehouseStorages_Order_By>>
  where: InputMaybe<WarehouseStorages_Bool_Exp>
}

export interface Subscription_RootWarehouseStorages_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<WarehouseStorages_Stream_Cursor_Input>>
  where: InputMaybe<WarehouseStorages_Bool_Exp>
}

export interface Subscription_RootWarehousesArgs {
  distinct_on: InputMaybe<Array<Warehouses_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Warehouses_Order_By>>
  where: InputMaybe<Warehouses_Bool_Exp>
}

export interface Subscription_RootWarehouses_AggregateArgs {
  distinct_on: InputMaybe<Array<Warehouses_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<Warehouses_Order_By>>
  where: InputMaybe<Warehouses_Bool_Exp>
}

export interface Subscription_RootWarehouses_StreamArgs {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Warehouses_Stream_Cursor_Input>>
  where: InputMaybe<Warehouses_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface Timestamp_Comparison_Exp {
  _eq: InputMaybe<Scalars['timestamp']>
  _gt: InputMaybe<Scalars['timestamp']>
  _gte: InputMaybe<Scalars['timestamp']>
  _in: InputMaybe<Array<Scalars['timestamp']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['timestamp']>
  _lte: InputMaybe<Scalars['timestamp']>
  _neq: InputMaybe<Scalars['timestamp']>
  _nin: InputMaybe<Array<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq: InputMaybe<Scalars['timestamptz']>
  _gt: InputMaybe<Scalars['timestamptz']>
  _gte: InputMaybe<Scalars['timestamptz']>
  _in: InputMaybe<Array<Scalars['timestamptz']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['timestamptz']>
  _lte: InputMaybe<Scalars['timestamptz']>
  _neq: InputMaybe<Scalars['timestamptz']>
  _nin: InputMaybe<Array<Scalars['timestamptz']>>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface Users {
  activeMfaType: Maybe<Scalars['String']>
  avatarUrl: Scalars['String']
  createdAt: Scalars['timestamptz']
  currentChallenge: Maybe<Scalars['String']>
  defaultRole: Scalars['String']
  /** An object relationship */
  defaultRoleByRole: AuthRoles
  disabled: Scalars['Boolean']
  displayName: Scalars['String']
  email: Maybe<Scalars['citext']>
  emailVerified: Scalars['Boolean']
  id: Scalars['uuid']
  isAnonymous: Scalars['Boolean']
  lastSeen: Maybe<Scalars['timestamptz']>
  locale: Scalars['String']
  metadata: Maybe<Scalars['jsonb']>
  newEmail: Maybe<Scalars['citext']>
  otpHash: Maybe<Scalars['String']>
  otpHashExpiresAt: Scalars['timestamptz']
  otpMethodLastUsed: Maybe<Scalars['String']>
  passwordHash: Maybe<Scalars['String']>
  phoneNumber: Maybe<Scalars['String']>
  phoneNumberVerified: Scalars['Boolean']
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate
  /** An array relationship */
  roles: Array<AuthUserRoles>
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate
  ticket: Maybe<Scalars['String']>
  ticketExpiresAt: Scalars['timestamptz']
  totpSecret: Maybe<Scalars['String']>
  updatedAt: Scalars['timestamptz']
  /** An array relationship */
  userProviders: Array<AuthUserProviders>
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersMetadataArgs {
  path: InputMaybe<Scalars['String']>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersRefreshTokensArgs {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersRefreshTokens_AggregateArgs {
  distinct_on: InputMaybe<Array<AuthRefreshTokens_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthRefreshTokens_Order_By>>
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersRolesArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersRoles_AggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserRoles_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserRoles_Order_By>>
  where: InputMaybe<AuthUserRoles_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersSecurityKeysArgs {
  distinct_on: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersSecurityKeys_AggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersUserProvidersArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export interface UsersUserProviders_AggregateArgs {
  distinct_on: InputMaybe<Array<AuthUserProviders_Select_Column>>
  limit: InputMaybe<Scalars['Int']>
  offset: InputMaybe<Scalars['Int']>
  order_by: InputMaybe<Array<AuthUserProviders_Order_By>>
  where: InputMaybe<AuthUserProviders_Bool_Exp>
}

/** aggregated selection of "auth.users" */
export interface Users_Aggregate {
  aggregate: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

export interface Users_Aggregate_Bool_Exp {
  bool_and: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>
  bool_or: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>
  count: InputMaybe<Users_Aggregate_Bool_Exp_Count>
}

export interface Users_Aggregate_Bool_Exp_Bool_And {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<Users_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export interface Users_Aggregate_Bool_Exp_Bool_Or {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<Users_Bool_Exp>
  predicate: Boolean_Comparison_Exp
}

export interface Users_Aggregate_Bool_Exp_Count {
  arguments: InputMaybe<Array<Users_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
  filter: InputMaybe<Users_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "auth.users" */
export interface Users_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<Users_Max_Fields>
  min: Maybe<Users_Min_Fields>
}

/** aggregate fields of "auth.users" */
export interface Users_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Users_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "auth.users" */
export interface Users_Aggregate_Order_By {
  count: InputMaybe<Order_By>
  max: InputMaybe<Users_Max_Order_By>
  min: InputMaybe<Users_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface Users_Append_Input {
  metadata: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "auth.users" */
export interface Users_Arr_Rel_Insert_Input {
  data: Array<Users_Insert_Input>
  /** upsert condition */
  on_conflict: InputMaybe<Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export interface Users_Bool_Exp {
  _and: InputMaybe<Array<Users_Bool_Exp>>
  _not: InputMaybe<Users_Bool_Exp>
  _or: InputMaybe<Array<Users_Bool_Exp>>
  activeMfaType: InputMaybe<String_Comparison_Exp>
  avatarUrl: InputMaybe<String_Comparison_Exp>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  currentChallenge: InputMaybe<String_Comparison_Exp>
  defaultRole: InputMaybe<String_Comparison_Exp>
  defaultRoleByRole: InputMaybe<AuthRoles_Bool_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  displayName: InputMaybe<String_Comparison_Exp>
  email: InputMaybe<Citext_Comparison_Exp>
  emailVerified: InputMaybe<Boolean_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  isAnonymous: InputMaybe<Boolean_Comparison_Exp>
  lastSeen: InputMaybe<Timestamptz_Comparison_Exp>
  locale: InputMaybe<String_Comparison_Exp>
  metadata: InputMaybe<Jsonb_Comparison_Exp>
  newEmail: InputMaybe<Citext_Comparison_Exp>
  otpHash: InputMaybe<String_Comparison_Exp>
  otpHashExpiresAt: InputMaybe<Timestamptz_Comparison_Exp>
  otpMethodLastUsed: InputMaybe<String_Comparison_Exp>
  passwordHash: InputMaybe<String_Comparison_Exp>
  phoneNumber: InputMaybe<String_Comparison_Exp>
  phoneNumberVerified: InputMaybe<Boolean_Comparison_Exp>
  refreshTokens: InputMaybe<AuthRefreshTokens_Bool_Exp>
  refreshTokens_aggregate: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>
  roles: InputMaybe<AuthUserRoles_Bool_Exp>
  roles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>
  securityKeys: InputMaybe<AuthUserSecurityKeys_Bool_Exp>
  securityKeys_aggregate: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>
  ticket: InputMaybe<String_Comparison_Exp>
  ticketExpiresAt: InputMaybe<Timestamptz_Comparison_Exp>
  totpSecret: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  userProviders: InputMaybe<AuthUserProviders_Bool_Exp>
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>
}

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface Users_Delete_At_Path_Input {
  metadata: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface Users_Delete_Elem_Input {
  metadata: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface Users_Delete_Key_Input {
  metadata: InputMaybe<Scalars['String']>
}

/** input type for inserting data into table "auth.users" */
export interface Users_Insert_Input {
  activeMfaType: InputMaybe<Scalars['String']>
  avatarUrl: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  currentChallenge: InputMaybe<Scalars['String']>
  defaultRole: InputMaybe<Scalars['String']>
  defaultRoleByRole: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>
  disabled: InputMaybe<Scalars['Boolean']>
  displayName: InputMaybe<Scalars['String']>
  email: InputMaybe<Scalars['citext']>
  emailVerified: InputMaybe<Scalars['Boolean']>
  id: InputMaybe<Scalars['uuid']>
  isAnonymous: InputMaybe<Scalars['Boolean']>
  lastSeen: InputMaybe<Scalars['timestamptz']>
  locale: InputMaybe<Scalars['String']>
  metadata: InputMaybe<Scalars['jsonb']>
  newEmail: InputMaybe<Scalars['citext']>
  otpHash: InputMaybe<Scalars['String']>
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']>
  otpMethodLastUsed: InputMaybe<Scalars['String']>
  passwordHash: InputMaybe<Scalars['String']>
  phoneNumber: InputMaybe<Scalars['String']>
  phoneNumberVerified: InputMaybe<Scalars['Boolean']>
  refreshTokens: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>
  roles: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>
  securityKeys: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>
  ticket: InputMaybe<Scalars['String']>
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']>
  totpSecret: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  userProviders: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export interface Users_Max_Fields {
  activeMfaType: Maybe<Scalars['String']>
  avatarUrl: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  currentChallenge: Maybe<Scalars['String']>
  defaultRole: Maybe<Scalars['String']>
  displayName: Maybe<Scalars['String']>
  email: Maybe<Scalars['citext']>
  id: Maybe<Scalars['uuid']>
  lastSeen: Maybe<Scalars['timestamptz']>
  locale: Maybe<Scalars['String']>
  newEmail: Maybe<Scalars['citext']>
  otpHash: Maybe<Scalars['String']>
  otpHashExpiresAt: Maybe<Scalars['timestamptz']>
  otpMethodLastUsed: Maybe<Scalars['String']>
  passwordHash: Maybe<Scalars['String']>
  phoneNumber: Maybe<Scalars['String']>
  ticket: Maybe<Scalars['String']>
  ticketExpiresAt: Maybe<Scalars['timestamptz']>
  totpSecret: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "auth.users" */
export interface Users_Max_Order_By {
  activeMfaType: InputMaybe<Order_By>
  avatarUrl: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  currentChallenge: InputMaybe<Order_By>
  defaultRole: InputMaybe<Order_By>
  displayName: InputMaybe<Order_By>
  email: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  lastSeen: InputMaybe<Order_By>
  locale: InputMaybe<Order_By>
  newEmail: InputMaybe<Order_By>
  otpHash: InputMaybe<Order_By>
  otpHashExpiresAt: InputMaybe<Order_By>
  otpMethodLastUsed: InputMaybe<Order_By>
  passwordHash: InputMaybe<Order_By>
  phoneNumber: InputMaybe<Order_By>
  ticket: InputMaybe<Order_By>
  ticketExpiresAt: InputMaybe<Order_By>
  totpSecret: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
}

/** aggregate min on columns */
export interface Users_Min_Fields {
  activeMfaType: Maybe<Scalars['String']>
  avatarUrl: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['timestamptz']>
  currentChallenge: Maybe<Scalars['String']>
  defaultRole: Maybe<Scalars['String']>
  displayName: Maybe<Scalars['String']>
  email: Maybe<Scalars['citext']>
  id: Maybe<Scalars['uuid']>
  lastSeen: Maybe<Scalars['timestamptz']>
  locale: Maybe<Scalars['String']>
  newEmail: Maybe<Scalars['citext']>
  otpHash: Maybe<Scalars['String']>
  otpHashExpiresAt: Maybe<Scalars['timestamptz']>
  otpMethodLastUsed: Maybe<Scalars['String']>
  passwordHash: Maybe<Scalars['String']>
  phoneNumber: Maybe<Scalars['String']>
  ticket: Maybe<Scalars['String']>
  ticketExpiresAt: Maybe<Scalars['timestamptz']>
  totpSecret: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "auth.users" */
export interface Users_Min_Order_By {
  activeMfaType: InputMaybe<Order_By>
  avatarUrl: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  currentChallenge: InputMaybe<Order_By>
  defaultRole: InputMaybe<Order_By>
  displayName: InputMaybe<Order_By>
  email: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  lastSeen: InputMaybe<Order_By>
  locale: InputMaybe<Order_By>
  newEmail: InputMaybe<Order_By>
  otpHash: InputMaybe<Order_By>
  otpHashExpiresAt: InputMaybe<Order_By>
  otpMethodLastUsed: InputMaybe<Order_By>
  passwordHash: InputMaybe<Order_By>
  phoneNumber: InputMaybe<Order_By>
  ticket: InputMaybe<Order_By>
  ticketExpiresAt: InputMaybe<Order_By>
  totpSecret: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
}

/** response of any mutation on the table "auth.users" */
export interface Users_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "auth.users" */
export interface Users_Obj_Rel_Insert_Input {
  data: Users_Insert_Input
  /** upsert condition */
  on_conflict: InputMaybe<Users_On_Conflict>
}

/** on_conflict condition type for table "auth.users" */
export interface Users_On_Conflict {
  constraint: Users_Constraint
  update_columns: Array<Users_Update_Column>
  where: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "auth.users". */
export interface Users_Order_By {
  activeMfaType: InputMaybe<Order_By>
  avatarUrl: InputMaybe<Order_By>
  createdAt: InputMaybe<Order_By>
  currentChallenge: InputMaybe<Order_By>
  defaultRole: InputMaybe<Order_By>
  defaultRoleByRole: InputMaybe<AuthRoles_Order_By>
  disabled: InputMaybe<Order_By>
  displayName: InputMaybe<Order_By>
  email: InputMaybe<Order_By>
  emailVerified: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  isAnonymous: InputMaybe<Order_By>
  lastSeen: InputMaybe<Order_By>
  locale: InputMaybe<Order_By>
  metadata: InputMaybe<Order_By>
  newEmail: InputMaybe<Order_By>
  otpHash: InputMaybe<Order_By>
  otpHashExpiresAt: InputMaybe<Order_By>
  otpMethodLastUsed: InputMaybe<Order_By>
  passwordHash: InputMaybe<Order_By>
  phoneNumber: InputMaybe<Order_By>
  phoneNumberVerified: InputMaybe<Order_By>
  refreshTokens_aggregate: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>
  roles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Order_By>
  securityKeys_aggregate: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>
  ticket: InputMaybe<Order_By>
  ticketExpiresAt: InputMaybe<Order_By>
  totpSecret: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Order_By>
}

/** primary key columns input for table: auth.users */
export interface Users_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface Users_Prepend_Input {
  metadata: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
}

/** input type for updating data in table "auth.users" */
export interface Users_Set_Input {
  activeMfaType: InputMaybe<Scalars['String']>
  avatarUrl: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  currentChallenge: InputMaybe<Scalars['String']>
  defaultRole: InputMaybe<Scalars['String']>
  disabled: InputMaybe<Scalars['Boolean']>
  displayName: InputMaybe<Scalars['String']>
  email: InputMaybe<Scalars['citext']>
  emailVerified: InputMaybe<Scalars['Boolean']>
  id: InputMaybe<Scalars['uuid']>
  isAnonymous: InputMaybe<Scalars['Boolean']>
  lastSeen: InputMaybe<Scalars['timestamptz']>
  locale: InputMaybe<Scalars['String']>
  metadata: InputMaybe<Scalars['jsonb']>
  newEmail: InputMaybe<Scalars['citext']>
  otpHash: InputMaybe<Scalars['String']>
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']>
  otpMethodLastUsed: InputMaybe<Scalars['String']>
  passwordHash: InputMaybe<Scalars['String']>
  phoneNumber: InputMaybe<Scalars['String']>
  phoneNumberVerified: InputMaybe<Scalars['Boolean']>
  ticket: InputMaybe<Scalars['String']>
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']>
  totpSecret: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
}

/** Streaming cursor of the table "users" */
export interface Users_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Users_Stream_Cursor_Value_Input {
  activeMfaType: InputMaybe<Scalars['String']>
  avatarUrl: InputMaybe<Scalars['String']>
  createdAt: InputMaybe<Scalars['timestamptz']>
  currentChallenge: InputMaybe<Scalars['String']>
  defaultRole: InputMaybe<Scalars['String']>
  disabled: InputMaybe<Scalars['Boolean']>
  displayName: InputMaybe<Scalars['String']>
  email: InputMaybe<Scalars['citext']>
  emailVerified: InputMaybe<Scalars['Boolean']>
  id: InputMaybe<Scalars['uuid']>
  isAnonymous: InputMaybe<Scalars['Boolean']>
  lastSeen: InputMaybe<Scalars['timestamptz']>
  locale: InputMaybe<Scalars['String']>
  metadata: InputMaybe<Scalars['jsonb']>
  newEmail: InputMaybe<Scalars['citext']>
  otpHash: InputMaybe<Scalars['String']>
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']>
  otpMethodLastUsed: InputMaybe<Scalars['String']>
  passwordHash: InputMaybe<Scalars['String']>
  phoneNumber: InputMaybe<Scalars['String']>
  phoneNumberVerified: InputMaybe<Scalars['Boolean']>
  ticket: InputMaybe<Scalars['String']>
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']>
  totpSecret: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
}

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt',
}

export interface Users_Updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<Users_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<Users_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<Users_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<Users_Delete_Key_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<Users_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
  _eq: InputMaybe<Scalars['uuid']>
  _gt: InputMaybe<Scalars['uuid']>
  _gte: InputMaybe<Scalars['uuid']>
  _in: InputMaybe<Array<Scalars['uuid']>>
  _is_null: InputMaybe<Scalars['Boolean']>
  _lt: InputMaybe<Scalars['uuid']>
  _lte: InputMaybe<Scalars['uuid']>
  _neq: InputMaybe<Scalars['uuid']>
  _nin: InputMaybe<Array<Scalars['uuid']>>
}

/** columns and relationships of "warehouse_groups" */
export interface WarehouseGroups {
  createdAt: Scalars['timestamptz']
  createdBy: Scalars['uuid']
  disabled: Scalars['Boolean']
  fullName: Maybe<Scalars['String']>
  id: Scalars['uuid']
  shortName: Scalars['String']
  updatedAt: Scalars['timestamptz']
  updatedBy: Scalars['uuid']
}

/** aggregated selection of "warehouse_groups" */
export interface WarehouseGroups_Aggregate {
  aggregate: Maybe<WarehouseGroups_Aggregate_Fields>
  nodes: Array<WarehouseGroups>
}

/** aggregate fields of "warehouse_groups" */
export interface WarehouseGroups_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<WarehouseGroups_Max_Fields>
  min: Maybe<WarehouseGroups_Min_Fields>
}

/** aggregate fields of "warehouse_groups" */
export interface WarehouseGroups_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<WarehouseGroups_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "warehouse_groups". All fields are combined with a logical 'AND'. */
export interface WarehouseGroups_Bool_Exp {
  _and: InputMaybe<Array<WarehouseGroups_Bool_Exp>>
  _not: InputMaybe<WarehouseGroups_Bool_Exp>
  _or: InputMaybe<Array<WarehouseGroups_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  createdBy: InputMaybe<Uuid_Comparison_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  fullName: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  shortName: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  updatedBy: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "warehouse_groups" */
export enum WarehouseGroups_Constraint {
  /** unique or primary key constraint on columns "id" */
  WarehouseGroupsPkey = 'warehouse_groups_pkey',
  /** unique or primary key constraint on columns "short_name" */
  WarehouseGroupsShortNameKey = 'warehouse_groups_short_name_key',
}

/** input type for inserting data into table "warehouse_groups" */
export interface WarehouseGroups_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface WarehouseGroups_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface WarehouseGroups_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "warehouse_groups" */
export interface WarehouseGroups_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<WarehouseGroups>
}

/** on_conflict condition type for table "warehouse_groups" */
export interface WarehouseGroups_On_Conflict {
  constraint: WarehouseGroups_Constraint
  update_columns: Array<WarehouseGroups_Update_Column>
  where: InputMaybe<WarehouseGroups_Bool_Exp>
}

/** Ordering options when selecting data from "warehouse_groups". */
export interface WarehouseGroups_Order_By {
  createdAt: InputMaybe<Order_By>
  createdBy: InputMaybe<Order_By>
  disabled: InputMaybe<Order_By>
  fullName: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  shortName: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  updatedBy: InputMaybe<Order_By>
}

/** primary key columns input for table: warehouse_groups */
export interface WarehouseGroups_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "warehouse_groups" */
export enum WarehouseGroups_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

/** input type for updating data in table "warehouse_groups" */
export interface WarehouseGroups_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "warehouseGroups" */
export interface WarehouseGroups_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: WarehouseGroups_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface WarehouseGroups_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
}

/** update columns of table "warehouse_groups" */
export enum WarehouseGroups_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
}

export interface WarehouseGroups_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<WarehouseGroups_Set_Input>
  where: WarehouseGroups_Bool_Exp
}

/** columns and relationships of "warehouse_storages" */
export interface WarehouseStorages {
  createdAt: Scalars['timestamptz']
  createdBy: Scalars['uuid']
  disabled: Scalars['Boolean']
  fullName: Maybe<Scalars['String']>
  id: Scalars['uuid']
  shortName: Scalars['String']
  updatedAt: Scalars['timestamptz']
  updatedBy: Scalars['uuid']
  warehouseId: Scalars['uuid']
}

/** aggregated selection of "warehouse_storages" */
export interface WarehouseStorages_Aggregate {
  aggregate: Maybe<WarehouseStorages_Aggregate_Fields>
  nodes: Array<WarehouseStorages>
}

/** aggregate fields of "warehouse_storages" */
export interface WarehouseStorages_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<WarehouseStorages_Max_Fields>
  min: Maybe<WarehouseStorages_Min_Fields>
}

/** aggregate fields of "warehouse_storages" */
export interface WarehouseStorages_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<WarehouseStorages_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "warehouse_storages". All fields are combined with a logical 'AND'. */
export interface WarehouseStorages_Bool_Exp {
  _and: InputMaybe<Array<WarehouseStorages_Bool_Exp>>
  _not: InputMaybe<WarehouseStorages_Bool_Exp>
  _or: InputMaybe<Array<WarehouseStorages_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  createdBy: InputMaybe<Uuid_Comparison_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  fullName: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  shortName: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  updatedBy: InputMaybe<Uuid_Comparison_Exp>
  warehouseId: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "warehouse_storages" */
export enum WarehouseStorages_Constraint {
  /** unique or primary key constraint on columns "id" */
  WarehouseStoragesPkey = 'warehouse_storages_pkey',
  /** unique or primary key constraint on columns "short_name" */
  WarehouseStoragesShortNameKey = 'warehouse_storages_short_name_key',
}

/** input type for inserting data into table "warehouse_storages" */
export interface WarehouseStorages_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
  warehouseId: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface WarehouseStorages_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
  warehouseId: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface WarehouseStorages_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
  warehouseId: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "warehouse_storages" */
export interface WarehouseStorages_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<WarehouseStorages>
}

/** on_conflict condition type for table "warehouse_storages" */
export interface WarehouseStorages_On_Conflict {
  constraint: WarehouseStorages_Constraint
  update_columns: Array<WarehouseStorages_Update_Column>
  where: InputMaybe<WarehouseStorages_Bool_Exp>
}

/** Ordering options when selecting data from "warehouse_storages". */
export interface WarehouseStorages_Order_By {
  createdAt: InputMaybe<Order_By>
  createdBy: InputMaybe<Order_By>
  disabled: InputMaybe<Order_By>
  fullName: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  shortName: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  updatedBy: InputMaybe<Order_By>
  warehouseId: InputMaybe<Order_By>
}

/** primary key columns input for table: warehouse_storages */
export interface WarehouseStorages_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "warehouse_storages" */
export enum WarehouseStorages_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  WarehouseId = 'warehouseId',
}

/** input type for updating data in table "warehouse_storages" */
export interface WarehouseStorages_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
  warehouseId: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "warehouseStorages" */
export interface WarehouseStorages_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: WarehouseStorages_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface WarehouseStorages_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
  warehouseId: InputMaybe<Scalars['uuid']>
}

/** update columns of table "warehouse_storages" */
export enum WarehouseStorages_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  WarehouseId = 'warehouseId',
}

export interface WarehouseStorages_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<WarehouseStorages_Set_Input>
  where: WarehouseStorages_Bool_Exp
}

/** columns and relationships of "warehouses" */
export interface Warehouses {
  createdAt: Scalars['timestamptz']
  createdBy: Scalars['uuid']
  disabled: Scalars['Boolean']
  fullName: Maybe<Scalars['String']>
  id: Scalars['uuid']
  shortName: Scalars['String']
  updatedAt: Scalars['timestamptz']
  updatedBy: Scalars['uuid']
  warehouseGroupId: Scalars['uuid']
}

/** aggregated selection of "warehouses" */
export interface Warehouses_Aggregate {
  aggregate: Maybe<Warehouses_Aggregate_Fields>
  nodes: Array<Warehouses>
}

/** aggregate fields of "warehouses" */
export interface Warehouses_Aggregate_Fields {
  count: Scalars['Int']
  max: Maybe<Warehouses_Max_Fields>
  min: Maybe<Warehouses_Min_Fields>
}

/** aggregate fields of "warehouses" */
export interface Warehouses_Aggregate_FieldsCountArgs {
  columns: InputMaybe<Array<Warehouses_Select_Column>>
  distinct: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "warehouses". All fields are combined with a logical 'AND'. */
export interface Warehouses_Bool_Exp {
  _and: InputMaybe<Array<Warehouses_Bool_Exp>>
  _not: InputMaybe<Warehouses_Bool_Exp>
  _or: InputMaybe<Array<Warehouses_Bool_Exp>>
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>
  createdBy: InputMaybe<Uuid_Comparison_Exp>
  disabled: InputMaybe<Boolean_Comparison_Exp>
  fullName: InputMaybe<String_Comparison_Exp>
  id: InputMaybe<Uuid_Comparison_Exp>
  shortName: InputMaybe<String_Comparison_Exp>
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>
  updatedBy: InputMaybe<Uuid_Comparison_Exp>
  warehouseGroupId: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "warehouses" */
export enum Warehouses_Constraint {
  /** unique or primary key constraint on columns "id" */
  WarehousesPkey = 'warehouses_pkey',
  /** unique or primary key constraint on columns "short_name" */
  WarehousesShortNameKey = 'warehouses_short_name_key',
}

/** input type for inserting data into table "warehouses" */
export interface Warehouses_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
  warehouseGroupId: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface Warehouses_Max_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
  warehouseGroupId: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export interface Warehouses_Min_Fields {
  createdAt: Maybe<Scalars['timestamptz']>
  createdBy: Maybe<Scalars['uuid']>
  fullName: Maybe<Scalars['String']>
  id: Maybe<Scalars['uuid']>
  shortName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['timestamptz']>
  updatedBy: Maybe<Scalars['uuid']>
  warehouseGroupId: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "warehouses" */
export interface Warehouses_Mutation_Response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Warehouses>
}

/** on_conflict condition type for table "warehouses" */
export interface Warehouses_On_Conflict {
  constraint: Warehouses_Constraint
  update_columns: Array<Warehouses_Update_Column>
  where: InputMaybe<Warehouses_Bool_Exp>
}

/** Ordering options when selecting data from "warehouses". */
export interface Warehouses_Order_By {
  createdAt: InputMaybe<Order_By>
  createdBy: InputMaybe<Order_By>
  disabled: InputMaybe<Order_By>
  fullName: InputMaybe<Order_By>
  id: InputMaybe<Order_By>
  shortName: InputMaybe<Order_By>
  updatedAt: InputMaybe<Order_By>
  updatedBy: InputMaybe<Order_By>
  warehouseGroupId: InputMaybe<Order_By>
}

/** primary key columns input for table: warehouses */
export interface Warehouses_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "warehouses" */
export enum Warehouses_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  WarehouseGroupId = 'warehouseGroupId',
}

/** input type for updating data in table "warehouses" */
export interface Warehouses_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
  warehouseGroupId: InputMaybe<Scalars['uuid']>
}

/** Streaming cursor of the table "warehouses" */
export interface Warehouses_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Warehouses_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export interface Warehouses_Stream_Cursor_Value_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>
  createdBy: InputMaybe<Scalars['uuid']>
  disabled: InputMaybe<Scalars['Boolean']>
  fullName: InputMaybe<Scalars['String']>
  id: InputMaybe<Scalars['uuid']>
  shortName: InputMaybe<Scalars['String']>
  updatedAt: InputMaybe<Scalars['timestamptz']>
  updatedBy: InputMaybe<Scalars['uuid']>
  warehouseGroupId: InputMaybe<Scalars['uuid']>
}

/** update columns of table "warehouses" */
export enum Warehouses_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  WarehouseGroupId = 'warehouseGroupId',
}

export interface Warehouses_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Warehouses_Set_Input>
  where: Warehouses_Bool_Exp
}

export interface UserWithRolesFieldsFragment {
  id: string
  email: string | null
  displayName: string
  locale: string
  defaultRole: string
  avatarUrl: string
  lastSeen: string | null
  metadata: string | null
  isAnonymous: boolean
  disabled: boolean
  roles: Array<{ role: string }>
}

export type UserWithRolesQueryVariables = Exact<{
  id: Scalars['uuid']
}>

export interface UserWithRolesQuery {
  user: {
    id: string
    email: string | null
    displayName: string
    locale: string
    defaultRole: string
    avatarUrl: string
    lastSeen: string | null
    metadata: string | null
    isAnonymous: boolean
    disabled: boolean
    roles: Array<{ role: string }>
  } | null
}

export const UserWithRolesFieldsFragmentDoc = gql`
  fragment userWithRolesFields on users {
    id
    email
    displayName
    locale
    defaultRole
    roles {
      role
    }
    avatarUrl
    lastSeen
    metadata
    isAnonymous
    disabled
  }
`
export const UserWithRolesDocument = gql`
  query userWithRoles($id: uuid!) {
    user(id: $id) {
      ...userWithRolesFields
    }
  }
  ${UserWithRolesFieldsFragmentDoc}
`

export function useUserWithRolesQuery(
  options: Omit<
    Urql.UseQueryArgs<never, UserWithRolesQueryVariables>,
    'query'
  > = {},
) {
  return Urql.useQuery<UserWithRolesQuery>({
    query: UserWithRolesDocument,
    ...options,
  })
}
