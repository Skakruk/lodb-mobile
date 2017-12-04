import React, { Component } from 'react';
import {
  TextField,
  SelectField,
  MenuItem,
  RaisedButton,
  CircularProgress,
  Snackbar
} from 'material-ui';

import api from '../../helpers/api';

import c from './BookProlongation.scss';

const departments = [
  'Абонемент дошкільнят і 1-4 класів',
  'Абонемент 5-9 класів'
];

const defaultFieldValues = {
  name: '',
  school: '',
  department: departments[0],
  email: ''
};

class BookProlongation extends Component {
  state = {
    fields: { ...defaultFieldValues },
    errors: new Set(),
    snackbarOpen: false,
    sending: false
  };

  handleDepartmentChange = (e, key, value) => {
    this.handleFieldChange('department')(e, value);
  };

  handleSend = () => {
    const { fields } = this.state;

    const emptyFields = Object.keys(fields).reduce((acc, fieldKey) => {
      if (!fields[fieldKey] || fields[fieldKey].length === 0) {
        acc.add(fieldKey);
      }
      return acc;
    }, new Set());

    if (emptyFields.size === 0) {
      this.setState({
        sending: true
      });

      api.post('/book-prolongation', this.state.fields)
        .then(() => {
          window.dataLayer.push({
            "event": "prolongation-submit"
          });

          this.setState({
            sending: false,
            snackbarOpen: true,
            fields: { ...defaultFieldValues },
            errors: new Set(),
          });
        });
    } else {
      this.setState({
        errors: emptyFields
      })
    }
  };

  handleFieldChange = (field) => (e, value) => {
    const { errors } = this.state;
    let newErrors = new Set(errors);

    if (value.length > 0 && newErrors.has(field)) {
      newErrors.delete(field);
    }

    this.setState({
      fields: {
        ...this.state.fields,
        [field]: value
      },
      errors: newErrors,
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      snackbarOpen: false
    })
  };

  render() {
    const { sending, snackbarOpen, fields: { name, school, department, email }, errors } = this.state;

    return (
      <div>
        <div className={c.introtext}>
          <p>Дорогий друже!</p>
          <p>
            Ти можеш продовжити книги, не виходячи з дому. Для цього заповни, будь ласка, наведену нижче форму.
            Книги продовжуються на два тижні.
            Пам'ятай, що книги можна продовжувати не більше 2-х разів.
          </p>
        </div>
        <div className={c.form}>
          <TextField
            fullWidth
            floatingLabelText="Твоє прізвище та ім'я"
            value={name}
            onChange={this.handleFieldChange('name')}
            errorText={errors.has('name') ? 'Необхідно заповнити це поле' : null}
          />
          <TextField
            fullWidth
            floatingLabelText="Школа / клас"
            value={school}
            onChange={this.handleFieldChange('school')}
            errorText={errors.has('school') ? 'Необхідно заповнити це поле' : null}
          />
          <SelectField
            fullWidth
            floatingLabelText="Відділ"
            value={department}
            onChange={this.handleDepartmentChange}
          >
            {
              departments.map(department => (
                <MenuItem key={department} value={department} primaryText={department} />
              ))
            }
          </SelectField>
          <TextField
            fullWidth
            floatingLabelText="E-mail адреса"
            value={email}
            type="email"
            onChange={this.handleFieldChange('email')}
            errorText={errors.has('email') ? 'Необхідно заповнити це поле' : null}
          />
          <RaisedButton label="Надіслати" primary={true} onTouchTap={this.handleSend} disabled={sending} />
          {sending
            ? (<div className={c.overlay}>
              <CircularProgress />
            </div>)
            : null}
          <Snackbar
            open={snackbarOpen}
            message="Запит успішно надіслано"
            autoHideDuration={4000}
            onRequestClose={this.handleSnackbarClose}
          />
        </div>
      </div>

    )
  }
}

export default BookProlongation;
