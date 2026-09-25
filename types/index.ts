import { ReactNode } from "react";

/**
 * Work（実績）の型定義
 */
export interface Work {
  title: string;
  description: string[];
  category: string;
  period: string;
  skills: SkillTag[];
  image?: string;
  href?: string;
}

/**
 * CoreSkill（経験年数を示すコアスキル）の型定義
 */
export interface CoreSkill {
  icon: ReactNode;
  label: string;
  value: string;
  unit: string;
  description: string;
}

/**
 * SkillTag（アイコン+ラベルのみの軽量スキル表示）の型定義
 */
export interface SkillTag {
  label: string;
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
 * ハイライト（強み・経験の要約）の型定義
 */
export interface ProfileHighlight {
  label: string;
  description: string;
}

/**
 * Profile（プロフィール）の型定義
 */
export interface Profile {
  name: string;
  tagline?: string;
  highlights?: ProfileHighlight[];
  description: string | ReactNode;
  sns?: SnsLinks;
}
