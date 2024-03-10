import Blurb from "components/blurb/blurb";

import { IdeasSection } from "../../ideaSection/IdeasSection";

function Home() {
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
      <IdeasSection />
    </>
  );
}

export default Home;
