import React, { useState, useEffect, useLayoutEffect } from "react";
import { useHistory, useParams, useLocation, Link } from "react-router-dom";
import { Row, Col,Label,Field } from "reactstrap";
import Fieldset from "../../components/form-fields/Fieldset";

export const ImageUpload = props => {

    const [imageUpload, setImageUpload] = useState()
    const [file, setFile] = useState();
    let image = '';
    let { id, mode } = useParams();
    const disabled = mode == "view";

    useEffect(() => {
        if(props.file){
            setFile(props.file)
            console.log('imageFILE', file)
        }
      });
    
      const sendImageUploadData = (fileEvent) => {
        var reader = new FileReader();
        let fileName = fileEvent.target.files[0].name;
       
        // this.document.documentMeta = fileEvent.target.files[0].type;
        reader.onload = (event) => {
          let fileBody = event.target.result.split(",")[1];
          let fileData = { fileName: fileName, fileBody: fileBody };
          let fileNameArray = fileName.split('.');     
            image = event.target.result;
            setFile(image);  
            // console.log("image",image)    
            props.sendImageUploadData(image)    
        };
        reader.readAsDataURL(fileEvent.target.files[0]);    
        // console.log("IMAGEEEEEEEE",image)  
        
        console.log('SETTTTTTTTTTFile>>>>>>',file)
      };

    return (
        <>
         <Col lg={3}>
                  <Label className="mr-2 mt-0">Image </Label> <br />
                  
                                  <input 
                                  disabled={disabled}
                                  type="file"
                                  name="file" 
                                  onChange={sendImageUploadData}
                            //       onChange={(event) => {
                            //   setFieldValue("file", event.currentTarget.files[0]);
                            // }} 
                            />
						{/* <ErrorMessage name="newPassword" className='form-inp-error' component="span" /> */}
                       
                 
                </Col>
            <Col lg={3}>
            <img style={{width:'100px',height:'100px',marginLeft: '33px'}} src={file} /> 
                {/* <Row>
                    <Col lg={9} className="dataTables_length mt-10">
                        <input
                            name="imageUpload"
                            label="ImageUpload"
                            placeholder="ImageUpload"
                            className="form-control"
                            onChange={(e)=> setImageUpload(e.target.value)}
                            onKeyUp={(e)=> handleKeyPress(e)}
                        />
                    </Col>
                    <Col lg={3}>
                        <button className='form-btn my-1 mt-2 ' onClick={sendImageUploadData}>ImageUpload</button>
                    </Col>
                </Row> */}
            </Col>
        </>
    );
};
