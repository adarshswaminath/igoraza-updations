import { feedback } from "../constants";
import styles from "../style";
// import FeedbackCard from "./FeedbackCard";
import { quotes } from "../assets";
import { GiBattleMech } from "react-icons/gi"

const Testimonials = () => (
  <section id="features" className={`${styles.flexCenter} flex-col relative `}>
  <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

  <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] text-center">
    <h2 className={styles.heading2}>
      Features
    </h2>
  </div>
  <div className="flex flex-wrap justify-center text-center">
    <div className="flex flex-wrap sm:w-full md:w-1/2">
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">Innovation</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">We are always pushing the boundaries of what is possible and are committed to developing innovative products and services that are designed to meet the needs of our clients and customers</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">Flexibility</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">We understand that every client and customer has unique needs, which is why we offer flexible solutions that can be customized to meet their specific requirements</p>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap sm:w-full md:w-1/2">
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">Customer Focus</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">We are committed to putting our customers first. We work closely with our clients to understand their needs and provide them with the support and resources they need to succeed</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">Quality</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">Our team of experts carefully design and develop our products or services using best practices and technologies. Rigorous testing procedures ensure early defect identification and maintenance of high quality.</p>
        </div>
      </div>
    </div>
  </div>
</section>

);

export default Testimonials;
