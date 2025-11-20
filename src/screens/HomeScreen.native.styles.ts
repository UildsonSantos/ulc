import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const ConeIcon = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.subtext};
`;

export default {
  Container,
  Title,
  ConeIcon,
  Subtitle,
};
