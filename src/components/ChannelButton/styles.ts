import styled from 'styled-components';
import { FiHash, FiUserPlus, FiSettings } from 'react-icons/fi'

//SL - Server List
//SN - Server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    > div {
        display: flex;
        align-items: center;
    }

    >div span {
        margin-left: 5px;
        color: var(--senary);
    }

    &:hover, &:active {
        background-color: var(--quinary);

        >div span {
            color: var(--white);
        }
    }

`;

export const HashTagIcon = styled(FiHash)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const InviteIcon = styled(FiUserPlus)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const ConfigIcon = styled(FiSettings)`
    width: 16px;
    height: 16px;

    margin-left: 4px;

    color: var(--symbol);

    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;


