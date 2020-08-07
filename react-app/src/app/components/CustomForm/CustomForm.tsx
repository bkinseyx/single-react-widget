import React, { Ref } from 'react';
import Form, { UiSchema } from 'react-jsonschema-form';
import { JSONSchema6 } from 'json-schema';
import styles from './CustomForm.module.css';

import { ObjectFieldTemplate } from 'app/components/ObjectFieldTemplate/ObjectFieldTemplate';
import {
  widgets,
  getCustomFormats,
  getTransformErrors,
  formats,
} from 'app/utils/formUtils';

export interface CustomFormImperative {
  submit: () => void;
}

interface CustomFormProps {
  formKey: number;
  data: {};
  schema: JSONSchema6;
  uiSchema: UiSchema;
  formOnChange: ({ formData }: { formData: any }) => void;
  formOnSubmit: ({ formData }: { formData: any }) => void;
}

export const CustomForm = React.forwardRef(
  (
    {
      formKey,
      data,
      schema,
      uiSchema,
      formOnChange,
      formOnSubmit,
    }: CustomFormProps,
    ref: Ref<CustomFormImperative>
  ) => {
    return (
      <Form
        // key only seems to be necessary in order to clear the form
        // see https://github.com/rjsf-team/react-jsonschema-form/issues/953#issuecomment-397815654
        key={formKey}
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        customFormats={getCustomFormats(formats)}
        transformErrors={getTransformErrors(schema, formats)}
        formData={data}
        onChange={formOnChange}
        onSubmit={formOnSubmit}
        onError={(e) => console.log(e)}
        children={<React.Fragment />}
        showErrorList={false}
        ObjectFieldTemplate={ObjectFieldTemplate}
        ref={ref as any}
        className={styles.wrapper}
      />
    );
  }
);

// export const CustomForm = forwardRef((
//   { key, data, schema, uiSchema }: CustomFormProps,
//   ref: Ref<Form>
// ) => {
//   const formRef = useRef<Form<{}>>();

//   useImperativeHandle(ref, () => ({
//     submit: () => {
//       formRef?.current?.submit();
//     },
//   })));

//   return (
//     <Form
//       // key only seems to be necessary in order to clear the form
//       // see https://github.com/rjsf-team/react-jsonschema-form/issues/953#issuecomment-397815654
//       key={key}
//       schema={schema}
//       uiSchema={uiSchema}
//       widgets={widgets}
//       customFormats={getCustomFormats(formats)}
//       transformErrors={getTransformErrors(schema, formats)}
//       formData={data}
//       onChange={formOnChange}
//       onSubmit={formOnSubmit}
//       onError={(e) => console.log(e)}
//       children={<React.Fragment />}
//       showErrorList={false}
//       ObjectFieldTemplate={ObjectFieldTemplate}
//       ref={formRef as any}
//     />
//   );
// };
