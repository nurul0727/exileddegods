
import '../../assets/styles/faq.scss';

import Faq from './faq.js';
import {useState} from 'react';

const Faqs = () => {

    const [faq, setFaq] = useState(0);

    function faqs (val) {
        if(faq == val) {
            setFaq(0);
        }
        else {
            setFaq(val);
        }
    }

    return (
        <div className="faq mt-5 mb-5">
            <div className="col-md-6 desc">
                <p>WHAT YOU NEED TO KNOW</p>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="col-md-6 content">
                <Faq title="Where is the art?" id="1" faq={faq} click={() => faqs(1)}>
                    {
                        faq == 1 && 
                            <div className="desc">
                                <span>The art will be revealed about 2 weeks before the mint.</span>
                                <span>We are taking a unique direction with the art.</span>
                                <span>We don't want a hundred derivatives already launched before the mint.</span>
                            </div>
                    }
                </Faq>
                <Faq title="How do i get a WL?" id="2" faq={faq} click={() => faqs(2)}>
                    {
                        faq == 2 && 
                            <div className="desc">
                                <span>The best way to have a guaranteed WL is to hold a DeadGod.</span>
                                <span>Every DeadGod will be guaranteed the ability to mint 1 Duppy.</span>
                                <span>There will be a few more opportunities to get a whitelist. Join the <a>Discord</a> & follow our <a>Twitter</a> to stay up to date on this.</span>
                            </div>
                    }
                </Faq>
                <Faq title="What if I have a DeGod and not a DeadGod?" id="3" faq={faq} click={() => faqs(3)} >
                    {
                        faq == 3 && 
                            <div className="desc">
                                <span>You will have until the mint in June to upgrade to a DeadGod for a guaranteed spot.</span>
                                <span>This is designed to reward those that spent the 1000 + $DUST to upgrade their DeadGod. It was made clear from day one that there would be unique benefits to holding a DeadGod.</span>
                                <span>If you have just a DeGod, you at least will be generating $DUST.</span>
                            </div>
                    }
                </Faq>
                <Faq title="Where do i get $DUST from?" id="4" faq={faq} click={() => faqs(4)} > 
                    {
                        faq == 4 && 
                            <div className="desc">
                                <span>If you have a DeGod/DeadGod you can stake to earn DeGods.</span>
                                <span>If you don' t, you can use <a>jup.ag</a> to get some $DUST.</span>
                            </div>
                    }
                </Faq>
                <Faq title="Why are you building Duppies?" id="5" faq={faq} click={() => faqs(5)} >
                    {
                        faq == 5 && 
                            <div className="desc">
                                <span>The goal for Duppies is to stand alone as its own brand & IP.</span>
                                <span>The universe & style of Duppies are different than DeGods/DeadGods.</span>
                                <span>We don't think anyone wants to own the "baby" version of an original collection.</span>
                                <span>We think this is the direction all "second" mints/drops NFT projects should take</span>
                                <span>It' s more exciting for existing holders, but double as exciting for new incoming holders-because they can believe in the future of the collection beyond just being a smaller version of the "parent" collection</span>
                            </div>
                    }
                </Faq>
                <Faq title="Who will the team working on Duppies be?" id="6" faq={faq} click={() => faqs(6)} >
                    {
                        faq == 6 && 
                        <div className="desc">
                            <span>The DeGods team will bring this project to life.</span>
                            <span>But after a few months we will be bringing on a CEO just for the Duppies brand.</span>
                            <span>We will instruct the CEO that their goal is to make the biggest NFT brand in the world... even bigger than DeGods.</span>
                            <span>DeGods will be competing with our own project,. Should be fun.</span>
                        </div>
                    }
                </Faq>
                <Faq title="What can you leak about Duppies?" id="7" faq={faq} click={() => faqs(7)} >
                    {
                        faq == 7 && 
                            <div className="desc">
                                <span>The focus is building a brand with the strongest community on the internet by using aligned incentives</span>
                                <span>We are going to build the most popular NFT brand...together</span>
                            </div>
                    }
                </Faq>
            </div>
            
        </div>
    )
}

export default Faqs;