const testData = {
  validUser: {
    username: process.env.DEMOBLAZE_USER || 'pavanol',
    password: process.env.DEMOBLAZE_PASSWORD || 'test@123',
  },
  invalidUser: {
    username: process.env.DEMOBLAZE_INVALID_USER || 'akshay',
    password: process.env.DEMOBLAZE_INVALID_PASSWORD || 'test@12',
  },
  buyer: {
    name: process.env.DEMOBLAZE_BUYER_NAME || 'John Doe',
    country: process.env.DEMOBLAZE_BUYER_COUNTRY || 'India',
    city: process.env.DEMOBLAZE_BUYER_CITY || 'Bangalore',
    card: process.env.DEMOBLAZE_BUYER_CARD || '4111111111111111',
    month: process.env.DEMOBLAZE_BUYER_MONTH || '12',
    year: process.env.DEMOBLAZE_BUYER_YEAR || '2027',
  },
};
export default testData;
