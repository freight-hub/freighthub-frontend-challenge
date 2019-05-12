import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Input } from '.';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('Default', () => {
  const type: 'text' | 'password' = select('Type', ['text', 'password'], 'text')
  return <Input
    onChange={action('input-change')}
    type={type}
    placeholder={text('Placeholder', 'Default Placeholder')}
    value={text('Value', '')}
  />
});
