import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponent";

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex: 3;
background: #f6f7f8;
`;

const ProfileHeader = styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 10px;
align-items: center;
gap: 10px;
`;

const ProfileImage = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;

const ChatBox = styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom: 0;
`;

const EmojiImage = styled.img`
width: 28px;
height: 28px;
opacity: 0.4;
cursor: pointer;
`;

const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #e5ddd6;
overflow-y: auto;
`;

const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
display: flex;
margin: 5px 15px;
`;

const Message = styled.div`
background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
max-width: 50%;
color: #303030;
padding: 8px 10px;
font-size: 14px;
border-radius: 4px;
`;

const ConversationComponent = () => {
    return (
    <Container>
        <ProfileHeader>
           <ProfileImage src="/profile/men1.png"/>
           Aniket Darekar
        </ProfileHeader>

        <MessageContainer>
          <MessageDiv isYours={true}>
             <Message isYours={true}>hey man</Message>
          </MessageDiv>
          <MessageDiv>
             <Message>hey man</Message>
          </MessageDiv>
          <MessageDiv>
             <Message>hey man</Message>
          </MessageDiv>
          <MessageDiv>
             <Message>hey man</Message>
          </MessageDiv>
        </MessageContainer>

        <ChatBox>
          <SearchContainer>
            <EmojiImage src="/emojiimg.svg" />
            <SearchInput placeholder="Type a message"/>
          </SearchContainer>
        </ChatBox>
        </Container>
    );
}

export default ConversationComponent;