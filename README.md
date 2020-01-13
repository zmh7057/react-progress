## Installation

**npm**

```bash
npm install tmaito-progress --save
```
**yarn**

```bash
yarn add tmaito-progress
```

* Also install tmaito-progress for css

```bash
import "tmaito-progress/libs/index.css";
```

### Example


```js
import React, { Component } from 'react';
import Progress from 'tmaito-progress'
import 'tmaito-progress/libs/index.css';

const { item } = Carousel;

class ProgressDemo extends Component {
  render() {
    return (
      <div className="examples">
        <Progress type='pie' percent={33} />
      </div>
    );
  }
}
export default ProgressDemo;
```

### Carousel Attributes

| 参数    | 说明   | 类型   | 可选值 | 默认值 |
| ------- | ------ | ------ | ------ | ------ |
| percent | 百分比 | number | —-     | 0      |

#### pie 饼图进度条

| 参数      | 说明       | 类型   | 默认值  |
| --------- | ---------- | ------ | ------- |
| width     | 圆形宽度   | number | 120     |
| height    | 圆形高度   | number | 120     |
| bgColor   | 圆形背景色 | string | #e9f2fd |
| fillColor | 圆形填充色 | string | #4393f8 |
