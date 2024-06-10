import styles from './ProjectsStyles.module.css';
import travel from '../../assets/travel-agency.svg';
import todoimg from '../../assets/todoimg.png';
import scrapp from '../../assets/scrapp.png';
import event from '../../assets/event-management-icon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todoimg}
          link="https://github.com/mateuszdamek/todo-app"
          h3="todo-app"
          p="Tasking React.js"
        />
        <ProjectCard
          src={travel}
          link="https://github.com/mateuszdamek/travel"
          h3="travel-agency"
          p="ASP.NET application"
        />
        <ProjectCard
          src={scrapp}
          link="https://github.com/mateuszdamek/Scrapp"
          h3="scrapp"
          p="Scrapp in Python"
        />
        <ProjectCard
          src={event}
          link="https://github.com/mateuszdamek/Event_managment_site"
          h3="event-managment"
          p="Python/React.js"
        />
      </div>
    </section>
  );
}

export default Projects;
