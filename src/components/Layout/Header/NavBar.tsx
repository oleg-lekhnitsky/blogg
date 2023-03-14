import Link from 'next/link'
import CONFIG from '@/site.config';
import Copytext from './Copytext'


const NavBar: React.FC = () => {
  const links = [{ id: 1, name: 'About', to: '/about' }]
  

  return (
    <div className="">
      <div className="contact-links-wrapper">

      

        <div className='hoverme'>Contact
          <div className='pop'>
            {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >

              <div className="profile_link">Instagram</div>
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              <div className="profile_link">Email</div>
            </a>
          )}
          {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              <div className="profile_link">Linkedin</div>
            </a>
          )}
          <Copytext/>
            
          </div>
          
        </div>
        {links.map((link) => (
          <div
            key={link.id}
            className="contact-links-wrapper"
          >
            <Link href={link.to}>
              {link.name}
            </Link>
            
          </div>
          
        ))}
        
        </div>
        
    </div>
  );
}



function MyComponent() {
  const handleCopy = () => {
    const text = "This is the text to be copied.";
    clipText(text);
  };

  return (
    <div>
      <button onClick={handleCopy}>Copy Text</button>
    </div>
  );
}




export default NavBar
