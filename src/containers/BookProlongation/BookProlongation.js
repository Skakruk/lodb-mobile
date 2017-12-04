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

class BookProlongation extends Component {
  state = {
    fields: {
      name: '',
      school: '',
      department: departments[0],
      email: ''
    },
    snackbarOpen: false,
    sending: false
  };

  handleDepartmentChange = (e, key, value) => {
    this.handleFieldChange('department')(e, value);
  };

  handleSend = () => {
    this.setState({
      sending: true
    });
    api.post('/book-prolongation', this.state.fields)
      .then(() => {
        this.setState({
          sending: false,
          snackbarOpen: true
        });
      })
  };

  handleFieldChange = (field) => (e, value) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [field]: value
      }
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      snackbarOpen: false
    })
  };

  render() {
    const { sending, snackbarOpen, fields: { name, school, department, email } } = this.state;

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
          />
          <TextField
            fullWidth
            floatingLabelText="Школа / клас"
            value={school}
            onChange={this.handleFieldChange('school')}
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
