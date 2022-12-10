import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>OpenAI</title>
      </Head>

      <h1>Welcome to my OpenAI project</h1>
      <p>Click the links below or in the navigation bar to select a project.</p>
      <ul>
        <li>
          <Link href='/imageGenerator'>Image Generator</Link>
        </li>
      </ul>
    </div>
  );
}
