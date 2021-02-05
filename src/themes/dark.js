import BgMobileDark from '../assets/bg-mobile-dark.jpg';
import BgDesktopDark from '../assets/bg-desktop-dark.jpg';

const theme = {
	id: 'dark',
	todoBg: '#25273D',
	bodyBg: '#171823',
	circleBg:
		'linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
	newTodoPlaceholderText: '#767992',
	newTodoTypingText: '#C8CBE7',
	completedTodoText: '#4D5067',
	uncompletedTodoText: '#C8CBE7',
    filterText: '#5B5E7E',
    filterTextHover: '#E3E4F1',
	activeFilterText: '#3A7CFD',
	todoBorder: '1px solid #393A4B',
	circleBorderHover: '1px solid #979797',
	boxShadow: '0 35px 50px -15px rgba(0,0,0,0.5);',
	bgImgMobile: `url(${BgMobileDark})`,
	bgImgDesktop: `url(${BgDesktopDark})`,
	bgColor: 'red',
};

export default theme;
