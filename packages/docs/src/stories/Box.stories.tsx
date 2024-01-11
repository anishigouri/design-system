import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@koin/react-webview'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando elemento box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
