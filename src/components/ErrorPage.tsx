import { Link } from "react-router-dom";
import Button from "./Button";

const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-main-dark text-slate-800 dark:text-gray-300 flex items-center justify-center flex-col gap-2">
      <p className="font-medium text-2xl">Oops!</p>
      <h1 className="font-bold text-9xl">404</h1>
      <p className="font-medium text-2xl">Page not found</p>
      <Button className="mt-2">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
