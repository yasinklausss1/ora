export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      bitcoin_addresses: {
        Row: {
          address: string
          created_at: string
          id: string
          is_active: boolean
          private_key_encrypted: string
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          id?: string
          is_active?: boolean
          private_key_encrypted: string
          user_id: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: string
          is_active?: boolean
          private_key_encrypted?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bitcoin_addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      bulk_discounts: {
        Row: {
          created_at: string | null
          discount_percentage: number
          id: string
          min_quantity: number
          product_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          discount_percentage: number
          id?: string
          min_quantity: number
          product_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          discount_percentage?: number
          id?: string
          min_quantity?: number
          product_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bulk_discounts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      cart_items: {
        Row: {
          category: string
          created_at: string
          id: string
          image_url: string | null
          price: number
          product_id: string
          quantity: number
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          image_url?: string | null
          price: number
          product_id: string
          quantity?: number
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          image_url?: string | null
          price?: number
          product_id?: string
          quantity?: number
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      deposit_requests: {
        Row: {
          address: string
          confirmations: number
          created_at: string
          crypto_amount: number
          currency: string
          expires_at: string
          fingerprint: number
          id: string
          rate_locked: number
          requested_eur: number
          status: string
          tx_hash: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address: string
          confirmations?: number
          created_at?: string
          crypto_amount: number
          currency: string
          expires_at: string
          fingerprint: number
          id?: string
          rate_locked: number
          requested_eur: number
          status?: string
          tx_hash?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string
          confirmations?: number
          created_at?: string
          crypto_amount?: number
          currency?: string
          expires_at?: string
          fingerprint?: number
          id?: string
          rate_locked?: number
          requested_eur?: number
          status?: string
          tx_hash?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dispute_messages: {
        Row: {
          created_at: string | null
          dispute_id: string
          id: string
          is_admin: boolean | null
          message: string
          sender_id: string
        }
        Insert: {
          created_at?: string | null
          dispute_id: string
          id?: string
          is_admin?: boolean | null
          message: string
          sender_id: string
        }
        Update: {
          created_at?: string | null
          dispute_id?: string
          id?: string
          is_admin?: boolean | null
          message?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dispute_messages_dispute_id_fkey"
            columns: ["dispute_id"]
            isOneToOne: false
            referencedRelation: "disputes"
            referencedColumns: ["id"]
          },
        ]
      }
      disputes: {
        Row: {
          admin_assigned: string | null
          created_at: string | null
          defendant_id: string
          id: string
          order_id: string
          plaintiff_id: string
          priority: string
          reason: string
          resolution: string | null
          resolved_at: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          admin_assigned?: string | null
          created_at?: string | null
          defendant_id: string
          id?: string
          order_id: string
          plaintiff_id: string
          priority?: string
          reason: string
          resolution?: string | null
          resolved_at?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          admin_assigned?: string | null
          created_at?: string | null
          defendant_id?: string
          id?: string
          order_id?: string
          plaintiff_id?: string
          priority?: string
          reason?: string
          resolution?: string | null
          resolved_at?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "disputes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      news: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          price_eur: number
          product_id: string
          quantity: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          price_eur: number
          product_id: string
          quantity?: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          price_eur?: number
          product_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          id: string
          order_status: Database["public"]["Enums"]["order_status"] | null
          shipping_city: string | null
          shipping_country: string | null
          shipping_first_name: string | null
          shipping_house_number: string | null
          shipping_last_name: string | null
          shipping_postal_code: string | null
          shipping_street: string | null
          status: string
          status_updated_at: string | null
          status_updated_by: string | null
          total_amount_eur: number
          tracking_number: string | null
          tracking_url: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_status?: Database["public"]["Enums"]["order_status"] | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_first_name?: string | null
          shipping_house_number?: string | null
          shipping_last_name?: string | null
          shipping_postal_code?: string | null
          shipping_street?: string | null
          status?: string
          status_updated_at?: string | null
          status_updated_by?: string | null
          total_amount_eur: number
          tracking_number?: string | null
          tracking_url?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          order_status?: Database["public"]["Enums"]["order_status"] | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_first_name?: string | null
          shipping_house_number?: string | null
          shipping_last_name?: string | null
          shipping_postal_code?: string | null
          shipping_street?: string | null
          status?: string
          status_updated_at?: string | null
          status_updated_by?: string | null
          total_amount_eur?: number
          tracking_number?: string | null
          tracking_url?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean
          price: number
          seller_id: string
          stock: number
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          price: number
          seller_id: string
          stock?: number
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          price?: number
          seller_id?: string
          stock?: number
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          theme_preference: string | null
          updated_at: string
          user_id: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          theme_preference?: string | null
          updated_at?: string
          user_id: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          theme_preference?: string | null
          updated_at?: string
          user_id?: string
          username?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          id: string
          order_id: string
          rating: number
          reviewer_id: string
          seller_id: string
          updated_at: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: string
          order_id: string
          rating: number
          reviewer_id: string
          seller_id: string
          updated_at?: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: string
          order_id?: string
          rating?: number
          reviewer_id?: string
          seller_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_ratings: {
        Row: {
          average_rating: number
          id: string
          seller_id: string
          total_rating_points: number
          total_reviews: number
          updated_at: string
        }
        Insert: {
          average_rating?: number
          id?: string
          seller_id: string
          total_rating_points?: number
          total_reviews?: number
          updated_at?: string
        }
        Update: {
          average_rating?: number
          id?: string
          seller_id?: string
          total_rating_points?: number
          total_reviews?: number
          updated_at?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount_btc: number
          amount_eur: number
          btc_confirmations: number | null
          btc_tx_hash: string | null
          confirmed_at: string | null
          created_at: string
          description: string | null
          from_username: string | null
          id: string
          related_order_id: string | null
          status: string
          to_username: string | null
          transaction_direction: string | null
          type: string
          user_id: string
        }
        Insert: {
          amount_btc?: number
          amount_eur: number
          btc_confirmations?: number | null
          btc_tx_hash?: string | null
          confirmed_at?: string | null
          created_at?: string
          description?: string | null
          from_username?: string | null
          id?: string
          related_order_id?: string | null
          status?: string
          to_username?: string | null
          transaction_direction?: string | null
          type: string
          user_id: string
        }
        Update: {
          amount_btc?: number
          amount_eur?: number
          btc_confirmations?: number | null
          btc_tx_hash?: string | null
          confirmed_at?: string | null
          created_at?: string
          description?: string | null
          from_username?: string | null
          id?: string
          related_order_id?: string | null
          status?: string
          to_username?: string | null
          transaction_direction?: string | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_addresses: {
        Row: {
          address: string
          created_at: string
          currency: string
          id: string
          is_active: boolean
          private_key_encrypted: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          currency: string
          id?: string
          is_active?: boolean
          private_key_encrypted?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string
          created_at?: string
          currency?: string
          id?: string
          is_active?: boolean
          private_key_encrypted?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_presence: {
        Row: {
          created_at: string
          id: string
          is_online: boolean
          last_seen: string
          updated_at: string
          user_id: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_online?: boolean
          last_seen?: string
          updated_at?: string
          user_id: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          is_online?: boolean
          last_seen?: string
          updated_at?: string
          user_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_presence_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      wallet_balances: {
        Row: {
          balance_btc: number
          balance_btc_deposited: number
          balance_eur: number
          balance_ltc: number
          balance_ltc_deposited: number
          balance_xmr: number
          balance_xmr_deposited: number
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          balance_btc?: number
          balance_btc_deposited?: number
          balance_eur?: number
          balance_ltc?: number
          balance_ltc_deposited?: number
          balance_xmr?: number
          balance_xmr_deposited?: number
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          balance_btc?: number
          balance_btc_deposited?: number
          balance_eur?: number
          balance_ltc?: number
          balance_ltc_deposited?: number
          balance_xmr?: number
          balance_xmr_deposited?: number
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallet_balances_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      wallet_security: {
        Row: {
          created_at: string
          id: string
          last_withdrawal_at: string | null
          two_factor_enabled: boolean
          updated_at: string
          user_id: string
          withdrawal_limit_daily_eur: number
          withdrawal_limit_monthly_eur: number
        }
        Insert: {
          created_at?: string
          id?: string
          last_withdrawal_at?: string | null
          two_factor_enabled?: boolean
          updated_at?: string
          user_id: string
          withdrawal_limit_daily_eur?: number
          withdrawal_limit_monthly_eur?: number
        }
        Update: {
          created_at?: string
          id?: string
          last_withdrawal_at?: string | null
          two_factor_enabled?: boolean
          updated_at?: string
          user_id?: string
          withdrawal_limit_daily_eur?: number
          withdrawal_limit_monthly_eur?: number
        }
        Relationships: []
      }
      withdrawal_fees: {
        Row: {
          base_fee_eur: number
          created_at: string
          currency: string
          id: string
          min_amount_eur: number
          network_fee_crypto: number
          percentage_fee: number
          updated_at: string
        }
        Insert: {
          base_fee_eur?: number
          created_at?: string
          currency: string
          id?: string
          min_amount_eur?: number
          network_fee_crypto?: number
          percentage_fee?: number
          updated_at?: string
        }
        Update: {
          base_fee_eur?: number
          created_at?: string
          currency?: string
          id?: string
          min_amount_eur?: number
          network_fee_crypto?: number
          percentage_fee?: number
          updated_at?: string
        }
        Relationships: []
      }
      withdrawal_requests: {
        Row: {
          amount_crypto: number
          amount_eur: number
          created_at: string
          currency: string
          destination_address: string
          fee_eur: number
          id: string
          notes: string | null
          processed_at: string | null
          status: string
          tx_hash: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount_crypto: number
          amount_eur: number
          created_at?: string
          currency: string
          destination_address: string
          fee_eur?: number
          id?: string
          notes?: string | null
          processed_at?: string | null
          status?: string
          tx_hash?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount_crypto?: number
          amount_eur?: number
          created_at?: string
          currency?: string
          destination_address?: string
          fee_eur?: number
          id?: string
          notes?: string | null
          processed_at?: string | null
          status?: string
          tx_hash?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_withdrawal_limits: {
        Args: { user_uuid: string; amount_eur: number }
        Returns: boolean
      }
      close_deposit_request: {
        Args: { request_id: string }
        Returns: boolean
      }
      get_or_create_wallet_balance: {
        Args: { user_uuid: string }
        Returns: {
          balance_eur: number
          balance_btc: number
          balance_ltc: number
        }[]
      }
      get_seller_orders: {
        Args: { seller_uuid: string }
        Returns: {
          id: string
          user_id: string
          total_amount_eur: number
          status: string
          created_at: string
          shipping_first_name: string
          shipping_last_name: string
          shipping_street: string
          shipping_house_number: string
          shipping_postal_code: string
          shipping_city: string
          shipping_country: string
          buyer_username: string
          items: Json
        }[]
      }
      get_user_role: {
        Args: { user_uuid: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
      make_user_admin: {
        Args: { user_email: string }
        Returns: undefined
      }
      update_order_status: {
        Args: {
          order_uuid: string
          new_status: Database["public"]["Enums"]["order_status"]
          tracking_num?: string
          tracking_link?: string
        }
        Returns: boolean
      }
    }
    Enums: {
      order_status:
        | "pending"
        | "confirmed"
        | "processing"
        | "shipped"
        | "delivered"
        | "cancelled"
      product_category:
        | "electronics"
        | "clothing"
        | "books"
        | "home"
        | "sports"
        | "other"
      user_role: "user" | "seller" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      order_status: [
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
      ],
      product_category: [
        "electronics",
        "clothing",
        "books",
        "home",
        "sports",
        "other",
      ],
      user_role: ["user", "seller", "admin"],
    },
  },
} as const
