import { NextPage } from 'next';

// TODO: make 404 cuter, with image/gif
const Custom404: NextPage = () => {
  return (
    <div>
      <h1>404 - page not found</h1>
      <p>Oops! the page you are looking for does not exist.</p>
    </div>
  );
};

export default Custom404;
