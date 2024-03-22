interface Episode {
  title: string;
  description: string;
  date: Date;
  imgUrl: string;
  tags: string[];
  episodeUrl: string;
}

export const episodes: Episode[] = [
  {
    title: "First Ever Livestream!",
    description:
      "Scuba Dive Live is officially on the air! Come join us for our maiden voyage!",
    date: new Date(2024, 2, 18), // March 18, 2024
    imgUrl: "/images/episode1.png",
    tags: ["octopus", "splendid-toadfish"],
    episodeUrl:
      "https://www.tiktok.com/@scubadivelive/video/7347837395485674794?embed_source=71929435%2C121374463%2C121404359%2C121351166%2C121331973%2C120811592%2C120810756%3Bnull%3Bembed_masking&refer=embed&referer_url=localhost%3A3000%2F&referer_video_id=7347837395485674794",
  },
  {
    title: "Blackwater Diving",
    description:
      "Have you ever wondered what its like to be in the ocean in the pitch blackness of the night? Come see the amazing world of Cozumel Blackwater Diving!",
    date: new Date(2024, 2, 20),
    imgUrl: "/images/episode2.png",
    tags: ["blackwater", "salp"],
    episodeUrl:
      "https://www.tiktok.com/@scubadivelive/video/7341453879948758314?embed_source=71929435%2C121374463%2C121404359%2C121351166%2C121331973%2C120811592%2C120810756%3Bnull%3Bembed_masking&refer=embed&referer_url=localhost%3A3000%2F&referer_video_id=7347837395485674794",
  },
];
