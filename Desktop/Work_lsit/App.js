/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './src/component/Main'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

//default state
const defaultState = {
  arrWords: [
    { id: 1, en: 'acrion', vn: 'hành động', memorized: true, isShow: false },
    { id: 2, en: 'crown', vn: 'vương miện', memorized: true, isShow: true },
    { id: 3, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 4, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
    { id: 5, en: 'active', vn: 'chủ động', memorized: false, isShow: false },
    { id: 6, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 7, en: 'bedroom', vn: 'phòng ngủ', memorized: false, isShow: false },
    { id: 8, en: 'yard', vn: 'sân', memorized: true, isShow: false },
    { id: 9, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: 10, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
    { id: 12, en: 'abouve', vn: 'ở trên', memorized: true, isShow: false },
    { id: 13, en: 'arrange', vn: 'sắp xếp', memorized: true, isShow: false },
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: false,
};


//reducer => tien doan action
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
      return { ...state, filterStatus: 'SHOW_ALL' };
    case 'FILTER_MEMORIZED':
      return { ...state, filterStatus: 'MEMORIZED' };
    case 'FILTER_NEED_PRACTICE':
      return { ...state, filterStatus: 'NEED_PRACICE' };
    case 'TOGGLE_MEMORIZED':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, memorized: !e.memorized };
        })
      };
    case 'TOGGLE_SHOW':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, isShow: !e.isShow };
        })
      };
    case 'TOGGLE_IS_ADDING':
      return {
        ...state,
        isAdding: !state.isAdding

      };
    case 'ADD_WORD':
      return {
        ...state,
        arrWords: [{
          id: state.arrWords.length,
          en: action.en,
          vn: action.vn,
          memorized: false,
          isShow: false
        }].concat(state.arrWords)
      };


    default:
      break;
  }
  return state;
}


//tao ra store
const store = createStore(reducer);
//tich hop ung dung voi react