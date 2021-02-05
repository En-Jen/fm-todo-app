import BgMobileLight from '../assets/bg-mobile-light.jpg';
import BgDesktopLight from '../assets/bg-desktop-light.jpg';

const theme = {
	id: 'light',
	todoBg: '#fff',
    bodyBg: '#FAFAFA',
    circleBg: 'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
	newTodoPlaceholderText: '#9495A5',
	newTodoTypingText: '#393A4B',
	completedTodoText: '#D1D2DA',
	uncompletedTodoText: '#494C6B',
	filterText: '#9495A5',
	activeFilterText: '#3A7CFD',
    todoBorder: '1px solid #E3E4F1',
	boxShadow: '0 35px 50px -15px rgba(194,195,214,0.5);',
	bgImgMobile: `url(${BgMobileLight})`,
	bgImgDesktop: `url(${BgDesktopLight})`,
};

export default theme;
