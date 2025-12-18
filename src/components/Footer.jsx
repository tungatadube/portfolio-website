const Footer = () => {
  return (
    <footer className="bg-dark-darker dark:bg-dark-darker border-t border-gray-dark/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-light/70">
          &copy; {new Date().getFullYear()} Mduduzi Frederick Dube. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
