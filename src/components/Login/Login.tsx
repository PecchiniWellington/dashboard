import "./Login.scss";
import Card from "../Card2/Card";
import Input from "../Input/Input";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Button from "../Buttons/Button/Button";
import { useNavigate } from "react-router-dom";
import { type SignInInput } from "aws-amplify/auth";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../services/auth/auth.slice";

function Login2() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e?.target?.name]: e?.target?.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    handleSignIn(userData);
  };

  async function handleSignIn({ username, password }: SignInInput) {
    try {
      const loginResponse = dispatch(login({ username, password }));
      loginResponse.then(({ payload }) => {
        if (payload.token) {
          return navigate("/user");
        }
      });
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <>
      {/* <Card customClass="vot__loginForm">
        <form action="" className="vot__loginFormContent" onSubmit={onSubmit}>
          <h3 className="vot__loginFormContent-title">Vortice - Login</h3>
          <div className="vot__loginFormContent-field">
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              handleChange={onChange}
            />
          </div>
          <div className="vot__loginFormContent-field">
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              handleChange={onChange}
            />
          </div>

          <div className="vot__loginFormContent-footer">
            <Button
              asyncButton={isLoading}
              disabled={isLoading}
              type="submit"
              projectType="primary"
            >
              Sign in
            </Button>
          </div>
        </form>
      </Card> */}
    </>
  );
}

export default Login2;
