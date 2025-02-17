import { YooptaBlockData } from '@teamtells/editor';
import { CodeElement } from '../types';

export const getCodeElement = (block: YooptaBlockData) => {
  return block.value[0];
};

export const getCodeElementText = (block: YooptaBlockData) => {
  const element = getCodeElement(block) as CodeElement;
  let text = '';

  element.children.forEach((child) => {
    text += `${child.text}`;
  });

  return text;
};
