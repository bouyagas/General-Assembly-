import React, {Component} from 'react'
import Ball from './Components/Ball/Ball';


export default class App extends Component {

	constructor(){
		super();

		this.state = {
            selectedIndex: 0,
			balls: [
                 {
               	  url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSGtg6ebevctkiQ791tOt4Gk8y3GT9PS-Qv0QwbZUgkT17_W5yp'
		         },

                 {
                 	url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCTa7KTqo8_Plv5nynx908GufAqu_gIL8dKi7-pSXrtoStlmu88g'
                 },

                 {
                 url: 'http://www.picturesof.net/_images_300/A_Smiling_Soccer_Ball_Royalty_Free_Clipart_Picture_090414-193188-141009.jpg'
                 },

                 {
                  url: 'http://content.mycutegraphics.com/graphics/sports/baketball-ball.png'
                 },
                 {
                 url: 'http://www.oneworldplayproject.com/wp-content/uploads/2014/10/Ball-710x450.jpg'
	              },

	              {
	              	url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Hairy_ball_one_pole.jpg/220px-Hairy_ball_one_pole.jpg'
	              },

	              {
	              	url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0dMvNKOS41wetdHnW1RXtjwuqvYWuz5yMy3HX_A0uorup24Wmdw'
	              }
			]
		};
	}
    componentWillMount(){
       // this.selectRandomBall();
       this.startInterval();

    }

     startInterval(){
       const ref = setInterval(() =>{
        this.selectRandomBall();
       }, 1000)

       this.setState({
       	IntervalRef: ref
       })
     }
   componentWillUmount(){
   	clearInterval(this.start.IntervalRef)
   }
	selectRandomBall(){
		this.setState({
			selectedIndex: Math.floor(Math.random() * this.state.balls.length)
		});
	}

	render() {
		return(
		 <Ball
		 url={this.state.balls[this.state.selectedIndex].url}
          selectRandomBall={this.selectRandomBall.bind(this)}
		 />
	   );
	}
}
