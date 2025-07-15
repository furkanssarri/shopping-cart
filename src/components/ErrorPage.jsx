import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>There was an error, this page does not exist.</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default ErrorPage;
