import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex: 1.6;
`;

const ProfileInfoDiv = styled.div`
display: flex;
flex-direction: column;
background: #ededed;
padding: 10px;
`;

const ProfileImage = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;


const ContactListComponent = () => {
    return <Container>
        <ProfileInfoDiv>
            <ProfileImage src="/profile/men1.png"/>
        </ProfileInfoDiv>
        'ContactListComponent'</Container>;
}

export default ContactListComponent;