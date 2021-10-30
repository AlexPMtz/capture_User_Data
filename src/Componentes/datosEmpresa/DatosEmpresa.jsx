import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Classes from '../../views/capturarDatos/CapturarDatos.module.css';

const DatosEmpresa = ({done}) => {

  const formik = useFormik({
    initialValues: {
      razonSocial: "",
      nombreComercial: "",
      nacionalidad: "",
      fechaConstitucion: "",
      rfc: "",
      regFiscal: "",
      industria: "",
      calle: "",
      nExt: "",
      nInt: "",
      colonia: "",
      cp: "",
      ciudad: "",
      estado: "",
      pais: ""
    },
    validationSchema: Yup.object({
      razonSocial: Yup.string().required("Campo obligatorio"),
      nombreComercial: Yup.string().required("Campo obligatorio"),
      nacionalidad: Yup.string().required("Campo obligatorio"),
      fechaConstitucion: Yup.string().required("Campo obligatorio"),
      rfc: Yup.string().required("Campo obligatorio"),
      regFiscal: Yup.string().required("Campo obligatorio"),
      industria: Yup.string().required("Campo obligatorio"),
      calle: Yup.string().required("Campo obligatorio"),
      nExt: Yup.string().required("Campo obligatorio"),
      nInt: Yup.string().required("Campo obligatorio"),
      colonia: Yup.string().required("Campo obligatorio"),
      cp: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d))$/, "Sólo números"),
      ciudad: Yup.string().required("Campo obligatorio"),
      estado: Yup.string().required("Campo obligatorio"),
      pais: Yup.string().required("Campo obligatorio")
    }),
    onSubmit: (datosFormulario) => {
      window.localStorage.setItem('companyData',JSON.stringify(datosFormulario));
      done(true);
    }
  })

  return (
    <>
      <h2 className="mb-3">Datos de la empresa</h2>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Razón social</label>
          <input
            name="razonSocial"
            onChange={ formik.handleChange }
            className="form-control"
            type="text"
            value={ formik.values.razonSocial }
            style={{ borderColor: formik.touched.razonSocial && formik.errors.razonSocial ? "red" : null }}
          />
          {
            formik.errors.razonSocial && formik.touched.razonSocial && <div className={Classes.error}>{formik.errors.razonSocial}</div>
          }
        </div>
        <div className="col">
          <label className="form-label">Nombre comercial</label>
          <input
            name="nombreComercial"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.nombreComercial}
            style={{ borderColor: formik.touched.nombreComercial && formik.errors.nombreComercial ? "red" : null }}
          />
          {
            formik.errors.nombreComercial && formik.touched.nombreComercial && <div className={Classes.error}>{formik.errors.nombreComercial}</div>
          }
        </div>
        <div className="col">
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
      </div>

      <div className="row mb-4">
        <div className="col">
          <label className="form-label">Fecha de constitución</label>
          <input
            name="fechaConstitucion"
            onChange={formik.handleChange}
            className="form-control"
            type="date"
            value={formik.values.fechaConstitucion}
            style={{ borderColor: formik.touched.fechaConstitucion && formik.errors.fechaConstitucion ? "red" : null }}
          />
          {
            formik.errors.fechaConstitucion && formik.touched.fechaConstitucion && <div className={Classes.error}>{formik.errors.fechaConstitucion}</div>
          }
        </div>
        <div className="col">
          <label className="form-label">RFC</label>
          <input
            name="rfc"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.rfc}
            style={{ borderColor: formik.touched.rfc && formik.errors.rfc ? "red" : null }}
          />
          {
            formik.errors.rfc && formik.touched.rfc && <div className={Classes.error}>{formik.errors.rfc}</div>
          }
        </div>
        
      </div>
      <div className="row mb-4">
        <div className="col">
          <label className="form-label">Industria</label>
          <input
            name="industria"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.industria}
            style={{ borderColor: formik.touched.industria && formik.errors.industria ? "red" : null }}
          />
          {
            formik.errors.industria && formik.touched.industria && <div className={Classes.error}>{formik.errors.industria}</div>
          }
        </div>
        <div className="col">
          <label className="form-label">Régimen fiscal</label>
          <input
            name="regFiscal"
            onChange={formik.handleChange}
            className="form-control"
            type="text"
            value={formik.values.regFiscal}
            style={{ borderColor: formik.touched.regFiscal && formik.errors.regFiscal ? "red" : null }}
          />
          {
            formik.errors.regFiscal && formik.touched.regFiscal && <div className={Classes.error}>{formik.errors.regFiscal}</div>
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
          <label className="form-label">Núm ext</label>
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
          <label className="form-label">Núm int</label>
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
          <label className="form-label">Colonia</label>
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
          <label className="form-label">Pais</label>
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
      <button
       className="btn btn-primary w-100"
       onClick={formik.handleSubmit}
       type="submit"
      >
        ENVIAR
      </button>
    </>
  )
}

export default DatosEmpresa