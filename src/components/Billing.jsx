import styles, { layout } from "../style"
import { apple, bill, google } from "../assets"

const Billing = () => {
    return (
        <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
                <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
                    Payment is the transfer of money, goods, or services in exchange for goods and services in acceptable proportions that have been previously agreed upon by all parties involved. A payment can be made in the form of services exchanged, cash, check, wire transfer, credit card, debit card, or cryptocurrencies.2
                </p>
                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img src={apple} alt='apple-store' className='w-[140px] h-[50px] object-contain mr-5 cursor-pointer' />
                    <img src={google} alt='play-store' className='w-[140px] h-[50px] object-contain cursor-pointer' />
                </div>
            </div>
        </section>
    )
}

export default Billing;