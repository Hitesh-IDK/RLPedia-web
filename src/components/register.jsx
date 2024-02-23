
export default function () {
    return (
      <div className="login-container">
        <div className="wrapper">
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="email" name="" id="" placeholder="Email" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm Password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
          
            <button type="submit" className="btn">
              Register
            </button>
            <div className="register-link mt-sm-3">
              <p>
                Already have an account?<a href="#"> Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
  