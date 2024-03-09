import React, { useCallback, useEffect, useState } from "react";

import { GraphQLResult, generateClient } from "aws-amplify/api";
import { getIdeaWithDepth } from "src/graphql/customQueries";
import { GetIdeaQuery } from "src/API";
const client = generateClient();

interface IdeaProps {
  id: string;
}

const Idea: React.FC<IdeaProps> = ({ id }: IdeaProps) => {
  const fetchIdea = useCallback(async () => {
    const idea = await client.graphql({
      query: getIdeaWithDepth,
      variables: { id: id },
    });

    return idea;
  }, [id]);

  const [idea, setIdea] = useState<
    GraphQLResult<GetIdeaQuery>["data"]["getIdea"] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchIdea();
      // Rest of the code
      setIdea(data.data.getIdea);
    };

    fetchData();
  }, [id, fetchIdea]);

  fetchIdea();
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">Title{idea?.name}</h2>
      <p className="text-gray-500 mb-2">Author</p>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v10a1 1 0 01-2 0V4a1 1 0 011-1zm-7 5a1 1 0 011-1h4a1 1 0 110 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h-4a1 1 0 110 2h4a1 1 0 011-1zM4.293 8.707a1 1 0 010-1.414l2-2a1 1 0 111.414 1.414L6.414 8l1.293 1.293a1 1 0 01-1.414 1.414l-2-2zm11.414 0a1 1 0 010-1.414L13.586 6l-1.293-1.293a1 1 0 111.414-1.414l2 2a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-500">Votes</span>
      </div>
      <img
        src="image-url"
        alt="Idea Image"
        className="w-full h-40 object-cover mb-2"
      />
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v10a1 1 0 01-2 0V4a1 1 0 011-1zm-7 5a1 1 0 011-1h4a1 1 0 110 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h-4a1 1 0 110 2h4a1 1 0 011-1zM4.293 8.707a1 1 0 010-1.414l2-2a1 1 0 111.414 1.414L6.414 8l1.293 1.293a1 1 0 01-1.414 1.414l-2-2zm11.414 0a1 1 0 010-1.414L13.586 6l-1.293-1.293a1 1 0 111.414-1.414l2 2a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-500">
          {/* {idea?.comments?.items.length ?? 0} */}
        </span>
      </div>
    </div>
  );
};

export default Idea;
