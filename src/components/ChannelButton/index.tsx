import React from 'react';

import { Container, HashTagIcon, InviteIcon, ConfigIcon } from './styles';

export interface Props{
  ChannelName: string;
  Selected?: boolean
}

const ChannelButton: React.FC<Props> = ({ChannelName, Selected}) => {
  return (
      <Container className={Selected ? 'active' : ''}>
          <div>
            <HashTagIcon />
            <span>{ChannelName}</span>
          </div>
          <div>
            <InviteIcon />
            <ConfigIcon />
          </div>
      </Container>
  );
};

export default ChannelButton;