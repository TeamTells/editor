import { YooptaPlugin, PluginElementRenderProps } from '@teamtells/editor';

const HeadingOneRender = ({ extendRender, ...props }: PluginElementRenderProps) => {
  const { element, HTMLAttributes = {}, attributes, children } = props;
  const { className = '', ...htmlAttrs } = HTMLAttributes;

  if (extendRender) return extendRender(props);

  return (
    <h1 id={element.id} draggable={false} className={`yoopta-heading-one ${className}`} {...htmlAttrs} {...attributes}>
      {children}
    </h1>
  );
};

HeadingOneRender.displayName = 'HeadingOne';

const HeadingOne = new YooptaPlugin({
  type: 'HeadingOne',
  elements: {
    'heading-one': {
      render: HeadingOneRender,
      props: {
        nodeType: 'block',
      },
    },
  },
  options: {
    display: {
      title: 'Заголовок 1',
      description: 'Большой заголовок раздела.',
    },
    shortcuts: ['h1', '#', '*'],
  },
  parsers: {
    html: {
      deserialize: {
        nodeNames: ['H1'],
      },
      serialize: (element, text, blockMeta) => {
        const { depth = 0, align = 'left' } = blockMeta || {};

        return `<h1 data-meta-align="${align}" data-meta-depth="${depth}" style="margin-left: ${depth}px; text-align: ${align}">${text}</h1>`;
      },
    },
    markdown: {
      serialize: (element, text) => {
        return `# ${text}\n`;
      },
    },
  },
});

export { HeadingOne };
