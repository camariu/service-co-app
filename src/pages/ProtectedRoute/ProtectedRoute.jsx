import { useEffect } from "react";
import { useAuth } from "../../contexts/FackeAuthContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
