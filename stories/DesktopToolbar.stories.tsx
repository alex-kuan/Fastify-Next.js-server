import React from 'react';
import { storiesOf } from '@storybook/react';
import DesktopToolbar from '../components/Narbar/components/DesktopToolbar';

storiesOf('Navbar', module)
  .add('Default', () => (
    <DesktopToolbar />
  ));
