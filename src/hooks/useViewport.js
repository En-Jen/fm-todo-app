import React from 'react';

const useViewport = () => {
	const [width, setWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	// Return the width to use in components
	return { width };
};

export default useViewport;
