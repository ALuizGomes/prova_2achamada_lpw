import { useState, useEffect } from "react";

import closeImg from '../../assets/close.svg';

import { Container } from "./styles";

import api from '../../Services/api'

interface IDisciplinas{
  id: string;
  disciplina: string;
  cargahoraria: number;
  professor: string;
}

export function DisciplinasTable() {
  const [faculdade, setFaculdade] = useState<IDisciplinas[]>([])

  useEffect(() => {
    api.get('faculdade').then(response => setFaculdade(response.data))
  }, [faculdade] )

  async function onDelete(id: string){
    await api.delete(`/faculdade/${id}`)
    setFaculdade(faculdade.filter(facul => facul.id !== id))
  }


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Disciplinas</th>
            <th>Carga Horária</th>
            <th>Professor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

            {faculdade.map(facul => (
              <tr>
                <td>{facul.disciplina}</td>
                <td>{facul.cargahoraria}</td>
                <td>{facul.professor}</td>
                <td>
                  <button type="button" onClick={() => onDelete(facul.id)}>
                    <img src={closeImg} alt="Excluir Matéria" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>

      </table>
    </Container>
  )
}