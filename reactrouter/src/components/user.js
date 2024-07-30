import { useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  return <h2>User Profile for ID {id}</h2>;
};
