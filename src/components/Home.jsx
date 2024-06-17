import Links from './Links'
import Navbar from '../Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="start-title">
        <h1 id='start'>Start Quiz....</h1>
        <Links />
      </div>
    </>
  );
}
