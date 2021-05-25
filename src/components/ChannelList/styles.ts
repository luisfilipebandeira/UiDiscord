import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi'

//SL - Server List
//SN - Server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary);


    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;

    >span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        color: var(--gray);
    }
`; 

export const AddCategoryIcon = styled(FiPlus)`
    width: 21px;
    height: 21px;
    color: var(--symbol);
    cursor: pointer;
`;


