import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ApplicationFooter } from './applicationFooter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Application/Footer',
  component: ApplicationFooter,
} as ComponentMeta<typeof ApplicationFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ApplicationFooter> = () => <ApplicationFooter />;

export const Default = Template.bind({});