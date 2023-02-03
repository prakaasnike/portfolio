import defaultTheme from 'windicss/defaultTheme';

export const colors: Record<string, Record<number, string>> = {
	...defaultTheme.colors,
	gray: {
		50: '#f9fafb',
		100: '#eaeaeb',
		200: '#cacbcd',
		300: '#a7a9ac',
		400: '#696c71',
		500: '#282d34',
		600: '#24292f',
		700: '#181b20',
		800: '#121518',
		900: '#0c0e10',
	},
	primary: {
		50: '#ffffff',
		100: '#d0fff3',
		200: '#a1ffe6',
		300: '#71ffda',
		400: '#42ffcd',
		500: '#13ffc1',
		600: '#00e3a7',
		700: '#00b484',
		800: '#008462',
		900: '#00553f',
	},
};
