import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export default class Formulario extends Component {
    handleSubmit = (values) => {
        console.log(values);
        Swal.fire({
            title: 'Valores enviados',
            html: `<ul>
              <li>${values.nome}</li>
              <li>${values.telefone}</li>
              <li>${values.email}</li>
            </ul>`,
            icon: 'info',
            confirmButtonText: 'Cool'
        })
    }
    render() {
        return (
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4 text-center" >
                <h3>Formulário com Formik</h3>
                <Formik
                    initialValues={{
                        nome: '',
                        telefone: '',
                        email: ''
                    }}
                    onSubmit={this.handleSubmit}>
                    <Form>
                        <Field type={'text'} className="form-control" id="nome" name="nome" placeholder="Digite seu nome" />
                        <Field type={"tel"} className="form-control" id="telefone" name="telefone" placeholder="Digite seu telefone" />
                        <Field type={"email"} className="form-control" id="email" name="email" placeholder="Digite seu email" />
                        <button className="btn my-2 btn-secondary" type="submit">Enviar</button>
                    </Form>
                </Formik>
            </div>
        )
    }

}