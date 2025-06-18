// import React, { useEffect } from "react";
// import CardList from "../components/CardList";
// import SearchBox from "../components/SearchBox";
// import Scroll from "../components/Scroll";
// import { connect } from "react-redux";
// import { setSearchField, requestRobots } from "../actions";
// import ErrorBoundry from "../components/ErrorBoundry";
// import "./App.css";

// const mapStateToProps = (state) => ({
//   searchField: state.search.searchField,
//   robots: state.request.robot,
//   isPending: state.request.isPending,
//   error: state.request.error,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//   onRequestRobots: () => dispatch(requestRobots()), // Corrected to dispatch the action creator
// });

// const App = ({
//   searchField,
//   onSearchChange,
//   onRequestRobots,
//   robots,
//   isPending,
//   error,
// }) => {
//   //const [robots, setRobots] = useState([]);
//   //const [searchField, setSearchField] = useState("");

//   // const onSearch = (event) => {
//   //   setSearchField(event.target.value);
//   // };

//   useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/users")
//     //   .then((response) => response.json())
//     //   .then((users) => {
//     //     setRobots(users);
//     //   });
//     onRequestRobots();
//   }, []);

//   const filteredRobots = robots.filter((robot) => {
//     return robot.name.toLowerCase().includes(searchField.toLowerCase());
//   });

//   if (!isPending) {
//     return <h1>Loading</h1>;
//   } else {
//     return (
//       <div className="tc">
//         <h1 className="f1">RoboFriends</h1>

//         <SearchBox searchChange={onSearchChange} />
//         <Scroll>
//           <ErrorBoundry>
//             <CardList robots={filteredRobots} />
//           </ErrorBoundry>
//         </Scroll>
//       </div>
//     );
//   }
// };

// /*class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ robots: users }));
//   }

//   onSearch = (event) => {
//     this.setState({ searchField: event.target.value });
//   };

//   render() {
//     const { robots, searchField } = this.state;
//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     if (!robots.length) {
//       return <h1>Loading</h1>;
//     } else {
//       return (
//         <div className="tc">
//           <h1 className="f1">RoboFriends</h1>
//           <SearchBox searchChange={this.onSearch} />
//           <Scroll>
//             <ErrorBoundry>
//               <CardList robots={filteredRobots} />
//             </ErrorBoundry>
//           </Scroll>
//         </div>
//       );
//     }
//   }
// }*/

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

const mapStateToProps = (state) => ({
  searchField: state.search.searchField, // Correct state path
  robots: state.request.robots, // Correct state path
  isPending: state.request.isPending,
  error: state.request.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()), // Correct dispatch usage
});

const App = ({
  searchField,
  onSearchChange,
  onRequestRobots,
  robots,
  isPending,
  error,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (isPending) {
    return <h1>Loading</h1>; // Correct condition
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
