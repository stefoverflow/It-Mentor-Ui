import React, { useEffect, useMemo } from 'react';
import { Container, Loader, Table } from 'semantic-ui-react';
import { useStore } from '../../stores/store';
import { observer } from "mobx-react-lite";
import { Redirect } from 'react-router-dom';

import './ClientsPage.scss';

const ClientsPage = () => {
    const { mentorStore, userStore: { currentUser } } = useStore();
    const { fetchClients, fetchClientsInProgress, fetchClientsError, clients } = mentorStore;
    const isMentor = useMemo(() => (currentUser ? currentUser.role === 'Mentor' : false), []);
    
    useEffect(() => {
        fetchClients();
    }, []);
    
    if(!isMentor) 
        return <Redirect to="/mentors"/>;

    return <Container className="clients-page__container">
        {fetchClientsInProgress ? <Loader inverted active/>
            :
                <Table fixed inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                Korisnicko ime
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Broj preostalih sesija
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Ukupan broj sesija
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Zoom link
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {fetchClientsError 
                        ? <div className="clients-page__error">{fetchClientsError}</div> 
                        :
                            clients.length === 0 ? 
                        <Table.Row>
                            <div className="clients-page__no-clients">Nemate klijente.</div>
                        </Table.Row>
                            :
                            clients.map(c => 
                                <Table.Row>
                                    <Table.Cell>
                                        {c.displayName}
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {c.numberOfSessionsLeft}
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        {c.totalNUmberOfSessions}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {c.zoomLink}
                                    </Table.Cell>
                                </Table.Row>
                                )
                        }
                    </Table.Body>
                </Table>
        }
    </Container>
};

export default observer(ClientsPage);