import React from 'react';
const classNames = require('classnames');

const Level3Attribute = ({ picUrl, translation, faded }) =>
    translation ? (
        <div className={classNames("Level3__attribute", { faded })}>
            <img
                alt=""
                height="20px"
                width="20px"
                src={picUrl}>
            </img>
            <div>{translation}</div>
        </div>
    ) : undefined;

export default Level3Attribute;
