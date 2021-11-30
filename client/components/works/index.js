import React, { Component } from 'react';
import CSS from '../css.scss';
import Card from '../card/index';
import PageTitle from '../pageTitle';

export class HomeView extends Component {
  constructor (props) {
    super(props);
    this.delayArray = [];
    this.canRun = true;
    this.tmpArray = [];
    this.state = {
      delayObject: []
    };
    this.Data = [];
  }

  isIntersection (index) {
    this.delayArray = [...this.delayArray, index];
    this.tmpArray = [...this.tmpArray, index];
    if (!this.canRun) {
      // 判断是否已空闲，如果在执行中，则直接return
      return;
    }
    this.canRun = false;
    setTimeout(() => {
      // console.log("函数节流");
      const tmpArray_ = this.tmpArray.sort((a, b) => a - b);
      const delayObject = this.state.delayObject.slice(0);
      // console.log(tmpArray_);
      tmpArray_.map((item, index) => {
        delayObject[item] = (index + 1) / 6;
      });

      // console.log(delayObject);
      this.setState({
        delayObject: delayObject
      });
      this.canRun = true;
      this.tmpArray = [];
    }, 1000 / 2);
  }

  componentDidMount () {
    if (window.WORKS_Data) {
      this.Data = window.WORKS_Data;
      this.setState({
        delayObject: this.Data.map((item, index) => {
          return (index + 1) / 6;
        })
      });
    } else {
      fetch('/works.json')
        .then(response => {
          return response.text();
        }).then(body => {
          const localData = JSON.parse(body);
          fetch('/api/works').then(res => {
            res.json().then(newData => {
              this.Data = [...localData, ...newData];
              window.WORKS_Data = this.Data;
              this.setState({
                delayObject: this.Data.map((item, index) => {
                  return (index + 1) / 6;
                })
              });
            });
          }).catch(e => {
            this.Data = localData;
            window.WORKS_Data = this.Data;
            this.setState({
              delayObject: this.Data.map((item, index) => {
                return (index + 1) / 6;
              })
            });
          });
        });
    }
  }
  render () {
    const { delayObject } = this.state;
    return (
      <div className={CSS['page-works']}>
        <PageTitle
          title='SELECTED WORKS'
          isWorkListpage
        />
        <div className='container-fluid'>
          <div className='row-fluid'>
            {
              this.Data.map((item, index) => {
                return (<Card
                  key={index}
                  style={{
                    width: '50%'
                  }}
                  isIntersection={() => { this.isIntersection(index); }}
                  delay={delayObject[index]}
                  show={false}
                  data={item}
                />);
              })
            }
          </div>
        </div>
      </div>
    );
  }
};

export default HomeView;
