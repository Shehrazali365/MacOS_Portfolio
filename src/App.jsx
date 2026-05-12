import React from 'react'
import {Draggable} from "gsap/Draggable"
import gsap from 'gsap';

import { Navbar, Welcome, Dock } from '#components/index'
import { Contact, Finder, Image, Resume, Safari, Terminal, Text } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />


      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App