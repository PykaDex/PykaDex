import styles from './stats.module.scss';

import { useSelector } from 'react-redux';

import StatsBar from './stats-bar/stats-bar';

export function Stats(props) {
  const data = useSelector((state) => state.returnData);
  const stats = data.stats;

  const types = [
    'HP',
    'Attack',
    'Sp. Attack',
    'Defense',
    'Sp. Defense',
    'Speed',
  ];

  const genBars = (statTyp) => {
    const val = stats[statTyp];
    const valBar = Math.round(val / 25);
    const blankBar = 10 - valBar;

    let type = '';
    let classVar = '';

    switch (true) {
      case statTyp === 'HP':
        type = 'Health Points';
        classVar = 'Hp';

        break;
      case statTyp === 'Attack':
        type = 'Attack';
        classVar = 'At';
        break;
      case statTyp === 'Sp. Attack':
        type = 'Special Attack';
        classVar = 'SAt';
        break;
      case statTyp === 'Defense':
        type = 'Defense';
        classVar = 'Df';
        break;
      case statTyp === 'Sp. Defense':
        type = 'Special Defense';
        classVar = 'SDf';
        break;
      case statTyp === 'Speed':
        type = 'Speed';
        classVar = 'Sp';
        break;
    }

    const returnObj = {
      type: type,
      classAssign: classVar,
      score: [valBar, blankBar],
    };

    return returnObj;
  };

  return (
    <div className={styles['container']}>
      <StatsBar statsVal={genBars('HP')}></StatsBar>
      <StatsBar statsVal={genBars('Attack')}></StatsBar>
      <StatsBar statsVal={genBars('Sp. Attack')}></StatsBar>
      <StatsBar statsVal={genBars('Defense')}></StatsBar>
      <StatsBar statsVal={genBars('Sp. Defense')}></StatsBar>
      <StatsBar statsVal={genBars('Speed')}></StatsBar>
    </div>
  );
}
export default Stats;
