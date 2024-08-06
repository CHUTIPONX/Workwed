export default function Page() {
  return (
    <>
      <div style={{ backgroundColor: "#FFA500", minHeight: "100vh" }}>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
            <div className="card-header text-center">
              <h5>Sign in</h5>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingUsername"
                    placeholder="Username"
                  />
                  <label htmlFor="floatingUsername">Username</label>
                </div>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-key"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
