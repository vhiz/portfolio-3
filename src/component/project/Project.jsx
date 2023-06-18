import Image from "next/image";
import styles from "./project.module.scss";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <div className={styles.info}>
        <h1>{project.title}</h1>
        <span>{project.desc}</span>
        <div className={styles.links}>
          <button>
            <Link target={"_blank"} href={project.url}>
              Live Page
            </Link>
          </button>
          <Link href={project.github}>
          <Image src={"/github.png"} alt="" width={25} height={25} />
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={project.img} alt="" fill={true} />
      </div>
    </div>
  );
}
