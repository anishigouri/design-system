import { ReadOnlyFieldContainer } from './styles'

interface IProps {
  title: string
  text: string
}

export function ReadOnlyField({ title, text }: IProps) {
  return (
    <ReadOnlyFieldContainer>
      <p>{title}</p>
      <span>{text}</span>
    </ReadOnlyFieldContainer>
  )
}

ReadOnlyField.displayName = 'ReadOnlyField'
