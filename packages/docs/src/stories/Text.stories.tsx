import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@allan-koin/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    color: '$white',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi autem fuga numquam soluta ducimus eveniet a assumenda aspernatur iste excepturi cum molestiae hic illo nisi aperiam, qui perspiciatis impedit?',
  },

  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
      children: {
        control: {
          type: null,
        },
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
