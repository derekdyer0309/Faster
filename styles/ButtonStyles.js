import styled from 'styled-components/native';

export const ButtonText = styled.Text `
    color: ${props => props.textColor};
    text-align: center;
`;

export const ButtonContainer = styled.TouchableOpacity `
    flex: 1;
    width: 100px;
    height: 40px;
    padding: 12px;
    background-color: ${props => props.backgroundColor};
    box-shadow: 0px 2px 1px rgba(211,211,211, 0.25);
`;