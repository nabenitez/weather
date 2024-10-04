# TODOs

- Global state management
- Services module
- Improve input parsers
- Make BFF if api_key is private (I assumed is not!)
- Unit test major component such as weather
- Add enriched behavior for search, that means link to the weather feature to render all the data
- Add functionality to search to select one, currently only render values

# Run the project

You need to add the API KEY value, with the following name:

```bash
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=
```

```bash
npm install
npm run dev
```

# Test the project

- You need to have npm modules installed.

```bash
npm run test:cy
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Reference to boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/HEAD/packages/create-next-app) with Material UI installed.
