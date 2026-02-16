import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 80px auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;


export {
  Container,
  Title,
  Message,
  Button
}