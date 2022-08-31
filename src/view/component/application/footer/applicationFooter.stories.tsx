import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ApplicationFooter } from './applicationFooter';

export default {
  title: 'Component/Application/Footer',
  component: ApplicationFooter,
} as ComponentMeta<typeof ApplicationFooter>;

const Template: ComponentStory<typeof ApplicationFooter> = () => <ApplicationFooter />;

export const Default = Template.bind({});