import styles from "../style";
import Button from "./Button";

const LeadBox = () => (
  <section id="sparkslabs" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-[#ff2268]">SparkLabs </h2>
      <p className={`${styles.paragraph} mt-5 `}>
      Welcome to IGORAZA! Join our team and grow your career with SparkLabs! We offer exciting opportunities in a dynamic and fast-paced environment. You'll work with talented professionals and make a meaningful impact on our company's success. We provide Alluring salary, benefits, and career development programs. Apply today and take the first step towards a rewarding career!<br />
        <div className="text-center">
        <a target="_blank" href="https://probable-measure-5af.notion.site/SparkLabs-e8d74efdb3b245898be22323f424b6d2 ">
          <button type="button"  className={`py-4 mt-3 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            Apply Now
          </button>
        </a>
        </div>
      </p>
    </div>

    {/* <div className={`${styles.flexCenter}grid  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <a href="https://wa.me/+917736886026?text=Hey+igoraza">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Contact Now
  </button>
  </a>
    </div> */}
  </section>
);

export default LeadBox;
