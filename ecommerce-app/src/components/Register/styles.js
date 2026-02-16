import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 60px auto;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  background: white;
  color: ${({ theme }) => theme.colors.text};
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

const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.colors.success};
  font-size: 0.9rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const LinkText = styled.p`
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-size: 0.9rem;
  a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }
`;
export {
  Container,
  Form,
  Input,
  Button,
  SuccessMessage,
  LinkText,
}