import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Kids Party Catering Services | Ricky's Restaurant",
    description:
        "Kids party catering services in Dubai by Ricky's Restaurant. Fun, colorful, and delicious catering for children's parties.",
};

export default function KidsCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Kids Catering Services</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Kids Party Catering In Dubai</h2>

                    <p className={styles.text}>
                        Finding a kids party catering company can be overwhelming, with a
                        lengthy checklist and selective food choices to consider. When
                        selecting the team to support you for such an event, you need kids
                        party food catering partners who can offer complete catering
                        solutions.
                    </p>

                    <p className={styles.text}>
                        The good news is, your search for a reliable kids party catering
                        partner ends here with Ricky&apos;s Restaurant. We specialize in
                        providing custom-built solutions for each party. Additionally, we
                        offer a special kids menu that will add more excitement to your
                        child&apos;s special day.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/kids-catering.png"
                            alt="Expert Children's Party Food Catering Services"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Expert Children&apos;s Party Food Catering Services
                        </h3>
                        <p className={styles.featureText}>
                            Ricky&apos;s Restaurant, with its nationwide offerings, has
                            successfully executed numerous projects, providing us with the
                            expertise to discern between kids party catering and standard
                            catering services. Children are among our most challenging yet
                            cherished clients. Ricky&apos;s Restaurant has consistently
                            supported various kids party food catering events, understanding
                            the unique needs and potential concerns associated with
                            children-centric gatherings.
                        </p>
                        <p className={styles.featureText}>
                            Moreover, Ricky&apos;s Restaurant has established a reputation as
                            a premier provider of children&apos;s party catering services.
                            Since our inception, we have effectively managed a diverse array
                            of parties and events specifically tailored for children.
                        </p>

                        <h4 className={styles.benefitHeading}>
                            Elevate Your Child&apos;s Party Experience!
                        </h4>
                        <p className={styles.featureText}>
                            At Ricky&apos;s Restaurant, we specialize in making every kids
                            party unique and unforgettable. Our kids party catering service is
                            tailored to accommodate various menu sizes, cultural preferences,
                            party themes, and guest numbers. Each event presents its own set
                            of challenges, and Ricky&apos;s Restaurant rises to meet them all.
                        </p>
                        <p className={styles.featureText}>
                            By efficiently addressing any potential bottlenecks, we ensure
                            that every party is not just enjoyable but truly amazing. Our
                            approach goes beyond simply providing delicious food and ensuring
                            a joyful atmosphere; we also prioritize eliminating any possible
                            mishaps to guarantee a seamless experience for both hosts and
                            guests.
                        </p>
                    </div>
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
                    <span className={styles.ctaLabel}>Fun for Everyone</span>
                    <h2 className={styles.ctaTitle}>
                        Make Your Child&apos;s Day Magical
                    </h2>
                    <p className={styles.ctaText}>
                        Let Ricky&apos;s Restaurant handle the food, décor, and fun — so
                        you can enjoy every moment of your child&apos;s special celebration.
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
