import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from "@material-ui/core";

export class Fiscalia extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    nombre: PropTypes.string,
    ubicacion: PropTypes.string,
    telefono: PropTypes.string,
    eliminarFiscalia: PropTypes.func,
    editarFiscalia: PropTypes.func,
  };

  state = {
    open: false,
    ubicacion: "",
    telefono: ""
  }
  
  componentDidMount () {
    const { ubicacion, telefono } = this.props;
    this.setState({ ubicacion, telefono });
  }

  _handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  _handleClickOpen = () => {
    this.setState({open: true});
  };

  _handleClose = () => {
    this.setState({open: false});
  };

  eliminarFiscalia = () => {
    this.props.eliminarFiscalia(this.props.id);
  };

  editarFiscalia = () => {
    const { ubicacion, telefono } = this.state;
    this.props.editarFiscalia(this.props.id, ubicacion, telefono)
    this.setState({open: false});
  }

  render() {
    const { id, nombre, ubicacion, telefono } = this.props;

    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {nombre}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Dirección:</strong> {ubicacion}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Teléfono:</strong> {telefono}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.eliminarFiscalia}>
            Eliminar
          </Button>

          <Button variant="outlined" color="primary" onClick={this._handleClickOpen}>
            Editar
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this._handleClose}
            aria-labelledby={`form-dialog-title-${id}`}
          >
            <DialogTitle id={`form-dialog-title-${id}`}>{nombre}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Editar datos:
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                name="ubicacion"
                label="Ubicación"
                type="text"
                value={this.state.ubicacion}
                onChange={this._handleChange}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="telefono"
                label="Teléfono"
                type="text"
                value={this.state.telefono}
                onChange={this._handleChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this._handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.editarFiscalia} color="primary">
                Enviar
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    );
  }
}
