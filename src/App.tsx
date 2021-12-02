import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewEventsModal } from './components/DisciplinasModal';
import { GlobalStyle } from './styles/global'

export function App() {

  // useState - hook
  // const [nomeDoEstado, funcaoParaAlterarOEstado] = useState
  const [isNewDisciplinasModalOpen, setIsDisciplinasModalOpen] = useState(false)

  function handleOpenNewDisciplinasModal() {
    setIsDisciplinasModalOpen(true)
  }

  function handleCloseDisciplinasModal() {
    setIsDisciplinasModalOpen(false)
  }

  return (
    <div className="App">
      <Header onOpenDisciplinasModal={handleOpenNewDisciplinasModal} />

      <Dashboard />    

      <NewEventsModal

        isOpen={isNewDisciplinasModalOpen}
        onRequestClose={handleCloseDisciplinasModal}
        
      />

      <GlobalStyle />
    </div>
  );
}
