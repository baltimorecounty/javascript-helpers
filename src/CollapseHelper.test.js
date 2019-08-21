import CollapseHelper from './CollapseHelper';

test('exports a11y-toggle module from npm', () => {
	expect(window.a11yToggle).toBeDefined();
	expect(typeof window.a11yToggle).toEqual('function');
});
