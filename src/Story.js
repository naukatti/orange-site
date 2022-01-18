import { Link } from "react-router-dom";
import User from "./User";

const Story = ({ story }) => {
  let date = new Date(story.time * 1000);

  date = date.toLocaleString();
  return (
    <div className="Story">
      <h2>{story.title}</h2>
      <Link to={`/user/${story.by}`}>
        <p>{story.by}</p>
      </Link>
      <p>Score: {story.score}</p>
      <a href={story.url} target="_blank" rel="noreferrer">
        {story.url}
      </a>
      <p>{date}</p>
    </div>
  );
};

export default Story;
