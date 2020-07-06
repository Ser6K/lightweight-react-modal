import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { Button } from './CloseButton.styles';

const CloseButton = ({ onClick, icon, className }) => (
    <Button
        role="button"
        className={classNames(className)}
        onClick={onClick}
    >
        {icon ? icon : 'x'}
    </Button>
);

CloseButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.node,
};

CloseButton.defaultProps = {
    className: null,
    icon: null,
};

CloseButton.displayName = 'CloseButton';
export default React.memo(CloseButton);
