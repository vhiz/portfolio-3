import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

export default function Footer() {
  const images = [
    {
      id: 1,
      src: "/twitter.png",
      url: "https://twitter.com/Vhiz19?t=ePCT_nk3pT3qmxffqLtSNA&s=09",
    },
    {
      id: 2,
      src: "/whatsapp.png",
      url: "https://wa.link/31vrvp",
    },
    {
      id: 3,
      src: "/linkedin.png",
      url: "https://www.linkedin.com/in/mgbeahurike-victor-40981723b",
    },
    {
      id: 4,
      src: "/github.png",
      url: "https://github.com/vhiz ",
    },
  ];
  return (
    <div className={styles.footer}>
      <p>© 2023</p>
      <div className={styles.img}>
        {images.map((image, index) => (
          <Link href={image.url} key={index} target="blank">
            <Image src={image.src} alt="" width={25} height={25} />
          </Link>
        ))}
      </div>
    </div>
  );
}
