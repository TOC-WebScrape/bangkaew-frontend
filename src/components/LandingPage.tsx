import "./Landing.css";
import { LandingCard } from ".";
import { LANDING_CARD } from "../MockData";
import { bg2, bg3, bg4, bg5 } from "../assets/icons";
interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({}: LandingPageProps) => {
  return (
    // OLD mui

    // <div
    //   style={{
    //     paddingTop: "10px",
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     gap: "20px",
    //   }}
    // >
    //   <LandingCard {...LANDING_CARD} />
    //   <LandingCard {...LANDING_CARD} />
    //   <LandingCard {...LANDING_CARD} />
    // </div>
    <div>
      <div className='headZone'>
        <div className='context'>
          <p className='BK'>BANGKAEW</p>
          <p className='bkQuote'>
            We are bangkaew, We make crypto EASY for you.
          </p>
        </div>
        <div className='contain'>
          <div className='wrapper'>
            <img src={bg3}></img>
            <img src={bg4}></img>
            <img src={bg5}></img>
            <img src={bg2}></img>
          </div>
        </div>
      </div>

      {/* animate boxes */}
      <div className='boxArea'>
        <div className='spinner-box'>
          <div className='configBorder1'>
            <div className='configCore'></div>
          </div>
          <div className='configBorder2'>
            <div className='configCore'></div>
          </div>
        </div>
        <p className='BangkaewText'>Welcome to bangkaew</p>
        <div className='spinner-box'>
          <div className='configBorder1'>
            <div className='configCore'></div>
          </div>
          <div className='configBorder2'>
            <div className='configCore'></div>
          </div>
        </div>
      </div>

      <div className='gitArea'>
        <div className='Boxcard'>
          <div className='left1'></div>
          <div className='right'>
            <div className='words'>
              <h1>What is 'cryptocurrency' ?</h1>
              <p>
                A cryptocurrency is a digital or virtual currency that is
                secured by cryptography, which makes it nearly impossible to
                counterfeit or double-spend. Many cryptocurrencies are
                decentralized networks based on blockchain technology.A
                distributed ledger enforced by a disparate network of computers.
                A defining feature of cryptocurrencies is that they are
                generally not issued by any central authority, rendering them
                theoretically immune to government interference or manipulation.
              </p>
              <a
                href='https://www.investopedia.com/terms/c/cryptocurrency.asp'
                className='btn'
                target='_blank'
                rel='noopener noreferrer'
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className='Boxcard'>
          <div className='left2'></div>
          <div className='right'>
            <div className='words'>
              <h1>Why are we trading ?</h1>
              <p>
                Cryptocurrency traders often have one of two goals: to
                accumulate Bitcoin or make a profit in USD. In a crypto bull
                market, it’s pretty easy for your portfolio to increase in USD
                value, but it’s more challenging for Bitcoin value to increase.
                To track your portfolio’s Bitcoin value, you can trade altcoins
                against Bitcoin on exchanges like Coinbase Pro. By actively
                trading your cryptocurrency, you risk losing your crypto to the
                market. Since cryptocurrency prices are so volatile, it’s not
                uncommon for traders to lose money quickly trading
                cryptocurrencies. This is why so many crypto enthusiasts just
                HODL their Bitcoin.
              </p>
              <a
                href='https://www.benzinga.com/how-to-trade-cryptocurrency'
                className='btn'
                target='_blank'
                rel='noopener noreferrer'
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='btnFont'>
          <a
            href='https://github.com/TOC-WebScrape/bangkaew-frontend'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Frontend Github</span>
          </a>
        </div>
        <div className='footerContent'>
          <h3>BANGKAEW GITHUB</h3>
          <p>
            In this TOC's subject project.We are doing 'web scrapping' and we
            divided into 2 team. Frontend and Backend. You can visit our
            github's project instead. Enjoy.
          </p>
        </div>
        <div className='btnBack'>
          <a
            href='https://github.com/TOC-WebScrape/bangkaew-backend'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Backend Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
