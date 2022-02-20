export default function (req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      publishableKey: process.env.STRIPE_PUBLISHABLE,
    });
  } else {
    res.statue(405).end('Method not allowed');
  }
}
