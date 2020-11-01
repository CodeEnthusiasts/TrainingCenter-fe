import styled, {css} from 'styled-components'

const CardSize = {
  width: '330px',
  height: '150px',
}

export const Card = styled.li`
  cursor: pointer;
  position: relative; 
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  border-radius: 25px;
  padding: 20px;
  transition: 0.2s ease-in-out;
  width: ${CardSize.width};
  height: ${CardSize.height};

  ${({theme}) => css`
    border: 2px solid ${theme.background100};
    background: ${theme.card100};
    background: -moz-linear-gradient(0deg, ${theme.card100} 0%, ${theme.card200} 100%);
    background: -webkit-linear-gradient(0deg, ${theme.card100} 0%, ${theme.card200} 100%);
    background: linear-gradient(0deg,${theme.card100} 0%, ${theme.card200} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr=${theme.card100},
      endColorstr=${theme.card200},
      GradientType=1
      );
    -webkit-box-shadow: 10px 10px 18px -6px ${theme.darkShadow};
    -moz-box-shadow: 10px 10px 18px -6px ${theme.darkShadow};
    box-shadow: 5px 5px 11px -6px ${theme.darkShadow};

    &:hover {
      border: 2px solid ${theme.primmary};
    }
  `}
`
export const LightBoxShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${CardSize.width};
  height: ${CardSize.height};
  border-radius: 25px;

  ${({theme}) => css`
    -webkit-box-shadow: -10px -10px 18px -6px ${theme.lightShadow};
    -moz-box-shadow: -10px -10px 18px -6px ${theme.lightShadow};
    box-shadow: -5px -5px 11px -6px ${theme.lightShadow};
  `}
`
export const CardDetails = styled.div`
  display: grid;  
  grid-template-columns: 3fr 1fr;
`

export const CardOptions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`