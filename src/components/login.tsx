
export default function () {
  return (
    <>
      <div className="wrapper">
    <form action="">
    <h1>Login</h1>
    <div className="input-box">
        <input type="email" name="" id="" placeholder="Username" required />
    </div>
    <div className="input-box">
        <input type="password" name="" id="" placeholder="Password" required />
    </div>
    <div className="remember-forgot">
        <label><input type="text" name="" id="" />Remember me</label>
        <a href="#">Forgot Password</a>
    </div>
    <button type="submit" className="btn">
        Login
    </button>
    <div className="register-link">
        <p>Don't have account?<a href="#">Register</a></p>
    </div>
    </form>
      </div>
    </>
  );
}
