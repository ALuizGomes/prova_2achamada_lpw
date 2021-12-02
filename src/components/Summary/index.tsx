import { useEffect, useState } from "react";
import api from "../../Services/api";

import { Container } from "./styles";

interface ISummary{
  disciplina: string
  cargahoraria: number
}

export function Summary() {
  const [contador, setContador] = useState<ISummary[]>([])

  useEffect(() => {
    api.get('faculdade').then(response => setContador(response.data))
  })
  
  // const contH = contador.filter(conta => conta.cargahoraria)
  // const contD = contador.filter(conta => conta.disciplina)

  return (
    <Container>
      <div>
        <header>
          <p>Total De Disciplinas</p>
          <strong>00</strong>
        </header>
      </div>

      <div>
        <header>
          <p>Total Carga Horária</p>
        </header>
        <strong>00</strong>
      </div>

    </Container>
  )
}