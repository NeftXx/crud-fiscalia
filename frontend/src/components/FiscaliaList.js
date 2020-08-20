import React from "react";
import PropTypes from "prop-types";
import { Fiscalia } from "./Fiscalia";
import { Grid } from "@material-ui/core";

export class FiscaliaList extends React.Component {
  static propTypes = {
    fiscalias: PropTypes.array,
    eliminarFiscalia: PropTypes.func,
    editarFiscalia: PropTypes.func,
  };

  render() {
    const { fiscalias, eliminarFiscalia, editarFiscalia } = this.props;

    return (
      <Grid container spacing={3}>
        {fiscalias.map((fiscalia) => {
          return (
            <Grid key={fiscalia._id} item xs={4}>
              <Fiscalia
                id={fiscalia._id}
                nombre={fiscalia.nombre}
                ubicacion={fiscalia.ubicacion}
                telefono={fiscalia.telefono}
                eliminarFiscalia={eliminarFiscalia}
                editarFiscalia={editarFiscalia}
               />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
