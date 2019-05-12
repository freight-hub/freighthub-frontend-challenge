import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Card } from '.';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Card>
    {text('Label', 'Default card data')}
  </Card>
));

stories.add('Clickable', () => (
  <Card onClick={action('card-click')}>
    {text('Label', 'Default card data')}
  </Card>
));
