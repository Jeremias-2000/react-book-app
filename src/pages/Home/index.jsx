import React from 'react';
import './HomeStyles.css';
import { Input,Row,Col,Card,Divider,Rate } from  'antd';


import NavBar from '../../components/navbar';
import image1 from '../../assets/book1.jpg';
import image2 from '../../assets/book2.jpg'
import image3 from '../../assets/livro1.jpg'
const Home = () =>{

    const { Search } = Input;
    

    const onSearch = value => console.log(value); 
    
    const { Meta } = Card;


    return (
        <>
        
        <div className = "HomeContainer">
        <NavBar/>

        <Row>
            <Col span={12} offset={7} >
                <Search placeHolder="input search text" onSearch={onSearch} enterButton style={{ width:'80%',marginTop: 50}} />
            </Col>
        </Row>        
         <Divider>
             <Row justify="center" style={{marginTop: 50,marginLeft:-150,paddingLeft:50}}>
                 <Col xs={{span:8.5,offset:0}} >
                    <Card
                        title="markus suzak"
                        hoverable
                        style={{ width:220,height: 'auto'}}
                        cover={<img src={image3} alt="img"/>}
                        >
                            <Meta title="A menina que roubava livros" description="R$ 37,90"/>
                            <Rate/>
                    </Card>
                 </Col>
                 <Col xs={{span:6,offset:1}} >
                    <Card
                        title="Muller e Darci Cunha"
                        hoverable
                        style={{ width:220,height: 'auto'}}
                        cover={<img src={image2} alt="img"/>}
                        >
                            <Meta title="Bazar dos Poetas" description="R$ 37,90"/>
                        <Rate/>
                    </Card>
                 </Col>
                 <Col xs={{span:5,offset:1}} >
                    <Card
                        title="markus suzak"
                        hoverable
                        style={{ width:220,height: 'auto'}}
                        cover={<img src={image1} alt="img"/>}
                        >
                            <Meta title="A menina que roubava livros" description="R$ 37,90"/>
                            <Rate/>
                    </Card>
                 </Col>
             </Row>
         </Divider>   
         <div className="section_one">
                <Row justify="center">
                    <Col className="gutter-row" span={5}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                </Row>
                <Divider/>
                <Row justify="center">
                    <Col className="gutter-row" span={5}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                </Row>
                <Divider/>
         </div>
        </div>
        </>
    )
}

export default Home

