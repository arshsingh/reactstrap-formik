function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

var ReactstarpFormikInput = function ReactstarpFormikInput(_ref) {
    var fields = _objectWithoutProperties(_ref.field, []),
        _ref$form = _ref.form,
        touched = _ref$form.touched,
        errors = _ref$form.errors,
        rest = _objectWithoutProperties(_ref$form, ["touched", "errors"]),
        props = _objectWithoutProperties(_ref, ["field", "form"]);

    var allErrors = props.errors || [];
    if (touched[fields.name] && errors[fields.name]) {
        allErrors.push(errors[fields.name]);
    }
    return React.createElement(
        FormGroup,
        null,
        React.createElement(
            Label,
            { "for": fields.name, className: "label-color" },
            props.label
        ),
        React.createElement(Input, Object.assign({}, props, fields, { invalid: Boolean(allErrors.length) })),
        allErrors.map(function (e, i) {
            return React.createElement(
                FormFeedback,
                { key: i },
                e
            );
        })
    );
};
export default ReactstarpFormikInput;