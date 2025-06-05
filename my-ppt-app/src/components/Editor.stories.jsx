import Editor from './Editor';

export default {
  title: 'Components/Editor',
  component: Editor,
};

const Template = (args) => <Editor {...args} />;

export const Default = Template.bind({});
Default.args = {
  markdown: '## Hello\n---\nWorld!',
  setMarkdown: () => {},
};