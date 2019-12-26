  import styled from "styled-components";
import {colored} from "../../styles/constants";
import {Loader} from '../../styles/loader-styles'


const List = styled.ul`
  margin-top: 15px;
  margin-left: 30px;
`;

const Item = styled.div`
  display: flex;
  margin-top: 18px;
  align-items: center;
`;

const Name = styled.p`
  width: 290px;
`;

const Detail = styled.p`
  width: 00px;
  margin: 0 12px 0 0;
`;

const Icon = styled.div`
  margin-left: 24px;
  font-size: 21px;
  color: ${p => colored(p.emotion, p)};
`;

const Spinner = styled(Loader.ModSpinner)`
  margin-left: 24px;
  transform: translateY(-3px);
`;

const S = {
  List,
  Item,
  Name,
  Detail,
  Icon,
  Spinner
}

export default S;
