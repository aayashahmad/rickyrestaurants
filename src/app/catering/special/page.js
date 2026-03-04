import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Special Occasion Catering | Ricky's Restaurant",
    description:
        "Special occasion catering services in Dubai by Ricky's Restaurant. Premium catering for your most memorable events.",
};

export default function SpecialCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Special Occasion Catering</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Special Occasion Catering</h2>

                    <p className={styles.text}>
                        We know you have been looking for a committed special occasion
                        catering company for your special day. Having special event catering
                        professionals is like a cherry on top, ensuring your big day is
                        adorned with delicious food. One of the leading providers of such
                        exceptional service is Ricky&apos;s Restaurant Catering.
                    </p>

                    <p className={styles.text}>
                        Ricky&apos;s Restaurant aims to make the process of hiring a special
                        occasion catering company accessible and hassle-free for everyone in
                        Dubai and across the UAE.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/special-occasion.png"
                            alt="Special Occasion Catering Services in Dubai"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Special Occasion Catering Services in Dubai
                        </h3>
                        <p className={styles.featureText}>
                            Ricky&apos;s Restaurant Catering is a high-end, Dubai-based
                            special occasion catering company that combines elegance and
                            quality for the ultimate guest experience. We offer culinary
                            services of the highest caliber to bring your ideas to life.
                        </p>
                        <p className={styles.featureText}>
                            Providing clients with delectable menus to suit every taste is the
                            hallmark of our catering services. Using the finest ingredients,
                            our chefs craft exquisite flavor combinations for you.
                        </p>
                        <p className={styles.featureText}>
                            <strong>Special Event Catering:</strong> Special occasion catering
                            is an indispensable part of your event, as it is directly
                            associated with the food. Often, guests may forget other details
                            of the event but will always remember the food. Ricky&apos;s
                            Restaurant ensures every special event becomes memorable with its
                            delectable menu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Content */}
            <section className={styles.additional}>
                <div className={styles.additionalContainer}>
                    <h4 className={styles.benefitHeading}>
                        We Make Your Event Special
                    </h4>
                    <p className={styles.additionalText}>
                        While organizing an event may seem effortless, it is a tedious job
                        that requires days of planning, organizing, shopping, managing, and
                        executing. When it comes to handling the most important element of
                        the event – the food – Ricky&apos;s Restaurant takes charge.
                    </p>
                    <p className={styles.additionalText}>
                        With a variety of menus and diverse dishes, Ricky&apos;s Restaurant
                        leaves no stone unturned in making your special event even more
                        extraordinary. So why wait? Give us a call and let us elevate your
                        event!
                    </p>

                    <h4 className={styles.benefitHeading}>
                        Explore Our Culinary Offerings
                    </h4>
                    <p className={styles.additionalText}>
                        Our clients often rave about our exceptional food and flawless
                        catering execution, making Ricky&apos;s Restaurant a standout in
                        special occasion catering. We pride ourselves on using top-quality
                        ingredients and innovative cooking techniques to create menus that
                        delight every palate.
                    </p>
                    <p className={styles.additionalText}>
                        As one of the leading special occasion catering providers,
                        Ricky&apos;s Restaurant offers a seamless and distinctive culinary
                        experience. Here&apos;s a glimpse of the diverse cuisines we
                        provide:
                    </p>

                    <ul className={styles.cuisineList}>
                        <li className={styles.cuisineItem}>
                            <span className={styles.bulletDot} />
                            Asian
                        </li>
                        <li className={styles.cuisineItem}>
                            <span className={styles.bulletDot} />
                            Middle Eastern/Arabic
                        </li>
                        <li className={styles.cuisineItem}>
                            <span className={styles.bulletDot} />
                            International
                        </li>
                        <li className={styles.cuisineItem}>
                            <span className={styles.bulletDot} />
                            Mediterranean
                        </li>
                        <li className={styles.cuisineItem}>
                            <span className={styles.bulletDot} />
                            Continental
                        </li>
                    </ul>

                    <p className={styles.additionalText}>
                        Discover the finest special event catering the UAE has to offer.
                        Contact us today to design a customized menu tailored to your
                        preferences.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.ctaOverlay} />
                <div className={styles.ctaParticles}>
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                </div>
                <div className={styles.ctaContainer}>
                    <span className={styles.ctaLabel}>Create Memories</span>
                    <h2 className={styles.ctaTitle}>
                        Elevate Your Special Occasion
                    </h2>
                    <p className={styles.ctaText}>
                        Let Ricky&apos;s Restaurant craft the perfect culinary experience
                        for your most cherished moments.
                    </p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Contact Us
                        <span className={styles.ctaBtnIcon}>→</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
