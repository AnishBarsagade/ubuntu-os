import React from "react";
import gitHubData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />

      <h1>{data.title}</h1>

      <p className="description">{data.description}</p>

      {/* Print all the tags individually */}
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
      </div>

      {/* URLs */}
      <div className="urls">
        <a href={data.repoLink} target="_blank" rel="noreferrer">
          Repository
        </a>

        {data.demoLink && (
          <a href={data.demoLink} target="_blank" rel="noreferrer">
            Demo Link
          </a>
        )}
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {gitHubData.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;
