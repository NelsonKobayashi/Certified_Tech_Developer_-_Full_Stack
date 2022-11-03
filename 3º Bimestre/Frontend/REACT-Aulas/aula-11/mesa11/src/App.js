import { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import Swal from 'sweetalert2'
import './App.scss';
import Formulario from './components/Formulario';

export default class App extends Component {
  render() {
    return (
      <>
        <Formulario />
      </>
    )
  }
}