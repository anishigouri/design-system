import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@koin/react-webview'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi autem fuga numquam soluta ducimus eveniet a assumenda aspernatur iste excepturi cum molestiae hic illo nisi aperiam, qui perspiciatis impedit?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
