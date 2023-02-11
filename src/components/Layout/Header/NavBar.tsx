import Link from 'next/link'
import CONFIG from '@/site.config';

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: 'About', to: '/about' }]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black dark:text-gray-100 nav"
          >
                  <div className="profile_links_wrapper">
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
        </div>
            <Link href={link.to}>
              {link.name}
            </Link>
          </li>
        ))}
      

        </ul>
    </div>
  );
}


export default NavBar
