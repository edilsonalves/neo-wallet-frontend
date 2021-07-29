import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.dark};
  height: 100%;
  width: 100px;
  padding-bottom: 30px;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100px;
  width: 100px;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.light};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey2};
  height: 100px;
  padding: 0 30px;
`;

export const NameBox = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.dark};
  font-weight: 500;

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.grey5};
    font-size: 12px;
    text-decoration: none;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.dark};
  font-size: 64px;
  height: 50px;
  margin-left: 10px;
  width: 50px;
`;

export const CardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  height: 570px;
`;

export const CardRow = styled.div`
  display: flex;
  gap: 30px;

  & + & {
    margin-top: 30px;
  }
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.light};
  border-bottom: 4px solid ${(props) => props.theme.colors.grey2};
  border-radius: 10px;
  height: 100%;
  width: 350px;
  padding-bottom: 40px;
  padding-top: 40px;
  padding-left: 40px;

  h1 {
    color: ${(props) => props.theme.colors.grey5};
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 40px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 14px;
    color: ${(props) => props.theme.colors.grey5};
    margin-bottom: 3px;
  }

  h3 {
    color: ${(props) => props.theme.colors.grey4};
    font-size: 13px;
    font-weight: 500;
  }

  strong {
    text-align: right;
    color: ${(props) => props.theme.colors.grey4};
    font-size: 16px;
    /* width: 50px; */
  }

  & + & {
    border-top: 1px solid ${(props) => props.theme.colors.grey2};
    margin-top: 15px;
    padding-top: 15px;
  }
`;
