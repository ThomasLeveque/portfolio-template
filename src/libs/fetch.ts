import fetch from 'isomorphic-unfetch';

const CFUrl = 'https://us-central1-portfolio-tempalte.cloudfunctions.net';

export default async function <JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(`${CFUrl}${input}`, init);
  return res.json();
}
