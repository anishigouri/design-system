import { ReadOnlyFieldContainer } from './styles'

export interface IReadOnlyFieldProps {
  title: string
  text: string
}

export function ReadOnlyField({ title, text }: IReadOnlyFieldProps) {
  return (
    <ReadOnlyFieldContainer>
      <p>{title}</p>
      <span>{text}</span>
    </ReadOnlyFieldContainer>
  )
}

ReadOnlyField.displayName = 'ReadOnlyField'
