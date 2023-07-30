import { aboutus } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== aboutus.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="aboutus" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About us
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      IGORAZA is a technology startup driven by passionate engineers dedicated to creating exceptional solutions for clients using the latest software and techniques. We value innovation, dedication, and perfection, and are committed to delivering incredible results for our partners
      </p>

      <a href="#consultancy" >
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none mt-10`}>
    Get Started
  </button>
  </a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {aboutus.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
