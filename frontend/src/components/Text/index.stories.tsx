import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Text } from '.';

const stories = storiesOf('Text', module);

stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('Default', () => (
  <Text
    big={boolean('big', false)}
    small={boolean('small', false)}
    bold={boolean('bold', false)}
    secondary={boolean('secondary', false)}
    primary={boolean('primary', false)}
    uppercase={boolean('uppercase', false)}
  >{text('Text', 'Lorem Ipsum Dolor')} <Text inline={boolean('inline', true)}>Inline</Text></Text>
));
