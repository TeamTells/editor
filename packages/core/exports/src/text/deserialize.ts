import { buildBlockData, generateId, YooEditor, YooptaContentValue } from '@teamtells/editor';

export function deserializeText(editor: YooEditor, text: string): YooptaContentValue {
  const blockId = generateId();
  const paragraphBlock = buildBlockData({
    id: blockId,
    value: [{ id: generateId(), children: [{ text }] }],
  });

  return {
    [blockId]: paragraphBlock,
  };
}
