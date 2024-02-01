import { ReadOnlyField, IReadOnlyFieldProps } from '@allan-koin/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/ReadOnlyField',
  component: ReadOnlyField,
  args: {
    title: 'Título',
    text: 'Descrição'
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<IReadOnlyFieldProps>

export const Primary: StoryObj<IReadOnlyFieldProps> = {}

