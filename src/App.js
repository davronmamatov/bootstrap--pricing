import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className='d-flex justify-content-between p-4'>
        <h1>Company name</h1>
        <div className='menu'>
          <a href="#">Features</a>
          <a href="#">Enterprise</a>
          <a href="#">Support</a>
          <a href="#">Pricing</a>
          <button type='button'>Sign up</button>
        </div>
      </header>
      <section>
        <div className="container">
          <div className='pricing'>
            <h2 className='text-center'>Pricing</h2>
            <p className='text-center'>
              Quickly build an effective pricing table
              for your potential customers with this Bootstrap 
              example. It's built with default Bootstrap components 
              and utilities with little customization.
            </p>
          </div>
          <div className='d-flex justify-content-between'>
            <div class="card text-center me-5 shadow">
              <div class="card-header display-6">
                <b>Free</b>
              </div>
              <div class="card-body">
              <h5 class="card-title display-4"><b>$0</b> / <span className='display-6'>mo</span></h5>
              <p class="card-text">
                10 users included <br /> 
                2 GB of storage <br />
                Email support <br />
                Help center access
              </p>
              <a href="#" class="btn btn-primary sign">Sign up for free</a>
              </div>
            </div>
            <div class="card text-center shadow">
              <div class="card-header display-6">
                <b>Pro</b>
              </div>
              <div class="card-body">
              <h5 class="card-title display-4"><b>$15</b> / <span className='display-6'>mo</span></h5>
              <p class="card-text">
                20 users included <br />
                10 GB of storage <br />
                Priority email support <br />
                Help center access
              </p>
              <a href="#" class="btn btn-primary">Get satarted</a>
              </div>
            </div>
            <div class="card text-center ms-5 shadow">
              <div class="card-header display-6">
                <b>Enterprise</b>
              </div>
              <div class="card-body">
              <h5 class="card-title display-4"><b>$29</b> / <span className='display-6'>mo</span></h5>
              <p class="card-text">
                30 users included <br />
                15 GB of storage <br />
                Phone and email support <br />
                Help center access
              </p>
              <a href="#" class="btn btn-primary">Contact us</a>
              </div>
            </div>
          </div>
          <hr />

          <div className="d-flex justify-content-between">
            <span className='spn1'>
              <img width={30} height={30} src="data:image/png;base64,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" alt="" />
              <p>© 2017-2018</p>
            </span>
            <span className='spn2'>
              <h4>Features</h4>
              <a href="#">Cool stuff</a> <br />
              <a href="#">Random feature</a> <br />
              <a href="#">Team feature</a> <br />
              <a href="#">Stuff for developers</a> <br />
              <a href="#">Another one</a> <br />
              <a href="#">Last time</a> 
            </span>
            <span className='spn2'>
              <h4>Resources</h4>
              <a href="#">Resource</a> <br />
              <a href="#">Resource name</a> <br />
              <a href="#">Another resource</a> <br />
              <a href="#">Final resource</a>
            </span>
            <span className='spn2'>
              <h4>About</h4>
              <a href="#">Team</a> <br />
              <a href="#">Locations</a> <br />
              <a href="#">Privacy</a> <br />
              <a href="#">Terms</a>
            </span>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
