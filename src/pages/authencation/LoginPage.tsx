import { Link } from "react-router-dom";
const LoginPage = ({ loading }) => {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)" }}
      className="min-h-screen py-32"
    >
      <img
        className="h-full order-last absolute top-0 left-0"
        src={require("assets/images/avatar_makata_vespa_fade.png")}
        alt="vespa"
      />
      <div className="container xl:w-11/12 relative h-full mx-auto bg-white rounded-3xl flex">
        <img
          className="h-full order-last absolute right-0 xl:w-3/4"
          src={require("assets/images/avatar_makata_vespa.png")}
          alt="vespa"
        />
        <div className="w-auto flex items-center 2xl:p-32 xl:py-12 z-10">
          <div className="flex flex-col w-96 xl:w-80">
            <img
              className="h-12 w-12 mb-3"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <p className="font-extrabold text-3xl mb-4">Login</p>
            <div className="mb-8">
              <label htmlFor="email" className="mb-2 text-sm text-gray-500">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="input-basic w-full"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mb-2 text-sm text-gray-500">
                Password
              </label>
              <input
                type="password"
                className="input-basic w-full"
                placeholder="Password"
              />
            </div>
            <Link
              to={"/"}
              title="Forgot Password?"
              className="text-sm text-gray-400 mb-8"
            >
              Forgot Password?
            </Link>
            <button className="btn bg-rose-700 mb-8">Sign in</button>
            <p className="text-sm text-gray-400 text-center mb-4">
              or continue with
            </p>
            <div className="flex gap-3 mb-8">
              <button className="btn border w-32">
                <img
                  className="mx-auto"
                  src={require("assets/images/flat-color-icons_google.png")}
                  alt="google"
                />
              </button>
              <button className="btn border w-32">
                <img
                  className="mx-auto"
                  src={require("assets/images/akar-icons_github-fill.png")}
                  alt="github"
                />
              </button>
              <button className="btn border w-32">
                <img
                  className="mx-auto"
                  src={require("assets/images/bi_facebook.png")}
                  alt="facebook"
                />
              </button>
            </div>
            <div className="text-center">
              <span className="text-gray-400 mr-1 text-sm">
                Don’t have an account yet?
              </span>
              <span className="font-bold text-indigo-400 text-sm">
                Register for free
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
