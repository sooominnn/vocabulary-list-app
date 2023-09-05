/* eslint-disable */
import styled from 'styled-components';
import { BsCheck, BsX } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const VocaListItem = ({ voca, dispatch }) => {
  const navigate = useNavigate();

  const { id, checked, word, pronunciation, definition, exampleEn, exampleKo } =
    voca;

  const remove = () => {
    const notice = window.confirm('정말 삭제하시겠습니까?');
    if (notice) {
      dispatch({ type: 'REMOVE', id: voca.id });
    }
  };

  const check = () => {
    dispatch({ type: 'CHECK', id: voca.id });
  };

  return (
    <Card checked={checked}>
      <CardItem>
        <Header>
          <div>{word}</div>
          <div>
            <ButtonStyle checked={checked}>
              <BsCheck onClick={() => check()}></BsCheck>
              <Link to={`/voca/update/${id}`} state={{ voca: voca }}>
                <BiEdit></BiEdit>
              </Link>
              <BsX onClick={() => remove()}></BsX>
            </ButtonStyle>
          </div>
        </Header>
        <div onClick={() => navigate(`/detail/${id}`)}>
          <span>{pronunciation}</span>
          <p>{definition}</p>
          <div>{exampleEn}</div>
          <div>{exampleKo}</div>
        </div>
      </CardItem>
    </Card>
  );
};

export default VocaListItem;

const Card = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: flex-start; */
  gap: 20px;
  width: 29%;
  /* min-width: 100px; */
  padding: 50px 0;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid green;
  background-color: ${(props) => (props.checked ? 'green' : 'white')};
  color: ${(props) => (props.checked ? 'white' : 'black')};
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;

const Header = styled.div`
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`;

const CardItem = styled.div`
  flex: 1;
  // max-width: calc(33%);
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
`;

const ButtonStyle = styled.div`
  font-size: 20px;
  font-weight: 500px;
  color: ${(props) => (props.checked ? 'white' : 'green')};
`;
