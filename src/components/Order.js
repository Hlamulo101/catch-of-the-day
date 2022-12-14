
import React from "react";
import propTypes from "prop-types";
import {formatPrice} from "../helpers";
import {TransitionGroup,CSSTransition} from "react-transition-group";
import { object } from "prop-types";

class Order extends React.Component{
    static propTypes={
       fishes:propTypes.object,
       order:propTypes.object,
       removeFromOrder:propTypes.func 
    };
    renderOrder=key=>{
        
    const fish=this.props.fishes[key];
    const count =this.props.order[key];
    const isAvailable=fish && fish.status==='available';
    if(!isAvailable){
      return (
        <CSSTransition 
classNames="order" 
key={key}
timeout={{enter:250,exit:250}} >
       <li key={key}>
        sorry {fish?fish.name:'fish'} is not available
      </li>
      </CSSTransition>
      );
    }
    return (
<CSSTransition 
classNames="order" 
key={key}
timeout={{enter:500,exit:500}} >
   
    <li key={key}>
    <span>
        <TransitionGroup component="span" className="count">
            <CSSTransition classNames="count"
             key={count}
              timeout={{enter:500,exit:500}}>
            <span>{count}</span>
            </CSSTransition>
        </TransitionGroup>
        lbs {fish.name}
     {formatPrice (count*fish.price)}
     <button onClick={()=>this.props.removeFromOrder(key)}>
         &times;
         </button>
     </span>
    </li>
    </CSSTransition>
    );
 };
render(){
    const orderId=Object.keys(this.props.order);
    const total=orderId.reduce((prevTotal,key)=>{
    
    const fish=this.props.fishes[key];
    const count =this.props.order[key];
    const isAvailable=fish && fish.status==='available';
    if(isAvailable){
    return prevTotal+(count*fish.price);
    }
    return prevTotal;
    },0);
return(
   <div className="order-wrap">
      <h2>Order!!</h2> 
      <TransitionGroup component="ul" className="order">{orderId.map(this.renderOrder)}
         
      </TransitionGroup>
      <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
      </div>
   </div> );
}
}

export default Order;