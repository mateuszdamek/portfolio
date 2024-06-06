import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import hackerrankDark from '../../assets/hr-light.svg';
import hackerrankLight from '../../assets/hr-dark.svg';
import CV from '../../assets/CV_Mateusz.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const hackerrankIcon = theme === 'light' ? hackerrankLight : hackerrankDark;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Mateusz Damek"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mateusz
          <br />
          Damek
        </h1>
        <h2>Data Analyst</h2>
        <span>
          <a href="https://github.com/mateuszdamek" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/mateusz-damek-712b11256/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.hackerrank.com/profile/mateuszdamek" target="_blank">
            <img src={hackerrankIcon} alt="Hackerrank icon" />
          </a>
        </span>
        <p className={styles.description}>
        With a passion for analyzing data for commercial applications and improvement.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
