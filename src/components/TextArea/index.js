// import { withTranslation } from "react-i18next";

import * as S from "./styles";
//reusable textarea field
const TextArea = ({ name, id, placeholder, onChange }) => (
  <S.Container>
    <label htmlFor={name}>{id}</label>
    <S.TextArea
      spellcheck="false"
      placeholder={placeholder}
      id={name}
      name={name}
      onChange={onChange}
    />
  </S.Container>
);

export default  (TextArea);
