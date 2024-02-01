import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@allan-koin/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text color="$neutral-800">Testando elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
