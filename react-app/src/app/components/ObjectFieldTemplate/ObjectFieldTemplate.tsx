import React from 'react';
import { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import styles from './ObjectFieldTemplate.module.css';

export const ObjectFieldTemplate = ({
  TitleField,
  properties,
  title,
  description,
  required,
  idSchema,
}: ObjectFieldTemplateProps) => {
  return (
    <fieldset>
      <div>
        <div className={`row ${styles.row}`}>
          {properties.map((prop) => (
            <div key={prop.content.key as string | number | undefined}>
              {prop.content}
            </div>
          ))}
        </div>
        {description}
      </div>
    </fieldset>
  );
};
