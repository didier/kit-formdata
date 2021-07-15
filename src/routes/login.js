export async function post(request) {
  const { body } = request;

  /**
   * Works as expected using `FormData` methods.
   */
  const email = body.get('email');
  const password = body.get('password');

  return {
    body: { email, password },
  };
}
