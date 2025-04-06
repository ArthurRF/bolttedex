import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  max-width: 800px;
`;

export const CardStyled = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentStyled = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

export const ImageStyled = styled.img`
  width: 100px;
  height: 100px;
`;

export const CloseButtonStyled = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

export const WeaknessesContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const PokemonNameStyled = styled.h2`
  color: #ff6347;
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 15px;
`;

export const DetailImageStyled = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

export const SectionStyled = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const LabelStyled = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TypeBadgeStyled = styled.span`
  display: inline-block;
  background-color: #eee;
  color: #333;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 13px;
  margin: 4px;
  text-transform: capitalize;
`;

export const BadgeListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const DividerStyled = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
  width: 100%;
`;
