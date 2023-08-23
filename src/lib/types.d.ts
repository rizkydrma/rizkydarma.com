export type Post = {
  title: string;
  slug: string;
  date: string;
  publishedAt: string;
  tags: string;
  description: string;
  body: string;
  lastModified?: number;
  views?: number;
  // Third party only
  isThirdParty?: boolean;
  href?: string;
  banner?: string;
  count?: number;
  link?: string;
};

export type Project = {
  title: string;
  description: string;
  href: string;
  role: string;
  years: string[];
  stars?: number;
};

export interface Views {
  slug: string;
  count: number;
}

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      views: {
        Row: {
          created_at: string | null;
          slug: string;
          count: number | null;
        };
        Insert: {
          created_at?: string | null;
          slug: string;
          count?: number | null;
        };
        Update: {
          created_at?: string | null;
          slug?: string;
          count?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      increment: {
        Args: { slug_text: string };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
