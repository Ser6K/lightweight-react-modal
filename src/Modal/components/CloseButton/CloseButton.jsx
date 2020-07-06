import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './CloseButton.styles';

const CloseButton = ({ onClick, icon, className }) => (
    <Button
        role="button"
        onClick={onClick}
        {...(!!className === true ? { className } : {})}
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
