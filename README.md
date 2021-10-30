# Capturar datos de usuario

Herramientas usadas en este proyeto.

- [React Router] (https://reactrouter.com/web/guides/quick-start)
- [Formik] (https://www.npmjs.com/package/formik) gracias a esta librería podemos manejar los datos del formulario, el envío, obtener los valores dentro y fuera del State del formulario, mensajes de error, etc.
- [Yup] (https://www.npmjs.com/package/yup) es un constructor de esquemas javaScript para analizar y validar valores.
- [Bootstrap] (https://getbootstrap.com/) framework CSS utilizado en aplicaciones front-end.

## Uso de formik
Implementamos el hook **useFormik()** para crear el componente **Formik** en el cual indicamos los valores iniciales, las validaciones, y el método onSubmit.
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
    cp: Yup.string().required("Campo obligatorio").matches(/^(\d([0-9]*\d))$/, "Sólo números"),
  },
  onSumbit: (datosFormulario) => {
    //Mandamos los datos capturados al localStorage
    window.localStorage.setItem('companyData',JSON.stringify(datosFormulario));
    //en setItem mandamos una llave 'companyData' y convertimos el objeto JSON en string para guardarlo en localStorage
  }
})
```