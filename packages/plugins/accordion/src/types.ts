import { SlateElement } from '@teamtells/editor';

export type AccordionElementKeys =
  | 'accordion-list'
  | 'accordion-list-item'
  | 'accordion-list-item-heading'
  | 'accordion-list-item-content';

export type AccordionListItemProps = {
  isExpanded: boolean;
};

export type AccordionItemElement = SlateElement<'accordion-list-item', AccordionListItemProps>;
export type AccordionListElement = SlateElement<'accordion-list'>;
export type AccordionListItemHeadingElement = SlateElement<'accordion-list-item-heading'>;
export type AccordionListItemContentElement = SlateElement<'accordion-list-item-content'>;
