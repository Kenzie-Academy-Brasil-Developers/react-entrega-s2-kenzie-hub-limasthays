import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button/button";
import { Container } from "../../components/Container/styles";
import { Content } from "../../components/Content/container";
import FormLogin from "../../components/Form-login";

function Login({ authenticated, setAuthenticated }) {
  const history = useHistory();

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h3>Login</h3>
        <FormLogin
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />

        <p>Ainda não possui uma conta?</p>
        <Button color="var(--Grey-1)" onClick={() => history.push("/cadastro")}>
          Cadastre-se
        </Button>
      </Content>
    </Container>
  );
}

export default Login;
