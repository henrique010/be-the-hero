import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import Button from '../../components/Button';
import BackLink from '../../components/BackLink';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(event){
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Erro tentar fazer login, tente novamente');
    }
  }
  return (
    <Container>
        <section>
            <img src={logoImg} alt=""/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input 
                placeholder="Seu ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <Button>Entrar</Button>

                <BackLink to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </BackLink>
            </form>
        </section>

        <img src={heroesImg} alt=""/>
    </Container>
  );
}
