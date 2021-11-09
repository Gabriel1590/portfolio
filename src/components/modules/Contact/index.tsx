import Image from 'next/image';
import Container from 'components/ui/Container';
import ContactForm from './ContactForm';
import contactIllustration from 'assets/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <Image src={contactIllustration} alt="I’m Gabriel and I’m a Full-Stack Web Developer!" />
    </Thumbnail>
  </Wrapper>
);

export default Contact;
