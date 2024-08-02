import { YooEditor, YooptaContentValue } from '@teamtells/editor';
import { serializeHTML } from '../html/serialize';

export function serializeText(editor: YooEditor, content: YooptaContentValue) {
  const htmlString = serializeHTML(editor, content);

  const div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.innerText;
}
