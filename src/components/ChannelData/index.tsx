import React, { useEffect, useRef } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      const div = messageRef.current;

      if(div){
        div.scrollTop = div.scrollHeight;
      }
    },[messageRef]);

  return (
      <Container>
        <Messages ref={messageRef}>
          <ChannelMessage author="Luis Bandeira" data="24/05/2021" content="Hoje é meu primeiro dia no trampo" />

          <ChannelMessage hasMention author="Arnaldo Bandeira" data="24/05/2021" content={
            <>
              <Mention>@Luis Bandeira</Mention> boa sorte lá mano 
            </>
          } />
        </Messages>

        <InputWrapper>
          <Input type="text" placeholder="Coversar em #chat-livre" />
          <InputIcon />
        </InputWrapper>
      </Container>
  );
};

export default ChannelData;