import { useDispatch, useSelector } from "react-redux";

import Header from "./component/header";
import Headline from "./component/headline";
import SharedButton from "./component/button";
import ListItem from "./component/listItem";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    firstName: "Joe",
    lastName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  const dispatch = useDispatch();
  const fetch = () => {
    dispatch(fetchPosts());
  };

  const configButton = {
    buttonText: "Get Posts",
    emitEvent: fetch,
  };
  const posts = useSelector((state) => state.postsReducer);
  console.log(posts, "POOOO");
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((item) => {
              const { title, body, id } = item;
              const configListItem = {
                title,
                description: body,
              };
              return <ListItem key={id} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
