import './Business.css';



function Business(props) {
  return (
    
    <div class="card-container">
      <div class="image">
        <img src={props.imageSrc} alt="image of pizzeria"/>
      </div>
      <h1>{props.name}</h1>
      <div class="info-container">
        <div class="location-container">
          <p class="txt">{props.address}</p>
          <p class="txt">{props.city}</p>
          <div class="state-zip">
            <span class="txt">{props.state + " "}</span>
            <span class="txt">{props.zipCode}</span>  
          </div>
        </div> 
        <div class="rating-container">
          <p class="txt golden upper">{props.category}</p>
          <p class="txt golden">{props.rating + " stars"}</p>
          <p class="txt">{props.reviewCount + " reviews"}</p>
        </div> 
      </div>
    </div>
    
  );
}   


export default Business;
// This component is a simple representation of a business card. 
// It includes an image, name, address, city, state, zipcode, category, 
// rating, and review count. The data is currently hardcoded, 
// but it can be easily modified to accept props or fetch data
//  from an API in the future. The component is styled with CSS 
// classes for better presentation.    
