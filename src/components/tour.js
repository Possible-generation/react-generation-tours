// import mountain from './mountain.jpg';
import cancel from './cancel.svg';
import menu from './arrow2.png';
import { Component } from 'react';

export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className='bg-gray-300 rounded-xl my-4 mx-0 relative'>
        <div className='relative hover:opacity-100'>
          <img className='w-full rounded-t-xl rounded-r-xl' src={img} alt='' />
          <span
            className='absolute top-2.5 right-2.5 text-3xl cursor-pointer transition-all opacity-0 hover:opacity-100'
            onClick={() => removeTour(id)}
          >
            <img className='w-5 h-5' src={cancel} alt='' />
          </span>
        </div>
        <div className='py-4 px-2'>
          <h3 className='uppercase text-blue-700'>{city}</h3>
          <h4 className='capitalize text-black'>{name}</h4>
          <h5 className=' capitalize'>
            info
            <span
              className='ml-1  text-xl cursor-pointer'
              onClick={this.handleInfo}
            >
              <img className='w-6 h-6' src={menu} alt='' />
            </span>
          </h5>
        </div>
        <div className=' w-full h-full m-auto top-0 right-0 left-0 p-10 '>
          {' '}
          {this.state.showInfo && (
            <p className=' absolute  top-1/4  m-auto bg-white p-1 overflow-y-auto'>
              {info}
            </p>
          )}
        </div>
      </article>
    );
  }
}
