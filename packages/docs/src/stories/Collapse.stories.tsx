import { Collapse, ICollapseProps, Text } from '@allan-koin/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Minus, Plus } from 'phosphor-react'

export default {
  title: 'Form/Collapse',
  component: Collapse,
  args: {
    title: 'Title 1',
    color: 'black',
    colorIcon: 'black',
    fontSize: 'md',
    fontWeight: 'medium',
    isOpen: false,
    children: <Text size="xxs">Content</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ICollapseProps>

export const Primary: StoryObj<ICollapseProps> = {}

const IconClose = () => <Plus size={15} />;
const IconOpen = () => <Minus size={15} />;

export const Secondary: StoryObj<ICollapseProps> = {
  args: {
    iconOpen: IconOpen,
    iconClose: IconClose,
    color: 'black',
    colorIcon: 'black',
    fontSize: 'md',
    isOpen: false,
    fontWeight: 'medium'
  },
}
