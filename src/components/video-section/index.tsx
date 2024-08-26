import { tw } from 'twind';

const VideoSection = () => (
  <section className={tw(`bg-transparent`)} id="scholars">
    <div className={tw(`max-w-7xl mx-auto px-4 py-16`)}>
      <div className={tw(`flex flex-col items-center justify-center`)}>
        <div className={tw(`bg-transparent relative rounded-lg overflow-hidden`)}>
          <img src="/scholar.svg" alt="Scholar" className={tw(`w-full h-auto object-cover`)} />
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
