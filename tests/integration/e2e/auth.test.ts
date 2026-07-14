import { test} from '@playwright/test';

test.describe('Auth Test', () => {
  test('test', async ({ request }) => {

    const responsePromise = await request.post(
      'https://dojo.upexgalaxy.com/api/auth/register',
      {
        data: {
          email: 'testioii@example.com',
          password: 'password123',
          name: 'Test User',
        }
      }
    );

    const status = responsePromise.status();

    console.log(status);

  });
});