import { PluginElementRenderProps } from '@teamtells/editor';

export const AccordionList = ({ extendRender, ...props }: PluginElementRenderProps) => {
  const { attributes, children } = props;

  if (extendRender) return extendRender(props);

  return <div {...attributes}>{children}</div>;
};
