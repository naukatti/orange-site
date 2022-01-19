import { Link } from "react-router-dom";

const Story = ({ story }) => {
  let date = new Date(story.time * 1000);

  date = date.toLocaleString();
  return (
    <div className="Story">
      <h2>{story.title}</h2>
      <p>
        <Link to={`/user/${story.by}`}>{story.by}</Link>
      </p>
      <p>Score: {story.score}</p>
      <p>
        <a href={story.url} target="_blank" rel="noreferrer">
          {story.url}
        </a>
      </p>
      <p>Posted at: {date}</p>
    </div>
  );
};

export default Story;
