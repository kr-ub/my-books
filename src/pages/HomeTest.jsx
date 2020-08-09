// import React from "react";
// import withAuth from "../hocs/withAuth";
// import axios from "axios";
// import Counter from "../components/Counter";
// import Example9 from "../components/Example9";
// import PersonContext from "../context/PersonContext";
// import { TweenMax } from "gsap";
// import "./home.scss";
// import Navigation from "../components/Navigation";
// import Book from "../components/Book";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import About from "./About";
// import Clock from "react-live-clock";

// class Home extends React.Component {
//   static contextType = PersonContext;
//   state = {
//     books: [],
//     loading: false,
//     error: null,
//   };
//   render() {
//     return (
//       <>
//         <BrowserRouter>
//           <Navigation />
//           <Switch>
//             <Route path="/about" component={About} />
//             <div className="home-body">
//               <h1>HOME</h1>
//               <form className="search">
//                 <Clock format={"YY / MM / DD / HH:mm:ss"} ticking={true} />
//                 <input
//                   type="search"
//                   name="search"
//                   id="search-input"
//                   placeholder="Search...(미구현)"
//                 />
//                 <i className="fas fa-search"></i>
//               </form>
//               <main>
//                 {this.state.error === null &&
//                   this.state.books.map((book, index) => (
//                     <Book
//                       key={book.bookId}
//                       title={book.title}
//                       url={book.url}
//                       message={book.message}
//                       author={book.author}
//                     />
//                   ))}
//               </main>
//               {this.state.loading && <h3>로딩 중...</h3>}
//               {this.state.error && <h3>에러</h3>}
//             </div>
//           </Switch>
//         </BrowserRouter>
//       </>
//     );
//   }
//   async componentDidMount() {
//     document.body.addEventListener("mousemove", eyeball);
//     function eyeball(e) {
//       const eye = document.querySelectorAll(".eye");
//       eye.forEach((eye) => {
//         let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
//         let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
//         let radian = Math.atan2(e.pageX - x, e.pageY - y);
//         let rot = radian * (180 / Math.PI) * -1 + 100;
//         eye.style.transform = `rotate(${rot}deg)`;
//       });
//     }
//     this.setState({
//       loading: true,
//       error: null,
//     });
//     try {
//       // await sleep(3000);
//       TweenMax.staggerFrom("div", 1, { scale: 0 });
//       const response = await axios.get("https://api.marktube.tv/v1/book", {
//         headers: {
//           Authorization: `Bearer ${this.props.token}`,
//         },
//       });
//       console.log(response.data);
//       const books = response.data;
//       console.log(this.props);
//       this.setState({ books, loading: false, error: null });
//     } catch (error) {
//       this.setState({
//         loading: false,
//         error,
//       });
//       console.log(error);
//     }
//   }
// }

// export default withAuth(Home, true);

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }
