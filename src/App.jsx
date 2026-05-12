import React from 'react'
import {Draggable} from "gsap/Draggable"
import gsap from 'gsap';

import { Navbar, Welcome, Dock, Home } from '#components/index'
import { Contact, Finder, Image, Photos, Resume, Safari, Terminal, Text } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />


      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />

    </main>
  );
};

export default App