import {useState, FormEvent} from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'

import { Container } from './styles'

import api from '../../Services/api'


interface NewInclusionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
 
export function NewEventsModal({ isOpen, onRequestClose }: NewInclusionModalProps ){
  const [disciplina, setDisciplina] = useState('')
  const [cargahoraria, setCargaHoraria] = useState(0)
  const [professor, setProfessor] = useState('')
  

  async function handleCreateDisciplina(event: FormEvent){
    event.preventDefault();
    const data = {
      disciplina,
      cargahoraria,
      professor
    }

    await api.post('/faculdade', data)
    
    setDisciplina('')
    setCargaHoraria(0)
    setProfessor('')
  }

    return(
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="reactModalOverlay" className="reactModalContent">        

          <button type="button" onClick={onRequestClose} className="reactModalClose">
            <img src={closeImg} alt="Fechar Modal" />
          </button>

          <Container onSubmit = {handleCreateDisciplina}>
            <h2>Cadastrar Disciplina</h2>

            <input placeholder="Nome da Disciplina" type="text" value = {disciplina} onChange = {event => setDisciplina(event.target.value)}/>
            <input placeholder="Carga Horária" type="number" value = {cargahoraria} onChange = {event => setCargaHoraria(Number(event.target.value))}/>
            <input placeholder="Professor" type="text" value = {professor} onChange = {event => setProfessor(event.target.value)}/>

            <button type="submit">Confirmar</button>
          </Container>

      </Modal>
    )
}