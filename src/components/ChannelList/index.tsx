import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
      <Container>
        <Category>
          <span>Canais de Texto</span>
          <AddCategoryIcon />
        </Category>

        <ChannelButton ChannelName="chat-livre" />
        <ChannelButton ChannelName="lolzinho" />
        <ChannelButton ChannelName="formula 1" Selected />
        <ChannelButton ChannelName="cs-go" />
        <ChannelButton ChannelName="euro truck" />
      </Container>
  );
};

export default ChannelList;