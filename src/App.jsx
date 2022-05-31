import { Container, Grid, Typography } from "@mui/material"
import Formulario from "./components/Formulario"
import { NoticiasProvider } from "./context/NoticiasProvider"
import ListadoNoticias from "./components/ListadoNoticias"
function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            News Search Engine
          </Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={8} md={6} lg={4}>
            <Formulario></Formulario>
          </Grid>
        </Grid>

        <ListadoNoticias></ListadoNoticias>
        
      </Container>
    </NoticiasProvider>
  )
}

export default App
