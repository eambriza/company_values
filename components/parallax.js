import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CARD from './card';

const conatinerFluid = {
  paddingRight: '50px',
  paddingLeft: '50px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

const container1 = {
  ...conatinerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

const useStyles = makeStyles((theme) => ({
  uni: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    minWidth: '250px',

    margin: '-465px 400px 0px',
    [theme.breakpoints.down('lg')]: {
      margin: '-465px 100px 0px',
    },

    borderRadius: '2px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },

  container: {
    zIndex: '12',
    color: '#000000',
    ...container1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '35px 50px 5px 50px',
    flexWrap: 'wrap',
    margin: 0,
  },

  listhover: {
    backgroundColor: '#FFFF00',
    border: '1px solid black',
    borderRadius: '4px',
    boxSizing: 'border-box',
    color: '#pink',
    cursor: 'pointer',
  },
  column: {
    padding: '0px',
    margin: 0,
    [theme.breakpoints.down('lg')]: {
      minWidth: '47%',
    },
  },

  header: {
    borderBottom: '2px solid #e6e6e6',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '130%',
    textTransform: 'uppercase',
    letterSpacing: '.5px',
  },

  ul: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    padding: 0,
  },

  li: {
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
    margin: '0 0 2px -8px',
    position: 'relative',
  },

  p: {
    display: 'inline-block',
    lineHeight: '125%',
    margin: 0,
    border: '1px solid white',
    padding: '5px 7px',
  },

  teamvalues: {
    color: '#3359ec',
  },
  personalhealth: {
    color: '#00b4bd',
  },
  dailyroutines: {
    color: '#0f98f9',
  },
  engineering: {
    color: '#00ad75',
  },
  careergrowth: {
    color: '#e41085',
  },
  strategy: {
    color: '#9736c7',
  },
  companyproperties: {
    color: '#b12887',
  },

  matches: {
    alignItems: 'center',
    backgroundColor: '#00dcca',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    justifyContent: 'center',
    paddingLeft: '5px',
    position: 'absolute',
    right: '350px',
    bottom: '150px',
    width: '100px',
    zIndex: '4',

    [theme.breakpoints.down('lg')]: {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      bottom: '150px',
      right: '0',
      position: 'absolute',
    },
  },

  matchesNumbers: {
    color: 'white',
    display: 'block',
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '100%',
    textAlign: 'center',
  },

  matchesSpan: {
    color: '#505050',
    fontSize: '16px',
    fontWeight: '500',
    maxWidth: '90px',
    textAlign: 'center',
  },

  matchesArrow: {
    color: '#505050',
    display: 'block',
    fontSize: '16px',
    fontWeight: '500',
    maxWidth: '90px',
    paddingTop: '4px',
    textAlign: 'center',
  },

  selectvalues: {
    fontSize: '16px',
    fontWeight: '500',
    maxWidth: '90px',
    textAlign: 'center',
  },

  results: {
    marginTop: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '35px',
    paddingLeft: '360px',
    paddingRight: '360px',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
  },
}));

const teamvalues2 = [
  { id: 'ENGAGES WITH COMMUNITY', selected: 'false' },
  { id: 'TEAM IS DIVERSE', selected: 'false' },
  { id: 'CONTINUOUS FEEDBACK', selected: 'false' },
  { id: 'IMPRESSIVE TEAM MEMBERS', selected: 'false' },
  { id: 'BONDED BY LOVE FOR PRODUCT', selected: 'false' },
  { id: 'CREATIVE + INNOVATIVE', selected: 'false' },
  { id: 'CROSS-DEPARTMENT COLLABORATION', selected: 'false' },
  { id: 'OPEN COMMUNICATION', selected: 'false' },
  { id: 'EQ > IQ', selected: 'false' },
  { id: 'FLAT ORGANIZATION', selected: 'false' },
  { id: 'RISK-TAKING > STABILITY', selected: 'false' },
  { id: 'WEARS MANY HATS', selected: 'false' },
  { id: 'HEAVILY TEAM ORIENTED', selected: 'false' },
];

const personalhealth2 = [
  { id: 'ACTIVELY PRACTICES INCLUSION', selected: 'false' },
  { id: 'WORK/LIFE BALANCE', selected: 'false' },
  { id: 'COMMITTED TO PERSONAL GROWTH', selected: 'false' },
  { id: 'IDEAL FOR PARENTS', selected: 'false' },
  { id: 'SAFE ENVIRONMENT TO FAIL', selected: 'false' },
  { id: 'SUPPORTS PHYSICAL WELLNESS', selected: 'false' },
  { id: 'FOSTERS PSYCHOLOGICAL SAFETY', selected: 'false' },
];

const dailyroutines2 = [
  { id: 'EATS LUNCH TOGETHER', selected: 'false' },
  { id: 'FLEXIBLE WORK ARRANGEMENTS', selected: 'false' },
  { id: 'LIGHT MEETINGS', selected: 'false' },
  { id: 'FRIENDS OUTSIDE OF WORK', selected: 'false' },
  { id: 'HAS GOOD BEER', selected: 'false' },
  { id: 'THOUGHTFUL OFFICE LAYOUT', selected: 'false' },
];

const engineering2 = [
  { id: 'HIGH QUALITY CODE BASE', selected: 'false' },
  { id: 'PAIR PROGRAMS', selected: 'false' },
  { id: 'OPEN SOURCE CONTRIBUTOR', selected: 'false' },
  { id: 'START-TO-FINISH OWNERSHIP', selected: 'false' },
  { id: 'USES AGILE METHODOLOGIES', selected: 'false' },
  { id: 'CUTTING-EDGE TECHNOLOGIES', selected: 'false' },
  { id: 'FAST-PACED ENVIRONMENT', selected: 'false' },
  { id: 'CONTINUOUS DELIVERY', selected: 'false' },
];

const careergrowth2 = [
  { id: 'PROMOTES FROM WITHIN', selected: 'false' },
  { id: 'INTERNAL MOBILITY', selected: 'false' },
  { id: 'GOOD FOR JUNIOR DEVS', selected: 'false' },
  { id: 'HAS INTERNSHIP PROGRAM', selected: 'false' },
  { id: 'HIGH EMPLOYEE RETENTION', selected: 'false' },
];

const strategy2 = [
  { id: 'CUSTOMER COMES FIRST', selected: 'false' },
  { id: 'ENGINEERING-DRIVEN', selected: 'false' },
  { id: 'PRODUCT-DRIVEN', selected: 'false' },
  { id: 'DESIGN-DRIVEN', selected: 'false' },
  { id: 'DATA-DRIVEN', selected: 'false' },
  { id: 'RAPIDLY GROWING TEAM', selected: 'false' },
];

const companyproperties2 = [
  { id: 'B2B', selected: 'false' },
  { id: 'B2C', selected: 'false' },
  { id: 'SELF-FUNDED', selected: 'false' },
  { id: 'TECHNICAL FOUNDER(S)', selected: 'false' },
  { id: 'PBC / B-CORP', selected: 'false' },
  { id: 'REMOTE-OK', selected: 'false' },
];

export default function PARALLAX(props) {
  const [countSelected, setCountSelected] = useState(0);
  const [teamValues, setTeamValues] = useState(teamvalues2);
  const [personalHealth, setPersonalHealth] = useState(personalhealth2);
  const [dailyRoutines, setDailyRoutines] = useState(dailyroutines2);
  const [engineerinG, setEngineerinG] = useState(engineering2);
  const [careerGrowth, setCareerGrowth] = useState(careergrowth2);
  const [strategY, setStrategY] = useState(strategy2);
  const [companyProperties, setCompanyProperties] = useState(
    companyproperties2,
  );

  const handleHover = (e, background, color) => {
    if (e.target.style.color != 'white') {
      e.target.style.background = background;
      e.target.style.borderColor = color;
      e.target.style.borderRadius = '4px';
      e.target.style.cursor = 'pointer';
    }
  };

  const handleClick = (e, obj, setObj, indexID, background) => {
    const newArr = [...obj];

    if (e.target.style.color != 'white') {
      newArr[indexID].selected = 'true';
      setCountSelected(countSelected + 1);

      e.target.style.background = background;
      e.target.style.borderColor = background;
      e.target.style.color = 'white';
      e.target.style.borderRadius = '4px';
      e.target.style.cursor = 'pointer';
    } else {
      newArr[indexID].selected = 'false';
      setCountSelected(countSelected - 1);
      e.target.style.background = 'white';
      e.target.style.borderColor = 'white';
      e.target.style.color = background;
      e.target.style.borderRadius = '4px';
      e.target.style.cursor = 'pointer';
    }
    setObj(newArr);
  };

  const classes = useStyles(props);
  return (
    <div>
      <div className={classes.matches}>
        <div>
          {countSelected > 0 && (
            <div>
              <p className={classes.matchesNumbers}>{countSelected}</p>
              {/* <span className={classes.matchesSpan}>matches</span>
              <span className={classes.matchesArrow}>⬇️</span> */}
            </div>
          )}
          {countSelected == 0 && (
            <p className={classes.selectvalues}>select values</p>
          )}
        </div>
      </div>
      <div className={classes.uni}>
        <div className={classes.container}>
          <div className={classes.column}>
            <span className={classes.header}>Team Values</span>
            <ul className={classes.ul}>
              {teamvalues2.map((data, index) => (
                <li className={classes.li} key={index}>
                  <span className={classes.teamvalues}>
                    <p
                      className={classes.p}
                      onMouseEnter={(e) =>
                        handleHover(e, 'rgba(51, 89, 236, 0.15)', '#3359ec')
                      }
                      onMouseLeave={(e) => handleHover(e, '#FFFFFF', 'white')}
                      onClick={(e) =>
                        handleClick(
                          e,
                          teamValues,
                          setTeamValues,
                          index,
                          '#3359ec',
                        )
                      }
                    >
                      {data.id}
                    </p>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={classes.column}>
            <span className={classes.header}>PERSONAL HEALTH </span>
            <ul className={classes.ul}>
              {personalhealth2.map((data, index) => (
                <li className={classes.li} key={index}>
                  <span className={classes.personalhealth}>
                    <p
                      className={classes.p}
                      onMouseEnter={(e) =>
                        handleHover(e, 'rgba(0, 180, 189, 0.15)', '#00b4bd')
                      }
                      onMouseLeave={(e) => handleHover(e, '#FFFFFF', 'white')}
                      onClick={(e) =>
                        handleClick(
                          e,
                          personalHealth,
                          setPersonalHealth,
                          index,
                          '#00b4bd',
                        )
                      }
                    >
                      {data.id}
                    </p>
                  </span>
                </li>
              ))}
            </ul>

            <span className={classes.header}>DAILY ROUTINES</span>
            <ul className={classes.ul}>
              {dailyroutines2.map((data, index) => (
                <li className={classes.li} key={index}>
                  <span className={classes.dailyroutines}>
                    <p
                      className={classes.p}
                      onMouseEnter={(e) =>
                        handleHover(e, 'rgba(15, 152, 249, 0.15)', '#0f98f9')
                      }
                      onMouseLeave={(e) => handleHover(e, '#FFFFFF', 'white')}
                      onClick={(e) =>
                        handleClick(
                          e,
                          dailyRoutines,
                          setDailyRoutines,
                          index,
                          '#0f98f9',
                        )
                      }
                    >
                      {data.id}
                    </p>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={classes.column}>
            <span className={classes.header}>ENGINEERING</span>
            <ul className={classes.ul}>
              {engineering2.map((data, index) => (
                <li className={classes.li} key={index}>
                  <span className={classes.engineering}>
                    <p
                      className={classes.p}
                      onMouseEnter={(e) =>
                        handleHover(e, 'rgba(0, 173, 117, 0.15)', '#00ad75')
                      }
                      onMouseLeave={(e) => handleHover(e, '#FFFFFF', 'white')}
                      onClick={(e) =>
                        handleClick(
                          e,
                          engineerinG,
                          setEngineerinG,
                          index,
                          '#00ad75',
                        )
                      }
                    >
                      {data.id}
                    </p>
                  </span>
                </li>
              ))}
            </ul>

            <span className={classes.header}>CAREER GROWTH</span>
            <ul className={classes.ul}>
              {careergrowth2.map((data, index) => (
                <li className={classes.li} key={index}>
                  <span className={classes.careergrowth}>
                    <p
                      className={classes.p}
                      onMouseEnter={(e) =>
                        handleHover(e, 'rgba(228, 16, 133, 0.15)', '#e41085')
                      }
                      onMouseLeave={(e) => handleHover(e, '#FFFFFF', 'white')}
                      onClick={(e) =>
                        handleClick(
                          e,
                          careerGrowth,
                          setCareerGrowth,
                          index,
                          '#e41085',
                        )
                      }
                    >
                      {data.id}
                    </p>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={classes.column}>
            <span className={classes.header}>STRATEGY</span>
            <ul className={classes.ul}>
              {strategy2.map((data, index) => (
                <li className={classes.li} key={index}>
                  <span className={classes.strategy}>
                    <p
                      className={classes.p}
                      onMouseEnter={(e) =>
                        handleHover(e, 'rgba(151, 54, 199, 0.15)', '#9736c7')
                      }
                      onMouseLeave={(e) => handleHover(e, '#FFFFFF', 'white')}
                      onClick={(e) =>
                        handleClick(e, strategY, setStrategY, index, '#9736c7')
                      }
                    >
                      {data.id}
                    </p>
                  </span>
                </li>
              ))}
            </ul>

            <span className={classes.header}>COMPANY PROPERTIES</span>
            <ul className={classes.ul}>
              {companyproperties2.map((data, index) => (
                <li className={classes.li} key={index}>
                  <span className={classes.companyproperties}>
                    <p
                      className={classes.p}
                      onMouseEnter={(e) =>
                        handleHover(e, 'rgba(177, 40, 135, 0.15)', '#b12887')
                      }
                      onMouseLeave={(e) => handleHover(e, '#FFFFFF', 'white')}
                      onClick={(e) =>
                        handleClick(
                          e,
                          companyProperties,
                          setCompanyProperties,
                          index,
                          '#b12887',
                        )
                      }
                    >
                      {data.id}
                    </p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={classes.results}>
        <CARD />
        <CARD />
        <CARD />
        <CARD />
        <CARD />
        <CARD />
        <CARD />
        <CARD />
        <CARD />
        <CARD />
      </div>
    </div>
  );
}
