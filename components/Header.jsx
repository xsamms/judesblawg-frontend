import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Search from "./Search";
import { BsTelephone } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <Image src="/logo3.png" width={300} height={40} alt="" />
        </Link>
      </div>
      <div className={styles.search}>
        <Search />
      </div>

      <nav className={styles.nav_menu}>
        <ul>
          <li>
            <span className={styles.editorial}>
              Editorials <IoMdArrowDropdown />
            </span>
            <ul className={styles.dropdown}>
              <li>
                <Link href="/team/jude-igbanoi">Jude Igbanoi</Link>
              </li>
              <li>
                <Link href="/team/augustine-alegeh-SAN">
                  Augustine Alegeh SAN – Chairman
                </Link>
              </li>
              <li>
                <Link href="/team/chief-ferdinand-orbih-SAN">
                  Chief Ferdinand Orbih SAN
                </Link>
              </li>
              <li>
                <Link href="/team/sam-zibiri-SAN">Sam Zibiri SAN</Link>
              </li>
              <li>
                <Link href="/team/chief-layi-babatunde-SAN">
                  Chief Layi Babatunde SAN
                </Link>
              </li>
              <li>
                <Link href="/team/adeniji-kazeem-SAN">Adeniji Kazeem SAN</Link>
              </li>
              <li>
                <Link href="/team/john-unachukwu-Esq">
                  John Unachukwu Esq.azeem SAN
                </Link>
              </li>
              <li>
                <Link href="/team/onyema-omenuwa-Esq">Onyema Omenuwa Esq.</Link>
              </li>
              <li>
                <Link href="/team/edo-ukpong-Esq">Edo Ukpong Esq.</Link>
              </li>
              <li>
                <Link href="/team/prof-gbenga-odutan">Prof. Gbenga Odutan</Link>
              </li>
              <li>
                <Link href="/team/prof-chidi-odinkalu">
                  Prof Chidi Odinkalu
                </Link>
              </li>
              <li>
                <Link href="/team/ope-olugasa">Ope Olugasa</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <BsTelephone /> 0705-551-1446
          </li>
        </ul>
      </nav>
    </div>
  );
}
