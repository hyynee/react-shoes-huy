// card hover
/* 
  // function handleMouseMove(event) {
  //   const card = cardRef.current;
  //   const { offsetWidth: width, offsetHeight: height } = card;
  //   const { clientX, clientY } = event;
  //   const x = clientX - card.offsetLeft - width / 2;
  //   const y = clientY - card.offsetTop - height / 2;
  //   var mult = 40;
  //   setXRotation((y / height) * mult);
  //   setYRotation((x / width) * mult);
  // }
  // function handleMouseEnter() {
  //   const img = imgRef.current;
  //   const title = titleRef.current;
  //   const sizesBox = sizesboxRef.current;
  //   const purchase = purchaseRef.current;
  //   const desc = descRef.current
  //   title.style.transform = "translateZ(150px)";
  //   img.style.transform = "translateZ(100px) rotateZ(-45deg)";
  //   sizesBox.style.transform = "translateZ(100px)";
  //   purchase.style.transform = "translateZ(75px)";
  //   desc.style.transform = "translateZ(75px)";
  // }
  // function handleMouseLeave() {
  //   setXRotation(0);
  //   setYRotation(0);

  //   const img = imgRef.current;
  //   const title = titleRef.current;
  //   const sizesBox = sizesboxRef.current;
  //   const purchase = purchaseRef.current;
  //   title.style.transform = "translateZ(0px)";
  //   img.style.transform = "translateZ(0px) rotateZ(0deg)";
  //   sizesBox.style.transform = "translateZ(0px)";
  //   purchase.style.transform = "translateZ(0px)";
  // }
*/
// card-style
/* 
 // style={{
        //   transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        // }}
        // onMouseMove={handleMouseMove}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
*/
// search 
/* 
   {/* <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          /> */}
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
*/

/*
 <div className="card-footer">
                  <button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal" onClick={() => {
                    setId(item.id);
                  }}>
                    View Detail
                  </button>
                  <button type="button" className=" text-dark fw-bold btn btn-secondary btn-sm mx-2 p-2">
                    Add to cart <i class="fas fa-cart-shopping" style={{ color: "black" }}></i>
                  </button>
                  <div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
                          </div>
                          <div className="modal-body">
                            <Card item={item}></Card>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-mdb-dismiss="modal">Close</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
*/

/* 
   <div
      className={cardShoes.card}
      ref={cardRef}
      style={
        { width: "100%" }
      }
    >
      <img
      src={item.image}
      style={
        { width: "50%" }
      }
        ref={imgRef}
        alt="Nike-Shoe"
        className="sneaaker-img"
      />
      <h1 className={cardShoes.title} ref={titleRef}>
       {item.name}
      </h1>
      <p ref={descRef}>
       {item.description}
      </p>
      <ul className={cardShoes.sizesBox} ref={sizesboxRef}>
        <li>38</li>
        <li>40</li>
        <li>42</li>
        <li>44</li>
      </ul>
      <div className={cardShoes.buttonBox} ref={purchaseRef}>
        <button className={cardShoes.purchase} >
          Purchase
        </button>
      </div>
    </div>
*/