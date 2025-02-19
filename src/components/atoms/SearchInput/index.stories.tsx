import { Meta, StoryObj } from '@storybook/react';

import SearchInput from '.';

const meta: Meta<typeof SearchInput> = {
    component: SearchInput,
    parameters: {
        react: { rsc: false },
    },
}

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
}