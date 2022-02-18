import React from 'react';
import { Link } from 'react-router-dom';

import './ClientContactButton.scss';

const ClientContactButton = () => (
    <Link to="/client-contact" className="client-contact-button">
        Zakaži Konsultaciju
    </Link>
);

export default ClientContactButton;