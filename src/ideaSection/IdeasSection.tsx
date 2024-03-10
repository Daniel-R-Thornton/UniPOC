import AddIdeaModal from "components/addIdeaModal/addIdeaModal";
import { fetchAuthSession } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { useIdeas } from "hooks/idea/useIdeas";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

export const IdeasSection = () => {
  const { ideas, isLoading } = useIdeas();
  const navigate = useNavigate();

  isLoading && <div>Loading...</div>;
  return (
    <>
      <div className="flex justify-between items-center bg-[#033d8b] p-8">
        <h2 className="text-2xl font-bold text-white">
          Share your innovative ideas!
        </h2>
        <div className="flex justify-end">
          <AddIdeaModal
            label="Submit an Idea"
            okAction={async (onOpen) => {
              // if the user is not logged in, redirect to the login page
              // ugh boomer cringe
              const session = await fetchAuthSession();
              if (!session.tokens) {
                navigate("/login");
              }
              onOpen();
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-3  p-10  gap-3">
        {ideas?.map((idea) => {
          return (
            <Card
              key={idea.id}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <div className="h-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-20 h-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>

              <Stack w={{ base: "100%", sm: "70%" }} p="4" spacing="4">
                <CardBody>
                  <Heading size="md">{idea.name}</Heading>
                  <Text py="2">{idea.description}</Text>
                </CardBody>

                <CardFooter display="flex" flexDirection="column">
                  {/* number of comments and votes max at 100 (saves an extra query per idea ) just says 100+ when above */}
                  {/* votes, comments and downVotes */}
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-2 w-1/2 flex-shrink-0">
                      {(idea?.Comments?.items.length ?? 0) > 100
                        ? "100+"
                        : idea?.Comments?.items.length ?? 0}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                      </svg>
                      {(idea?.Votes?.items.length ?? 0) > 100
                        ? "100+"
                        : idea?.Votes?.items.filter(
                            (item) => (item?.value ?? 0) > 1
                          ).length ?? 0}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                      {(idea?.Votes?.items.length ?? 0) > 100
                        ? "100+"
                        : idea?.Votes?.items.filter(
                            (item) => (item?.value ?? 0) < 1
                          ).length ?? 0}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                        />
                      </svg>
                    </div>
                    <Button variant="solid" colorScheme="blue" ml="auto">
                      {" "}
                      {/* Add ml="auto" to align the button to the right */}
                      Read More
                    </Button>
                  </div>
                </CardFooter>
              </Stack>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default IdeasSection;