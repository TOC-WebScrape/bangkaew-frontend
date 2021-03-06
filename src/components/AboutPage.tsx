import "./About.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { ClassNames } from "@emotion/react";
import {
  AppIcon,
  BOSS_PROFILE,
  JAME_PROFILE,
  KORN_PROFILE,
  PHOOMpat_PROFILE,
  PHOOMw_PROFILE,
  PHUKAO_PROFILE,
  TREE_PROFILE,
} from "../assets/icons";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}: AboutPageProps) => {
  return (
    <div>
      <div className='headBox'>
        <div className='mainBox'></div>
        <div className='sideBox'>
          <Avatar
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
            sx={{ mb: 5, height: 150, width: 150 }}
            src={AppIcon}
          ></Avatar>
          <div className='content'>
            <h6>BANGKAEW</h6>
            <p>
              We are providing cryptocurrency exchange <br /> comparison across
              many website on market.
            </p>
          </div>
        </div>
      </div>

      {/* animate boxes */}
      <div className='boxArea'>
        <p className='BangkaewText'>BANGKAEW</p>
        <div className='spinner-box'>
          <div className='configBorder1'>
            <div className='configCore'></div>
          </div>
          <div className='configBorder2'>
            <div className='configCore'></div>
          </div>
        </div>
        <p className='BangkaewText'>TEAM</p>
      </div>

      {/* card profile area */}
      {/* first 4 persons */}
      <div className='row1'>
        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src={KORN_PROFILE}
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                Apextone<span>Engineer | Front-end</span>
              </h2>
              <p>
                &gt;be me
                <br />
                &gt;front-end developer
                <br />
                &gt;do this work in like 4 days
                <br />
                &gt;mfw it's done
                <br />
              </p>
              <a
                href='https://github.com/ApexTone'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62010356
              </a>
            </figcaption>
          </figure>
        </div>

        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src={PHOOMw_PROFILE}
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                PhoomBeer<span>Engineer | Back-end</span>
              </h2>
              <p>
                good artists copy. great artists steal. Greatest artist copy,
                then paste.{" "}
              </p>
              <a
                href='https://github.com/GoldF15h'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62010318
              </a>
            </figcaption>
          </figure>
        </div>

        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src='https://avatars.githubusercontent.com/u/63555111?v=4://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                BeanBean<span>Engineer | Front-end</span>
              </h2>
              <p>
                We build our Program (website) the way we build our cities:
                over time, without a plan, on top of ruins.{' '}
              </p>
              <a
                href='https://github.com/teethat-lsk'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62010434
              </a>
            </figcaption>
          </figure>
        </div>

        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src='https://avatars.githubusercontent.com/u/50296761?v=4'
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                PhoomPat<span>Engineer | Back-end</span>
              </h2>
              <p>
                I'm looking for something that can deliver a 50-pound payload of
                snow on a small feminine target. Can you suggest something?
                Hello...?{' '}
              </p>
              <a
                href='https://github.com/Poomipat-Ch'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62010722
              </a>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* last 4 persons*/}
      <div className='row2'>
        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src={JAME_PROFILE}
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                iJames<span>Engineer | Front-end</span>
              </h2>
              <p>
                Hello, I'm Jame.This is my blog. My favorite color is green. I
                like to watch tv-series and listen music. Now I'm interested in
                blockchain technology{" "}
              </p>
              <a
                href='https://github.com/j4m3ee'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62010986
              </a>
            </figcaption>
          </figure>
        </div>

        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src={TREE_PROFILE}
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                Treepakorn<span>Engineer | Back-end</span>
              </h2>
              <p>
                I asked God for a M1 mini, but I know God doesn't work that way.
                So I stole a M1 mini and asked for forgiveness.{' '}
              </p>
              <a
                href='https://github.com/T-Pakorn'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62010694
              </a>
            </figcaption>
          </figure>
        </div>

        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src='https://avatars.githubusercontent.com/u/63220854?v=4'
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                Mr.Boss<span>Engineer | Front-end</span>
              </h2>
              <p>
                I'm looking for something that can deliver a 50-pound payload of
                snow on a small feminine target. Can you suggest something?
                Hello...?{' '}
              </p>
              <a
                href='https://github.com/BXSS101'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62011044
              </a>
            </figcaption>
          </figure>
        </div>

        <div className='column'>
          <figure className='cardpro'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src={PHUKAO_PROFILE}
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                PuddingBoi<span>Engineer | Front-end</span>
              </h2>
              <p>
                I'm looking for something that can deliver a 50-pound payload of
                snow on a small feminine target. Can you suggest something?
                Hello...?{' '}
              </p>
              <a
                href='https://github.com/Phukaoo08'
                className='follow'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
              <a href='#' className='info'>
                62010684
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
