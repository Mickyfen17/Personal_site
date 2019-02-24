import React from 'react';
import AnchorLink from '../AnchorLink';

const WhoAmI = () => {
  return (
    <article className="who-am-i-section">
      <h2>Who Am I</h2>
      <p>
        My name is Mike Fenwick and I am a front end developer based in Denver.
        I am originally from Newcastle Upon Tyne in the North East of England
        but recently moved to the US. I love creating elegant, functional and
        easy to use web applications and believe in the power of the web to help
        elevate brands and generate efficiences for businesses. Having worked
        on-site with customers, then in sales and now as a front end dev, I am
        able to understand the unique needs and perspectives of clients,
        designers and developers.
      </p>
      <p>
        At work, I’m driven and dedicated. I constantly seek out new challenges
        and enjoy solving problems, debugging code and collaborating with others
        to deliver outstanding work product. Outside of work, I enjoy mountain
        biking, running and hiking. I also enjoy traveling to new destinations
        and spending as much time as possible with friends and family.
        <br />
        <br />
        Read more about me via my
        <AnchorLink href="https://www.linkedin.com/in/michael-j-fenwick/">
          &nbsp;LinkedIn&nbsp;
        </AnchorLink>
        or contact me directly
        <AnchorLink href="mailto:mikefen14@gmail.com" type="email">
          &nbsp;here
        </AnchorLink>.
      </p>
    </article>
  );
};

export default WhoAmI;
