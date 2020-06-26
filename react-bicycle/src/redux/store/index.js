/**
 *  createStore 创建仓库
 */

import { createStore } from 'redux';
import reducer from './../reducer';
// 引入扩展工具
export default () => createStore(reducer);
