class App extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
  
    return (    
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer list={window.VideoPlayer}/>
          </div>
          <div className="col-md-5">
            <VideoList list={window.exampleVideoData}/>
          </div>
        </div>
      </div>
    );    
  }
}

// <div><h5><em>videoList</em> view goes here</h5></div>

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
