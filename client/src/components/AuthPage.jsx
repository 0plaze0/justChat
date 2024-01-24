import { chatApi } from "../services/chatApi";

const AuthPage = ({ onAuth }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    try {
      const result = await chatApi.post("/authenticate", { username: value });
      onAuth({ ...result.data, secret: value });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
