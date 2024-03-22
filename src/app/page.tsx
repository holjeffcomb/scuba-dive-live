"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import styled from "styled-components";

const ImageStyles = styled.img`
  float: left;
  border: solid 5px white;
  margin-right: 20px;
  width: 300px;
`;

export default function Home() {
  return (
    <>
      <h1 className={styles.pageTitle}>Home Page</h1>
      <ImageStyles
        src="/images/mountain-top.jpeg"
        alt="Jonny and SJ on a mountain in Mexico"
      />
      <h2>Who are we?</h2>
      <p>
        Welcome to Scuba Dive Live, the underwater extravaganza hosted by
        Cozumel’s own aquatic aficionados, Johnny and SJ! Plunge into the
        vibrant world beneath the waves without getting your toes wet. From the
        comfort of your couch, dive deep with us into the crystal-clear waters
        of Cozumel, a place where the fish are plentiful, and the sea turtles
        photobomb your live feed. Our channel is more than just a live video
        feed; it&apos;s an underwater odyssey, narrated by two people who might
        love the ocean just slightly more than they love each other.
      </p>

      <p>
        Dive in as Johnny narrates a suspenseful encounter with a moray eel
        that’s less scary and more like a grumpy neighbor who’s misunderstood.
        Meanwhile, SJ will guide you through the coral reefs, which she swears
        are just underwater cities bustling with fishy residents, each with
        their own fish-scale dramas and shark-tale romances. Together, they
        bring the wonders of the deep right to your screen, with commentary
        that’s as colorful as the reefs they explore. You’ll laugh, you’ll gasp,
        and you might even learn a thing or two about the delicate ecosystem
        that thrives beneath the waves.
      </p>

      <p>
        Scuba Dive Live isn’t just about showcasing the ocean’s beauty; it’s
        about sharing laughs and gasps over the unexpected moments that only
        live feeds can capture. Like that time a curious octopus decided to
        investigate the camera, giving viewers an up-close-and-personal look at
        its tentacles, or when Johnny and SJ embarked on a ‘treasure hunt’ that
        ended up uncovering nothing but a sandy old boot. But hey, one fish’s
        trash is another fish’s treasure, right? Join us for unforgettable
        underwater adventures, where the wildlife is wild and the hosts are...
        well, let’s just say we’re one with the fish. Dive into Scuba Dive Live,
        where every stream is an adventure and every fish has a story.
      </p>
    </>
  );
}
