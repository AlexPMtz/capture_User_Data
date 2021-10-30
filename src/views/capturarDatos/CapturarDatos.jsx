import React from 'react'
import * as Classes from './CapturarDatos.module.css'
import DatosEmpresa from '../../Componentes/datosEmpresa/DatosEmpresa'

const CapturarDatos = () => {
  return (
    <div className={Classes.mainContainer}>
      <div className={Classes.container}>
        <DatosEmpresa />
      </div>
    </div>
  )
}

export default CapturarDatos