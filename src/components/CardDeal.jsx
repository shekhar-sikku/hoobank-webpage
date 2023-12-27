import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better card deal
                    <br className='sm:block hidden' />
                    in few easy steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
                    What are the 4 types of credit cards? The types of credit cards are categorized
                    as per their used cases. Four types of credit cards include travel credit cards,
                    business credit cards, reward credit cards, and shopping credit cards
                </p>
                <Button styles='mt-10' />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card-details" className='w-[100%] h-[100%] ' />
            </div>
        </section >
    )
}

export default CardDeal;