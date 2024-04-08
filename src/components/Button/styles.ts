import styled from 'styled-components';
import theme from '../../styles/theme';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  box-sizing: border-box;
  background: ${theme.colors.primary};
  color: ${theme.font.colors.primary};
  padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  border: none;
  border-radius: ${theme.border.radius};
  font-weight: ${theme.font.semibold};
  cursor: pointer;

  &:hover {
    background: ${lighten(0.3, theme.colors.primary)};
  }
`;
