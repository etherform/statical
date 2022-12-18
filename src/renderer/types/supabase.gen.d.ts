export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName: string
          query: string
          variables: Json
          extensions: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      dict_company: {
        Row: {
          id: string
          full_name: string
          short_name: string
          created_at: string
          updated_at: string
          deleted: boolean
        }
        Insert: {
          id?: string
          full_name: string
          short_name: string
          created_at?: string
          updated_at?: string
          deleted?: boolean
        }
        Update: {
          id?: string
          full_name?: string
          short_name?: string
          created_at?: string
          updated_at?: string
          deleted?: boolean
        }
      }
      roles: {
        Row: {
          id: string
          role: string
          created_at: string
          updated_At: string
          deleted: boolean
        }
        Insert: {
          id?: string
          role: string
          created_at?: string
          updated_At?: string
          deleted?: boolean
        }
        Update: {
          id?: string
          role?: string
          created_at?: string
          updated_At?: string
          deleted?: boolean
        }
      }
      user_roles: {
        Row: {
          id: string
          user_id: string
          role_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          role_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role_id?: string
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          name: string
          email: string
          locale: string
          created_at: string
          updated_at: string
          deleted: boolean
        }
        Insert: {
          id: string
          name: string
          email: string
          locale?: string
          created_at?: string
          updated_at?: string
          deleted?: boolean
        }
        Update: {
          id?: string
          name?: string
          email?: string
          locale?: string
          created_at?: string
          updated_at?: string
          deleted?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      citext:
        | {
            Args: { "": string }
            Returns: unknown
          }
        | {
            Args: { "": boolean }
            Returns: unknown
          }
        | {
            Args: { "": unknown }
            Returns: unknown
          }
      citext_hash: {
        Args: { "": unknown }
        Returns: number
      }
      citextin: {
        Args: { "": unknown }
        Returns: unknown
      }
      citextout: {
        Args: { "": unknown }
        Returns: unknown
      }
      citextrecv: {
        Args: { "": unknown }
        Returns: unknown
      }
      citextsend: {
        Args: { "": unknown }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          id: string
          name: string
          owner: string | null
          created_at: string | null
          updated_at: string | null
          public: boolean | null
        }
        Insert: {
          id: string
          name: string
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          public?: boolean | null
        }
        Update: {
          id?: string
          name?: string
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          public?: boolean | null
        }
      }
      migrations: {
        Row: {
          id: number
          name: string
          hash: string
          executed_at: string | null
        }
        Insert: {
          id: number
          name: string
          hash: string
          executed_at?: string | null
        }
        Update: {
          id?: number
          name?: string
          hash?: string
          executed_at?: string | null
        }
      }
      objects: {
        Row: {
          id: string
          bucket_id: string | null
          name: string | null
          owner: string | null
          created_at: string | null
          updated_at: string | null
          last_accessed_at: string | null
          metadata: Json | null
          path_tokens: string[] | null
        }
        Insert: {
          id?: string
          bucket_id?: string | null
          name?: string | null
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_accessed_at?: string | null
          metadata?: Json | null
          path_tokens?: string[] | null
        }
        Update: {
          id?: string
          bucket_id?: string | null
          name?: string | null
          owner?: string | null
          created_at?: string | null
          updated_at?: string | null
          last_accessed_at?: string | null
          metadata?: Json | null
          path_tokens?: string[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      extension: {
        Args: { name: string }
        Returns: string
      }
      filename: {
        Args: { name: string }
        Returns: string
      }
      foldername: {
        Args: { name: string }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: { size: number; bucket_id: string }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits: number
          levels: number
          offsets: number
          search: string
          sortcolumn: string
          sortorder: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
