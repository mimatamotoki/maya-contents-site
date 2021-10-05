import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Youtube from "react-youtube";
import MainLayoutTemplate from "components/templates/MainLayoutTemplate";

interface Options {
  width: string;
  height: string;
}

const MovieContent = () => {
  const router = useRouter();
  const id = router.query.id;
  const movieContainerRef = useRef<HTMLDivElement>(null);
  const [opts, setOpts] = useState<Options>();
  const [paddings, setPaddings] = useState<number>(32);

  useEffect(() => {
    const currentPadding = +movieContainerRef.current.style.paddingLeft;
    if (paddings === currentPadding) return;
    setPaddings(currentPadding * 2);
    const width =
      movieContainerRef.current.getBoundingClientRect().width - paddings;
    const height = `${(width / 16) * 9}`;
    setOpts({
      width: `${width}`,
      height: `${height}`,
    });
  }, [opts]);

  return (
    <MainLayoutTemplate page="解説動画" description="解説動画ページです。">
      <div className="px-4 xl:px-12 w-full xl:w-2/3" ref={movieContainerRef}>
        {typeof id === "string" && opts ? (
          <Youtube className="mt-6" videoId={id} opts={opts} />
        ) : null}
      </div>
    </MainLayoutTemplate>
  );
};

export default MovieContent;
