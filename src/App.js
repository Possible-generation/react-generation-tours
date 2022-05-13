// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tour from './components/tour';
import { tourList } from './components/tourlist';

export default class App extends Component {
  state = {
    tours: tourList,
  };
  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <div className='bg-blue-400 w-full'>
        <Navbar />

        <section className='  w-3/4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:w-5/6 xl:grid-cols-4 my-0 mx-auto p-8 '>
          {tours.map((tour) => {
            return (
              <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
            );
          })}
        </section>
      </div>
    );
  }
}
