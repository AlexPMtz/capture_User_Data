import React, { useState } from 'react'
import * as Classes from './CapturarDatos.module.css'
import DatosEmpresa from '../../Componentes/datosEmpresa/DatosEmpresa'
import DatosUsuario from '../../Componentes/datosUsuario/DatosUsuario'
import { useHistory } from 'react-router'

const CapturarDatos = () => {

  const history = useHistory();
  const [doneCompany, setDoneCompany] = useState(false);
  
  const didUserFinish = () => {
    history.push("/detallesInformacion");
  }

  const didCompanyFinish = (prop) => {
    setDoneCompany(prop);
  }

  return (
    <div className={Classes.mainContainer}>
      <div className={Classes.container}>
        <DatosEmpresa done={didCompanyFinish} />
      </div>
      <div className={Classes.container} style={{marginBottom: 40}}>
        <DatosUsuario done={didUserFinish} formFilled={doneCompany}/>
      </div>
    </div>
  )
}

export default CapturarDatos