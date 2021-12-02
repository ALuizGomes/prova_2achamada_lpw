import { Summary } from "../Summary";
import { DisciplinasTable } from "../DisciplinasTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <DisciplinasTable />
    </Container>
  )

}