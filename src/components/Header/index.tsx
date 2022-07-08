
import  LogoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

interface HeaderProps {
  onOpenNewTransctionModal: () => void;
}

export function Header({onOpenNewTransctionModal}: HeaderProps) {


  return (
    <Container>
      <Content>
      <img src={LogoImg} alt="dt money" />
      <button type='button' onClick={onOpenNewTransctionModal}>
        Nova Transação
      </button>

     
      </Content>
    </Container>
  )
}