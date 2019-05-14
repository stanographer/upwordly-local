import React from 'react';
import {
  Button,
  Card,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <div className={ styles.signInPage }>
      <section className={ styles.signInBox }>
        <Row>
          <Col lg={ 4 } md={ 3 } />
          <Col lg={ 4 } md={ 6 } sm={ 12 }>
            <Card body>
              <h2 className={ styles.signInTitle }>Upwordly Sign In</h2>
              <CardText>
                <Form>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={ 4 }>Email</Label>
                    <Col sm={ 8 }>
                      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                  </FormGroup>
                  <Button color="success" block>Sign In</Button>
                </Form>
              </CardText>
            </Card>
          </Col>
          <Col lg={ 4 } md={ 3 } />
        </Row>
      </section>
    </div>
  );
};

export default SignIn;
