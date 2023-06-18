import { projects } from "@/data/fake";
import Project from "../project/Project";
import styles from "./project.module.scss";

export default function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <h1 className={styles.head}>My Works</h1>
      {projects.map((project) => (
        <Project project={project} key={project.id}/>
      ))}
    </div>
  );
}
