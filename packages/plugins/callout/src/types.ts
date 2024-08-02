import { SlateElement } from '@teamtells/editor';

export type CalloutPluginElementKeys = 'callout';

export type CalloutTheme = 'default' | 'success' | 'warning' | 'error' | 'info';
export type CalloutElementProps = { theme: CalloutTheme };
export type CalloutElement = SlateElement<'callout', CalloutElementProps>;
