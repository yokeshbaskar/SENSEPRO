import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Fieldset from "../../components/form-fields/Fieldset";

export const Search = props => {

    const [search, setSearch] = useState()
    console.log(props)
    useEffect(() =>{
        if(props.search){
        setSearch(props.search)
    }
})
console.log(search)
    const sendSearchData = () => {
        props.sendSearchData(search)
    }
    const handleKeyPress=(event) =>{  
        // console.log('cccccccccccccccccccccccc',event.keyCode)    
        if(event.keyCode == 13)  {
            props.sendSearchData(search)
        }
        if (event.keyCode == 8 || event.keyCode == 46) {
          if (event.target.value === "") {             
            props.sendGetData(true)
          }
        }
      }


    return (
        console.log(search),
        <>
        <label style={{marginTop:"3rem",marginLeft:"-18rem"}}>Search</label>
            <Col lg={4}>
                {/* <Row> */}
                    <Col lg={9} className="dataTables_length mt-20">
                        <input
                            name="search"
                            label="Search"
                            placeholder="Search"
                            className="form-control"
                            onChange={(event)=> setSearch(event.target.value)}
                            onKeyUp={(event)=> handleKeyPress(event)}
                            style={{marginLeft:'200px'}}
                        />
                    </Col>
                    {/* <Col lg={3}>
                        <button className='form-btn my-1 mt-2 ' onClick={sendSearchData}>Search</button>
                    </Col> */}
                {/* </Row> */}
            </Col>
        </>
    );
};
