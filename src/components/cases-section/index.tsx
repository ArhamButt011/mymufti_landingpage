import { tw } from 'twind';
import Particles from 'react-tsparticles';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.`,
    image: `/images/pic1.svg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
    image: `/images/pic2.svg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
    image: `/images/pic3.svg`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section id="question">
    <div className={tw(`w-full min-h-screen bg-teal-50 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-30`)}>
        <h1 className={tw(`text-dark text-3xl lg:text-6xl font-bold text-center`)}>
          Recently Posted
          <span style={{ color: '#38b89a' }}>Questions</span>
        </h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Connect with experts, ask questions, and expand your knowedge effortlessly. Engage with the community, share
          opinions, and track the expiration of discussions effortlessly.
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-16 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`,
                )}
              >
                <div className={tw(`h-96 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded-lg`)}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
