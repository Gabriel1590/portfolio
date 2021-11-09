import Image from 'next/image';
import Container from 'components/ui/Container';
import social from './social.json';
import TelegramIcon from 'assets/social/telegram.svg';
import GithubIcon from 'assets/social/github.svg';
import StackOverflowIcon from 'assets/social/stackoverflow.svg';
import TwitterIcon from 'assets/social/twitter.svg';
import LinkedInIcon from 'assets/social/linkedin.svg';
import { Wrapper, Flex, Links, Details } from './styles';

const icons = {
  Telegram: TelegramIcon,
  Github: GithubIcon,
  StackOverflow: StackOverflowIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
};

const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Gabriel Escorche</h2>
        <span>© All rights are reserved | {new Date().getFullYear()}</span>
      </Details>
      <Links>
        {social.map(({ id, name, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <Image width={24} height={24} layout="fixed" src={icons[name]} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);

export default Footer;
