import {configure, setAddon, addDecorator} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import {withInfo} from "@storybook/addon-info";
import {withKnobs} from '@storybook/addon-knobs';

setAddon(JSXAddon);
addDecorator(withInfo);
addDecorator(withKnobs);
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
    //loads the file below above all other stories always
    require('./welcome.story.js');
    //requires all the files ending with stories inside the src folder, regex function.
    req.keys().forEach(file => req(file))
}

configure(loadStories, module);