import type { NextPage } from 'next';
import common from 'common';

const HomePage: NextPage = () => {
  console.log(common);
  return (
    <>
      <h1>Home page</h1>
    </>
  );
};

export default HomePage;
