import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import * as Classes from './MostrarInfo.module.css';

const MostrarInfo = () => {

  const [companyData, setcompanyData] = useState({});
  const [userData, setUserData] = useState({})
  const history = useHistory();

  useEffect(() => {
    let companyDataStorage = window.localStorage.getItem('companyData',JSON);
    let companyObj = JSON.parse(companyDataStorage);
    setcompanyData(companyObj);

    let userDataStorage = window.localStorage.getItem('userData',JSON);
    let userObj = JSON.parse(userDataStorage);
    setUserData(userObj);
  }, [])

  const { 
    razonSocial,
    nombreComercial,
    nacionalidad,
    fechaConstitucion,
    rfc,
    regFiscal,
    industria,
    calle,
    nExt,
    nInt,
    cp,
    colonia,
    ciudad,
    estado,
    pais
  } = companyData;

  const {
    numero,
    correo,
    nombre,
    genero,
    fechaNaciment,
    entidadFed,
    paisNacimiento,
    nacionalidadUsr,
    curp,
    rfcUsr,
    calleUsr,
    nExtUsr,
    nIntUsr,
    cpUsr,
    coloniaUsr,
    ciudadUsr,
    estadoUsr,
    paisUsr,
    estadoCivil,
    correoRepresentate,
    telefono,
    CLABE,
    banco,
    comp,
    ident
  } = userData;

  let fechaConstFormat = moment(fechaConstitucion).format("MM/DD/YYYY");
  let fechaNacimFormat = moment(fechaNaciment).format("MM/DD/YYYY");

  return (
    <div className={Classes.mainContainer}>
      <div className={Classes.container}>
        <h1>Informacion capturada</h1>
        <hr />
        <div className={Classes.dFlex}>
          <label><strong>Razón social:</strong> { razonSocial }</label>
          <label><strong>Nombre comercial:</strong> { nombreComercial }</label>
          <label><strong>Nacionalidad:</strong> { nacionalidad }</label>
          <label><strong>Fecha de constitución:</strong> { fechaConstFormat }</label>
          <label><strong>RFC:</strong> { rfc }</label>
          <label><strong>Régimen Fiscal:</strong> { regFiscal }</label>
          <label><strong>Industria:</strong> { industria }</label>
          <h4 className="mb-3 mt-3">Domicilio</h4>
          <label><strong>Calle:</strong> { calle }</label>
          <label><strong>Número exterior:</strong> { nExt }</label>
          <label><strong>Número interior:</strong> { nInt }</label>
          <label><strong>Código Postal:</strong> { cp }</label>
          <label><strong>Colonia:</strong> { colonia }</label>
          <label><strong>Ciudad:</strong> { ciudad }</label>
          <label><strong>Estado:</strong> { estado }</label>
          <label><strong>Pais:</strong> { pais }</label>
          <h4 className="mb-3 mt-3">Datos de personales</h4>
          {
            comp && (<strong>Comprobante domicilio: <a href={comp.url} download={ comp.name }>{ comp.name }</a></strong>)
          }
          <label><strong>Número telefónico:</strong> { numero }</label>
          <label><strong>Correo electrónico:</strong> { correo }</label>
          <h4 className="mb-3 mt-3">Representante legal</h4>
          <label><strong>Nombre:</strong> { nombre }</label>
          <label><strong>Género:</strong> { genero }</label>
          <label><strong>Fecha de nacimiento:</strong> { fechaNacimFormat }</label>
          <label><strong>Entidad Federativa de nacimiento:</strong> { entidadFed }</label>
          <label><strong>País de nacimiento:</strong> { paisNacimiento }</label>
          <label><strong>Nacionalidad:</strong> { nacionalidadUsr }</label>
          <label><strong>CURP:</strong> { curp }</label>
          <label><strong>RFC:</strong> { rfcUsr }</label>
          <label><strong>Calle:</strong> { calleUsr }</label>
          <label><strong>Número exterior:</strong> { nExtUsr }</label>
          <label><strong>Número interior:</strong> { nIntUsr }</label>
          <label><strong>Código Postal:</strong> { cpUsr }</label>
          <label><strong>Colonia:</strong> { coloniaUsr }</label>
          <label><strong>Ciudad:</strong> { ciudadUsr }</label>
          <label><strong>Estado:</strong> { estadoUsr }</label>
          <label><strong>Pais:</strong> { paisUsr }</label>
          <label><strong>Estado civil:</strong> { estadoCivil }</label>
          <label><strong>Correo electrónico:</strong> { correoRepresentate }</label>
          <label><strong>Teléfono:</strong> { telefono }</label>
          {
            ident && ( <strong>Documento de identificación: <a href={ident.url} download={ ident.name }>{ ident.name }</a></strong> )
          }
          <h4 className="mb-3 mt-3">Cuenta bancaria</h4>
          <label><strong>CLABE:</strong> { CLABE }</label>
          <label><strong>Banco:</strong> { banco }</label>
        </div>
        <button
         className="btn btn-primary w-100 mt-3"
         onClick={()=>{history.push("/")}}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}

export default MostrarInfo