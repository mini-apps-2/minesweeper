import { createStore, combineReducers } from 'redux';

const placeMine = () => {
  const randRowInd = Math.floor(Math.random() * 10);
  const randColInd = Math.floor(Math.random() * 10)

  return [randRowInd, randColInd];
}

const board = [
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ],
  [
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false},
    {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}, {content: '', hasMine: false}
  ]
]

for (let i = 0; i < 10; i++) {
  const mineCoords = placeMine();
  board[mineCoords[0]][mineCoords[1]].hasMine = true;
}

console.log(board);

const rootReducer = combineReducers(/* Reducers here */);

const store = createStore(rootReducer, board);

export default store;