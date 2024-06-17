import { useState } from 'react';
import { rust_icp_backend } from 'declarations/rust_icp_backend';

function App() {
  const [report, setReport] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const body = event.target.elements.body.value;
    const location = event.target.elements.location.value;
    rust_icp_backend.report(title, body, location).then((report) => {
      setTitle(title);
      setBody(body);
      setLocation(location);
      setReport(report);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo"/>
      
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Judul Pengaduan &nbsp;</label>
          <input id="title" alt="title" type="text" />
        </div>
        <div class="form-group">
          <label htmlFor="body">Isi Pengaduan &nbsp;</label>
          <textarea id="body" alt="body" type="text" minLength="5" maxLength="300"/>
        </div>
        <div class="form-group">
          <label htmlFor="location">Lokasi Pengaduan &nbsp;</label>
          <input id="location" alt="location" type="text" />
        </div>
        
        <button type="submit">Click Me!</button>
      </form>
      <section id="report">
        <h3 className="title">{title}</h3>
        <p className="location">{location}</p>
        <p className="body">{body}</p>
      </section>
    </main>
  );
}

export default App;
