import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About, WavesBackground } from '../components/Intro';
import { Work, Projects } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <div className="header-gradient">
        <Intro
          title={intro.title}
          description={intro.description}
          subdescription={intro.subdescription}
          image={intro.image}
          buttons={intro.buttons}
        />
        <WavesBackground />
      </div>

      <About
        title={about.title}
        description={about.description}
        buttons={about.buttons}
        skills={about.skills}
      />
      <Work
        title={work.title}
        experience={work.experience}
      />
      <Projects
        title={projects.title}
        cards={projects.cards}
      />
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
