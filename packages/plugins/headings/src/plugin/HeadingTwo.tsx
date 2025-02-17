import { PluginElementRenderProps, YooptaPlugin } from '@teamtells/editor';

const HeadingTwoRender = ({ extendRender, ...props }: PluginElementRenderProps) => {
  const { element, HTMLAttributes = {}, attributes, children } = props;
  const { className = '', ...htmlAttrs } = HTMLAttributes;

  if (extendRender) return extendRender(props);

  return (
    <h2 id={element.id} draggable={false} className={`yoopta-heading-two ${className}`} {...htmlAttrs} {...attributes}>
      {children}
    </h2>
  );
};

HeadingTwoRender.displayName = 'HeadingTwo';

const HeadingTwo = new YooptaPlugin({
  type: 'HeadingTwo',
  elements: {
    'heading-two': {
      render: HeadingTwoRender,
      props: {
        nodeType: 'block',
      },
    },
  },
  options: {
    display: {
      title: 'Заголовок 2',
      description: 'Средний заголовок раздела.',
    },
    shortcuts: ['h2', '##'],
  },
  parsers: {
    html: {
      deserialize: {
        nodeNames: ['H2'],
      },
      serialize: (element, text, blockMeta) => {
        const { depth = 0, align = 'left' } = blockMeta || {};

        return `<h2 data-meta-align="${align}" data-meta-depth="${depth}" style="margin-left: ${depth}px; text-align: ${align}">${text}</h2>`;
      },
    },
    markdown: {
      serialize: (element, text) => {
        return `## ${text}\n`;
      },
    },
  },
});

export { HeadingTwo };
