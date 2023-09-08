import {useState} from "react";
import {useForm} from "react-hook-form";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login.css";
import {Link} from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className="register-form">
      <h2 className="h2">Đăng nhập tài khoản</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            name="userName"
            placeholder="Username"
            {...register("userName", {
              required: "* Username không được trống",
            })}
          />
        </div>
        {errors.userName && (
          <span className="error">{errors.userName.message}</span>
        )}

        <div className="form-group">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
            {...register("password", {
              required: "* Mật khẩu không được trống",
              minLength: {
                value: 6,
                message: "* Mật khẩu phải có ít nhất 6 ký tự",
              },
            })}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}

        <div className="form-group">
          <input
            className="submit_register"
            type="submit"
            name="submit"
            value="đăng nhập"
          />
        </div>
        <p className="fuilt_register">
          Chưa có tài khoản Lions? <Link to="">Đăng ký ngay</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
