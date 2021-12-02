import logoImg from '../../assets/book.png'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenDisciplinasModal: () => void;
}

export function Header({ onOpenDisciplinasModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="book" />
        <button type="button" onClick={onOpenDisciplinasModal}>
          Registro de Disciplina
        </button>
      </Content>
    </Container>
  )
}