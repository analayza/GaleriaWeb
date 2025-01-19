import styled from "styled-components";


export const PhotosGrid = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 265px;
    flex-wrap: wrap;
`;


export const PhotoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;


export const ImageGrid = styled.img`
    width: 300px; 
    margin: 5px;
    height: 250px;
    border-radius: 4px; 
    object-fit: cover;
`;

export const ButtonDelete = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover {
    color: red;
  }

  &:focus {
    outline: none;
  }
`;