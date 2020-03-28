import styled from 'styled-components';
import { colors } from './base';

export const Container = styled.div`
    /* width: 100%; */
    display: flex;
    margin: -5px;
    padding: 5px;
    background-color: ${colors.background};
    justify-content: center;
    @media (max-width: 600px) and (min-width: 10px) {
        display: grid;
        justify-content: stretch;
       }
    `;

export const Col = styled.div`
     padding: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
     `;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;
    align-items: center;
    @media (max-width: 600px) and (min-width: 10px) {
         width: auto;
      }
     `;

export const Alert = styled.div`
    border-radius: 0.25rem;
    width: 100%;
    padding: 20px;
    background-color: #5bc0de;
`;
export const InputLabel = styled.div`
    font-weight: 300;
    font-size: 18px;
    color: #867777;
`;
export const InputText = styled.div`
    font-weight: 300;
    font-size: 15px;
    color: #867777;
`;
export const Card = styled(Row)`
    box-shadow: 0 5px 5px 0 ${colors.shadowColor};
    border-top: 5px solid ${colors.primaryColor};
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
    padding-bottom: 0px;
    background-color: ${colors.cardColor};
    width: fit-content;
    flex-direction: column;
    `;
export const Weather = styled.div`
    font-weight: ${props => (props.max ? '500' : '300')};;
    font-size: 25px;
    color: ${props => (props.max ? colors.maxColor : colors.minColor)};;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
     `;

export const TempType = styled.div`
    font-weight: 300;
    font-size: 15px;
    color: #867777;
    `;    