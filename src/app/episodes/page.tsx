"use client";

import { episodes } from "./episodes";
import Image from "next/image";
import styled from "styled-components";

const DivStyles = styled.div`
  background-color: #edeb6d;
  padding: 1em;
  margin: 1em 0 1em 0;
`;

const ImageTextStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

export default function EpisodesPage() {
  return (
    <>
      <h1>Episodes Page</h1>
      {episodes.map((episode, index) => {
        return (
          <DivStyles key={index}>
            <a href={episode.episodeUrl}>
              <h2>{episode.title}</h2>
            </a>

            <ImageTextStyles>
              <a href={episode.episodeUrl}>
                <Image
                  src={episode.imgUrl}
                  alt={episode.title}
                  width={300}
                  height={500}
                />
              </a>
              <p>{episode.description}</p>
            </ImageTextStyles>
          </DivStyles>
        );
      })}
    </>
  );
}
