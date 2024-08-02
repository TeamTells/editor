import { SlateElement } from '@teamtells/editor';
import { ActionMenuList } from './components/ActionMenuList';
export { DefaultActionMenuRender } from './components/DefaultActionMenuRender';
export { ActionMenuRenderProps, ActionMenuToolProps } from './types';
export { buildActionMenuRenderProps } from './components/utils';

import './styles.css';

declare module 'slate' {
  interface CustomTypes {
    Element: SlateElement<string>;
  }
}

export default ActionMenuList;
