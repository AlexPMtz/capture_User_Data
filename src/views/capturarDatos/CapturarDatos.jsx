import React from 'react'
import * as Classes from './CapturarDatos.module.css'
import DatosEmpresa from '../../Componentes/datosEmpresa/DatosEmpresa'
import DatosUsuario from '../../Componentes/datosUsuario/DatosUsuario'

const CapturarDatos = () => {
  return (
    <div className={Classes.mainContainer}>
      <div className={Classes.container}>
        <DatosEmpresa />
      </div>
      <div className={Classes.container} style={{marginBottom: 40}}>
        <DatosUsuario />
      </div>
    </div>
  )
}

export default CapturarDatos