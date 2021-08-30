import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

/**Initial valuse of the form */
const initialValues = {
  name: "chikku",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

/**mocking data receiving from an API */
const savedData = {
  name: "chikku",
  email: "chikku@gmail.com",
  channel: "Crafts Grimoire",
  comments: "Welcome to our channel",
  address: "12b nation",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

/**OnSubmit method invokes when submit button is clicked
 * alwys keep the updated values after form submission
 * setSubmitting of onSubmitProps can be used to set isSubmitting to false
 */
const onSubmit = (values, onSubmitProps) => {
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

/** Yup library is used for schema object validation
 *  validationSchema contains all the vaidation rules.
 */
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

//Validation on field level
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required!";
  }
  return error;
};

/**
 * useFormik() hook is used to manage the state, form submission, validation and display error messages
 * getFieldProps() method replaces onchange, onBlur and value properties in each field
 * Formik component replaces the useFormik() hook. It wraps all the fields and take in initialValues, validationSchema and onSubmit as properties
 * Form component replaces the html form component and we can remove the onSubmit method also
 * Field component replaces all the form field components
 * ErrorMessage component handles all the errors and throws only when the field is visited and error exists for that field
 * component prop in ErrorMessage specify the error component and can also use render props to render the error
 */
const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnMount
    >
      {(formik) => {
        console.log({ formik });
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="Youtube channel name"
              />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {
                  /**Field component with rendering props
                   * props contains 3 fields: field, form, meta
                   * 1. field contains name, value, onchange, onblur like everything formik required to manage the state
                   * 2. form object contains all the contstants and helper methods used to modify the state
                   * 3. meta gives info about the value, whether the field is visited or not, whether the field has error not
                   * FastField is an optimized version of Field component which internally implements the life cycle methods
                   * to block all additional rerenders unless there are direct updates to fast field control itself.
                   */
                  (props) => {
                    const { field, meta } = props;
                    return (
                      <div>
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }
                }
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPhn">Primary phone number</label>
              <Field type="text" id="primaryPhn" name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPhn">Secondary phone number</label>
              <Field type="text" id="secondaryPhn" name="phoneNumbers[1]" />
            </div>

            <div className="form-control">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {
                  /** FieldArray component used for dynamic fields
                   *  map() function can render the dynamic fields
                   *  push() method pushes new empty value to the field array
                   *  remove() method removes the field from the array
                   */
                  (fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }
                }
              </FieldArray>
            </div>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit Comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit All
            </button>

            <button type="reset" onClick={() => setFormValues(initialValues)}>
              Reset
            </button>

            <button type="button" onClick={() => setFormValues(savedData)}>
              Load saved data
            </button>

            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default YoutubeForm;
