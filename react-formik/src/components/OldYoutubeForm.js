import {useFormik} from 'formik';
import * as Yup from 'yup';

/**Initial valuse of the form */
const initialValues =  {
      name: 'chikku',
      email:'',
      channel: ''
};

/**OnSubmit method invokes when submit button is clicked
 * alwys keep the updated values after form submission
 */
const onSubmit = values => {
      console.log(values, "VALLL")
};

/** validate method perform all custom error validations
 *  returns an error object
 */
const validate = values => {
      let errors = {};

      if(!values.name) {
            errors.name = 'Required';
      }

      if(!values.email) {
            errors.email = 'Required';
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format';
      }

      if(!values.channel) {
            errors.channel = 'Required';
      }

      return errors;
}

/** Yup library is used for schema object validation
 *  validationSchema contains all the vaidation rules.
 */
const validationSchema = Yup.object({
      name: Yup.string().required('Required!'),
      email: Yup.string()
            .email('Invalid email format!')
            .required('Required!'),
      channel: Yup.string().required('Required!')
});

const OldYoutubeForm = () => {
      /**useFormik() hook is used to manage the state, form submission, validation and display error messages */
      const formik = useFormik({
            initialValues,
            onSubmit,
            validationSchema
            // validate
      });
      console.log(formik.touched, "FIELDSS")
      return(
            <div>
                  <form onSubmit={formik.handleSubmit}>
                  <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <input 
                              type='text' 
                              id='name' 
                              name='name' 
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.name}/>
                                    {
                                          formik.touched.name && formik.errors.name ?
                                          (<div className="error">
                                                {formik.errors.name}
                                          </div>)
                                          : null
                                    }
                  </div>
                  <div className='form-control'>
                        <label htmlFor='email'>E-mail</label>
                        <input 
                              type='email' 
                              id='email' 
                              name='email' 
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}/>
                                    {
                                          formik.touched.email && formik.errors.email ?
                                          (<div className="error">
                                                {formik.errors.email}
                                          </div>)
                                          : null
                                    }
                  </div>
                  <div className='form-control'>

                        <label htmlFor='channel'>Channel</label>
                        <input 
                              type='text' 
                              id='channel' 
                              name='channel' 
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.channel}/>
                                    {
                                          formik.touched.channel && formik.errors.channel ?
                                          (<div className="error">
                                                {formik.errors.channel}
                                          </div>)
                                          : null
                                    }
                  </div>
                        <button type='submit'>Submit</button>
                  </form>
            </div>
      )
}
export default OldYoutubeForm;