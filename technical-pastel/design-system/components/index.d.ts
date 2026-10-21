import type * as React from 'react';

export type IconName =
  | 'select' | 'move' | 'pen' | 'shape' | 'text' | 'frame' | 'crop' | 'layers' | 'grid'
  | 'eye' | 'lock' | 'play' | 'pause' | 'record' | 'add' | 'close' | 'more' | 'search'
  | 'sliders' | 'export' | 'undo' | 'redo' | 'chevron' | 'check' | 'warning' | 'measure';

export interface IconProps {
  name: IconName;
  /** 16, 20 or 24. The 1.5px stroke at 24 scales with the size. Defaults to 20. */
  size?: 16 | 20 | 24 | number;
  /** Set when the icon stands alone and needs a name; otherwise it is hidden from assistive tech. */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): React.ReactElement;
export declare namespace Icon { const names: IconName[]; }

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary is the light blue accent with near-black text, one per view. Defaults to secondary. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm 24px, md 28px, lg 36px. Defaults to md. */
  size?: 'sm' | 'md' | 'lg';
  /** An icon name or a node, shown before the label (or alone, with an aria-label). */
  icon?: IconName | React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface SegmentedItem<V = string> {
  value: V;
  label?: string;
  icon?: IconName | React.ReactNode;
  /** Tooltip, and the accessible name of an icon-only segment. */
  title?: string;
}
export interface SegmentedProps<V = string> {
  items: SegmentedItem<V>[];
  value?: V;
  defaultValue?: V;
  onChange?: (value: V) => void;
  /** Accessible name of the group. */
  label?: string;
  /** md 28px or sm 24px. Defaults to md. */
  size?: 'sm' | 'md';
  className?: string;
}
export declare function Segmented<V = string>(props: SegmentedProps<V>): React.ReactElement;

export interface PanelProps {
  /** Short noun phrase, sentence case: "Transform", "Appearance". */
  title: React.ReactNode;
  /** Ghost sm icon buttons shown at the right of the header. */
  actions?: React.ReactNode;
  /** Defaults to true. */
  collapsible?: boolean;
  /** Defaults to true. */
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export declare function Panel(props: PanelProps): React.ReactElement;

export interface ValueFieldProps {
  label: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** Defaults to 0. */
  min?: number;
  /** Defaults to 100. */
  max?: number;
  /** Defaults to 1. Shift multiplies arrow-key steps by 10 and slows dragging by 10. */
  step?: number;
  /** Decimals shown. Defaults to the step's decimals. */
  precision?: number;
  /** Shown after the number in mono: "px", "fps", "dB". No space is added before °, %, × and primes. */
  unit?: string;
  /** Show the accent-soft fill bar. Turn off for unbounded values like coordinates. Defaults to true. */
  bar?: boolean;
  /** md 28px or sm 24px for dense inspectors. Defaults to md. */
  size?: 'sm' | 'md';
  disabled?: boolean;
  className?: string;
}
export declare function ValueField(props: ValueFieldProps): React.ReactElement;

export interface EmptyStateProps {
  /** An invitation: "Start with a frame". */
  title: string;
  /** One sentence explaining the space. */
  children?: React.ReactNode;
  /** The icon drawn on the pastel tile. Defaults to add. */
  icon?: IconName;
  /** The pastel behind the icon. Defaults to blue. */
  tone?: 'blue' | 'lilac' | 'rose' | 'peach' | 'butter' | 'mint' | 'sage' | 'stone';
  /** A dimension label shown on a dimension line across the top: "1920 × 1080". */
  meta?: string;
  /** Usually one primary Button. */
  action?: React.ReactNode;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;

declare global {
  interface Window {
    TechnicalPastel: {
      Icon: typeof Icon;
      Button: typeof Button;
      Segmented: typeof Segmented;
      Panel: typeof Panel;
      ValueField: typeof ValueField;
      EmptyState: typeof EmptyState;
    };
  }
}
