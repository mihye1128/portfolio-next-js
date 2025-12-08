import { ReactNode } from "react";

/**
 * Work（実績）の型定義
 */
export interface Work {
  title: string[];
  description: string[];
  category: string;
  releaseDate: string;
  skills: ReactNode[];
  image?: string;
  href?: string;
}

/**
 * Skill（スキル）の型定義
 */
export interface Skill {
  label: string;
  description: string | ReactNode;
  icon: ReactNode;
}

/**
 * SNSリンクの型定義
 */
export interface SnsLinks {
  x?: string;
  facebook?: string;
  github?: string;
}

/**
 * Profile（プロフィール）の型定義
 */
export interface Profile {
  name: string;
  description: string | ReactNode;
  sns?: SnsLinks;
}

/**
 * ProfileHistory（経歴）の型定義
 */
export interface ProfileHistory {
  title: string;
  description: string | ReactNode;
}
