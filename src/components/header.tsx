import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="#">beije.</a>
            </div>
            <nav className={`${styles.nav} ${menuActive ? styles.active : ''}`}>
                <div
                    className={styles.navItem}
                    onMouseEnter={() => setHoveredItem('Ürünler')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <a href="#">Ürünler</a>
                    {hoveredItem === 'Ürünler' && (
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownTitle}>Ürünler</div>
                            <div className={styles.dropdownContent}>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-ped.png" alt="beije Ped" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">beije Ped</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-gunlukPed.png" alt="beije Günlük Ped" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">beije Günlük Ped</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-tampon.png" alt="beije Tampon" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">beije Tampon</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-kap.png" alt="beije Kap" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">beije Kap</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-ısı.png" alt="Isı Bandı" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Isı Bandı</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>

                               
                            </div>
                            <div className={styles.dropdownTitle}>Paketler</div>
                            <div className={styles.dropdownContent}>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-populer-paketler.png" alt="beije Ped" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Popüler Paketler</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-ped.png" alt="beije Günlük Ped" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Ped Paketleri</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/beije-gunluk-ped-paketleri.png" alt="beije Tampon" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Günlük Ped Paketleri</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/tampon-paketleri.png" alt="beije Kap" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Tampon Paketleri</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/deneme-paketleri.jpg" alt="Isı Bandı" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Deneme Paketi</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItemCustom}>
                                    <img src="/custom-packet.png" alt="Custom Packet" />
                                    <div className={styles.dropdownCustomText}>
                                        <a href="#">Kendi Paketini Oluştur</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="" />
                                        </button>
                                    </div>
                                </div>

                               
                            </div>
                            
                        </div>
                    )}
                </div>
                <div
                    className={styles.navItem}
                    onMouseEnter={() => setHoveredItem('Biz Kimiz?')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <a href="#">Biz Kimiz?</a>
                    {hoveredItem === 'Biz Kimiz?' && (
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownTitle}>Biz Kimiz?</div>
                            <div className={styles.dropdownContent}>
                                <div className={styles.dropdownItem}>
                                    <img src="/why.png" alt="why" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Neden beije?</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/how.png" alt="how" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">beije Nasıl Çalışır?</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/price.png" alt="price" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Fiyat Politikası</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/faq.png" alt="faq" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Sıkça Sorulan Sorular</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/all-materials.png" alt="all-materials" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Tüm malzemeler</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={styles.navItem}
                    onMouseEnter={() => setHoveredItem('Bağış Kültürü')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <a href="#">Bağış Kültürü</a>
                    {hoveredItem === 'Bağış Kültürü' && (
                        <div className={styles.dropdown}>
                            <div className={styles.dropdownTitle}>Bağış Kültürü</div>
                            <div className={styles.dropdownContent}>
                                <div className={styles.dropdownItem}>
                                    <img src="/our-philosophy.jpg" alt="our-philosophy" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Felsefemiz</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/donation-pad.jpg" alt="donation-pad" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Askıda Ped</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.dropdownItem}>
                                    <img src="/charity.jpg" alt="charity" />
                                    <div className={styles.dropdownText}>
                                        <a href="#">Bağış</a>
                                        <button>
                                            <img src="/right-arrow.png" alt="next" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.direct}>
                    <a href="#">Regl Testi!</a>
                    
                </div>
                <div className={styles.direct}>
                    
                    <a href="#">Kendi Paketini Oluştur</a>
                   
                </div>
                <button className={styles.closeButton} onClick={toggleMenu}>×</button>
            </nav>
            <div className={styles.icons}>
                <a href="#"><img src="/trolley.png" alt="Cart" /></a>
                <a href="#"><img src="/user.png" alt="User" /></a>
            </div>
            <div className={styles.menuToggle} onClick={toggleMenu}>☰</div>
        </header>
    );
};

export default Header;
