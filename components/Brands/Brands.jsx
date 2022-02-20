import BrandCard from './BrandCard';
import styles from './brands.module.css';

function Brands() {
  return (
    <div className={styles.container}>
     <BrandCard name="istikbal" logo="/images/brands/concept.jpg"  />
     <BrandCard name="istikbal" logo="/images/brands/elephent.png"  />
     <BrandCard name="istikbal" logo="/images/brands/concept.jpg"  />
     <BrandCard name="Maison" logo="/images/brands/maison.png"  />
    </div>
  );
}

export default Brands;
