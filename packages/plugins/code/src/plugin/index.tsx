import { generateId, YooptaPlugin } from '@teamtells/editor';
import { CodeElementProps, CodePluginBlockOptions, CodePluginElements } from '../types';
import { CodeEditor } from '../ui/Code';

const ALIGNS_TO_JUSTIFY = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const Code = new YooptaPlugin<CodePluginElements, CodeElementProps, CodePluginBlockOptions>({
  type: 'Code',
  customEditor: CodeEditor,
  elements: {
    code: {
      render: (props) => {
        return <pre />;
      },
      props: {
        nodeType: 'void',
        language: 'javascript',
        theme: 'VSCode',
      },
    },
  },
  options: {
    display: {
      title: 'Code',
      description: 'Write the best code ever!',
    },
    shortcuts: ['```', 'code', 'js'],
  },
  parsers: {
    html: {
      deserialize: {
        nodeNames: ['PRE'],
        parse: (el) => {
          if (el.nodeName === 'PRE') {
            const code = el.querySelector('code');
            const textContent = code ? code.textContent : el.textContent;

            return {
              children: [{ text: textContent || '' }],
              type: 'code',
              id: generateId(),
              props: {
                language: 'JavaScript',
                theme: 'VSCode',
                nodeType: 'void',
              },
            };
          }
        },
      },
      serialize: (element, text, blockMeta) => {
        const { align = 'left', depth = 0 } = blockMeta || {};
        const justify = ALIGNS_TO_JUSTIFY[align] || 'left';

        return `<pre data-meta-align="${align}" data-meta-depth="${depth}" style="margin-left: ${depth}px; display: flex; width: 100%; justify-content: "${justify}"; background-color: #263238; color: #fff; padding: 20px 24px; white-space: pre-line;"><code>${text}</code></pre>`.toString();
      },
    },
    markdown: {
      serialize: (element, text) => {
        return `\`\`\`${element.props.language || 'javascript'}\n${text}\n\`\`\``;
      },
    },
  },
});

export { Code };
