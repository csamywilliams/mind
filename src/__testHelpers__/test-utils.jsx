import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from '../theme';

const AllProviders = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
	render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
