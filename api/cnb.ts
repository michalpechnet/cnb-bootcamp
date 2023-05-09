export const config = {
  runtime: 'edge',
};

const handler = async () => {
  return new Response(
    JSON.stringify({
      message: 'Hello, world!',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};

export default handler;
