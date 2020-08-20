import React from "react";
import { Container, Grid } from "@material-ui/core";
import { FormFiscalia, NavBar, FiscaliaList } from "./components";
import { BACKEND_URI } from "./settings";

class App extends React.Component {
  state = {
    fiscalias: []
  }

  async componentDidMount () {
    await this.obtenerFiscalias();
  }

  obtenerFiscalias = async() => {
    try {
      const res = await fetch(BACKEND_URI);
      const fiscalias = await res.json();
      this.setState({ fiscalias });
    } catch(error) {
      console.log(error);
    }
  }

  nuevaFiscalia = async(fiscalia) => {
    try {
      const res = await fetch(BACKEND_URI, {
        method: 'POST',
        body: JSON.stringify(fiscalia),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const message = await res.json();
      console.log(message);
      await this.obtenerFiscalias();      
    } catch(error) {
      console.log(error);
    }
  }

  editarFiscalia = async(id, ubicacion, telefono) => {
    try {
      const res = await fetch(`${BACKEND_URI}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ubicacion, telefono}),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const message = await res.json();
      console.log(message);
      await this.obtenerFiscalias();
    } catch(error) {
      console.log(error);
    }
  }

  eliminarFiscalia = async(id) => {
    try {
      const res = await fetch(`${BACKEND_URI}/${id}`, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const message = await res.json();
      console.log(message);
      await this.obtenerFiscalias();  
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <main style={{ marginTop: "20px" }}>
          <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                  <FormFiscalia nuevaFiscalia={this.nuevaFiscalia}/>
                </Grid>
                <Grid item xs={9}>
                  <FiscaliaList fiscalias={this.state.fiscalias} eliminarFiscalia={this.eliminarFiscalia} editarFiscalia={this.editarFiscalia} />
                </Grid>
              </Grid>
          </Container>
        </main>
      </>
    );
  }
}

export default App;
