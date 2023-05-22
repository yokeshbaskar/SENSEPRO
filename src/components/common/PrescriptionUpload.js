import React, { useState, useEffect, useLayoutEffect } from "react";
import { useHistory, useParams, useLocation, Link } from "react-router-dom";
import { Row, Col,Label,Field } from "reactstrap";
import Fieldset from "../../components/form-fields/Fieldset";

export const PrescriptionUpload = props => {

    const [prescriptionUpload,setPrescriptionUpload] = useState()
    const [file, setFile] = useState();
    let prescription = '';
    let { id, mode } = useParams();
    const disabled = mode == "view";

    useEffect(() => {
        if(props.file){
            setFile(props.file)
            console.log('imageFILE', file)
        }
      });
    
    //   const sendPrescriptionUploadData = (fileEvent) => {
    //     var reader = new FileReader();
    //     let fileName = fileEvent.target.files[0].name;
       
    //     // this.document.documentMeta = fileEvent.target.files[0].type;
    //     reader.onload = (event) => {
    //       let fileBody = event.target.result.split(",")[1];
    //       let fileData = { fileName: fileName, fileBody: fileBody };
    //       let fileNameArray = fileName.split('.');     
    //         prescription = event.target.result;
    //         setFile(prescription);  
    //         // console.log("image",image)    
    //         props.sendPrescriptionUploadData(prescription)    
    //     };
    //     reader.readAsDataURL(fileEvent.target.files[0]);    
    //     // console.log("IMAGEEEEEEEE",image)  
        
    //     console.log('SETTTTTTTTTTFile>>>>>>',file)
    //   };

    return (
        <>
         <Col lg={3}>
                  <Label className="mr-2 mt-0">Prescription </Label> <br />
                  
                                 </Col>
            <Col lg={3}>
            <img style={{width:'250px',height:'250px',marginLeft: '33px'}} src={file} /> 
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
