import Image from 'next/image';
import styles from './brands.module.css';
function BrandCard({ logo, name }) {
  return (
    <div className={styles.brand_card}>
      <div className={styles.brand_logo}>
        <Image src={logo} width={150} height={150} alt={name} objectFit="cover"/>
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default BrandCard;
