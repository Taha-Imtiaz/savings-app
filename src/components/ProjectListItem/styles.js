import styled from "styled-components";
export const ProjectListItemContentContainer = styled.div`
display:grid;
grid-template-rows: minmax(60vh, min-content);
grid-template-columns: 1fr;
grid-template-areas: "projectlistitemcontent";
padding: 1rem 0;
`



export const ProjectListItemContent =styled.div`
grid-area: projectlistitemcontent;
display: grid;
grid-template-rows: 50vh minmax(10vh ,min-content);
border: 2px solid #ccc;
box-shadow:  2px 2px 10px 0px  rgba(0,0,0,0.3);
 border-radius:0.25rem;
  
`
export const ProjectListItemUpperContent = styled.div`
display: grid;
grid-template-rows: 30vh repeat(2,minmax(10vh ,min-content));
box-shadow: 4px 4px 20px 0px  rgba(0,0,0,0.3);
`
export const ProjectListItemImage = styled.div`
display:grid;
grid-template-rows: 30vh;
`

export const ProjectPic = styled.img`
width: 100%;
height:100%;
`
export const ProjectListItemDescriptionContent = styled.span`
font-size: 1.5rem !important;
padding-left:   0.6rem;
font-family: sans-serif;
color: #0a1f44;
`
export const ProjectStatusInfo = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
// column-gap: 0.5rem;
padding-left:   0.6rem;
font-size: 80% !important;

align-items: center;
`

export const ProjectCardFooter = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:repeat(2, 5vh);
justify-items:center;
align-items:center;
`
export const ProjectCardContentHeader =styled.div`
font-size: 70% !important;
display:grid;

`
export const ProjectCardContent =styled.div`
font-size: 70% !important;
display:grid;

`
