import { configure } from '@storybook/react';
//allow to import all stories files to storybook without explicitly requiring one file at a time
function loadStories() {
  const req = require.context('../stories', true, /\.stories\.tsx$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
