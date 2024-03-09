import Blurb from "components/blurb/blurb";
import Header from "components/header/header";

function App() {
  return (
    <main>
      <Header logo="Logo" loginButton="Login" />
      <Blurb
        aside="Aside"
        body={{
          text: "Some text content here...",
          subtitle: "Some subtext content here...",
        }}
        image="https://via.placeholder.com/150"
      />
    </main>
  );
}

export default App;
