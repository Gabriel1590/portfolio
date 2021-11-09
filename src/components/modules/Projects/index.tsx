import { useTheme } from 'providers/ThemeProvider';
import { Card, TitleWrap } from 'components/ui/Card';
import Container from 'components/ui/Container';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';
import projects from 'data/projects.json';

const Projects = () => {
  const { theme } = useTheme();

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects &&
          projects.map((project, i) => (
            <Item
              key={`${i}-project`}
              as="a"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              <Card theme={theme}>
                <Content>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </Content>
                <TitleWrap>
                  <Stats theme={theme} />
                  <Stats theme={theme}>
                    <Languages theme={theme}>
                      {project.languages.map((language, j) => (
                        <span key={`${i}-project-${j}-language`}>{language}</span>
                      ))}
                    </Languages>
                  </Stats>
                </TitleWrap>
              </Card>
            </Item>
          ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;
