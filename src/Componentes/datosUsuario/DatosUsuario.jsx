import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Classes from '../../views/capturarDatos/CapturarDatos.module.css';

const DatosUsuario = () => {

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
      nacionalidad: "",
      curp: "",
      rfc: "",
      calle: "",
      nExt: "",
      nInt: "",
      colonia: "",
      cp: "",
      ciudad: "",
      estado: "",
      pais: "",
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
      nacionalidad: Yup.string().required("Campo obligatorio"),
      curp: Yup.string().required("Campo obligatorio"),
      rfc: Yup.string().required("Campo obligatorio"),
      calle: Yup.string().required("Campo obligatorio"),
      nExt: Yup.string().required("Campo obligatorio"),
      nInt: Yup.string().required("Campo obligatorio"),
      colonia: Yup.string().required("Campo obligatorio"),
      cp: Yup.string().required("Campo obligatorio"),
      ciudad: Yup.string().required("Campo obligatorio"),
      estado: Yup.string().required("Campo obligatorio"),
      pais: Yup.string().required("Campo obligatorio"),
      estadoCivil: Yup.string().required("Campo obligatorio"),
      correoRepresentate: Yup.string().required("Campo obligatorio").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Correo inválido"),
      telefono: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d){9})$/, "Teléfono inválido").max(10, "Máximo 10 digitos"),
      identificacion: Yup.string().required("Campo obligatorio"),
      CLABE: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d){9})$/, "CLABE inválida"),
      banco: Yup.string().required("Campo obligatorio")
    }),
    onSubmit: (datosFormulario) => {
      console.log("Datos del usuario: ",datosFormulario);
    }
  })

  return (
    <>
      <h2>Datos de personales</h2>
      <div className="row mb-4">
        <div className="col-12 mb-3">
          <label className="form-label">Comprobante de domicilio</label>
          <input
            name="comprobante"
            onChange={formik.handleChange}
            className="form-control"
            type="file"
            value={formik.values.comprobante}
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
      <div className="col-4">
          <label className="form-label">Fecha nacimiento</label>
          <input
            name="fechaNaciment"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.fechaNaciment}
            style={{ borderColor: formik.touched.fechaNaciment && formik.errors.fechaNaciment ? "red" : null }}
          />
          {
            formik.errors.fechaNaciment && formik.touched.fechaNaciment && <div className={Classes.error}>{formik.errors.fechaNaciment}</div>
          }
        </div>
        <div className="col-4">
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
        <div className="col-4">
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
      </div>

      <div className="row mb-3">
      <div className="col-4">
          <label className="form-label">Nacionalidad</label>
          <input
            name="nacionalidad"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nacionalidad}
            style={{ borderColor: formik.touched.nacionalidad && formik.errors.nacionalidad ? "red" : null }}
          />
          {
            formik.errors.nacionalidad && formik.touched.nacionalidad && <div className={Classes.error}>{formik.errors.nacionalidad}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">CURP</label>
          <input
            name="curp"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.curp}
            style={{ borderColor: formik.curp && formik.curp ? "red" : null }}
          />
          {
            formik.errors.curp && formik.touched.curp && <div className={Classes.error}>{formik.errors.curp}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">RFC</label>
          <input
            name="rfc"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.rfc}
            style={{ borderColor: formik.rfc && formik.rfc ? "red" : null }}
          />
          {
            formik.errors.rfc && formik.touched.rfc && <div className={Classes.error}>{formik.errors.rfc}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <h4 className="mb-3">Domicilio</h4>
        <div className="col-6">
          <label className="form-label">Calle</label>
          <input
            name="calle"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.calle}
            style={{ borderColor: formik.touched.calle && formik.errors.calle ? "red" : null }}
          />
          {
            formik.errors.calle && formik.touched.calle && <div className={Classes.error}>{formik.errors.calle}</div>
          }
        </div>
        <div className="col-3">
          <label className="form-label">Núm exterior</label>
          <input
            name="nExt"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nExt}
            style={{ borderColor: formik.touched.nExt && formik.errors.nExt ? "red" : null }}
          />
          {
            formik.errors.nExt && formik.touched.nExt && <div className={Classes.error}>{formik.errors.nExt}</div>
          }
        </div>
        <div className="col-3">
          <label className="form-label">Núm interior</label>
          <input
            name="nInt"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nInt}
            style={{ borderColor: formik.touched.nInt && formik.errors.nInt ? "red" : null }}
          />
          {
            formik.errors.nInt && formik.touched.nInt && <div className={Classes.error}>{formik.errors.nInt}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-6">
          <label className="form-label font-weight-bold">Colonia</label>
          <input
            name="colonia"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.colonia}
            style={{ borderColor: formik.touched.colonia && formik.errors.colonia ? "red" : null }}
          />
          {
            formik.errors.colonia && formik.touched.colonia && <div className={Classes.error}>{formik.errors.colonia}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">CP</label>
          <input
            name="cp"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.cp}
            style={{ borderColor: formik.touched.cp && formik.errors.cp ? "red" : null }}
          />
          {
            formik.errors.cp && formik.touched.cp && <div className={Classes.error}>{formik.errors.cp}</div>
          }
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label">Ciudad</label>
          <input
            name="ciudad"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.ciudad}
            style={{ borderColor: formik.touched.ciudad && formik.errors.ciudad ? "red" : null }}
          />
          {
            formik.errors.ciudad && formik.touched.ciudad && <div className={Classes.error}>{formik.errors.ciudad}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">Estado</label>
          <input
            name="estado"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.estado}
            style={{ borderColor: formik.touched.estado && formik.errors.estado ? "red" : null }}
          />
          {
            formik.errors.estado && formik.touched.estado && <div className={Classes.error}>{formik.errors.estado}</div>
          }
        </div>
        <div className="col-4">
          <label className="form-label">País</label>
          <input
            name="pais"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.pais}
            style={{ borderColor: formik.touched.pais && formik.errors.pais ? "red" : null }}
          />
          {
            formik.errors.pais && formik.touched.pais && <div className={Classes.error}>{formik.errors.pais}</div>
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
            name="identificacion"
            onChange={formik.handleChange}
            className="form-control"
            type="file"
            value={formik.values.identificacion}                        
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
      >
        LISTO
      </button>
    </>
  )
}

export default DatosUsuario