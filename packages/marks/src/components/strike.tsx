import { createYooptaMark, YooptaMarkProps } from '@teamtells/editor';

type StrikeMarkProps = YooptaMarkProps<'strike', boolean>;

export const Strike = createYooptaMark<StrikeMarkProps>({
  type: 'strike',
  hotkey: 'mod+shift+s',
  render: (props) => <s className="yoo-marks-stroke yoopta-mark-strike">{props.children}</s>,
});
