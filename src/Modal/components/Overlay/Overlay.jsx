import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { OverlayWrapper } from './Overlay.styles';

const Overlay = ({ onClick, className }) => <OverlayWrapper onClick={onClick} className={classNames(className)} />;

Overlay.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
};

Overlay.defaultProps = {
    onClick: () => {},
    className: null,
};

Overlay.displayName = 'Overlay';
export default React.memo(Overlay);
