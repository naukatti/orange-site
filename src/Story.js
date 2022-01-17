const Story = ({ story }) => {
  let date = new Date(story.time * 1000);

  date = date.toLocaleString();
  return (
    <div className="Story">
      <h2>{story.title}</h2>
      <p>By {story.by}</p>
      <p>Score: {story.score}</p>
      <a href={story.url} target="_blank" rel="noreferrer">
        {story.url}
      </a>
      <p>{date}</p>
    </div>
  );
};

export default Story;
