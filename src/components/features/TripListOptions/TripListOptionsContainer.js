import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationFrom, changeDurationTo, changeTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationFrom: from => dispatch(changeDurationFrom(from)),
  changeDurationTo: to => dispatch(changeDurationTo(to)),
  changeTags: tags => dispatch(changeTags(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
