import ActionMenuList, { DefaultActionMenuRender } from '@teamtells/action-menu-list';
import LinkTool, { DefaultLinkToolRender } from '@teamtells/link-tool';
import Toolbar, { DefaultToolbarRender } from '@teamtells/toolbar';

export const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
  LinkTool: {
    render: DefaultLinkToolRender,
    tool: LinkTool,
  },
};
