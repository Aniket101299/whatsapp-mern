import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { contactList } from "../mockData";
import utility from "../utility/index.js";
import httpManager from "../managers/httpManager";

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
flex: 1.6;
`;

const ProfileInfoDiv = styled.div`
display: flex;
flex-direction: column;
background: #ededed;
padding: 10px;
`;

const SearchBox = styled.div`
display: flex;
background: #f6f6f6;
padding: 10px;
`;

export const SearchContainer = styled.div`
display: flex;
flex-direction: row;
background: white;
border-radius: 16px;
width: 100%;
padding: 5px 10px;
`;

const SearchIcon = styled.img`
width: 28px;
height: 28px;
`;

export const SearchInput = styled.input`
width: 100%;
outline: none;
border: none;
font-size: 15px;
margin-left: 10px;
`;

const ContactItem = styled.div`
display: flex;
flex-direction: row;
border-bottom: 1px solid #f2f2f2;
background: white;
cursor: pointer;
padding: 15px 12px;
:hover{
    background: #ebebeb;
}
`;

const ContactInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 12px;
`;

const ContactName = styled.span`
width: 100%;
font-size: 16px;
color: black;
`;

const MessageText = styled.span`
width: 100%;
font-size: 14px;
margin-top: 3px;
color: rgba(0,0,0,0.8);
`;

const MessageTime = styled.span`
font-size: 12px;
margin-right: 10px;
color: rgba(0,0,0,0.45);
white-space: nowrap;
`;

const ProfileImage = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;

const ProfileIcon = styled(ProfileImage)`
width: 38px;
height: 38px;
border-radius: 50%;
margin-left: 12px;
margin-top: 15px;
margin-bottom: 15px;
object-fit: cover;
`;

const SearchResults = styled.div`
  width: 100%;
  height: 100px;
`;



const ContactComponent = (props) => {
    const { userData, setSelectedChat, userInfo } = props;
    const [searchResult, setSearchResult] = useState();
    const otherUser = userData.channelUsers.find(
      (userObj) => userObj.email !== userInfo.email
    ) || userData;
const lastMessage = userData.messages && userData.messages.length?
 userData.messages[userData.messages.length-1]
 : {};

    return (
    <ContactItem onClick={() => setSelectedChat({ channelData: userData, otherUser })}>
        <ProfileIcon src={otherUser.profilePic}/>
        <ContactInfo>
          <ContactName>{otherUser.name}</ContactName>
          <MessageText>{lastMessage?.text}</MessageText>
        </ContactInfo>
        <MessageTime>{new Date(lastMessage?.addedOn).getUTCDate()}</MessageTime>
    </ContactItem>
    );
}; 


const ContactListComponent = (props) => {
  const { userInfo, refreshContactList } = props;
  const [searchString, setSearchString] = useState(""); 
  const [searchResult, setSearchResult] = useState("");
const [contactList, setContactList] = useState([]);


const refreshContacts = async () => {
  const contactListData = await httpManager.getChannelList(userInfo.email);
  setContactList(contactListData.data.responseData);
  setSearchString();
   setSearchResult();
}


  useEffect(() => {
    refreshContacts();
  }, [refreshContactList]);


  const onSearchTextChanged = async (searchText) => {
    setSearchString(searchText);
    if(!utility.validateEmail(searchText)) return;
    
    const userData = await httpManager.searchUser(searchText);
    if (userData.data?.success) setSearchResult(userData.data.responseData);
  };

    return (
    <Container>
        <ProfileInfoDiv>
            <ProfileImage src={userInfo.imageUrl || "/profile/men1.png"}/>
        </ProfileInfoDiv>

        <SearchBox>
          <SearchContainer>
            <SearchIcon src="/search-icon.svg" />
            <SearchInput placeholder="Search or start new chat" 
            value={searchString} 
            onChange = {(e) => onSearchTextChanged(e.target.value)}
            />
          </SearchContainer>
        </SearchBox>

        {searchResult && (
        <SearchResults>
          <ContactComponent userData={searchResult} setSelectedChat={props.setSelectedChat} />
        </SearchResults>
      )}

        {contactList.map((userData) => (
        <ContactComponent userData={userData} 
        setSelectedChat={props.setSelectedChat}
        userInfo={userInfo}
        />
        ))}
      
        </Container>
    );
}

export default ContactListComponent;