import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ItemQuantity = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const RemoveButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Total = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const CheckoutButton = styled.button`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;
export {
  Container,
  Title,
  CartItem,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  ItemQuantity,
  RemoveButton,
  Total,
  CheckoutButton,
  EmptyMessage,
}