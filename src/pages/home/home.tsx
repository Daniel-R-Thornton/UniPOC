import { Button } from "@aws-amplify/ui-react";
import Blurb from "components/blurb/blurb";
import { useCreateIdea } from "hooks/idea/useIdea";

function Home() {
  const { mutateAsync: createIdea } = useCreateIdea();
  return (
    <>
      <Blurb
        body={{
          text: "Are you ready to become an Idea Champion? Share your innovative ideas or build upon the ideas of others! This portal will remain open for the next year and we will refer to it throughout the engagement process. Participants whose ideas best address the challenges that our community faces will be invited to partner with us to further develop their ideas! We encourage one idea per card and building off the ideas of others. Only use the location feature if your idea is specific to a place. Remember, you can submit as many ideas as you want!",
          subtitle: "Ideas Portal ",
        }}
        aside={{
          title: "Welcome to the Ideas Portal",
          text: "This is a place to share your innovative ideas or build upon the ideas of others! This portal will remain open for the next year and we will refer to it throughout the engagement process. Participants whose ideas best address the challenges that our community faces will be invited to partner with us to further develop their ideas! We encourage one idea per card and building off the ideas of others. Only use the location feature if your idea is specific to a place. Remember, you can submit as many ideas as you want!",
        }}
        image="https://stlouis.citizenlab.co/uploads/e0d13d54-d706-4d53-af85-2f6c48c4c2fe/project/header_bg/1c7aa1cb-7c75-4293-8f9b-37fa72a73657/large_afd08489-8a69-4e30-9591-974d82716d46.jpeg"
      />
      {/* banner  with text on the left button on the right*/}
      <div className="flex justify-between items-center bg-[#033d8b] p-8">
        <h2 className="text-2xl font-bold text-white">
          Share your innovative ideas!
        </h2>
        <div className="flex justify-end">
          <Button
            variation="primary"
            className="!text-sm"
            onClick={() => {
              createIdea({
                input: {
                  attachments: [],
                  description: "test",
                  name: "test",
                  // statusId: "1",
                  // userIdeasId: "me",
                  // statusIdeasId: "1",
                },
              });
            }}
          >
            Submit an Idea
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
