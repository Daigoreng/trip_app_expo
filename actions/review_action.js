const FETCH_ALL_REVIEWS = 'fetch_all_reviews';

export const fetchAllReviews = () => {

  return {type:FETCH_ALL_REVIEWS, payload: allReviewsTmp};

};

const GREAT = 'sentiment-very-satisfied';
const GOOD = 'sentiment-satisfied';
const POOR = 'sentiment-dissatisfied';


const allReviewsTmp =[
  {
    country:'USA',
    dateFrom:'Jan/15/2018',
    dateTo:'Jan/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GREAT,
  },
  {
    country: 'USA',
    dateFrom: 'Feb/15/2018',
    dateTo: 'Feb/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: GOOD,
  },
  {
    country: 'USA',
    dateFrom: 'Mar/15/2018',
    dateTo: 'Mar/25/2018',
    imageURIs: [
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
      require('../assets/add_image_placeholder.png'),
    ],
    rank: POOR,
  },

]; 