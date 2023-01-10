import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /*
    const scrollHeight = this.box.scrollHeight;
    const clientHeight = this.box.clientHeight;
     */
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };

    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;

/**
 * 컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용한다.
 * 먼저 ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 고려한 후에 활용하는 것이 좋다.
 *
 * 컴포넌트끼리 데이터를 교류할 때는 언제나 데이터를 부모 - 자식 흐름으로 교류해야 한다.
 *
 * 함수 컴포넌트에서는 useRef라는 Hook함수를 사용한다.
 */
