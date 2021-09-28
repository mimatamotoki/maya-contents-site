import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Youtube from "react-youtube";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";
import ContentArea from "components/atoms/ContentArea";

interface Movie {
  id: number;
  video: string;
}

interface Options {
  width: string;
  height: string;
}

const movies: Movie[] = [
  {
    id: 1,
    video: "LZ-IuDos9Kk",
  },
  {
    id: 2,
    video: "-eMKayQqkK0",
  },
];

const MovieContent = () => {
  const router = useRouter();
  const [movie, setMovie] = useState<Movie>();
  const id = Number(router.query.id);
  const movieContainerRef = useRef<HTMLDivElement>(null);
  const [opts, setOpts] = useState<Options>();

  useEffect(() => {
    const width = movieContainerRef.current.getBoundingClientRect().width - 32;
    const height = `${(width / 16) * 9}`;
    setOpts({
      width: `${width}`,
      height: `${height}`,
    });
  }, []);

  useEffect(() => {
    setMovie(movies.find((movie) => movie.id === id));
  }, [id]);

  return (
    <MainLayoutTemplate page="解説動画" description="解説動画ページです。">
      <div className="p-4 w-full xl:w-2/3" ref={movieContainerRef}>
        {movie ? (
          <Youtube className="mt-6" videoId={movie.video} opts={opts} />
        ) : null}
      </div>
    </MainLayoutTemplate>
  );
};

export default MovieContent;
