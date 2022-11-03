import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { apiVC, apiBA } from './services/api';


export default class ViaCEP extends Component {
  constructor() {
    super();
    this.state = {
      enderecoVC: {},
      enderecoBA: {}
    }
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await apiVC.get(`${cep}/json`);
      this.setState({ enderecoVC: response.data });
    } catch (error) {
      Swal.fire({
        title: 'Oops',
        icon: 'error',
        text: 'CEP não encontrado ou erro no servidor.'
      });
    }

    try {
      const response = await apiBA.get(`${cep}`);
      this.setState({ enderecoBA: response.data });
    } catch (error) {
      Swal.fire({
        title: 'Uepa',
        icon: 'error',
        text: 'CEP não encontrado seu trouxa!'
      })
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure um CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o CEP" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            <h2>Via Cep</h2>
            {this.state.enderecoVC.cep && (
              <ul className="list-group my-3">
                <li>{this.state.enderecoVC.cep}</li>
                <li>{this.state.enderecoVC.logradouro}</li>
                <li>{this.state.enderecoVC.complemento}</li>
                <li>{this.state.enderecoVC.bairro}</li>
                <li>{this.state.enderecoVC.localidade}</li>
                <li>{this.state.enderecoVC.uf}</li>
              </ul>
            )}
            <h2>Brasil API</h2>
            {this.state.enderecoBA.cep && (
              <ul className="list-group my-3">
                <li>{this.state.enderecoBA.cep}</li>
                <li>{this.state.enderecoBA.street}</li>
                <li>{this.state.enderecoBA.neighborhood}</li>
                <li>{this.state.enderecoBA.city}</li>
                <li>{this.state.enderecoBA.state}</li>
              </ul>
            )}
          </div>
        </main>
      </>
    );
  }
}