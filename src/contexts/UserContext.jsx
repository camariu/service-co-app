import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import PropTypes from "prop-types";

const ClientsContext = createContext();

const URL = "http://localhost:9000";

const initialState = {
  clients: [],
  isLoading: false,
  currentClient: null,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "clients/loaded":
      return {
        ...state,
        isLoading: false,
        clients: action.payload,
      };

    case "client/loaded":
      return { ...state, isLoading: false, currentClient: action.payload };
    case "client/created":
      return {
        ...state,
        isLoading: false,
        clients: [...state.clients, action.payload],
        currentClient: action.payload,
      };
    case "client/deleting":
      return {
        ...state,
        isLoading: false,
        clients: state.clients.filter((client) => client.id !== action.payload),
        currentClient: null,
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function ClientsProvider({ children }) {
  const [{ clients, isLoading, currentClient, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchClients() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${URL}/clients`);
        const data = await res.json();
        dispatch({ type: "clients/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "error",
          payload: "There was an error loading data...",
        });
      }
    }
    fetchClients();
  }, []);

  const getClient = useCallback(async (id) => {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${URL}/clients/${id}`);
      const data = await res.json();
      dispatch({ type: "client/loaded", payload: data });
    } catch (error) {
      dispatch({
        type: "error",
        payload: "There was an error loading client...",
      });
    }
  }, []);

  async function createClient(newClient) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${URL}/clients`, {
        method: "POST",
        body: JSON.stringify(newClient),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "client/created", payload: data });
    } catch (error) {
      dispatch({
        type: "error",
        payload: "There was an error creating client...",
      });
    }
  }

  async function deleteClient(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${URL}/clients/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "client/deleting", payload: id });
    } catch (error) {
      dispatch({
        type: "error",
        payload: "There was an error deleting client...",
      });
    }
  }

  return (
    <ClientsContext.Provider
      value={{
        clients,
        isLoading,
        currentClient,
        getClient,
        createClient,
        deleteClient,
        error,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

function useClients() {
  const context = useContext(ClientsContext);
  if (context === undefined) {
    throw new Error("ClientsContext was used outside the ClientsProvider");
  }
  return context;
}

ClientsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ClientsProvider, useClients };
