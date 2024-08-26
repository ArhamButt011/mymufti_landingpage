import { tw } from 'twind';

const listItems = [
  {
    title: `Can you explain the concept of Zakat in Islam?`,
    description: `Zakat is a mandatory charitable contribution in Islam, typically calculated as a percentage of one's wealth and assets, and distributed to those in need, such as the poor, needy, and those in debt.`,
  },
  {
    title: `What is the significance of Hajj in the Islamic Faith?`,
    description: `Hajj is a pilgrimage to Mecca, obligatory for Muslims once in a lifetime if physically and financially able. It symbolizes unity, equality, and spiritual cleansing, fostering a deep connection to Allah and reinforcing the sense of Muslim brotherhood.`,
  },
  {
    title: `Explain the role of prayer (Salah) and Fasting in Islam?`,
    description: `Salah (prayer) is a daily spiritual practice, strengthening the bond between Muslims and Allah, fostering discipline, mindfulness, and spiritual connection. Fasting during Ramadan is an act of devotion, self-discipline, and purification, promoting empathy, gratitude, and spiritual growth among Muslims worldwide.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)} id="faqs">
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-6xl font-bold tracking-tight text-gray-900`)}>
          Frequently Asked <span style={{ color: '#38b89a' }}>Questions</span>
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-teal-50 text-teal-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <img src="./images/fqa.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
