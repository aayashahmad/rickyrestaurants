import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Private Events Catering | Ricky's Restaurant",
    description:
        "Private events catering services in Dubai by Ricky's Restaurant. Transform your venue into a stunning experience.",
};

const services = [
    { label: "WEDDING CATERING", href: "/catering/wedding", image: "/images/wedding-catering.png" },
    { label: "SPECIAL OCCASION", href: "/catering/special", image: "/images/special-occasion.png" },
    { label: "BIRTHDAY PARTY CATERING", href: "/catering/birthday", image: "/images/birthday-catering.png" },
    { label: "KIDS PARTY CATERING", href: "/catering/kids", image: "/images/kids-catering.png" },
    { label: "HOME EVENT", href: "/catering/get-together", image: "/images/home-event.png" },
    { label: "YACHT PARTY CATERING", href: "/catering/yacht", image: "/images/yacht-catering.png" },
];

const galleryImages = [
    { src: "/images/gallery/gallery-1.png", alt: "Gourmet fruit platter" },
    { src: "/images/gallery/gallery-7.png", alt: "Wine glass in restaurant" },
    { src: "/images/gallery/gallery-3.png", alt: "Fresh salad bowl" },
    { src: "/images/gallery/gallery-4.png", alt: "Grilled kebab skewers" },
    { src: "/images/gallery/gallery-5.png", alt: "Fluffy pancakes" },
    { src: "/images/gallery/gallery-6.png", alt: "Grilled salmon plate" },
    { src: "/images/gallery/gallery-7.png", alt: "Coffee and pastry" },
    { src: "/images/gallery/gallery-8.png", alt: "Premium steak dinner" },
];

export default function PrivateCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Private Events Catering</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>
                        Organizing Private Catering In Dubai
                    </h2>

                    <p className={styles.text}>
                        Ricky&apos;s Restaurant is renowned as the most reliable private
                        events catering service provider in the UAE. Let us amaze you with
                        our private events catering! Our services are designed to transform
                        your venue into a stunning experience for you and your guests.
                    </p>

                    <p className={styles.text}>
                        With outstanding food, creative presentation, and excellent service,
                        our team offers a prestigious private event catering experience. Sit
                        back, relax, and plan your guest list — we&apos;ll handle the rest.
                        When planning an event, details matter. Food that inspires, décor
                        that sets the mood, and service that is friendly yet unobtrusive are
                        the key elements that make an event memorable and distinguish our
                        reliable private catering services from others.
                    </p>

                    <p className={styles.text}>
                        Ricky&apos;s Restaurant provides unforgettable private event
                        catering that will astonish and delight your guests. From concept to
                        menu design to execution, our team manages everything so you can
                        focus on enjoying and hosting.
                    </p>

                    <p className={styles.text}>
                        Whether you need private catering services for an intimate gathering
                        or a large event, Ricky&apos;s Restaurant and our team will make
                        your occasion memorable. Creating the ultimate culinary experience
                        with unique presentation is at the heart of our business. Our
                        passionate team is committed to providing outstanding customer
                        service and delivering unmatched culinary experiences. We strive to
                        exceed our clients&apos; expectations and create lasting memories at
                        Ricky&apos;s Restaurant.
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
                                    width={340}
                                    height={220}
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
                            alt="Professional Catering Services in Dubai"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Professional Catering Services in Dubai
                        </h3>
                        <p className={styles.featureText}>
                            When it comes to private events catering, our experience,
                            teamwork, and dedication set us apart. Ricky&apos;s Restaurant has
                            been at the forefront of professional catering services in Dubai
                            and across the Emirates, including Sharjah and Ajman. We continue
                            to offer not only the most reliable but also the finest catering
                            services.
                        </p>
                        <p className={styles.featureText}>
                            Our contemporary, full-service catering company is dedicated to
                            providing an exceptional dining experience. You can trust that our
                            menus will be personalized to your specific needs, ensuring
                            excellent food and service every time.
                        </p>
                        <p className={styles.featureText}>
                            At Ricky&apos;s Restaurant, we offer the finest beverages,
                            professional staff, tantalizing food, and top-notch décor
                            arrangements.
                        </p>

                        <h4 className={styles.processTitle}>
                            Private Events Catering | Ricky&apos;s Restaurant
                        </h4>
                        <p className={styles.featureText}>Our process includes:</p>

                        <ul className={styles.processList}>
                            <li className={styles.processItem}>
                                <span className={styles.bulletDot} />
                                <strong>Planning</strong>
                            </li>
                            <li className={styles.processItem}>
                                <span className={styles.bulletDot} />
                                <strong>Managing</strong>
                            </li>
                            <li className={styles.processItem}>
                                <span className={styles.bulletDot} />
                                <strong>Delegating</strong>
                            </li>
                            <li className={styles.processItem}>
                                <span className={styles.bulletDot} />
                                <strong>Executing</strong>
                            </li>
                        </ul>

                        <p className={styles.featureText}>
                            We ensure there are no bottlenecks on your special occasion.
                            Ricky&apos;s Restaurant leaves no stone unturned in making your
                            event noteworthy.
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
                    <span className={styles.ctaLabel}>Your Event, Our Passion</span>
                    <h2 className={styles.ctaTitle}>Book Your Private Event</h2>
                    <p className={styles.ctaText}>
                        Let Ricky&apos;s Restaurant transform your private event into an
                        unforgettable culinary experience.
                    </p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Book Event
                        <span className={styles.ctaBtnIcon}>→</span>
                    </Link>
                </div>
            </section>

            {/* Food Gallery */}
            <section className={styles.gallery}>
                <div className={styles.galleryGrid}>
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className={styles.galleryItem}
                        >
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
