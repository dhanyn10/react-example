import React from 'react';
import {
    Container,
    Row,
    Col,
    FormGroup,
    Input,
    Card,
    CardHeader,
    CardBody,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

let datasource = "https://data.go.id/dataset/f44253ab-d2eb-4d2d-8e84-a24c8407910a/resource/01f14641-7437-4c31-bfa4-69efc436d6b4/download/statistik.json";

class Maincontent extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            searchString: "",
            resultList: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount()
    {
        axios.get(datasource)
        .then(res => {
            this.setState({
                resultList: res.data
            })
        })
        .catch(error => {
            console.log(error);
        });
        this.refs.search.focus();
    }

    handleSearch()
    {
        this.setState({
            searchString: this.refs.search.value
        });
    }

    render()
    {
        let resultkey   = this.state.resultList;
        let searchkey   = this.state.searchString.trim().toLowerCase();
        if(searchkey.length > 0)
        {
            resultkey = resultkey.filter(function (searchresult){
                return searchresult.InstansiName.toLowerCase().match(searchkey);
            })
        }
        return(
            <Container>
                <Row className="mt-3">
                    <Col md="6">
                        <FormGroup>
                            <input className="form-control" type="text" placeholder="search here..." onChange={this.handleSearch} value={this.state.searchString} ref="search"/>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <Input readOnly value={datasource}></Input>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>Hasil Pencarian</CardHeader>
                            <CardBody>

                            <ListGroup>
                                {
                                    resultkey.map((item, key) => {
                                        return(
                                            <ListGroupItem key={key}>{item.InstansiName}</ListGroupItem>
                                        );
                                    })
                                }
                            </ListGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Maincontent;