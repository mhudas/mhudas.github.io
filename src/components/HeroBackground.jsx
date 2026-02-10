import { useEffect, useState } from 'react';
import './HeroBackground.css';

export default function HeroBackground() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const scaleX = window.innerWidth / 800;
            const scaleY = window.innerHeight / 600;
            setScale(Math.max(scaleX, scaleY) * 1.1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 flex items-center justify-center">
            <div
                className="hero-scene relative origin-center w-[800px] h-[600px]"
                style={{ transform: `scale(${scale})` }}
            >
                <div className="picture">
                    <div className="forest">
                        <div className="forest__tree"></div>
                        <div className="forest__monster-1">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="forest__monster-2">
                            <div></div>
                        </div>
                        <div className="forest__ghost">
                            <div></div>
                        </div>
                        <div className="forest__moss"></div>
                    </div>
                    <div className="house">
                        <div className="house__wall">
                            <div className="bat-1">
                                <div></div>
                            </div>
                            <div className="bat-2">
                                <div></div>
                            </div>
                        </div>
                        <div className="house__window">
                            <div className="greenery"></div>
                            <div className="leaf-1"></div>
                            <div className="leaf-2"></div>
                            <div className="leaf-3"></div>
                            <div className="leaf-4"></div>
                            <div className="leaf-5"></div>
                            <div className="leaf-6"></div>
                            <div className="leaf-7"></div>
                            <div className="mushroom-1"></div>
                            <div className="mushroom-2"></div>
                            <div className="lamp"></div>
                            <div className="casket"></div>
                            <div className="pineapple"></div>
                            <div className="berries"></div>
                        </div>
                        <div className="shelf">
                            <div className="shelf__staff-1"></div>
                            <div className="shelf__staff-2">
                                <div className="dust-1"></div>
                                <div className="dust-2"></div>
                                <div className="dust-3"></div>
                                <div className="dust-4"></div>
                            </div>
                            <div className="shelf__staff-3"></div>
                            <div className="shelf__staff-4"></div>
                            <div className="shelf__staff-5"></div>
                            <div className="shelf__staff-6"></div>
                            <div className="shelf__staff-7"></div>
                            <div className="shelf__staff-8">
                                <div className="dust-1"></div>
                                <div className="dust-2"></div>
                                <div className="dust-3"></div>
                                <div className="dust-4"></div>
                            </div>
                            <div className="shelf__staff-9"></div>
                            <div className="shelf__staff-10"></div>
                            <div className="shelf__staff-11"></div>
                            <div className="shelf__herb-rope-1"></div>
                            <div className="shelf__herbs-1"></div>
                            <div className="shelf__herbs-2">
                                <div className="shelf__herb-rope-2"></div>
                            </div>
                            <div className="shelf__herbs-3">
                                <div className="shelf__herb-rope-3"></div>
                            </div>
                            <div className="shelf__herbs-4">
                                <div className="shelf__herb-rope-4"></div>
                            </div>
                            <div className="shelf__thing">
                                <div className="shelf__circles"></div>
                            </div>
                        </div>
                        <div className="besom">
                            <div className="rope"></div>
                        </div>
                        <div className="moth-rope"></div>
                        <div className="moth">
                            <div className="moth__wings"></div>
                        </div>
                        <div className="ladder"></div>
                        <div className="wreath"></div>
                        <div className="hook">
                            <div className="dried-flower">
                                <div className="dried-flower__petals"></div>
                            </div>
                        </div>
                        <div className="chair"></div>
                        <div className="alchemist">
                            <div className="alchemist__coat-1"></div>
                            <div className="alchemist__leg-r"></div>
                            <div className="alchemist__leg-l"></div>
                            <div className="alchemist__body"></div>
                            <div className="alchemist__arm-r"></div>
                            <div className="alchemist__arm-l"></div>
                            <div className="alchemist__coat-2"></div>
                            <div className="alchemist__coat-3"></div>
                            <div className="alchemist__hat">
                                <div className="alchemist__cat-tail"></div>
                                <div className="alchemist__hat-1"></div>
                                <div className="alchemist__hat-2"></div>
                                <div className="alchemist__hat-3"></div>
                                <div className="alchemist__hat-4"></div>
                                <div className="alchemist__cat">
                                    <div className="alchemist__cat-face"></div>
                                </div>
                                <div className="alchemist__hat-5"></div>
                                <div className="alchemist__hat-6"></div>
                                <div className="alchemist__hat-7"></div>
                                <div className="alchemist__forelock"></div>
                            </div>
                            <div className="alchemist__head">
                                <div className="alchemist__ear-r"></div>
                                <div className="alchemist__ear-l"></div>
                                <div className="alchemist__beard"></div>
                                <div className="alchemist__mustache"></div>
                                <div className="alchemist__eye-r"></div>
                                <div className="alchemist__eye-l"></div>
                            </div>
                        </div>
                        <div className="pedal">
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div className="table">
                            <div className="snail">
                                <div className="snail__tail">
                                    <div></div>
                                </div>
                                <div className="snail__body">
                                    <div className="snail__head"></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="piggy">
                                <div className="piggy__front-legs"></div>
                                <div className="piggy__back-legs"></div>
                                <div className="piggy__hair"></div>
                                <div className="piggy__body"></div>
                                <div className="piggy__ear-right"></div>
                                <div className="piggy__ear-left"></div>
                                <div className="piggy__tail"></div>
                                <div className="piggy__eyes"></div>
                                <div className="piggy__mouth"></div>
                            </div>
                            <div className="wasp">
                                <div className="wasp__legs">
                                    <div></div>
                                </div>
                                <div className="wasp__body">
                                    <div></div>
                                </div>
                                <div className="wasp__wing"></div>
                            </div>
                            <div className="bottle-1">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="bottle-2">
                                <div>
                                    <div className="bottle-2__water"></div>
                                    <div className="bottle-2__dude-1"></div>
                                    <div className="bottle-2__dude-2"></div>
                                    <div className="bottle-2__dude-3"></div>
                                </div>
                            </div>
                            <div className="bottle-3">
                                <div>
                                    <div className="bottle-3__dude-1"></div>
                                    <div className="bottle-3__dude-2"></div>
                                    <div className="bottle-3__dude-3"></div>
                                </div>
                                <div className="dust-1"></div>
                                <div className="dust-2"></div>
                                <div className="dust-3"></div>
                                <div className="dust-4"></div>
                                <div className="dust-5"></div>
                                <div className="dust-6"></div>
                                <div className="dust-7"></div>
                                <div className="dust-8"></div>
                                <div className="dust-9"></div>
                                <div className="dust-10"></div>
                            </div>
                            <div className="mushroom-3">
                                <div></div>
                            </div>
                            <div className="mushroom-4"></div>
                            <div className="plants">
                                <div></div>
                            </div>
                            <div className="plants-2">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="nut"></div>
                            <div className="fire">
                                <div className="fire__item1"></div>
                                <div className="fire__item2"></div>
                                <div className="fire__item3"></div>
                                <div className="fire__item4"></div>
                                <div className="fire__item5"></div>
                                <div className="fire__item6"></div>
                                <div className="fire__item7"></div>
                                <div className="fire__item8"></div>
                                <div className="fire__item9"></div>
                                <div className="fire__item10"></div>
                            </div>
                            <div className="skulp">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="soul-1">
                                <div className="soul-1__part1"></div>
                                <div className="soul-1__part2"></div>
                                <div className="soul-1__part3"></div>
                                <div className="soul-1__part4"></div>
                                <div className="soul-1__part5"></div>
                                <div className="soul-1__part6"></div>
                                <div className="soul-1__part7"></div>
                                <div className="soul-1__part8"></div>
                                <div className="soul-1__part9"></div>
                                <div className="soul-1__part10"></div>
                                <div className="soul-1__part11"></div>
                                <div className="soul-1__part12"></div>
                                <div className="soul-1__part13"></div>
                                <div className="soul-1__part14"></div>
                                <div className="soul-1__part15"></div>
                                <div className="soul-1__part16"></div>
                            </div>
                            <div className="soul-2">
                                <div className="soul-2__part1"></div>
                                <div className="soul-2__part2"></div>
                                <div className="soul-2__part3"></div>
                                <div className="soul-2__part4"></div>
                                <div className="soul-2__part5"></div>
                                <div className="soul-2__part6"></div>
                                <div className="soul-2__part7"></div>
                                <div className="soul-2__part8"></div>
                                <div className="soul-2__part9"></div>
                                <div className="soul-2__part10"></div>
                                <div className="soul-2__part11"></div>
                                <div className="soul-2__part12"></div>
                                <div className="soul-2__part13"></div>
                                <div className="soul-2__part14"></div>
                                <div className="soul-2__part15"></div>
                                <div className="soul-2__part16"></div>
                            </div>
                            <div className="soul-3">
                                <div className="soul-3__part1"></div>
                                <div className="soul-3__part2"></div>
                                <div className="soul-3__part3"></div>
                                <div className="soul-3__part4"></div>
                                <div className="soul-3__part5"></div>
                                <div className="soul-3__part6"></div>
                                <div className="soul-3__part7"></div>
                                <div className="soul-3__part8"></div>
                                <div className="soul-3__part9"></div>
                                <div className="soul-3__part10"></div>
                                <div className="soul-3__part11"></div>
                                <div className="soul-3__part12"></div>
                                <div className="soul-3__part13"></div>
                                <div className="soul-3__part14"></div>
                                <div className="soul-3__part15"></div>
                                <div className="soul-3__part16"></div>
                            </div>
                            <div className="pot">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div className="pot__drop"></div>
                                <div className="pot__bubble-1"></div>
                                <div className="pot__bubble-2"></div>
                                <div className="pot__bubble-3"></div>
                            </div>
                            <div className="bottle-4">
                                <div className="bottle-4__dude">
                                    <div className="bottle-4__dude-head">
                                        <div className="bottle-4__dude-hair-1"></div>
                                        <div className="bottle-4__dude-hair-2"></div>
                                        <div className="bottle-4__dude-hair-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basket">
                            <div></div>
                        </div>
                        <div className="cage"></div>
                        <div className="staff">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
