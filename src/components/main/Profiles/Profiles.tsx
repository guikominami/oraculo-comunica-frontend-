import { useEffect, useState } from "react";
import { fetchProfiles, deleteProfile } from "../../../api";
import ListItem from "../../UI/ListItem";
import type { Profile } from "../../../entities/Profiles";
import Paragraph from "../../UI/Paragraph";

const Profiles: React.FC<{
  onListClick: (profileSelectedId: string) => void;
  profileSelectedId: string;
  hasButtonRemove?: boolean;
}> = ({ onListClick, profileSelectedId, hasButtonRemove }) => {
  const [data, setData] = useState<Profile[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    fetchProfiles()
      .then((response) => {
        if (response) {
          setData(response);
        } else {
          console.error("Failed to fetch profiles.");
        }
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching profiles:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [profileSelectedId]);

  function handleButtonRemoveClick(id: string) {
    const confirmDelete = window.confirm(
      "Tem certeza que quer apagar todos os dados desse perfil? Isso não pode ser desfeito."
    );
    if (!confirmDelete) {
      return;
    }

    deleteProfile(id)
      .then((response) => {
        if (response) {
          setData((prevData) => prevData?.filter((item) => item._id !== id));
        } else {
          console.error("Failed to delete profile.");
        }
      })
      .catch((error) => {
        console.error("Error deleting profile:", error);
      });
  }

  let content;

  if (isLoading) {
    content = <Paragraph>Carregando...</Paragraph>;
  }

  if (error) {
    content = <Paragraph>Falha ao carregar perfis.</Paragraph>;
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ul>
        {data.map((item) => (
          <div key={item._id} className='flex items-center justify-between'>
            <ListItem
              key={item._id}
              itemId={item._id}
              item={item.name}
              onListClick={() => onListClick(item._id)}
              listItemSelectedId={profileSelectedId}
            />
            {hasButtonRemove && (
              <button
                className='px-3 py-1 ml-1 bg-red-500 text-white rounded'
                id={item._id}
                onClick={() => handleButtonRemoveClick(item._id)}
              >
                x
              </button>
            )}
          </div>
        ))}
      </ul>
    );
  }

  return <div className='flex flex-col justify-center'>{content}</div>;
};

export default Profiles;
