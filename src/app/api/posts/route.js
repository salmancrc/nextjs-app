export async function GET(request) {
  // db call
  // third party api call

  return Response.json(
    [
      {
        "userId": 1,
        "id": 1,
        "title": "are or make repel provide blinded except option reprehend",
        "body": "because and undertakes\ntakes upon the objections that follow expeditiously and when\nreprehends the annoyances as which all\nour things are but are things happen to the architect"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "who is being",
        "body": "is things in time of life\nsequi are nothing reprehensible pain blessed it pains neither\nflee flattery pleasure further or nothing annoyance as rejecting\nwho open not debts we can who neither unless nothing"
      },
    ]
  )
}

export async function POST(request) {
  console.log('request', request)
  const { name } = await request.json();

  return Response.json({ message: name });
}