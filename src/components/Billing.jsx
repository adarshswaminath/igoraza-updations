import { apple, bill, google } from "../assets";
import website from "../assets/visitsie.png"
import styles, { layout } from "../style";

const Billing = () => (
  <div id="consultancy">
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          IGORAZA Consultancy
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We help businesses propel into the digital service economy with our innovative solutions and advisory services.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="https://igoraza.com" target="_blank"><img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" /></a>
          <a href="https://igoraza.com" target="_blank" ><img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /></a>

        </div>
      </div>

    </section>
    <section className={`${styles.flexCenter} flex-col relative `}>
  <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  <div className="flex flex-wrap justify-center text-center">
    <div className="flex flex-wrap sm:w-full md:w-1/2">
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">App Development</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">We are always pushing the boundaries of what is possible and are committed to developing innovative products and services that are designed to meet the needs of our clients and customers</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">Website Design & Development</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">We understand that every client and customer has unique needs, which is why we offer flexible solutions that can be customized to meet their specific requirements</p>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap sm:w-full md:w-1/2">
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">Blockchain Development</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">We are committed to putting our customers first. We work closely with our clients to understand their needs and provide them with the support and resources they need to succeed</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-1/2 md:w-full p-4 feedback-card rounded-lg">
        <div className=" rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white text-left">Website Reconstruct</h2>
          <p className="text-gray-600 font-normal text-[18px] leading-[32.4px] my-10 text-left">Our team of experts carefully design and develop our products or services using best practices and technologies. Rigorous testing procedures ensure early defect identification and maintenance of high quality.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* <section className={`${styles.flexCenter} flex-col relative h-screen`}>
  <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  <div className="flex flex-wrap justify-center items-center h-full">
    <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
      <div className=" rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">App Development</h2>
        <p className="text-gray-600">We are always pushing the boundaries of what is possible and are committed to developing innovative products and services that are designed to meet the needs of our clients and customers</p>
      </div>
    </div>
    <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
      <div className=" rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Website Design & Development</h2>
        <p className="text-gray-600">We understand that every client and customer has unique needs, which is why we offer flexible solutions that can be customized to meet their specific requirements</p>
      </div>
    </div>
    <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
      <div className=" rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Blockchain Development</h2>
        <p className="text-gray-600">We are committed to putting our customers first. We work closely with our clients to understand their needs and provide them with the support and resources they need to succeed</p>
      </div>
    </div>
    <div className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 p-4">
      <div className=" rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Website Reconstruct</h2>
        <p className="text-gray-600">Our team of experts carefully design and develop our products or services using best practices and technologies. Rigorous testing procedures ensure early defect identification and maintenance of high quality.</p>
      </div>
    </div>
  </div>
</section> */}

  </div>
);

export default Billing;
