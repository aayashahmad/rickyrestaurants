"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CateringSection.module.css";

const cateringServices = [
    {
        title: "WEDDING CATERING",
        image: "/images/catering-wedding.png",
        href: "/catering/wedding",
    },
    {
        title: "SPECIAL OCCASION",
        image: "/images/catering-special.png",
        href: "/catering/special",
    },
    {
        title: "BIRTHDAY PARTY CATERING",
        image: "/images/catering-birthday.png",
        href: "/catering/birthday",
    },
    {
        title: "YACHT PARTY CATERING",
        image: "/images/catering-yacht.png",
        href: "/catering/yacht",
    },
    {
        title: "KIDS PARTY CATERING",
        image: "/images/catering-kids.png",
        href: "/catering/kids",
    },
    {
        title: "GET TOGETHER",
        image: "/images/catering-corporate.png",
        href: "/catering/get-together",
    },
];

export default function CateringSection() {
    return (
        <section className={styles.catering} id="catering">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>
                        Organising Private & Corporate Parties
                    </h2>
                    <p className={styles.description}>
                        Are you planning a private party, birthday, small or large event,
                        wedding or outdoor food catering? Treat your friends and your
                        clients with one of the best restaurant food available in Dubai. We
                        do more than catering services, we create a holiday atmosphere and
                        deliver the freshest and finest food to your place.
                    </p>
                    <p className={styles.subdescription}>
                        Any time of the day, promptly and at the highest quality, we cater
                        the best for you. You can be rest assured that your event and
                        especially – food – is in the right hands. We administer everything
                        right on time, which is as important as the food itself.
                    </p>
                </div>

                <div className={styles.grid}>
                    {cateringServices.map((service, index) => (
                        <Link
                            href={service.href}
                            key={service.title}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
