import axios from "axios";
import Story from "./Story";
import { useEffect, useState } from "react";

const StoryList = () => {
  const [stories, setStories] = useState([]);

  // Setting up the hook that contains the axios gets
  const hook = () => {
    console.log("effect happens!");
    axios
      .get("https://hacker-news.firebaseio.com/v0/beststories.json")
      .then((response) => {
        let storyIds = response.data.slice(0, 19);
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
      <>
        <h2>Top stories</h2>
        <div>
          {stories.map((story) => {
            return <Story story={story} key={story.id} />;
          })}
        </div>
      </>
    );
  }
  // If not, this renders
  return <h2>loading data, please stand by</h2>;
};
export default StoryList;
