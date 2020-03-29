import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import BackLink from '../../components/BackLink';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, Content} from './styles';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const  ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(event){
    event.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao tentar cadastrar caso, tente novamente.')
    }
  }
  
  return (
    <Container>
          <Content>
              <section>
                  <img src={logoImg} alt=""/>

                  <h1>Cadastrarnovo caso</h1>
                  <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                  <BackLink to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </BackLink>
              </section>

              <form>
                  <input 
                    placeholder="Título do caso" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                  <textarea 
                    placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />
                  <input 
                    placeholder="Valor em reais" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />

                  <Button onClick={handleNewIncident}>Cadastrar</Button>
              </form>
          </Content>
      </Container>
  );
}
