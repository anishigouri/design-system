import { Collapse, ICollpaseProps } from '@allan-koin/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Badge',
  component: Collapse,
  args: {
    children: <Text size="xxs">Text badge</Text>,
    color: '$green-600',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ICollpaseProps>

export const Primary: StoryObj<ICollpaseProps> = {}

export const Secondary: StoryObj<ICollpaseProps> = {
  args: {
    type: 'secondary',
  },
}
