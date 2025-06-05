import MarkdownRenderer from './MarkdownRenderer';

export default {
  title: 'Components/MarkdownRenderer',
  component: MarkdownRenderer,
};

const Template = (args) => <MarkdownRenderer {...args} />;

export const CodeBlock = Template.bind({});
CodeBlock.args = {
  markdown: '```js\nconsole.log("Hello Storybook");\n```',
};