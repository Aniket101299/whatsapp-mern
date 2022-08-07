import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
 
const setUserInfo = (userInfo) => {
    cookies.set('userInfo', JSON.stringify(userInfo), { path: '/' });
};

const getUserInfo = () => {
    cookies.get("userInfo");
};

export default cookieManager = {
    setUserInfo,
    getUserInfo,
};