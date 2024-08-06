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
              <h5>Sign Up</h5>
            </div>
            <div className="card">
              <div className="card-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Username
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      D/M/Y
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder=""
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <div className=" text-center col-12">
                    <button type="submit" className="btn btn-success">
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
