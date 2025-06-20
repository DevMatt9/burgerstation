const VideoSection = () => {
  return (
    <section className="video-section">
      <video className="w-100" autoPlay muted loop playsInline>
        <source src="/assets/video.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge les vidéos.
      </video>
    </section>
  );
};

export default VideoSection;
