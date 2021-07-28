import styled from 'styled-components';

export const Tooltip = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 90%;
    transform: translateX(-90%);
    background: ${(props) => props.theme.colors.coral};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.lightCoral};
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    padding: 8px;
    transition: opacity 0.4s;
    visibility: hidden;
    width: 160px;

    &::before {
      content: '';
      position: absolute;
      left: 88%;
      transform: translateX(-88%);
      top: 100%;
      border-color: ${(props) => props.theme.colors.coral} transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
