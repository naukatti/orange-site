import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [stories, setStories] = useState([]);

  // Setting up the hook that contains the axios gets
  const hook = () => {
    console.log("effect happens!");
    axios
      .get("https://hacker-news.firebaseio.com/v0/beststories.json")
      .then((response) => {
        let storyIds = response.data.slice(0, 3);
        console.log("response got");

        // getting all of the best stories data
        let storyPromises = storyIds.map((storyId) => {
          return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => response.data)
            .catch((error) => {
              console.error(error);
            });
        });

        // Resolving all promises
        Promise.all(storyPromises).then((storyData) => {
          setStories(storyData);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(hook, []);

  // If there is stories to be shown, this renders
  if (stories.length > 0) {
    return (
      <div>
        <h1>Top stories</h1>
        <div>
          <ul>
            {stories.map((story) => {
              return <li key={story.id}>{story.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
  // If not, this renders
  return (
    <div>
      <p>loading data, please stand by</p>
    </div>
  );
};

export default App;
