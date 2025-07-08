import { useQuery } from "@tanstack/react-query";
import { fetchLanguages } from "../api";

function Language() {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchLanguages(),
    queryKey: ["languages"],
    staleTime: Infinity,
  });

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isError) {
    content = <div>Failed to fetch languages.</div>;
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    );
    console.log(data);
  }

  return <div>{content}</div>;
}

export default Language;
