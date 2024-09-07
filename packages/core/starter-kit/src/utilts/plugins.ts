import Paragraph from '@teamtells/paragraph';
import Blockquote from '@teamtells/blockquote';
import Embed from '@teamtells/embed';
import Image from '@teamtells/image';
import Link from '@teamtells/link';
import Callout from '@teamtells/callout';
import Video from '@teamtells/video';
import File from '@teamtells/file';
import Accordion from '@teamtells/accordion';
import { NumberedList, BulletedList, TodoList } from '@teamtells/lists';
import { HeadingOne, HeadingThree, HeadingTwo } from '@teamtells/headings';
import Code from '@teamtells/code';
import { type MediaUploadsFn } from '../components/StarterKit/StarterKit';

type PluginParams = {
  media?: MediaUploadsFn;
};

export const getPlugins = ({ media }: PluginParams) => {
  return [
    Paragraph,
    Accordion,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    Blockquote,
    Callout,
    NumberedList,
    BulletedList,
    TodoList,
    Code,
    Link,
    Embed,
    Image.extend({
      options: {
        async onUpload(file) {
          if (!media?.imageUpload) {
            throw new Error('Image upload function is not provided');
          }

          const data = await media?.imageUpload(file);
          return data;
        },
      },
    }),
    Video.extend({
      options: {
        onUpload: async (file) => {
          if (!media?.videoUpload) {
            throw new Error('Image upload function is not provided');
          }

          const data = await media?.videoUpload(file);
          return data;
        },
      },
    }),
    File.extend({
      options: {
        onUpload: async (file) => {
          if (!media?.fileUpload) {
            throw new Error('Image upload function is not provided');
          }

          const data = await media?.fileUpload(file);
          return data;
        },
      },
    }),
  ];
};
