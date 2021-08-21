import React ,{useState}from 'react'
import styled ,{css} from 'styled-components/macro'


const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 600px;
`;


const TopSection = styled.div`
    width: 100%;
    padding: 10px;
   
`;

const TopSectionWrapper = styled.div`
    width: 100%;
    padding: 0px 15px;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(4,1fr);

`;

const ContentBox = styled.div`
    height: 20vh;
    min-height: 100px;
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    align-items: center;
    border: ${({primary,original}) => ( (primary == original) ? '0.5px solid #3751FF' : '0.5px solid #7A838C')};;

    h2 {
        
        color: ${({primary,original}) => ( (primary == original) ? '#3751FF' : '#9FA2B4')};;
        font-size: 19;
        font-weight: 400;
        margin-bottom: 10px;

    }
    h4 {
        font-size: 40px;
        color: ${({primary,original}) => ( (primary == original) ? '#3751FF' : 'black')};;
    }

   
`;

const Home = () => {
    const [hovered, setHovered] = useState(null)
    return (
        <Container>
             <TopSection> 
                    <TopSectionWrapper>
                        <ContentBox
                            original={1}
                            primary={hovered}
                            onMouseEnter = {() => setHovered(1)}
                            onMouseLeave={() => setHovered(null)}
                            >
                        <h2>Flows</h2>
                        <h4>60</h4>
                        </ContentBox >
                        <ContentBox
                             original={2}
                             primary={hovered}
                             onMouseEnter = {() => setHovered(2)}
                             onMouseLeave={() => setHovered(null)}
                        >
                        <h2>Workspaces</h2>
                        <h4>16</h4>
                        </ContentBox>
                        <ContentBox
                             original={3}
                             primary={hovered}
                             onMouseEnter = {() => setHovered(3)}
                             onMouseLeave={() => setHovered(null)}
                        >
                        <h2>Users</h2>
                        <h4>20</h4>
                        </ContentBox>
                        <ContentBox
                            original={4}
                            primary={hovered}
                            onMouseEnter = {() => setHovered(4)}
                            onMouseLeave={() => setHovered(null)}
                        >
                        <h2>Notes</h2>
                        <h4>0</h4>
                        </ContentBox>
                        </TopSectionWrapper>
                    </TopSection>

        </Container>
    )
}

export default Home
