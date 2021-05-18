import React from 'react';
import {checkAge, homeWorkReducer, sortName} from '../homeWorkReducer';
import {PeopleType} from '../../HW8';

let initialState: PeopleType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, sortName('up'));
    expect(newState[0].name).toBe("Александр");
    expect(newState[newState.length-1].name).toBe("Кот")
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, sortName('down'));
    expect(newState[0].name).toBe("Кот");
    expect(newState[newState.length-1].name).toBe("Александр")
});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, checkAge(18));
    expect(newState.length).toBe(4)
    expect(newState.every(el => el.age !== 18)).toBeTruthy()
});
