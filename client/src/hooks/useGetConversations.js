import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);

  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/api/users`, {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data.users);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(true)
      }
    }

    getConversations();
  }, []);

  return { loading, conversations }
}

export default useGetConversations 