
import Input from '../base_component/input.js';
import Button from '../base_component/button.js';
import Nft from './nft.js';
import '../../assets/styles/landing.scss';
import Image from './image';
import Faqs from './faqs.js';
import {useState} from 'react';
import nftAddress from '../nfts/nft_addresses'

const Introduction = () => {
    const [token, setToken] = useState('')
    const [nftState, setNFTState] = useState('')

    const checkNFT = () => {
        const value = nftAddress.find(element => element.toLowerCase() === token.toLowerCase())
        if( value ) {
            setNFTState(`✅ You are in exile! Welcome to the family.`)
        } else {
            setNFTState(`❌ Sorry, you're not exiled.`)
        }
    }

    return (
        <>
            <div className='container'>
                <div className='top-logo'>
                    <img className='logo-img' src='image/logo.png'></img>
                </div>
                <h1 className='text-container' id="title">DeGods</h1>
                <h1> 10,000 <i><span className='decode'> uniquely enginneered </span></i> Solana NFTs</h1>
                <div className='top-images' overflow-y="scroll" overscroll-behavior-y="none">
                    <div className='images'>
                        <Image 
                            id="one"
                            cls="i1"
                            src="image/2.png"
                        />
                        <Image 
                            id="two"
                            cls="i2"
                            src="image/43.png"
                        />
                        <Image 
                            id="three"
                            cls="i3"
                            src="image/13.png"
                        />
                        <Image 
                            id="four"
                            cls="i4"
                            src="image/30.png"
                        />
                        <Image 
                            id="five"
                            cls="i5"
                            src="image/20.png"
                        />
                        <Image 
                            id="six"
                            cls="i6"
                            src="image/46.png"
                        />
                        <Image 
                            id="seven"
                            cls="i7"
                            src="image/50.png"
                        />
                        <Image 
                            id="eight"
                            cls="i8"
                            src="image/59.png"
                        />
                    </div>
                </div>
                <Button cls='btn-discord' type="button">
                    <span className='btn-text text-uppercase'>Join The Discord</span>
                </Button>
            </div>
            <div className="verify-ape">
                <div className="content">
                    <div>
                        <h1>Verify Your DeGod</h1>
                        <p>
                            Check if your DeGod is exiled
                            <a>Video Tutorial</a>
                        </p>
                        <div>
                            <Input
                                val={token}
                                placeholder="Token Address"
                                type="text"
                                cls="input ape_search"
                                change={(val) => setToken(val)}
                            />
                            <Button
                                val="Check"
                                type="button"
                                cls="button ape_search_check"
                                click={checkNFT}
                            />
                        </div>
                    </div>
                    <p>
                        {
                            nftState
                        }
                    </p>
                    {
                        token !== '' ? (
                            <div>
                                <a href={`https://solscan.io/address/${token}`}>View in Explorer ➡</a>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
            <div className="roadmap">
                <h1>The Roadmap</h1>
                <div>
                    <p><b>Minting Date:</b> October 8th, 2021 </p>
                    <p><a href="https://web.archive.org/web/20211022001904/https://twitter.com/degodsnft" target="_blank">Follow us on Twitter</a> & turn post notifcations on.</p>
                    <p><b>Price:</b> 3 SOL </p>
                    <p><b>Marketplace:</b> We have built our own marketplace for secondary sales. This will be released a short time after the launch. </p>
                    <div><b>Future Plans:</b></div>
                    <a href="https://web.archive.org/web/20211022001904/https://roadmap.degods.com/">Read our actual roadmap here.</a>
                    <p className="mt-4 mb-0"><b>•</b><span>Shitty RedBubble merch,</span></p>
                    <p className="mb-0"><b>•</b><span>Play-to-earn game that nobody is going to play</span></p>
                    <p className="mb-0"><b>•</b><span>Applebee's All-You-Can-Eat Dinner Buffet</span></p>
                    <p className="mt-4"> Just kidding. We're not doing any of that fucking dumbass, engagement bait bullshit. </p>
                    <div><b>What we're actually going to do:</b></div>
                    <p className="mb-0">  •Open sourcing the proprietary code used to build this project  </p>
                    <p className="mb-0">  •Community derivative hackathons (for real incentives)  </p>
                    <p className="mb-0">  •Shit that is way cooler than all the other NFT projects combined  </p>
                </div>
            </div>
            <Faqs />
        </>
    );
}

export default Introduction;