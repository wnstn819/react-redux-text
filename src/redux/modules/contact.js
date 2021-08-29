//검색하는 키워드
//리스트

const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
const SET_CONTATC_LIST = "SET_CONTACT_LIST";

const initialState = {
  searchKeyword: "",
  contactList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return applySetSearchKeyword(state, action);
    case SET_CONTATC_LIST:
      return applyconSetContactList(state, action);
    default:
      return state;
  }
};

const setSearchKeyword = (keyword) => {
  return {
    type: SET_SEARCH_KEYWORD,
    keyword,
  };
};

const applySetSearchKeyword = (state, action) => {
  const { keyword } = action;

  return {
    ...state,
    searchKeyword: keyword,
  };
};

const setContactList = (list) => {
  return {
    type: SET_CONTATC_LIST,
    list,
  };
};

const applyconSetContactList = (state, action) => {
  const { list } = action;
  return {
    ...state,
    contactList: list,
  };
};

export default reducer;
export const actionCreators = {
  setSearchKeyword,
  setContactList,
};
