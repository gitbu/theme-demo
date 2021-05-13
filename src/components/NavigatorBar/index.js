import styled from 'vue-styled-components';
import NavitatorBar from './NavigatorBar.vue';

const StyledNavitatorBar = styled(NavitatorBar)`
  .box {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
`;

export default StyledNavitatorBar;
