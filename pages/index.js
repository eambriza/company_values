import HEAD from '../components/head';
import APPBAR from '../components/appbar2';
import NAV from '../components/nav';
import FOOTER from '../components/footer';
import PARALLAX from '../components/parallax';
import CARD from '../components/card';

export default function Home() {
  return (
    <div>
      <HEAD title="Keyvalues" description="Keyvalues" />
      <body>
        <APPBAR />
        <NAV />
        <PARALLAX />
        <FOOTER />
      </body>
    </div>
  );
}
