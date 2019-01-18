import React from 'react';
import {FormFeedback, FormGroup, Input, Label} from "reactstrap";

const ReactstarpFormikInput = (
    {
        field: {...fields},
        form: {touched, errors, ...rest},
        ...props
    }) => {
      const allErrors = props.errors || [];
      if (touched[fields.name] && errors[fields.name]) {
        allErrors.push(errors[fields.name]);
      }
      return (
        <FormGroup>
            <Label for={fields.name} className={"label-color"}>{props.label}</Label>
            <Input {...props} {...fields} invalid={Boolean(allErrors.length)}/>
            {allErrors.map((e, i) => <FormFeedback key={i}>{e}</FormFeedback>)}
        </FormGroup>
      );
    }
export default ReactstarpFormikInput;
