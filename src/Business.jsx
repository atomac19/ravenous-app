function Business() {
  return (
    
    <div class="card-container">
      
      <img src="../../public/torre-del-mar.jpg" alt="image"/>
      <h1>Pizzeria</h1>
        <div class="info-container">
          <div class="location-container">
            <p class="txt">Address</p>
            <p class="txt">City</p>
            <div class="state-zip">
              <span class="txt">State</span>
              <span class="txt">Zipcode</span>  
            </div>
          </div> 
          <div class="rating-container">
            <p class="txt golden upper">category</p>
            <p class="txt golden">rating</p>
            <p class="txt">review count</p>
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
