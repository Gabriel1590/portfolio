import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import skillsIllustration from 'assets/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

const Skills = () => {
  const { theme } = useTheme();

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <Image src={skillsIllustration} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            A Full Stack Web Developer, self-taught person and fast learner, more interested in Backend. Always trying
            to improve my communication and development processes. In love with finding new and elegant solutions to
            face new challenges and expand my knowledge as well as improve my code.
          </p>
          <Link href="#contact" passHref>
            <Button as="a">Hire me</Button>
          </Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
