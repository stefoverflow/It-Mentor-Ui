import React from 'react';
import { Icon } from 'semantic-ui-react';

import './PlayButton.scss';

const PlayButton = () => {

    return (
        <button className="play-button">
            <Icon inverted name="play" color='grey' />
        </button>
    );
};

export default PlayButton;