import './About.css';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { ClassNames } from '@emotion/react';
import {  BOSS_PROFILE, JAME_PROFILE, KORN_PROFILE, PHOOMpat_PROFILE, PHOOMw_PROFILE, PHUKAO_PROFILE, TREE_PROFILE } from '../assets/icons';


interface AboutPageProps {}



const AboutPage: React.FC<AboutPageProps> = ({}: AboutPageProps) => {
  return (
    <body>
      <div className='mainBox'>
        <Avatar
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
            sx={{mb: 5, height: 150, width: 150 }}
            src='https://avatars.githubusercontent.com/u/63555111?v=4'
        ></Avatar>
        <text
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "cursive",
            fontSize: "30px",
            color: "white",
          }}
        >
          Bangkaew <br /> We are providing crytocurrency exchange comparison across many website on market.
        </text>
      </div>

      {/* animate boxes */}
      <div className="boxArea">
        <text className="BangkaewText">BANGKAEW</text>
        <div className="spinner-box">
          <div className="configBorder1">
            <div className="configCore"></div>
          </div>
          <div className="configBorder2">
            <div className="configCore"></div>
          </div>
        </div>
        <text className="BangkaewText">TEAM</text>
      </div>


      {/* card profile area */}
      {/* first 4 persons */}
      <div className="row1">
        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={KORN_PROFILE} alt="profile-sample4" className="profile" />
              <h2>Apextone<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>
        
        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={PHOOMw_PROFILE} alt="profile-sample4" className="profile" />
              <h2>PhoomBeer<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>

        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src="https://avatars.githubusercontent.com/u/63555111?v=4://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg" alt="profile-sample4" className="profile" />
              <h2>BeanBean<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>

        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={PHOOMpat_PROFILE} alt="profile-sample4" className="profile" />
              <h2>PhoomPat<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* last 4 persons*/}
      <div className="row2">
        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={JAME_PROFILE} alt="profile-sample4" className="profile" />
              <h2>iJames<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>
        
        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={TREE_PROFILE} alt="profile-sample4" className="profile" />
              <h2>Treepangkorn<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>

        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={BOSS_PROFILE} alt="profile-sample4" className="profile" />
              <h2>Mr.Boss<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>

        <div className="column">
          <figure className="cardpro">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
            <figcaption>
              <img src={PHUKAO_PROFILE} alt="profile-sample4" className="profile" />
              <h2>PuddingBoi<span>Engineer</span></h2>
              <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p>
              <a href="#" className="follow">Github</a>
              <a href="#" className="info">Stu ID</a>
            </figcaption>
          </figure>
        </div>
      </div>

    </body>
  );
};

export default AboutPage;
