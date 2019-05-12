import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Button } from '.';
import { action } from '@storybook/addon-actions';
import { ReactComponent as Sort } from '../../icons/sort.svg'

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('Default', () => (
  <Button 
    onClick={action('button-click')} 
    primary={boolean('Primary', false)}
    icon={boolean('Icon', false) ? Sort : undefined}
  >
    {text('Label', 'Button')}
  </Button>
));
