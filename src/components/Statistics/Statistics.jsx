import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage} style={{ color: getColor(stat.percentage) }}>
                {stat.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getColor(percentage) {
  if (percentage < 20) {
    return '#FF0000'; // Red
  } else if (percentage < 40) {
    return '#FFA500'; // Orange
  } else if (percentage < 60) {
    return '#FFFF00'; // Yellow
  } else if (percentage < 80) {
    return '#008000'; // Green
  } else {
    return '#0000FF'; // Blue
  }
}

