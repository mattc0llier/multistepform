import PropTypes from 'prop-types';
import s from './example.module.scss';

const example = () => {

  return (
    <div className={s.root}>
    </div>
  );
};

example.propTypes = {
  children: PropTypes.type
}

export default example;
