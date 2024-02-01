import { Badge, BadgeProps, Text } from '@allan-koin/react-webview'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Badge',
  component: Badge,
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
} as Meta<BadgeProps>

export const Primary: StoryObj<BadgeProps> = {}

export const Secondary: StoryObj<BadgeProps> = {
  args: {
    type: 'secondary',
  },
}
