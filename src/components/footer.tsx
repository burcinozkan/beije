import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
    const [focused, setFocused] = useState(false);

    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.newsletter}>
                    <h3>beije.</h3>
                    <p> 
                        <span className={styles.boldText}>
                            Arayı açmayalım!
                        </span>
                        beije'deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz döngü'ye abone ol!
                    </p>
                    <form className={styles.emailForm}>
                        <div className={`${styles.inputContainer} ${focused ? styles.focused : ''}`}>
                            <label className={styles.label} htmlFor="email">e-mail adresin</label>
                            <input
                                type="email"
                                id="email"
                                className={styles.input}
                                placeholder={focused ? "halide.edip@adivar.com" : ""}
                                onFocus={() => setFocused(true)}
                                onBlur={(e) => setFocused(e.target.value !== "")}
                            />
                        </div>
                        <button type="submit">Gönder</button>
                    </form>
                    <p>Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</p>
                </div>
                <div className={styles.links}>
                    <div className={styles.column}>
                        <a href="#">beije Ped</a>
                        <a href="#">beije Günlük Ped</a>
                        <a href="#">beije Tampon</a>
                        <a href="#">beije Store</a>
                    </div>
                    <div className={styles.column}>
                        <a href="#">Blog</a>
                        <a href="#">Sıkça Sorulan Sorular</a>
                        <a href="#">Biz Kimiz?</a>
                        <a href="#">Quiz</a>
                    </div>
                    <div className={styles.social}>
                        <div className={styles.icons}>
                            <img src="./facebook.png" alt="Facebook" />
                            <a href="#">Facebook</a>
                        </div> 
                        <div className={styles.icons}>
                            <img src="./instagram.png" alt="Instagram" />
                            <a href="#">Instagram</a>
                        </div>
                        <div className={styles.icons}>
                            <img src="./twitter.png" alt="Twitter" />
                            <a href="#">Twitter</a>
                        </div>
                        <div className={styles.icons}>
                            <img src="./linkedin.png" alt="LinkedIn" />
                            <a href="#">LinkedIn</a>
                        </div>
                        <div className={styles.icons}>
                            <img src="./spotify.png" alt="Spotify" />
                            <a href="#">Spotify</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />  
            <div className={styles.bottomSection}>
                <div className={styles.text}>
                    <p>2024 beije. Tüm hakları saklıdır.</p>
                    <div className={styles.bottomLinks}>
                        <a href="#">KVKK</a>
                        <a href="#">KVKK Başvuru Formu</a>
                        <a href="#">Üyelik Sözleşmesi</a>
                        <a href="#">Gizlilik Politikası</a>
                        <a href="#">Çerez Politikası</a>
                        <a href="#">Test Sonuçları</a>
                    </div>
                    <div className={styles.languages}>
                        <a href="#">EN</a>  <a href="#">TR</a>
                    </div>
                </div>
                <div className={styles.paymentMethods}>
                    <img src="/troy.png" alt="Troy" />
                    <img src="/mastercard.png" alt="MasterCard" />
                    <img src="/visa.png" alt="Visa" />
                    <img src="/amex.png" alt="Amex" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
