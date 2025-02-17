import { generateId, YooptaPlugin } from '@teamtells/editor';
import { CSSProperties } from 'react';
import { CalloutElementProps, CalloutPluginElementKeys, CalloutTheme } from '../types';
import { CalloutRender } from '../ui/Callout';
import { CALLOUT_THEME_STYLES } from '../utils';

const Callout = new YooptaPlugin<CalloutPluginElementKeys, CalloutElementProps>({
  type: 'Callout',
  elements: {
    callout: {
      render: CalloutRender,
      props: {
        theme: 'default',
      },
    },
  },
  options: {
    display: {
      title: 'Заметка',
      description: 'Сделайте текст заметным.',
    },
    shortcuts: ['<'],
  },
  parsers: {
    html: {
      deserialize: {
        nodeNames: ['DL'],
        parse(el) {
          if (el.nodeName === 'DL' || el.nodeName === 'DIV') {
            const theme = el.getAttribute('data-theme') as CalloutTheme;

            return {
              id: generateId(),
              type: 'callout',
              children: [{ text: el.textContent || '' }],
              props: {
                theme,
              },
            };
          }
        },
      },
      serialize: (element, text, blockMeta) => {
        const theme: CSSProperties = CALLOUT_THEME_STYLES[element.props?.theme || 'default'];
        const { align = 'left', depth = 0 } = blockMeta || {};

        return `<dl data-theme="${
          element.props?.theme || 'default'
        }" data-meta-align="${align}" data-meta-depth="${depth}" style="margin-left: ${depth}px; text-align: ${align}; padding: .5rem .5rem .5rem 1rem; margin-top: .5rem; border-radius: .375rem; color: ${
          theme.color
        }; border-left: ${theme.borderLeft || 0}; background-color: ${theme.backgroundColor}">${text}</dl>`;
      },
    },
    markdown: {
      serialize: (element, text) => {
        return `> ${text}`;
      },
    },
  },
});

export { Callout };
