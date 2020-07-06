import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 99998;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalWrapper = styled.div`
    position: relative;
    z-index: 99999;
    background: white;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 3px;
    height: 90%;
    width: 90%;
    max-width: ${props => !props.fluid ? `${props.maxWidth}px` : ''};
    min-width: ${props => !props.fluid ? `${props.minWidth}px` : ''};
    max-height: ${props => !props.fluid ? `${props.maxHeight}px` : ''};
    min-height: ${props => !props.fluid ? `${props.minHeight}px` : ''};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;
