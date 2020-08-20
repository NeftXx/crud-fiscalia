import React from "react";
import PropTypes from "prop-types";
import { Button, TextField, Typography } from "@material-ui/core";

export class FormFiscalia extends React.Component {
  static propTypes = {
    nuevaFiscalia: PropTypes.func,
  };

  state = {
    nombre: "",
    ubicacion: "",
    telefono: ""
  };

  _handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  _handleSubmint = async (e) => {
    let fiscalia = this.state;
    this.props.nuevaFiscalia(fiscalia);
    this.setState({ nombre: "",
    ubicacion: "",
    telefono: ""})
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this._handleSubmint}>
        <Typography variant="h5">Formulario</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="nombre"
          label="Nombre"
          name="nombre"
          autoComplete="nombre"
          value={this.state.nombre}
          onChange={this._handleChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="ubicacion"
          label="Ubicación"
          name="ubicacion"
          autoComplete="ubicacion"
          value={this.state.ubicacion}
          onChange={this._handleChange}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="telefono"
          label="Teléfono"
          name="telefono"
          autoComplete="telefono"
          value={this.state.telefono}
          onChange={this._handleChange}
          autoFocus
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    );
  }
}
