import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { CardFooterWrapper } from 'app/components/CardFooterWrapper/CardFooterWrapper';
import { cancelOnClick } from './cancelOnClick';
import { getUserEditFormSelector } from 'features/userCard/selectors/getUserEditFormSelector';
import { formOnChange } from './formOnChange';
import { formOnSubmit } from './formOnSubmit';
import {
  CustomForm,
  CustomFormImperative,
} from 'app/components/CustomForm/CustomForm';
import { resetOnClick } from './resetOnClick';

export const UserEditCard: React.FC = () => {
  const {
    formKey,
    data = {},
    createUserSchema,
    updateUserSchema,
    uiSchema,
  } = useSelector(getUserEditFormSelector);
  const formRef = useRef<CustomFormImperative>(null);

  console.log('here');

  return (
    <div className="card" role="main" aria-label="User Card">
      <div className="card-header">
        <h5 className="card-title">User Edit</h5>
      </div>
      <div className="card-body">
        <CustomForm
          formKey={formKey}
          data={data}
          schema={data.userId ? updateUserSchema : createUserSchema}
          uiSchema={uiSchema}
          formOnChange={formOnChange}
          formOnSubmit={formOnSubmit}
          ref={formRef}
        />
      </div>
      <div className="card-footer">
        <CardFooterWrapper>
          <button
            className="btn btn-primary"
            onClick={() => {
              formRef.current?.submit();
            }}
          >
            Save User
          </button>
          <button className="btn btn-secondary" onClick={resetOnClick}>
            Reset
          </button>
          <button className="btn btn-primary" onClick={cancelOnClick}>
            Cancel
          </button>
        </CardFooterWrapper>
      </div>
    </div>
  );
};
