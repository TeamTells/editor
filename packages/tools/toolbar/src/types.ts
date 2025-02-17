import { YooEditor, YooptaBlock } from '@teamtells/editor';

export type ToolbarRenderProps = {
  activeBlock?: YooptaBlock;
  editor: YooEditor;
  toggleHoldToolbar?: (hold: boolean) => void;
};

export type ToolbarToolProps = {
  render?: (props: any) => JSX.Element;
};
