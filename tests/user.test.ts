import { User } from '../src/models/user/user';

test('it should be ok', () => {
	const user = new User();

	user.name = 'Claro';

	expect(user.name).toEqual('Claro');
});