# Capturar datos de usuario

Herramientas usadas en este proyeto.

- [React Router](https://reactrouter.com/web/guides/quick-start) librería que nos permite tener declarar las rutas que renderizan un componente.
- [Formik](https://www.npmjs.com/package/formik) gracias a esta librería podemos manejar los datos del formulario, el envío, obtener los valores dentro y fuera del State del formulario, mensajes de error, etc.
- [Yup](https://www.npmjs.com/package/yup) es un constructor de esquemas javaScript para analizar y validar valores.
- [Bootstrap](https://getbootstrap.com/) framework CSS utilizado en aplicaciones front-end.
- [Moment.js](https://momentjs.com/) librería que nos permite manejar fechas

## Uso de React Router

``` js
/*
En el archivo App.js vamos a tener nuestro router, es decir todas las rutas que usamos para el proyecto

Dentro del Switch declaramos las rutas exactas y el componente a renderizar
*/


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CapturarDatos} /> 
        <Route path="/detallesInformacion" exact component={MostrarInfo} />
      </Switch>
    </Router>
  )
}
```

## Uso de Yup y Formik
Implementamos el hook **useFormik()** para crear el componente **Formik** en el cual indicamos los valores iniciales, las validaciones, y el controlador de eventos onSubmit.
``` js
const formik = useFormik({
  initialValues: {
    //inicializamos los valores que vamos a manipular en el formulario
    colonia:"",
    cp:""
  },
  validationScehma:{
    //hacemos la validaciones que necesitemos, según sea el input
    colonia: Yup.string().required("Campo obligatorio"),
    cp: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d))$/, "Sólo números"), //en matches definimos una expresion regular para que sólo aceptemos números
  },
  onSumbit: (datosFormulario) => {
    //Mandamos los datos capturados al localStorage (usamos localStorage para mostrar la información en la vista de detalles)
    window.localStorage.setItem('companyData',JSON.stringify(datosFormulario));
    //en setItem mandamos una llave 'companyData' y convertimos el objeto JSON en string para guardarlo en localStorage
  }
})
```

## Uso de Bootstrap 

``` jsx
/*
Estucturamos los inputs con el Layout de bootstrap.
Usamos la clase grid para acomdar los inputs en forma de columna y con diferentes anchos, los cuales gestionamos con la clase "col"
*/
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
```

## Uso Moment.js

``` js
/*
Antes de formatear la fecha, el input de tipo "date"  nos regresa la fecha en formato YYYY/MM/DD

p.e: 2005-12-15

Y al formatearla obtendremos 12/15/2005

*/

// fechaConstitucion -> 2005-12-15

let fechaConstFormat = moment(fechaConstitucion).format("MM/DD/YYYY");

// fechaConstFormat -> 12/15/2005


```