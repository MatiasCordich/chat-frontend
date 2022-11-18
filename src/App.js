import styled from "styled-components";
import Router from "./router/Router";


function App() {
  return (
    <Wrapper>
      <Router/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 180rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export default App;
