import { SlateElement, YooEditor, YooptaBlockData, YooptaContentValue } from '@teamtells/editor';

export function serialize(editor: YooEditor, blocksData: YooptaBlockData[]) {
  const blocks = blocksData.sort((a, b) => (a.meta.order > b.meta.order ? 1 : -1));

  const markdown = blocks.map((blockData) => {
    const plugin = editor.plugins[blockData.type];

    if (plugin) {
      const element = blockData.value[0] as SlateElement;

      if (plugin.parsers?.markdown?.serialize) {
        const serialized = plugin.parsers.markdown.serialize(
          element,
          element.children.map((child) => child.text).join(''),
        );
        if (serialized) return serialized;
      }
    }

    return '';
  });

  return markdown.join('\n');
}

export function serializeMarkdown(editor: YooEditor, content: YooptaContentValue) {
  const selectedBlocks = Object.values(content);
  return serialize(editor, selectedBlocks);
}
