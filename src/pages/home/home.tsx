import Blurb from "components/blurb/blurb";

function Home() {
  return (
    <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 items-center">
      <div className="col-span-1">
        <Blurb
          body={{
            text: "Are you ready to become an Idea Champion? Share your innovative ideas or build upon the ideas of others! This portal will remain open for the next year and we will refer to it throughout the engagement process. Participants whose ideas best address the challenges that our community faces will be invited to partner with us to further develop their ideas! We encourage one idea per card and building off the ideas of others. Only use the location feature if your idea is specific to a place. Remember, you can submit as many ideas as you want!",
            subtitle: "Ideas Portal ",
          }}
          image="https://stlouis.citizenlab.co/uploads/e0d13d54-d706-4d53-af85-2f6c48c4c2fe/project/header_bg/1c7aa1cb-7c75-4293-8f9b-37fa72a73657/large_afd08489-8a69-4e30-9591-974d82716d46.jpeg"
        />
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-4 p-4 ">
          <div className="bg-gray-200 p-4">
            <h2 className="text-xl">About Us</h2>
            <p className="text-sm pt-1">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
