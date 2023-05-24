import { useEffect } from 'react';
import db from './firebase/db.ts';
import { collection, onSnapshot } from 'firebase/firestore';

const getData = () => {
  onSnapshot(collection(db, 'test'), (snap) => {
    snap.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  });
};

function App() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <section>
        <h2>App</h2>
      </section>
    </div>
  );
}

export default App;
