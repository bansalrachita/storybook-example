import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from './Button.tsx';
import {withInfoStyle} from './utils';
import {text, color, boolean} from '@storybook/addon-knobs/react';

storiesOf('Button', module)
    .addParameters(withInfoStyle)
    .addWithJSX('with background', (() =>
        <Button disabled={boolean('disabled', false)}
                bg={color('bg', 'green', 'group1')}>
            Hello Storybook!
        </Button>))
    .addWithJSX('with background 2', () =>
        <Button bg={text('bg', 'red')}>
            Hello world 2
        </Button>);