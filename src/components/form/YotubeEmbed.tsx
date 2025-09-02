export const YoutubeEmbed = ({
  embedId,
  className,
}: {
  embedId: string;
  className?: string;
}) => (
  <div className="video-responsive">
    <iframe
      width="600"
      height="400"
      className={className}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
