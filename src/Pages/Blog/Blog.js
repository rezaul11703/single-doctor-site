import React from 'react';

const Blog = () => {
  return (
    <div className='container mx-auto mt-5'>
      <>
      <h2>  13.1 Difference between authorization and authentication</h2>
          <p>authorization means what can user  see or perform in a web site wheras authentication means protected way for  the user to visit a website</p>
      </>
      <> <h2>13.2 Why are you using firebase? What other options do you have to implement authentication?</h2>
          <p> Firebase is the part of google authentication which is a thrid party authentication site ,they secured are website so easy that it will make us so many times to secure it . SO we use firbase. Beside firebase there are Auth0, AUthess, Octa, Frontegg etc </p>
      </>
      <><h2> 13.3 What other services does firebase provide other than authentication</h2>
      <p> With out authentication firebase can provide realtime database, storage, hosting etc </p></>
    </div>
  );
};

export default Blog;