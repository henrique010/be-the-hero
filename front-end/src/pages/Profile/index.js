import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import BackLink from '../../components/BackLink';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Container, IncidentList } from './styles';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId])

    async function handelDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao tentar deletar o caso, tente novamente.')   
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
    <Container className="profile-container">
        <header>
            <img src={logoImg} alt=""/>
            <span>Bem Vinda, {ongName}</span>

            <BackLink button={true} to="/incidents/new">Cadastrar novo caso</BackLink>
            <button onClick={handleLogout} type="button">
                <FiPower size={16} color="#E02041"/>
            </button>
        </header>

        <h1>Casos cadastrados</h1>

        <IncidentList>
            {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                    <button onClick={() => handelDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            ))}
        </IncidentList>
    </Container>
    );
}
