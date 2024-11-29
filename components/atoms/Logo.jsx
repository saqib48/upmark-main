import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Logo = ({ src, alt }) => {
  return (
    <div className="flex justify-center">
      {LogoData.map((item) => {
        return (
          <Link className='block' key={item.href} href='/'>
            <Image
              width={200}
              height={150}
              src={item.src}
              alt={item.alt}
              className="w-[150px] md:w-[200px] lg:w-[250px] h-auto"
            />
          </Link>
        )
      })}
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};

const LogoData = [
  {
    href: '#',
    src: '/assits/images/logo.png',
    alt: 'logo'
  }
]

export default Logo;
