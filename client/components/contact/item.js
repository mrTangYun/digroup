import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CSS from '../css.scss';

export const Item = (props) => (
  <Grid fluid className={CSS["item"]}>
    <div className={CSS["title"]}>{props.title}</div>
    {
    	props.jobDescription && <Row className={CSS["content"]}>
		<Col md={2} className={CSS["left"]}>job description</Col>
		<Col md={10} className={CSS["right"]} dangerouslySetInnerHTML={{__html: props.jobDescription}} />
    </Row>
    }
    {
    	props.competencyRequirements && <Row className={CSS["content"]}>
		<Col md={2} className={CSS["left"]}>competency requirements</Col>
		<Col md={10} className={CSS["right"]} dangerouslySetInnerHTML={{__html: props.competencyRequirements}} />
    </Row>
    }
  </Grid>
);

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  jobDescription: React.PropTypes.string,
  competencyRequirements: React.PropTypes.string
};

export default Item;
