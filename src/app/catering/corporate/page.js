import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Corporate Events Catering | Ricky's Restaurant",
    description:
        "Corporate events catering services in Dubai by Ricky's Restaurant. Premium corporate catering for staff parties, conferences and seminars.",
};

const services = [
    { label: "STAFF PARTIES", href: "/catering/staff", image: "/images/staff-catering.png" },
    { label: "CONFERENCES & SEMINARS", href: "/catering/business", image: "/images/business-catering.png" },
];

const galleryImages = [
    { src: "/images/gallery/gallery-1.png", alt: "Gourmet fruit platter" },
    { src: "/images/gallery/gallery-2.png", alt: "Wine glass in restaurant" },
    { src: "/images/gallery/gallery-3.png", alt: "Fresh salad bowl" },
    { src: "/images/gallery/gallery-4.png", alt: "Grilled kebab skewers" },
    { src: "/images/gallery/gallery-5.png", alt: "Fluffy pancakes" },
    { src: "/images/gallery/gallery-6.png", alt: "Grilled salmon plate" },
    { src: "/images/gallery/gallery-7.png", alt: "Coffee and pastry" },
    { src: "/images/get-together.png", alt: "Social gathering with food" },
];

export default function CorporateCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Corporate Events Catering</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>
                        Organizing Corporate Catering In Dubai
                    </h2>

                    <p className={styles.text}>
                        Ricky&apos;s Restaurant Catering is renowned as one of the
                        premier corporate catering services providers in Dubai. With
                        a wealth of experience serving clients ranging from
                        multinational corporations to small and medium enterprises,
                        we offer unparalleled professionalism.
                    </p>

                    <p className={styles.text}>
                        Our corporate catering services are distinguished by our
                        extensive menu options, expert staff, and top-of-the-line
                        equipment capable of accommodating any request. Whether
                        it&apos;s simple sandwich platters, hot staff lunches, or
                        exquisite 5-star dining in UAE boardrooms, we deliver with
                        excellence. Our highly trained and experienced teams of
                        corporate event caterers, strategically positioned across the
                        region, are equipped to swiftly respond to any catering
                        service demand, regardless of scale. Custom catering menus
                        are tailored to meet the needs of camp or compound
                        populations as required.
                    </p>

                    <p className={styles.text}>
                        Ricky&apos;s Restaurant Catering&apos;s stellar reputation
                        for delivering quality food and professional corporate
                        catering services reflects our unwavering commitment to
                        maintaining exceptional client relationships.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.servicesSection}>
                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <Link
                            key={service.label}
                            href={service.href}
                            className={styles.serviceCard}
                        >
                            <div className={styles.serviceImageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.label}
                                    width={500}
                                    height={300}
                                    className={styles.serviceImage}
                                />
                                <div className={styles.serviceOverlay} />
                            </div>
                            <span className={styles.serviceLabel}>{service.label}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/private-catering.png"
                            alt="Corporate Catering Services in Dubai"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Corporate Catering Services in Dubai
                        </h3>

                        <h4 className={styles.benefitHeading}>
                            Why Choose Ricky&apos;s Restaurant Catering?
                        </h4>
                        <p className={styles.featureText}>
                            When selecting corporate catering services, it&apos;s
                            natural to be discerning. Ricky&apos;s Restaurant
                            Catering stands out as one of the most trusted and
                            reliable providers in Dubai. Here&apos;s why:
                        </p>

                        <h4 className={styles.benefitHeading}>We Are Reliable</h4>
                        <p className={styles.featureText}>
                            With extensive experience in corporate catering and
                            logistics, we ensure your peace of mind. As your
                            consultants, we handle all the details and execution,
                            guaranteeing the success of your corporate event. You can
                            rely on our professional team to deliver flawlessly.
                        </p>

                        <h4 className={styles.benefitHeading}>
                            Delectable, Quality-Controlled Food
                        </h4>
                        <p className={styles.featureText}>
                            Our menu features proven favorites like canapés, live
                            stations, and snack boxes. You can customize the
                            preparation to suit your event, ensuring a delightful
                            culinary experience for your guests.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Content */}
            <section className={styles.additional}>
                <div className={styles.additionalContainer}>
                    <h4 className={styles.benefitHeading}>
                        Versatile Corporate Catering Services
                    </h4>
                    <p className={styles.additionalText}>
                        Ricky&apos;s Restaurant Catering offers a range of services
                        from simple pick-ups to fully staffed events. Whether
                        you&apos;re serving 25 or 500 people, we have the experience
                        to handle it efficiently, making our services among the most
                        effective in Dubai.
                    </p>

                    <h4 className={styles.benefitHeading}>Productivity</h4>
                    <p className={styles.additionalText}>
                        We provide delicious food and exceptional corporate catering
                        services tailored to your budget. Our combination of
                        experience, creativity, and flexibility ensures that we meet
                        and exceed our clients&apos; expectations for corporate event
                        catering.
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
                    <span className={styles.ctaLabel}>Corporate Excellence</span>
                    <h2 className={styles.ctaTitle}>
                        Elevate Your Corporate Events
                    </h2>
                    <p className={styles.ctaText}>
                        Trust Ricky&apos;s Restaurant to deliver world-class
                        corporate catering that impresses your clients and
                        empowers your team.
                    </p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Contact Us
                        <span className={styles.ctaBtnIcon}>→</span>
                    </Link>
                </div>
            </section>

            {/* Food Gallery */}
            <section className={styles.gallery}>
                <div className={styles.galleryGrid}>
                    {galleryImages.map((img, i) => (
                        <div key={i} className={styles.galleryItem}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={400}
                                height={300}
                                className={styles.galleryImage}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
