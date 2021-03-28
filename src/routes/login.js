export async function post(request) {
  // Works when using an http client and sending JSON, but fails when submitting via the browser
  const { body } = request;

  return {
    body: body,
  };
}
