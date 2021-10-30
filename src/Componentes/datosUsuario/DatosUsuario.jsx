import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Classes from '../../views/capturarDatos/CapturarDatos.module.css';

const DatosUsuario = ({ formFilled, done }) => {

  const [compPdf, setCompPdf] = useState('');
  const [identPdf, setIdentPdf] = useState('');

  const formik = useFormik({
    initialValues: {
      comprobante: "",
      numero: "",
      correo: "",
      nombre: "",
      genero: "",
      fechaNaciment: "",
      entidadFed: "",
      paisNacimiento: "",
      nacionalidadUsr: "",
      curp: "",
      rfcUsr: "",
      calleUsr: "",
      nExtUsr: "",
      nIntUsr: "",
      coloniaUsr: "",
      cpUsr: "",
      ciudadUsr: "",
      estadoUsr: "",
      paisUsr: "",
      estadoCivil: "",
      correoRepresentate: "",
      telefono: "",
      identificacion: "",
      CLABE: "",
      banco: ""
    },
    validationSchema: Yup.object({
      comprobante: Yup.string().required("Campo obligatorio"),
      numero: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d){9})$/, "Teléfono inválido").max(10, "Máximo 10 digitos"),
      correo: Yup.string().required("Campo obligatorio").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Correo inválido"),
      nombre: Yup.string().required("Campo obligatorio"),
      genero: Yup.string().required("Campo obligatorio"),
      fechaNaciment: Yup.string().required("Campo obligatorio"),
      entidadFed: Yup.string().required("Campo obligatorio"),
      paisNacimiento: Yup.string().required("Campo obligatorio"),
      nacionalidadUsr: Yup.string().required("Campo obligatorio"),
      curp: Yup.string().required("Campo obligatorio"),
      rfcUsr: Yup.string().required("Campo obligatorio"),
      calleUsr: Yup.string().required("Campo obligatorio"),
      nExtUsr: Yup.string().required("Campo obligatorio"),
      nIntUsr: Yup.string().required("Campo obligatorio"),
      coloniaUsr: Yup.string().required("Campo obligatorio"),
      cpUsr: Yup.string().required("Campo obligatorio"),
      ciudadUsr: Yup.string().required("Campo obligatorio"),
      estadoUsr: Yup.string().required("Campo obligatorio"),
      paisUsr: Yup.string().required("Campo obligatorio"),
      estadoCivil: Yup.string().required("Campo obligatorio"),
      correoRepresentate: Yup.string().required("Campo obligatorio").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Correo inválido"),
      telefono: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d){9})$/, "Teléfono inválido").max(10, "Máximo 10 digitos"),
      identificacion: Yup.string().required("Campo obligatorio"),
      CLABE: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d){9})$/, "CLABE inválida"),
      banco: Yup.string().required("Campo obligatorio")
    }),
    onSubmit: (datosFormulario) => {
      console.log("Datos del usuario: ", datosFormulario);
      window.localStorage.setItem('userData', JSON.stringify({ ...datosFormulario, comp: compPdf, ident: identPdf }));
      done();
    }
  })

  const handleFile = (e) => {
    let inputId = e.target.id;
    const { files } = e.target;

    if (files.length) {
      const [pdfLoaded] = files;
      const FR = new FileReader();
      FR.onload = () => {
        let urlLocalFile = FR.result;
        if (inputId === "comp") {
          setCompPdf({ url: urlLocalFile, name: pdfLoaded.name });
        } else {
          setIdentPdf({ url: urlLocalFile, name: pdfLoaded.name });
        }
      }
      formik.handleChange(e);
      FR.readAsDataURL(pdfLoaded);
    }
  }

  return (
    <>
      <h2>Datos de personales</h2>
      <div className="row mb-4">
        <div className="col-12 mb-3">
          <label className="form-label">Comprobante de domicilio</label>
          <input
            accept="application/pdf"
            id="comp"
            className="form-control"
            name="comprobante"
            onChange={ handleFile }
            type="file"
            value={formik.values.comprobante}
            style={{ borderColor: formik.touched.comprobante && formik.errors.comprobante ? "red" : null }}
          />
          {
            formik.errors.comprobante && formik.touched.comprobante && <div className={Classes.error}>{formik.errors.comprobante}</div>
          }
        </div>
        <div className="col">
          <label className="form-label">Número telefónico</label>
          <input
            name="numero"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.numero}
            style={{ borderColor: formik.touched.numero && formik.errors.numero ? "red" : null }}
          />
          {
            formik.errors.numero && formik.touched.numero && <div className={Classes.error}>{formik.errors.numero}</div>
          }
        </div>
        <div className="col">
          <label className="form-label">Correo</label>
          <input
            name="correo"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.correo}
            style={{ borderColor: formik.touched.correo && formik.errors.correo ? "red" : null }}
          />
          {
            formik.errors.correo && formik.touched.correo && <div className={Classes.error}>{formik.errors.correo}</div>
          }
        </div>
      </div>

      <div className="row mb-3">
        <h4 className="mb-3">Representrante legal</h4>
        <div className="col-8">
          <label className="form-label">Nombre</label>
          <input
            name="nombre"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nombre}
            style={{ borderColor: formik.touched.nombre && formik.errors.nombre ? "red" : null }}
          />
          {
            formik.errors.nombre && formik.touched.nombre && <div className={Classes.error}>{formik.errors.nombre}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">Género</label>
          <input
            name="genero"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.genero}
            style={{ borderColor: formik.touched.genero && formik.errors.genero ? "red" : null }}
          />
          {
            formik.errors.genero && formik.touched.genero && <div className={Classes.error}>{formik.errors.genero}</div>
          }
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <label className="form-label">Fecha nacimiento</label>
          <input
            name="fechaNaciment"
            onChange={formik.handleChange}
            className="form-control"
            type="date"
            value={formik.values.fechaNaciment}
            style={{ borderColor: formik.touched.fechaNaciment && formik.errors.fechaNaciment ? "red" : null }}
          />
          {
            formik.errors.fechaNaciment && formik.touched.fechaNaciment && <div className={Classes.error}>{formik.errors.fechaNaciment}</div>
          }
        </div>
        <div className="col-6">
          <label className="form-label">Entidad federativa</label>
          <input
            name="entidadFed"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.entidadFed}
            style={{ borderColor: formik.touched.entidadFed && formik.errors.entidadFed ? "red" : null }}
          />
          {
            formik.errors.entidadFed && formik.touched.entidadFed && <div className={Classes.error}>{formik.errors.entidadFed}</div>
          }
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <label className="form-label">País de nacimiento</label>
          <input
            name="paisNacimiento"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.paisNacimiento}
            style={{ borderColor: formik.touched.paisNacimiento && formik.errors.paisNacimiento ? "red" : null }}
          />
          {
            formik.errors.paisNacimiento && formik.touched.paisNacimiento && <div className={Classes.error}>{formik.errors.paisNacimiento}</div>
          }
        </div>
        <div className="col-6">
          <label className="form-label">Nacionalidad</label>
          <input
            name="nacionalidadUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nacionalidadUsr}
            style={{ borderColor: formik.touched.nacionalidadUsr && formik.errors.nacionalidadUsr ? "red" : null }}
          />
          {
            formik.errors.nacionalidadUsr && formik.touched.nacionalidadUsr && <div className={Classes.error}>{formik.errors.nacionalidadUsr}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <label className="form-label">CURP</label>
          <input
            name="curp"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.curp}
            style={{ borderColor: formik.touched.curp && formik.errors.curp ? "red" : null }}
          />
          {
            formik.errors.curp && formik.touched.curp && <div className={Classes.error}>{formik.errors.curp}</div>
          }
        </div>
        <div className="col-6">
          <label className="form-label">RFC</label>
          <input
            name="rfcUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.rfcUsr}
            style={{ borderColor: formik.touched.rfcUsr && formik.errors.rfcUsr ? "red" : null }}
          />
          {
            formik.errors.rfcUsr && formik.touched.rfcUsr && <div className={Classes.error}>{formik.errors.rfcUsr}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <h4 className="mb-3">Domicilio</h4>
        <div className="col-6">
          <label className="form-label">Calle</label>
          <input
            name="calleUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.calleUsr}
            style={{ borderColor: formik.touched.calleUsr && formik.errors.calleUsr ? "red" : null }}
          />
          {
            formik.errors.calleUsr && formik.touched.calleUsr && <div className={Classes.error}>{formik.errors.calleUsr}</div>
          }
        </div>
        <div className="col-3">
          <label className="form-label">Núm ext</label>
          <input
            name="nExtUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nExtUsr}
            style={{ borderColor: formik.touched.nExtUsr && formik.errors.nExtUsr ? "red" : null }}
          />
          {
            formik.errors.nExtUsr && formik.touched.nExtUsr && <div className={Classes.error}>{formik.errors.nExtUsr}</div>
          }
        </div>
        <div className="col-3">
          <label className="form-label">Núm int</label>
          <input
            name="nIntUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nIntUsr}
            style={{ borderColor: formik.touched.nIntUsr && formik.errors.nIntUsr ? "red" : null }}
          />
          {
            formik.errors.nIntUsr && formik.touched.nIntUsr && <div className={Classes.error}>{formik.errors.nIntUsr}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <label className="form-label font-weight-bold">Colonia</label>
          <input
            name="coloniaUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.coloniaUsr}
            style={{ borderColor: formik.touched.coloniaUsr && formik.errors.coloniaUsr ? "red" : null }}
          />
          {
            formik.errors.coloniaUsr && formik.touched.coloniaUsr && <div className={Classes.error}>{formik.errors.coloniaUsr}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">CP</label>
          <input
            name="cpUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.cpUsr}
            style={{ borderColor: formik.touched.cpUsr && formik.errors.cpUsr ? "red" : null }}
          />
          {
            formik.errors.cpUsr && formik.touched.cpUsr && <div className={Classes.error}>{formik.errors.cpUsr}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label">Ciudad</label>
          <input
            name="ciudadUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.ciudadUsr}
            style={{ borderColor: formik.touched.ciudadUsr && formik.errors.ciudadUsr ? "red" : null }}
          />
          {
            formik.errors.ciudadUsr && formik.touched.ciudadUsr && <div className={Classes.error}>{formik.errors.ciudadUsr}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">Estado</label>
          <input
            name="estadoUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.estadoUsr}
            style={{ borderColor: formik.touched.estadoUsr && formik.errors.estadoUsr ? "red" : null }}
          />
          {
            formik.errors.estadoUsr && formik.touched.estadoUsr && <div className={Classes.error}>{formik.errors.estadoUsr}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">País</label>
          <input
            name="paisUsr"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.paisUsr}
            style={{ borderColor: formik.touched.paisUsr && formik.errors.paisUsr ? "red" : null }}
          />
          {
            formik.errors.paisUsr && formik.touched.paisUsr && <div className={Classes.error}>{formik.errors.paisUsr}</div>
          }
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <label className="form-label">Estado civil</label>
          <input
            name="estadoCivil"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.estadoCivil}
            style={{ borderColor: formik.touched.estadoCivil && formik.errors.estadoCivil ? "red" : null }}
          />
          {
            formik.errors.estadoCivil && formik.touched.estadoCivil && <div className={Classes.error}>{formik.errors.estadoCivil}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">Correo</label>
          <input
            name="correoRepresentate"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.correoRepresentate}
            style={{ borderColor: formik.touched.correoRepresentate && formik.errors.correoRepresentate ? "red" : null }}
          />
          {
            formik.errors.correoRepresentate && formik.touched.correoRepresentate && <div className={Classes.error}>{formik.errors.correoRepresentate}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">Teléfono</label>
          <input
            name="telefono"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.telefono}
            style={{ borderColor: formik.touched.telefono && formik.errors.telefono ? "red" : null }}
          />
          {
            formik.errors.telefono && formik.touched.telefono && <div className={Classes.error}>{formik.errors.telefono}</div>
          }
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <label className="form-label">Identificacion</label>
          <input
            accept="application/pdf"
            id="ident"
            name="identificacion"
            onChange={ handleFile }
            className="form-control"
            type="file"
            value={ formik.values.identificacion }
            style={{ borderColor: formik.touched.identificacion && formik.errors.identificacion ? "red" : null }}
          />
          {
            formik.errors.identificacion && formik.touched.identificacion && <div className={Classes.error}>{formik.errors.identificacion}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <h4 className="mb-3">Cuenta bancaria</h4>
        <div className="col-6">
          <label className="form-label">CLABE</label>
          <input
            name="CLABE"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.CLABE}
            style={{ borderColor: formik.touched.CLABE && formik.errors.CLABE ? "red" : null }}
          />
          {
            formik.errors.CLABE && formik.touched.CLABE && <div className={Classes.error}>{formik.errors.CLABE}</div>
          }
        </div>
        <div className="col-6">
          <label className="form-label">Banco</label>
          <input
            name="banco"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.banco}
            style={{ borderColor: formik.touched.banco && formik.errors.banco ? "red" : null }}
          />
          {
            formik.errors.banco && formik.touched.banco && <div className={Classes.error}>{formik.errors.banco}</div>
          }
        </div>
      </div>

      <button
        className="btn btn-primary w-100"
        onClick={formik.handleSubmit}
        type="submit"
        disabled={!formFilled}
      >
        Ver datos guardados
      </button>
    </>
  )
}

export default DatosUsuario