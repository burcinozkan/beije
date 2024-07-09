import React, { useState, useEffect } from 'react';
import styles from '../styles/PackageBuilder.module.css';

const PacketBuilder: React.FC = () => {
    const [activeTab, setActiveTab] = useState('beije Ped');
    const [standardPed, setStandardPed] = useState(0);
    const [superPed, setSuperPed] = useState(0);
    const [superPlusPed, setSuperPlusPed] = useState(0);
    const [dailyPed, setDailyPed] = useState(0);
    const [superDailyPed, setSuperDailyPed] = useState(0);
    const [miniTampon, setMiniTampon] = useState(0);
    const [standardTampon, setStandardTampon] = useState(0);
    const [superTampon, setSuperTampon] = useState(0);
    const [cartItems, setCartItems] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const prices = {
        standardPed: 60.84,
        superPed: 71.40,
        superPlusPed: 80.03,
        dailyPed: 37.59,
        superDailyPed: 43.23,
        miniTampon: 78.74,
        standardTampon: 84.88,
        superTampon: 89.74
    };

    useEffect(() => {
        const items = [];
        let total = 0;

        if (standardPed > 0) {
            items.push(`${standardPed} Standart Ped`);
            total += (standardPed / 10) * prices.standardPed;
        }
        if (superPed > 0) {
            items.push(`${superPed} Süper Ped`);
            total += (superPed / 10) * prices.superPed;
        }
        if (superPlusPed > 0) {
            items.push(`${superPlusPed} Süper+ Ped`);
            total += (superPlusPed / 10) * prices.superPlusPed;
        }
        if (dailyPed > 0) {
            items.push(`${dailyPed} Günlük Ped`);
            total += (dailyPed / 10) * prices.dailyPed;
        }
        if (superDailyPed > 0) {
            items.push(`${superDailyPed} Süper Günlük Ped`);
            total += (superDailyPed / 10) * prices.superDailyPed;
        }
        if (miniTampon > 0) {
            items.push(`${miniTampon} Mini Tampon`);
            total += (miniTampon / 10) * prices.miniTampon;
        }
        if (standardTampon > 0) {
            items.push(`${standardTampon} Standart Tampon`);
            total += (standardTampon / 10) * prices.standardTampon;
        }
        if (superTampon > 0) {
            items.push(`${superTampon} Süper Tampon`);
            total += (superTampon / 10) * prices.superTampon;
        }

        setCartItems(items);
        setTotalPrice(total);
    }, [standardPed, superPed, superPlusPed, dailyPed, superDailyPed, miniTampon, standardTampon, superTampon]);

    const handleRemoveItem = (item: string) => {
        switch (item.split(' ')[1]) {
            case 'Standart':
                setStandardPed(0);
                break;
            case 'Süper':
                if (item.includes('Süper+')) {
                    setSuperPlusPed(0);
                } else {
                    setSuperPed(0);
                }
                break;
            case 'Günlük':
                if (item.includes('Süper Günlük')) {
                    setSuperDailyPed(0);
                } else {
                    setDailyPed(0);
                }
                break;
            case 'Mini':
                setMiniTampon(0);
                break;
            case 'Tampon':
                if (item.includes('Süper')) {
                    setSuperTampon(0);
                } else {
                    setStandardTampon(0);
                }
                break;
            default:
                break;
        }
    };

    const renderCartItems = () => {
        return cartItems.map((item, index) => (
            <div key={index} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                    <span>{item}</span>
                    <button className={styles.removeButton} onClick={() => handleRemoveItem(item)}>Paketten Çıkar</button>
                </div>
            </div>
        ));
    };

    const renderSliders = () => {
        switch (activeTab) {
            case 'beije Ped':
                return (
                    <>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Standart Ped</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="60" 
                                step={10}
                                value={standardPed} 
                                onChange={(e) => setStandardPed(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{standardPed}</div>
                        </div>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Süper Ped</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="60" 
                                step={10}
                                value={superPed} 
                                onChange={(e) => setSuperPed(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{superPed}</div>
                        </div>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Süper+ Ped</label>
                            <input 
                                type="range" 
                                min="0" 
                                step={10}
                                max="60" 
                                value={superPlusPed} 
                                onChange={(e) => setSuperPlusPed(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{superPlusPed}</div>
                        </div>
                    </>
                );
            case 'beije Günlük Ped':
                return (
                    <>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Günlük Ped</label>
                            <input 
                                type="range" 
                                min="0" 
                                step={10}
                                max="100" 
                                value={dailyPed} 
                                onChange={(e) => setDailyPed(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{dailyPed}</div>
                        </div>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Süper Günlük Ped</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                step={10}
                                value={superDailyPed} 
                                onChange={(e) => setSuperDailyPed(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{superDailyPed}</div>
                        </div>
                    </>
                );
            case 'beije Tampon':
                return (
                    <>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Mini Tampon</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                step={10}
                                value={miniTampon} 
                                onChange={(e) => setMiniTampon(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{miniTampon}</div>
                        </div>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Standart Tampon</label>
                            <input 
                                type="range" 
                                min="0" 
                                step={10}
                                max="100" 
                                value={standardTampon} 
                                onChange={(e) => setStandardTampon(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{standardTampon}</div>
                        </div>
                        <div className={styles.sliderContainer}>
                            <label className={styles.sliderLabel}>Süper Tampon</label>
                            <input 
                                type="range" 
                                min="0" 
                                step={10}
                                max="100" 
                                value={superTampon} 
                                onChange={(e) => setSuperTampon(Number(e.target.value))} 
                            />
                            <div className={styles.sliderValue}>{superTampon}</div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.packetBuilder}>
            <div className={styles.left}>
                <div className={styles.first_line}>
                    <h1 className={styles.header}>Kendi Paketini Oluştur</h1>
                    <p className={styles.subHeader}>Nasıl Çalışır?</p>
                </div>
                <p className={styles.description}>Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</p>
                <div className={styles.tabs}>
                    <span className={activeTab === 'beije Ped' ? styles.activeTab : ''} onClick={() => setActiveTab('beije Ped')}>beije Ped</span>
                    <span className={activeTab === 'beije Günlük Ped' ? styles.activeTab : ''} onClick={() => setActiveTab('beije Günlük Ped')}>beije Günlük Ped</span>
                    <span className={activeTab === 'beije Tampon' ? styles.activeTab : ''} onClick={() => setActiveTab('beije Tampon')}>beije Tampon</span>
                </div>
                {renderSliders()}
            </div>
            <div className={styles.right}>
                <h2 className={styles.packageHeader}>Özel Paketin</h2>
                <section className={styles.exchange}>
                    <img src='/exchange.png' width={20} height={20} alt="Exchange Icon" />
                    <p className={styles.packageSubheader}>2 ayda 1 gönderim</p>
                </section>
                
                <div className={styles.imageContainer}>
                    <img src="/ped.png" alt="Special Package" />
                </div>
                <div className={styles.cartItems}>
                    {renderCartItems()}
                </div>
                <button className={`${styles.addToCartButton} ${cartItems.length > 0 ? styles.active : ''}`} disabled={cartItems.length === 0}>Sepete Ekle (₺{totalPrice.toFixed(2)})</button>
            </div>
        </div>
    );
};

export default PacketBuilder;
