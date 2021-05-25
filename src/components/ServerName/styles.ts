import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi'

//SL - Server List
//SN - Server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info

export const Container = styled.div`
    background-color: var(--secondary);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 11px 0 16px;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;

    color: white;
`; 

export const ExpandIcon = styled(FiChevronDown)`
    width: 28px;
    height: 28px;

    color: var(--white);
    cursor: pointer;
`;

