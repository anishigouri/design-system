import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@koin/react-webview'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/7597075?s=400&u=171cedc3e8b3d47c26a24973a2ac7a8d2a5a60a6&v=4',
    alt: 'Allan Nishigouri',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
