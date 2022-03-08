import React from 'react';
import classNames from 'classnames';

import './Image.scss';

interface ImageProps {
    className: string;
    src: string;
};

const Image: React.FC<ImageProps> = ({ className, src }) => (
    <div className={classNames(className, 'image-container')}>
        <img className={classNames(className, 'image-container__image')} src={src} />
    </div>
);

export default Image;