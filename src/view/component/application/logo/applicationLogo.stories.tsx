import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ApplicationLogo } from './applicationLogo';

export default {
  title: 'Component/Application/Logo',
  component: ApplicationLogo,
} as ComponentMeta<typeof ApplicationLogo>;

const Template: ComponentStory<typeof ApplicationLogo> = () => <ApplicationLogo />;

export const Default = Template.bind({});