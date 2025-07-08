import { useQuery } from "@tanstack/react-query";
import { fetchTranslations } from "../../api";

function Translation() {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchTranslations(),
    queryKey: ["translations"],
    staleTime: Infinity,
  });

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isError) {
    content = <div>Failed to fetch words.</div>;
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.word.word}
            <p>
              <b>Traduções:</b>
            </p>
            {item.translations.map((itemTranslation) => (
              <li>
                <p>
                  {itemTranslation.word} - {itemTranslation.language.name}
                </p>
              </li>
            ))}
          </li>
        ))}
      </ul>
    );
    console.log(data);
  }

  return <div>{content}</div>;
}

export default Translation;
